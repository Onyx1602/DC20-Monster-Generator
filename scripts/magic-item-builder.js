// DC20 Magic Item Builder
class DC20MagicItemBuilderForm extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Magic Item Builder",
      template: "modules/dc20-monster-generator/templates/magic-item-builder-form.html",
      width: 680,
      height: 420,
      resizable: false,
      scrollY: [".magic-item-builder-form"],
      classes: ["dc20-magic-item-builder"]
    });
  }

  getData() { return {}; }

  activateListeners(html) {
    super.activateListeners(html);

    // Ensure CSS polish applies to the root form
    html.addClass("magic-item-builder-form");

    // one-time inline CSS to highlight properties on hover
    if (!document.getElementById("dc20-mib-inline-style")) {
      const style = document.createElement("style");
      style.id = "dc20-mib-inline-style";
      style.textContent = `
        .mib-prop {
          transition: box-shadow .12s, transform .08s, background-color .12s;
          border-radius: 6px;
        }
        .mib-prop:hover {
          box-shadow: 0 0 0 2px var(--color-border-highlight, #6d14cf) inset;
          background: rgba(109, 20, 207, 0.12);
          transform: translateY(-1px);
        }
      `;
      document.head.appendChild(style);
    }

    // Populate Type options if the HTML didn't include them
    const typeSelInit = html.find("#mibType");
    if (typeSelInit.length && !typeSelInit.children().length) {
      typeSelInit.append(`<option value="">(None)</option>`);
      for (const t of Object.keys(window.magicItemSubtypes || {})) {
        typeSelInit.append(`<option value="${t}">${t}</option>`);
      }
    }

    // Image picker + robust upload fallback
    const imgInput = html.find("#mibImage");
    const imgPreview = html.find("#mibImagePreview");
    let pendingBuild = false; // auto-submit after unlock if user clicked Build

    // Ensure hidden file input exists for direct upload fallback
    if (!html.find("#mibHiddenUpload").length) {
      html.find("form.magic-item-builder-form").append(`<input type="file" id="mibHiddenUpload" accept="image/*" style="display:none;" />`);
    }
    const hiddenUpload = html.find("#mibHiddenUpload");

    html.find("#mibChooseImageBtn").off("click").on("click", async (ev) => {
      // If FilePicker is available, open it (supports upload)
      if (typeof FilePicker !== "undefined") {
        try {
          const fp = new FilePicker({
            type: "image",
            current: "",
            callback: (path) => {
              imgInput.val(path);
              if (path && path.trim()) {
                imgPreview.attr("src", path).show();
              } else {
                imgPreview.attr("src", "").hide();
              }
            }
          });
          fp.render(true);
          return;
        } catch (e) {
          console.warn("FilePicker failed, falling back to direct upload:", e);
        }
      }
      // Fallback: direct upload into data/uploads/magic-items
      hiddenUpload.trigger("click");
    });

    hiddenUpload.off("change").on("change", async (e) => {
      const file = e.currentTarget.files?.[0];
      if (!file) return;
      const targetDir = "uploads/magic-items";
      try {
        const result = await FilePicker.upload("data", targetDir, file, { notify: true });
        const path = result?.path || `${targetDir}/${file.name}`;
        imgInput.val(path);
        imgPreview.attr("src", path).show();
        ui.notifications?.info?.("Image uploaded.");
      } catch (err) {
        console.error(err);
        ui.notifications?.error?.("Failed to upload image.");
      } finally {
        hiddenUpload.val("");
      }
    });

    // Type -> Subtype
    html.find("#mibType").off("change").on("change", (ev) => {
      const typeVal = ev.currentTarget.value;
      const subSel = html.find("#mibSubtype");
      subSel.empty();
      if (window.magicItemSubtypes?.[typeVal]) {
        for (const sub of window.magicItemSubtypes[typeVal]) {
          subSel.append(`<option value="${sub.id}">${sub.name}</option>`);
        }
        subSel.prop("disabled", false);
      } else {
        subSel.append(`<option value="">(Select Type First)</option>`);
        subSel.prop("disabled", true);
      }
    });

    // Helper: resolve property icon by name (effects list or dynamic)
    function getPropIconByName(name) {
      const iconFallback = "icons/commodities/treasure/medal-ribbon-gold-blue.webp";
      if (Array.isArray(window.MAGIC_PROPERTY_EFFECTS)) {
        const eff = window.MAGIC_PROPERTY_EFFECTS.find(e => e?.name === name);
        if (eff?.img) return eff.img;
      }
      const dyn = {
        "[Damage Type] Resist": "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/13.png",
        "[Damage Type] Resistance": "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/19.png",
        "[Damage Type] Immunity": "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/33.png"
      };
      return dyn[name] || iconFallback;
    }

    // Selected properties + metadata
    const selectedInput = html.find("#mibSelectedPropsInput");
    const selectedWrap = html.find("#mibSelectedProps");
    const metaInput = html.find("#mibSelectedPropMeta");

    function getSelected() { try { return JSON.parse(selectedInput.val() || "[]"); } catch { return []; } }
    function setSelected(arr) { selectedInput.val(JSON.stringify(arr)); renderSelected(); }
    function getMeta() { try { return JSON.parse(metaInput.val() || "{}"); } catch { return {}; } }
    function setMeta(obj) { metaInput.val(JSON.stringify(obj)); }

    function cap(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
    function chipLabel(baseName, dt) {
      if (!dt) return baseName;
      if (baseName === "Change Damage Type") return `Change Damage Type: ${cap(dt)}`;
      if (baseName === "[Damage Type] Resist") return `${cap(dt)} Resist`;
      if (baseName === "[Damage Type] Resistance") return `${cap(dt)} Resistance`;
      if (baseName === "[Damage Type] Immunity") return `${cap(dt)} Immunity`;
      return baseName;
    }

    function renderSelected() {
      selectedWrap.empty();
      const sel = getSelected();
      if (!sel.length) {
        selectedWrap.append(`<div class="mib-empty">No properties selected (max 3). Click in the list to add.</div>`);
        return;
      }
      const meta = getMeta();
      for (const p of sel) {
        const icon = getPropIconByName(p);
        const label = chipLabel(p, meta[p]);
        selectedWrap.append(`
          <div class="mib-chip" data-name="${p}">
            <img class="mib-chip-img" src="${icon}" alt="${p}" />
            <span>${label}</span>
            <button type="button" class="mib-chip-remove" title="Remove">×</button>
          </div>
        `);
      }
      html.find(".mib-chip-remove").off("click").on("click", (e) => {
        const name = $(e.currentTarget).closest(".mib-chip").data("name");
        const arr = getSelected().filter(n => n !== name);
        setSelected(arr);
        const meta = getMeta();
        if (meta[name]) {
          delete meta[name];
          setMeta(meta);
        }
      });
    }
    renderSelected();

    // When Type changes and properties are already selected, clear them automatically (and meta)
    html.find("#mibType").off("change.mib-clear").on("change.mib-clear", () => {
      const sel = getSelected();
      if (sel.length) {
        setSelected([]);
        setMeta({});
        ui.notifications?.info?.("Selected properties cleared due to Type change.");
      }
    });

    // Property list modal (create if missing, scope to app, and reparent to body)
    const appId = this.appId;
    let modal = html.find("#mibPropModal");
    if (!modal.length) {
      modal = $(`
        <div id="mibPropModal" class="hidden" data-owner="${String(appId)}">
          <div class="mib-modal-content">
            <div class="mib-modal-header">
              <strong>Magic Properties</strong>
              <input type="text" id="mibFilterName" placeholder="Filter by name..." />
              <input type="number" id="mibFilterMin" placeholder="Min power" min="0" />
              <input type="number" id="mibFilterMax" placeholder="Max power" min="0" />
              <span style="flex:1;"></span>
              <button type="button" id="mibPropModalCloseBtn">Close</button>
            </div>
            <div id="mibPropGrid" class="mib-grid"></div>
            <div style="margin-top:8px;"><small>Tip: Click a property to add it to your selection. You can also drag the pop up to reposition it, to see what properties you've selected</small></div>
          </div>
        </div>
      `);
      $("body").append(modal);
    } else {
      modal.attr("data-owner", String(appId)).addClass("hidden");
      modal.detach().appendTo("body");
    }
    modal = $(`#mibPropModal[data-owner='${appId}']`);

    // Scoped elements
    const grid = modal.find("#mibPropGrid");
    const nameFilter = modal.find("#mibFilterName");
    const minFilter = modal.find("#mibFilterMin");
    const maxFilter = modal.find("#mibFilterMax");
    const closeListBtn = modal.find("#mibPropModalCloseBtn");
    const openListBtn = html.find("#mibOpenPropListBtn");

    // Gate: require both type and a valid subtype id
    function canOpenPropBrowser() {
      const typeVal = (html.find("#mibType").val() || "").toString();
      const subtypeVal = (html.find("#mibSubtype").val() || "").toString();
      return !!typeVal && !!subtypeVal && subtypeVal.includes(".");
    }

    // Respect generator's type -> property map if exposed
    const TYPE_MAP =
      window.MAGIC_PROPERTY_TYPE_MAP ||
      (typeof MAGIC_PROPERTY_TYPE_MAP !== "undefined" ? MAGIC_PROPERTY_TYPE_MAP : null);

    function getAllowedNameSet() {
      const typeVal = html.find("#mibType").val();
      if (!Array.isArray(window.MAGIC_PROPERTIES)) return null;
      if (!TYPE_MAP) return new Set(window.MAGIC_PROPERTIES.map(p => p.name));

      // Others: Generic + type-specific
      const allowed = new Set();
      if (typeVal && TYPE_MAP[typeVal]) TYPE_MAP[typeVal].forEach(n => allowed.add(n));
      (TYPE_MAP.Generic ?? []).forEach(n => allowed.add(n));

      // Fallback to Generic if nothing resolved (shouldn't happen with gating)
      return allowed.size ? allowed : new Set(TYPE_MAP.Generic ?? []);
    }
    function allProps() {
      let list = Array.isArray(window.MAGIC_PROPERTIES) ? window.MAGIC_PROPERTIES.slice() : [];
      const allowed = getAllowedNameSet();
      if (allowed) list = list.filter(p => allowed.has(p.name));
      list.sort((a, b) => a.name.localeCompare(b.name));
      return list;
    }

    // Damage Type Picker Modal
    const dynamicNames = new Set([
      "Change Damage Type",
      "[Damage Type] Resistance",
      "[Damage Type] Immunity"
    ]);
    const dtModalId = `mibDtModal-${this.appId}`;
    function ensureDtModal() {
      let dt = $(`#${dtModalId}`);
      if (dt.length) return dt;
      dt = $(`
        <div class="mib-dt-modal hidden" id="${dtModalId}" data-owner="${String(appId)}">
          <div class="mib-modal-content">
            <div class="mib-modal-header">
              <strong>Choose Damage Type</strong>
              <span style="flex:1;"></span>
              <button type="button" class="mib-dt-close">Close</button>
            </div>
            <div class="mib-dt-grid"></div>
            <div style="margin-top:8px;"><small>Tip: Click a damage type to select it.</small></div>
          </div>
        </div>
      `);
      $("body").append(dt);
      // Drag header
      (function enableDragDT() {
        const content = dt.find(".mib-modal-content");
        const header = dt.find(".mib-modal-header");
        let dragging = false, sx = 0, sy = 0, sl = 0, st = 0;
        function onMove(e){
          if (!dragging) return;
          const x=(e.clientX ?? e.touches?.[0]?.clientX ?? 0), y=(e.clientY ?? e.touches?.[0]?.clientY ?? 0);
          content.css({ left:`${sl + (x-sx)}px`, top:`${st + (y-sy)}px` });
        }
        function onUp(){
          dragging=false;
          $(document).off(`mousemove.dt-${appId} mouseup.dt-${appId} touchmove.dt-${appId} touchend.dt-${appId}`);
        }
        header.css("cursor","move").off(`mousedown.dt touchstart.dt`).on(`mousedown.dt touchstart.dt`, (e)=>{
          if (dt.hasClass("hidden")) return;
          dragging = true;
          const x=(e.clientX ?? e.touches?.[0]?.clientX ?? 0), y=(e.clientY ?? e.touches?.[0]?.clientY ?? 0);
          sx=x; sy=y;
          const rect = content.get(0)?.getBoundingClientRect(); sl = rect?.left ?? 0; st = rect?.top ?? 0;
          $(document).off(`mousemove.dt-${appId} touchmove.dt-${appId}`)
            .on(`mousemove.dt-${appId} touchmove.dt-${appId}`, onMove)
            .on(`mouseup.dt-${appId} touchend.dt-${appId}`, onUp);
        });
      })();
      return dt;
    }
    function pickDamageType() {
      return new Promise((resolve)=>{
        const dt = ensureDtModal();
        const gridDt = dt.find(".mib-dt-grid");
        gridDt.empty();

        // Map: damage type -> hover color
        const DT_COLORS = {
          bludgeoning: "#8d8b88",
          piercing: "#7fa8c8",
          slashing: "#a3846c",
          fire: "#ff6b3d",
          cold: "#4aa8ff",
          lightning: "#ffd84a",
          poison: "#61d159",
          corrosion: "#9acd32",
          radiant: "#f7e26b",
          umbral: "#6f3fb1",
          psychic: "#c067ff",
          sonic: "#00cfd1"
        };
        const DEFAULT_HOVER = "#8a3eea";

        function hexToRgb(hex) {
          const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "");
          if (!m) return { r: 138, g: 62, b: 234 }; // fallback to purple
          return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
        }

        const types = Array.isArray(window.ALL_DAMAGE_TYPES) ? window.ALL_DAMAGE_TYPES.slice() : [];
        for (const t of types) {
          const label = t.charAt(0).toUpperCase() + t.slice(1);
          const base = DT_COLORS[t] || DEFAULT_HOVER;
          const { r, g, b } = hexToRgb(base);
          const bg = `rgba(${r}, ${g}, ${b}, 0.16)`; // lighter, slight opacity
          gridDt.append(`
            <div class="mib-dt-option" data-dt="${t}" style="--dt-color:${base}; --dt-bg:${bg};">
              ${label}
            </div>
          `);
        }

        const content = dt.find(".mib-modal-content");
        try {
          const ww = window.innerWidth, wh = window.innerHeight;
          const cw = content.outerWidth() || 460, ch = content.outerHeight() || 360;
          const left = Math.max(10, Math.round((ww - cw) / 2));
          const top = Math.max(60, Math.round((wh - ch) / 3));
          content.css({ position:"absolute", left:`${left}px`, top:`${top}px` });
        } catch {}
        function close(){
          dt.addClass("hidden");
          $(document).off(`keydown.dtm-${appId}`);
        }
        dt.removeClass("hidden");
        $(document).off(`keydown.dtm-${appId}`).on(`keydown.dtm-${appId}`, (ev)=>{
          if (ev.key === "Escape") { close(); resolve(null); }
        });
        dt.off("mousedown").on("mousedown", (e)=>{
          if (e.target === dt.get(0)) { close(); resolve(null); }
        });
        dt.find(".mib-dt-close").off("click").on("click", ()=>{ close(); resolve(null); });
        gridDt.find(".mib-dt-option").off("click").on("click", (e)=>{
          const val = $(e.currentTarget).data("dt");
          close(); resolve(val || null);
        });
      });
    }

    // Property grid render
    function renderGrid() {
      const q = (nameFilter.val() || "").toString().trim().toLowerCase();
      const min = parseInt(minFilter.val() || "", 10);
      const max = parseInt(maxFilter.val() || "", 10);

      if (!Array.isArray(window.MAGIC_PROPERTIES) || !window.MAGIC_PROPERTIES.length) {
        grid.empty().append(`<div class="mib-empty">Property data not loaded. Please reload Foundry.</div>`);
        return;
      }

      const list = allProps().filter(p => {
        if (q && !p.name.toLowerCase().includes(q)) return false;
        if (!isNaN(min) && p.power < min) return false;
        if (!isNaN(max) && p.power > max) return false;
        return true;
      });

      grid.empty();
      if (!list.length) {
        grid.append(`<div class="mib-empty">No properties match the filters.</div>`);
        return;
      }

      for (const p of list) {
        const icon = getPropIconByName(p.name);
        grid.append(`
          <div class="mib-prop" data-name="${p.name}" title="${foundry?.utils?.escapeHTML?.(p.description || "") ?? (p.description || "")}">
            <img src="${icon}" alt="${p.name}" />
            <div class="mib-prop-name">${p.name}</div>
            <div class="mib-prop-power">(${p.power})</div>
          </div>
        `);
      }

      grid.find(".mib-prop").off("click").on("click", async (e) => {
        const name = $(e.currentTarget).data("name");
        const sel = getSelected();
        if (sel.includes(name)) return ui.notifications?.warn?.("Property already selected.");
        if (sel.length >= 3) return ui.notifications?.warn?.("You can select a maximum of 3 properties.");

        let dtChoice = null;
        if (dynamicNames.has(name)) {
          dtChoice = await pickDamageType();
          if (!dtChoice) return; // canceled
        }

        sel.push(name);
        setSelected(sel);

        if (dtChoice) {
          const meta = getMeta();
          meta[name] = dtChoice;
          setMeta(meta);
          renderSelected();
        }

        // notify on successful selection
        const display = chipLabel(name, dtChoice);
        ui.notifications?.info?.(`${display} Selected`);
      });

      grid.find(".mib-prop").off("contextmenu dblclick");
    }

    function showModal() {
      if (!canOpenPropBrowser()) {
        ui.notifications?.warn?.("Select an item Type and Subtype first.");
        return;
      }
      nameFilter.val(""); minFilter.val(""); maxFilter.val("");
      renderGrid();
      modal.removeClass("hidden");

      const content = modal.find(".mib-modal-content");
      try {
        const ww = window.innerWidth, wh = window.innerHeight;
        const cw = content.outerWidth() || 720, ch = content.outerHeight() || 480;
        const left = Math.max(10, Math.round((ww - cw) / 2));
        const top = Math.max(40, Math.round((wh - ch) / 4));
        content.css({ position: "absolute", left: `${left}px`, top: `${top}px` });
      } catch (_) {}

      $(document).off(`keydown.mib-${appId}`).on(`keydown.mib-${appId}`, (ev) => {
        if (ev.key === "Escape") {
          modal.addClass("hidden");
          $(document).off(`keydown.mib-${appId}`);
        }
      });
    }

    // Simple drag support on modal header
    (function enableDrag() {
      const content = modal.find(".mib-modal-content");
      const header = modal.find(".mib-modal-header");
      let dragging = false, sx = 0, sy = 0, sl = 0, st = 0;

      function onMove(e) {
        if (!dragging) return;
        const x = (e.clientX ?? e.touches?.[0]?.clientX ?? 0);
        const y = (e.clientY ?? e.touches?.[0]?.clientY ?? 0);
        const nl = sl + (x - sx);
        const nt = st + (y - sy);
        content.css({ left: `${nl}px`, top: `${nt}px` });
      }
      function onUp() {
        dragging = false;
        $(document).off(`mousemove.mibdrag-${appId} mouseup.mibdrag-${appId} touchmove.mibdrag-${appId} touchend.mibdrag-${appId}`);
      }

      header.css("cursor", "move");
      header.off(`mousedown.mibdrag touchstart.mibdrag`).on(`mousedown.mibdrag touchstart.mibdrag`, (e) => {
        if (modal.hasClass("hidden")) return;
        dragging = true;
        const x = (e.clientX ?? e.touches?.[0]?.clientX ?? 0);
        const y = (e.clientY ?? e.touches?.[0]?.clientY ?? 0);
        sx = x; sy = y;
        const rect = content.get(0)?.getBoundingClientRect();
        sl = rect?.left ?? 0; st = rect?.top ?? 0;
        $(document)
          .off(`mousemove.mibdrag-${appId} mouseup.mibdrag-${appId} touchmove.mibdrag-${appId} touchend.mibdrag-${appId}`)
          .on(`mousemove.mibdrag-${appId} touchmove.mibdrag-${appId}`, onMove)
          .on(`mouseup.mibdrag-${appId} touchend.mibdrag-${appId}`, onUp);
      });
    })();

    // Open/close/backdrop
    openListBtn.off("click").on("click", (e) => { e.preventDefault(); showModal(); });
    closeListBtn.off("click").on("click", (e) => {
      e.preventDefault();
      modal.addClass("hidden");
      $(document).off(`keydown.mib-${appId}`);
    });
    modal.off("mousedown").on("mousedown", (e) => {
      if (e.target === modal.get(0)) {
        modal.addClass("hidden");
        $(document).off(`keydown.mib-${appId}`);
      }
    });

    // Live filters + refresh on Type change
    nameFilter.off("input").on("input", renderGrid);
    minFilter.off("change").on("change", renderGrid);
    maxFilter.off("change").on("change", renderGrid);
    html.find("#mibType").off("change.mib-filter-refresh").on("change.mib-filter-refresh", () => {
      if (!modal.hasClass("hidden")) renderGrid();
    });

    // ===== PDF LOCK POP-OUT (same key/flow as generator) =====
    const PDF_UNLOCK_KEY = "dc20MagicItemPdfVerified";
    function isUnlocked() { return localStorage.getItem(PDF_UNLOCK_KEY) === "true"; }

    // Overlay visibility
    const lockOverlay = html.find("#mibLockOverlay");
    function refreshOverlay() {
      if (isUnlocked()) lockOverlay.addClass("hidden");
      else lockOverlay.removeClass("hidden");
    }

    // Optional: mark as locked visuals
    if (!isUnlocked()) html.addClass("pdf-locked");
    refreshOverlay();

    function openGate(anchorEl) {
      const gate = html.find("#magicItemPdfGate");
      if (!gate.length) return;
      gate.addClass("pop").removeClass("hidden"); // convert to popout style
      const content = gate.find(".magic-pdf-gate-content");
      // Position under the anchor (Build button) with viewport clamping
      const btn = anchorEl?.get(0) || html.find("#mibBuildBtn").get(0);
      const rect = btn?.getBoundingClientRect();
      const cw = content.outerWidth() || 420;
      const ch = content.outerHeight() || 220;
      const pad = 8;
      let left = 20, top = 80;
      if (rect) {
        left = Math.min(Math.max(8, rect.left), window.innerWidth - cw - 8);
        top = Math.min(rect.bottom + pad, window.innerHeight - ch - 8);
      }
      content.css({ position: "fixed", left: `${left}px`, top: `${top}px` });

      // Close on outside click or ESC
      function onDocDown(ev){
        if ($(ev.target).closest(content).length === 0 && $(ev.target).closest(btn).length === 0) {
          closeGate();
        }
      }
      $(document).off(`keydown.mibpdf-${appId}`).on(`keydown.mibpdf-${appId}`, (ev) => {
        if (ev.key === "Escape") closeGate();
      });
      $(document).off(`mousedown.mibpdf-${appId}`).on(`mousedown.mibpdf-${appId}`, onDocDown);
    }
    function closeGate() {
      const gate = html.find("#magicItemPdfGate");
      gate.addClass("hidden");
      $(document).off(`keydown.mibpdf-${appId} mousedown.mibpdf-${appId}`);
    }

    // Intercept Build when locked
    html.find("#mibBuildBtn").off("click").on("click", (ev) => {
      if (!isUnlocked()) {
        ev.preventDefault();
        pendingBuild = true;
        openGate($(ev.currentTarget));
      }
    });

    // PDF validation wiring (shared validator)
    const gateEl = html.find("#magicItemPdfGate");
    const pdfFileInput = gateEl.find("#magicItemPdfFile");
    const validateBtn = gateEl.find("#magicItemPdfValidateBtn");
    const statusEl = gateEl.find("#magicItemPdfStatus");
    const closeBtn = gateEl.find("#magicItemPdfCloseBtn");

    closeBtn.off("click").on("click", () => closeGate());
    validateBtn.off("click").on("click", async () => {
      statusEl.text("");
      const file = pdfFileInput?.get(0)?.files?.[0];
      if (!file) {
        statusEl.text("Please select a PDF file.").attr("class", "magic-pdf-status warn");
        return;
      }
      if (file.type !== "application/pdf") {
        statusEl.text("File is not a PDF.").attr("class", "magic-pdf-status error");
        ui.notifications?.error?.("PDF invalid. Please upload the correct PDF.");
        return;
      }
      validateBtn.prop("disabled", true).text("Validating...");
      try {
        const result = await (window.DC20_MAGIC_PDF?.validateFile?.(file) ?? Promise.resolve({ ok:false, reason:"Validator missing" }));
        if (result.ok) {
          localStorage.setItem(PDF_UNLOCK_KEY, "true");
          statusEl.text("PDF validated. Builder unlocked.").attr("class", "magic-pdf-status success");
          html.removeClass("pdf-locked");
          refreshOverlay();
          ui.notifications?.info?.("Magic Item Builder unlocked.");
          // Auto-submit if user clicked Build earlier
          if (pendingBuild) {
            pendingBuild = false;
            setTimeout(() => {
              try {
                closeGate();
                const formEl = html.find("form")[0];
                if (formEl?.requestSubmit) formEl.requestSubmit();
                else formEl?.submit();
              } catch {}
            }, 200);
          } else {
            setTimeout(() => closeGate(), 900);
          }
        } else {
          statusEl.text("PDF is invalid. Please upload the correct PDF.").attr("class", "magic-pdf-status error");
          ui.notifications?.error?.("PDF invalid. Please upload the correct PDF.");
          if (result.debug) console.warn(result.debug);
        }
      } catch (e) {
        statusEl.text("Error validating PDF.").attr("class", "magic-pdf-status error");
        ui.notifications?.error?.("Error validating PDF.");
        console.error(e);
      } finally {
        validateBtn.prop("disabled", false).text("Validate PDF");
      }
    });
  }

  async _updateObject(event, formData) {
    // Build from selections
    const name = (formData.mibName || "").trim() || "Unnamed Magic Item";
    const img = (formData.mibImage || "").trim(); 
    const type = formData.mibType || "";
    const subtypeId = formData.mibSubtype || "";

    // Selected properties: array of property names -> property objects
    let selectedNames = [];
    try { selectedNames = JSON.parse(formData.mibSelectedPropsInput || "[]"); } catch { selectedNames = []; }
    if (selectedNames.length === 0) {
      return ui.notifications?.warn?.("Please select at least one magic property.");
    }
    if (!subtypeId || !subtypeId.includes(".")) {
      return ui.notifications?.warn?.("Please select a valid magic item subtype.");
    }

    // Resolve subtype name for description
    let subtypeName = "";
    for (const t in window.magicItemSubtypes) {
      const found = window.magicItemSubtypes[t].find(s => s.id === subtypeId);
      if (found) { subtypeName = found.name; break; }
    }

    const propsPool = Array.isArray(window.MAGIC_PROPERTIES) ? window.MAGIC_PROPERTIES : [];
    const selectedProps = selectedNames.map(n => propsPool.find(p => p.name === n)).filter(Boolean);
    if (!selectedProps.length) {
      return ui.notifications?.warn?.("Selected properties could not be resolved.");
    }

    // Attach chosen damage types (if any) from metadata
    let meta = {};
    try { meta = JSON.parse(formData.mibSelectedPropMeta || "{}"); } catch { meta = {}; }
    for (const p of selectedProps) {
      if (meta[p.name]) p._selectedDamageType = meta[p.name];
    }

    // Fetch template
    const [ , module, pack, typeStr, itemId ] = subtypeId.split(".");
    const compPack = game.packs.get(`${module}.${pack}`);
    if (!compPack) return ui.notifications?.warn?.("Could not find compendium pack for selected subtype.");
    const templateDoc = await compPack.getDocument(itemId);
    if (!templateDoc) return ui.notifications?.warn?.("Could not find template item in compendium.");

    // Create item
    let itemData = templateDoc.toObject();
    itemData.name = name;
    // Only override if user provided an image
    if (img) itemData.img = img;
    itemData.system = itemData.system || {};

    // Use generator's description/effects/pricing logic
    if (typeof setMagicItemDescription === "function") {
      setMagicItemDescription(itemData, subtypeName, selectedProps, type);
    }

    await Item.create(itemData);
    ui.notifications?.info?.(`Magic item "${name}" created!`);
  }

  // Remove body-mounted modal when this form closes
  async close(options) {
    try {
      $(`#mibPropModal[data-owner='${this.appId}']`).remove();
      $(document).off(`keydown.mib-${this.appId}`);
      $(document).off(`keydown.mibpdf-${this.appId} mousedown.mibpdf-${this.appId}`);
    } catch (e) { /* no-op */ }
    return super.close(options);
  }
}

// Expose globally
window.DC20MagicItemBuilderForm = DC20MagicItemBuilderForm;
