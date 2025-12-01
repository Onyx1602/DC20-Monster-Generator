(function() {
  const MODULE_ID = "dc20-monster-generator-premium";
  const BUTTON_CLASS = "dccrit-import-btn";

  // Utility: capitalize words
  function capWords(str="") {
    return str.replace(/\b\w+/g, w => w.charAt(0).toUpperCase() + w.slice(1));
  }

  // Image validation helper
  function ensureValidImage(path) {
    if (typeof path !== 'string') return 'icons/svg/mystery-man.svg';
    const VALID = /\.(png|jpe?g|webp|svg|gif)$/i;
    return VALID.test(path) ? path : 'icons/svg/mystery-man.svg';
  }

  // NEW: pick a valid flag scope (prefer active module id, else "world")
  function getFlagScope() {
    try {
      const mods = game?.modules;
      if (mods?.get('dc20-monster-generator-premium')?.active) return 'dc20-monster-generator-premium';
      if (mods?.get('dc20-monster-generator')?.active) return 'dc20-monster-generator';
    } catch(_) {}
    return 'world';
  }

  // Update sheet hook to pass actor context for override behavior
  Hooks.on('renderActorSheet', (app, html) => {
    try {
      if (!game.user?.isGM) return;
      const actor = app.actor;
      if (!actor || actor.type !== 'npc') return;
      const appEl = app.element;
      if (appEl?.length) {
        const winHeader = appEl.find('.window-header');
        if (winHeader.length && !winHeader.find('.dccrit-import-actor-btn').length) {
          const wBtn = $(`
            <a class="dccrit-import-actor-btn" style="display:flex;align-items:center;gap:4px;cursor:pointer;" title="Import a DCCrit JSON (override this actor)">
              <i class="fas fa-file-import"></i><span>DCCrit</span>
            </a>`);
          wBtn.on('click', ev => { ev.preventDefault(); ev.stopPropagation(); openImportDialog(actor); });
          // Position: after sheet settings, before prototype token configure if possible
          const sheetBtn = winHeader.find('.configure-sheet, [data-action="configure"]').first();
            // common token/prototype related buttons
          const tokenBtn = winHeader.find('.configure-token, [data-action="configure-token"], .document-id, [data-action="show-actor-art"]').first();
          if (sheetBtn.length) {
            sheetBtn.after(wBtn);
          } else if (tokenBtn.length) {
            tokenBtn.before(wBtn);
          } else {
            winHeader.append(wBtn);
          }
        }
      }
      const sheetHeader = html.find('.sheet-header');
      if (sheetHeader.length && !sheetHeader.find('.dccrit-import-sheet-btn').length) {
        const sBtn = $(`
          <button type="button" class="dccrit-import-sheet-btn" style="margin-left:8px;display:inline-flex;align-items:center;gap:4px;font-size:11px;" title="Import DCCrit JSON (override)">
            <i class="fas fa-file-import"></i> DCCrit Import
          </button>`);
        sBtn.on('click', ev => { ev.preventDefault(); ev.stopPropagation(); openImportDialog(actor); });
        const nameField = sheetHeader.find('input[name="name"], .name');
        if (nameField.length) nameField.last().after(sBtn); else sheetHeader.append(sBtn);
      }
    } catch (e) { console.error('[DCCrit Importer] sheet button error', e); }
  });

  // Styled import dialog (file or URL)
  function openImportDialog(targetActor=null){
    try {
      // Inject one-time styles
      if (!document.getElementById('dccrit-import-styles')) {
        const st = document.createElement('style');
        st.id='dccrit-import-styles';
        st.textContent = `
        .dccrit-pop { background:#2a2a2d; padding:16px 14px 10px; }
        .dccrit-pop h2 { margin:0 0 8px; font-size:16px; color:#fff; }
        .dccrit-pop .dccrit-row { display:flex; gap:8px; align-items:center; margin-top:10px; }
        .dccrit-pop input[type=url] { flex:1; padding:6px 8px; background:#1c1c1f; border:1px solid #444; color:#fff; border-radius:4px; }
        .dccrit-btn { background:#6d14cf; color:#fff; border:none; padding:6px 10px; border-radius:4px; cursor:pointer; font-size:12px; font-weight:600; letter-spacing:.5px; }
        .dccrit-btn:hover { background:#8d3ef5; }
        .dccrit-btn:disabled { opacity:.5; cursor:not-allowed; }
        `;
        document.head.appendChild(st);
      }

      const { ApplicationV2 } = foundry.applications.api;

      class DCCritImportApp extends ApplicationV2 {
        static DEFAULT_OPTIONS = {
          tag: "div",
          window: { title: "DCCrit Import" },
          position: { width: 460, height: "auto" },
          classes: ["dccrit-import-dialog"]
        };

        async _renderHTML(context, options) {
          return `
            <div class="dccrit-pop">
              <h2>DCCrit Import</h2>
              <p style="color:#bbb;font-size:12px;line-height:1.3;margin:0 0 6px;">Choose a local JSON file or paste a public DCCrit monster URL.</p>
              <div class="dccrit-row">
                <button type="button" class="dccrit-btn" data-action="file">Choose File</button>
              </div>
              <div class="dccrit-row">
                <input type="url" placeholder="https://dccrit.com/monsters/XXXXXXXXXXXX.json" class="dccrit-url" />
                <button type="button" class="dccrit-btn" data-action="url">Import URL</button>
              </div>
            </div>`;
        }

        _replaceHTML(result, content, options) {
          content.innerHTML = result;
          return content;
        }

        _onRender(context, options) {
          const fileBtn = this.element.querySelector('[data-action=file]');
          const urlBtn = this.element.querySelector('[data-action=url]');
          const urlInput = this.element.querySelector('.dccrit-url');

          fileBtn.addEventListener('click', () => openFileDialog(targetActor));
          urlBtn.addEventListener('click', async () => {
            const url = (urlInput.value || '').trim();
            if (!url) return ui.notifications?.warn('Enter a URL first.');
            urlBtn.disabled = true;
            urlBtn.textContent = 'Fetching...';
            try {
              const json = await fetchDCCritJSON(url);
              importDCCrit(json, targetActor);
              this.close();
            } catch (err) {
              console.error('[DCCrit Importer] URL fetch error', err);
              ui.notifications?.error('Failed to fetch DCCrit JSON from URL (see console for details)');
            } finally {
              urlBtn.disabled = false;
              urlBtn.textContent = 'Import URL';
            }
          });
        }
      }

      new DCCritImportApp().render({ force: true });
    } catch (e) { console.error('[DCCrit Importer] dialog error', e); openFileDialog(targetActor); }
  }

  // Open hidden file input
  function openFileDialog(targetActor=null) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = async ev => {
      const file = ev.target.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const json = JSON.parse(text);
        importDCCrit(json, targetActor); // pass actor
      } catch (e) {
        ui.notifications?.error("Failed to read DCCrit JSON");
        console.error('[DCCrit Importer] parse error', e);
      }
    };
    input.click();
  }

  // Override import function: if actor provided, update instead of create
  async function importDCCrit(source, targetActor=null) {
    try {
      const FLAG_SCOPE = getFlagScope(); // NEW: resolve valid scope once per import
      const data = source?.data || source;
      if (!data || typeof data !== 'object') { ui.notifications?.error('Invalid DCCrit JSON structure'); return; }

      // Helper: map md -> ad if provided
      function resolveAD(d){
        const rawAd = Number(d.ad); const rawMd = Number(d.md); // md fallback
        if (!isNaN(rawMd)) return isNaN(rawAd) || !rawAd ? rawMd : rawAd; // md overrides only if ad missing/0
        return rawAd || 10;
      }

      // Enhanced parsing helpers
      const DAMAGE_TYPES = ['piercing','slashing','bludgeoning','fire','cold','lightning','poison','radiant','psychic','sonic','umbral','corrosion'];
      const damagePattern = new RegExp(`(?:Hit:\\s*)?(\\d+)\\s*(?:[a-z]+\\s*)?(${DAMAGE_TYPES.join('|')})(?:\\s*damage)?`,'ig');
      function parseDamages(text='') { const out=[]; let m; while((m=damagePattern.exec(text))){ const value=Number(m[1]); const type=m[2].toLowerCase(); if(!out.find(o=>o.value===value&&o.type===type)) out.push({value,type,raw:m[0]}); } return out; }
      function detectCosts(text=''){ const cost={}; const costRegex=/Use:\s*(\d+)\s*(LAP|AP)/ig; let m; while((m=costRegex.exec(text))){ const v=Number(m[1])||1; const kind=m[2].toUpperCase(); if(kind==='AP' && cost.ap==null) cost.ap=v; if(kind==='LAP' && cost.lap==null) cost.lap=v; } return cost; }
      function buildShortInfo({ap,lap,damages,level}){ const bits=[]; if(level) bits.push(`L${level}`); if(ap!=null) bits.push(`${ap}AP`); if(lap!=null) bits.push(`${lap}LAP`); if(damages && damages.length) bits.push(damages.map(d=>`${d.value}${d.type[0]}`).join('/')); return bits.join(' | '); }

      const name = (source.name || data.name || 'Imported Creature').trim();
      const level = Number(source.level ?? data.level ?? data.rank?.id ?? 1) || 1; // updated to use top-level source.level first
      const creatureTypeRaw = data.type?.name || data.type || 'creature';
      const roleRaw = data.role?.name || data.role || data.rank?.name || 'npc';
      const sizeRaw = (data.size?.name || data.size || 'medium').toString().toLowerCase();
      const sizeMap = { tiny:'tiny', small:'small', medium:'medium', large:'large', huge:'huge', gargantuan:'gargantuan', colossal:'colossal', titanic:'titanic' };
      const size = sizeMap[sizeRaw] || 'medium';
      const hp = Number(data.hp) || 1;
      const pd = Number(data.pd) || 10;
      const ad = resolveAD(data); // UPDATED
      const might = Number(data.might ?? data.mig ?? 1) || 1;
      const agility = Number(data.agility ?? data.agi ?? 1) || 1;
      const intelligence = Number(data.intelligence ?? data.int ?? 0) || 0;
      const charisma = Number(data.charisma ?? data.cha ?? 1) || 1;
      const groundSpeed = Number(data.speed) || 5;
      // New: extract optional description text
      const baseDesc = (source.desc || data.desc || source.notes?.desc || data.notes?.desc || '').trim();
      const descHtml = baseDesc ? `<hr><h3>Description</h3><p>${baseDesc.replace(/\n+/g,'<br>')}</p>` : '';
      let flyingSpeed = 0;
      if (Array.isArray(data.other_speeds)) {
        for (const s of data.other_speeds) if ((s.name||'').toLowerCase().includes('flight')) flyingSpeed = Number(s.desc) || Number(s.value) || flyingSpeed;
      }
      const senses = { darkvision:0, blindsight:0, tremorsense:0, truesight:0 };
      if (Array.isArray(data.senses)) for (const s of data.senses) { const k=(s.name||'').toLowerCase(); if(k.includes('darkvision'))senses.darkvision=Number(s.value)||0; else if(k.includes('blindsight'))senses.blindsight=Number(s.value)||0; else if(k.includes('tremor'))senses.tremorsense=Number(s.value)||0; else if(k.includes('true'))senses.truesight=Number(s.value)||0; }
      const damageReduction = {
        pdr: { number: Number(data.pdr)||0 },
        mdr: { number: Number(data.mdr)||0 },
        damageTypes: {
          corrosion:{ immune:false,resistance:false }, cold:{ immune:false,resistance:false }, fire:{ immune:false,resistance:false }, lightning:{ immune:false,resistance:false }, poison:{ immune:false,resistance:false },
          radiant:{ immune:false,resistance:false }, psychic:{ immune:false,resistance:false }, sonic:{ immune:false,resistance:false }, umbral:{ immune:false,resistance:false },
          piercing:{ immune:false,resistance:false }, slashing:{ immune:false,resistance:false }, bludgeoning:{ immune:false,resistance:false }
        }
      };
      if (Array.isArray(data.resistances)) for (const r of data.resistances) { const key=(r.name||'').toLowerCase(); const val=(r.value||'').toString().toLowerCase(); const mk=key.replace(/\s+/g,''); for(const dt in damageReduction.damageTypes){ if(dt===mk||key.includes(dt)){ if(val.includes('immune')) damageReduction.damageTypes[dt].immune=true; else if(val.includes('half')||val.includes('res')) damageReduction.damageTypes[dt].resistance=true; } } }
      const conditions = Array.isArray(data.conditions)? data.conditions.map(c=>c.name||c):[];
      const languages = Array.isArray(data.languages)? data.languages.map(l=> (l.name||l).toString()):[];
      // Build items from actions & features with damage recognition
      const items=[];
      if (Array.isArray(data.actions)) for (const act of data.actions){
        const descRaw = act.desc || '';
        const subText = (Array.isArray(act.sub_items)? act.sub_items.map(si=>`${si.name?si.name+': ':''}${si.desc||''}`).join('\n') : '');
        const combinedRaw = `${descRaw}\n${subText}`;
        const parsedDamages = parseDamages(combinedRaw);
        const parsedCosts = detectCosts(descRaw);
        // Fallback to explicit cost field if provided and not detected inside text
        if(parsedCosts.ap==null && act.cost!=null) parsedCosts.ap = act.cost;
        const descParts=[];
        if(parsedCosts.ap!=null && !/Use:\s*\d+\s*AP/i.test(descRaw)) descParts.push(`<p><strong>Use:</strong> ${parsedCosts.ap} AP</p>`);
        if(parsedCosts.lap!=null && !/Use:\s*\d+\s*LAP/i.test(descRaw)) descParts.push(`<p><strong>Use:</strong> ${parsedCosts.lap} LAP</p>`);
        if(parsedDamages.length && !/Damage:/i.test(descRaw)) descParts.push(`<p><strong>Damage:</strong> ${parsedDamages.map(d=>`${d.value} ${d.type}`).join(', ')}</p>`);
        if(descRaw) descParts.push(`<p>${descRaw.replace(/\n/g,'<br>')}</p>`);
        if(Array.isArray(act.sub_items)) for(const si of act.sub_items){ const sid=[si.name?`<strong>${si.name}</strong>`:'', si.desc||''].filter(Boolean).join(': '); descParts.push(`<p>${sid.replace(/\n/g,'<br>')}</p>`); }
        const lower=combinedRaw.toLowerCase();
        let actionType='other';
        if(lower.includes('attack check')) actionType='attack'; else if(lower.includes('spell check')||lower.includes('save')) actionType='check';
        // If we have parsed damage but no explicit action type, treat as attack
        if(actionType==='other' && parsedDamages.length) actionType='attack';
        const fullDesc=descParts.join('\n');
        const shortInfo = buildShortInfo({ ap: parsedCosts.ap, lap: parsedCosts.lap, damages: parsedDamages, level });
        const damageParts = parsedDamages.map(d=>({ value:d.value, type:d.type }));
        // Build advanced formulas structure expected by system if damage present
        let formulas = { };
        if (parsedDamages.length) {
          const mkId = () => (foundry?.utils?.randomID ? foundry.utils.randomID() : Math.random().toString(36).slice(2,18));
          for (const d of parsedDamages) {
            const fid = mkId();
            formulas[fid] = { formula: String(d.value), type: d.type, category: 'damage', fail: false, failFormula: '', each5: false, each5Formula: '', overrideDefence: '' };
          }
        }
        const versusArea = /vs\s*(ad|area)/i.test(combinedRaw);
        const halfOnMiss = /half damage on miss/i.test(combinedRaw);
        items.push({
          name: act.name || 'Action',
          type:'feature',
          img:'icons/svg/sword.svg',
          system:{
            description:fullDesc,
            actionType,
            featureType:'monster',
            featureOrigin:name,
            choicePointCost:1,
            range:{ melee:1 },
            toggle:{ toggleOnRoll:false },
            check:{ againstDC: actionType!=='attack' },
            save:{ failEffect:'' },
            costs:{
              ...(parsedCosts.ap!=null?{ap:parsedCosts.ap}:{ }),
              ...(parsedCosts.lap!=null?{lap:parsedCosts.lap}:{ }),
              ...(parsedCosts.ap!=null?{ resources:{ actionPoint: parsedCosts.ap } }:{} )
            },
            apCost: parsedCosts.ap!=null?parsedCosts.ap:undefined,
            lapCost: parsedCosts.lap!=null?parsedCosts.lap:undefined,
            shortInfo,
            damageParts,
            formulas: parsedDamages.length ? formulas : { damage: damageParts },
            attackFormula: actionType==='attack' ? {
              rangeType: 'melee',
              checkType: 'attack',
              targetDefence: versusArea ? 'area' : 'precision',
              rollBonus: 0,
              combatMastery: true,
              critThreshold: 20,
              halfDmgOnMiss: halfOnMiss,
              formulaMod: damageParts.some(d=>['fire','cold','lightning','poison','radiant','psychic','sonic','umbral','corrosion'].includes(d.type)) ? 'elemental' : 'physical',
              skipBonusDamage: { heavy:false, brutal:false, crit:false, conditionals:false }
            } : {},
          },
          // CHANGED: use FLAG_SCOPE instead of MODULE_ID
          flags:{ [FLAG_SCOPE]: { parsed: { damages: damageParts, costs: parsedCosts } } }
        });
      }
      if (Array.isArray(data.features)) for (const f of data.features){
        const desc = (f.desc||'');
        const parsedDamages = parseDamages(desc);
        const shortInfo = buildShortInfo({ damages: parsedDamages, level });
        const damageParts = parsedDamages.map(d=>({ value:d.value, type:d.type }));
        const descLine = (!/Damage:/i.test(desc) && parsedDamages.length) ? `<p><strong>Damage:</strong> ${parsedDamages.map(d=>`${d.value} ${d.type}`).join(', ')}</p>` : '';
        const fullDesc = `${descLine}<p>${desc.replace(/\n/g,'<br>')}</p>`;
        let formulas = { };
        if (parsedDamages.length) {
          const mkId = () => (foundry?.utils?.randomID ? foundry.utils.randomID() : Math.random().toString(36).slice(2,18));
          for (const d of parsedDamages) {
            const fid = mkId();
            formulas[fid] = { formula: String(d.value), type: d.type, category: 'damage', fail: false, failFormula: '', each5: false, each5Formula: '', overrideDefence: '' };
          }
        }
        const versusArea = /vs\s*(ad|area)/i.test(desc);
        const halfOnMiss = /half damage on miss/i.test(desc);
        const isAttack = !!parsedDamages.length; // treat damage feature as attack
        items.push({
          name:f.name||'Feature',
          type:'feature',
          img:'icons/svg/aura.svg',
          system:{
            description:fullDesc,
            actionType: isAttack ? 'attack' : '',
            featureType:'monster',
            featureOrigin:name,
            choicePointCost:1,
            toggle:{ toggleOnRoll:false },
            shortInfo,
            damageParts,
            formulas: parsedDamages.length ? formulas : { damage: damageParts },
            attackFormula: isAttack ? {
              rangeType: 'melee',
              checkType: 'attack',
              targetDefence: versusArea ? 'area' : 'precision',
              rollBonus: 0,
              combatMastery: true,
              critThreshold: 20,
              halfDmgOnMiss: halfOnMiss,
              formulaMod: damageParts.some(d=>['fire','cold','lightning','poison','radiant','psychic','sonic','umbral','corrosion'].includes(d.type)) ? 'elemental' : 'physical',
              skipBonusDamage: { heavy:false, brutal:false, crit:false, conditionals:false }
            } : {}
          },
          // CHANGED: use FLAG_SCOPE instead of MODULE_ID
          flags:{ [FLAG_SCOPE]: { parsed: { damages: damageParts } } }
        });
      }
      let img = ensureValidImage(source.imgs?.vtt || source.img || 'icons/svg/mystery-man.svg');
      // Improved DCCrit image handling: construct CDN URLs from provided filenames
      (function(){
        try {
          const BASE = 'https://sb.dccrit.com/storage/v1/object/public/media//monsters/imgs/';
          let tokenImg, portraitImg;
          if (source.imgs?.vtt) {
            const fn = source.imgs.vtt.filename || source.imgs.vtt; if (typeof fn === 'string') tokenImg = /^https?:/i.test(fn) ? fn : BASE + fn.replace(/^\//,'')
          }
          if (source.imgs?.portrait) {
            const fnp = source.imgs.portrait.filename || source.imgs.portrait; if (typeof fnp === 'string') portraitImg = /^https?:/i.test(fnp) ? fnp : BASE + fnp.replace(/^\//,'')
          }
          // NEW: if portrait missing, use vtt (token) image for portrait equivalently
          if (!portraitImg && tokenImg) portraitImg = tokenImg;
          const finalPortrait = portraitImg && ensureValidImage(portraitImg);
          const finalToken = tokenImg && ensureValidImage(tokenImg);
          img = finalPortrait || finalToken || img; // actor sheet image prefers portrait (now at least token)
          source.__dccritTokenImg = finalToken || finalPortrait || img; // ensure prototype token has image
        } catch (e) { /* ignore */ }
      })();

      // Override existing actor
      if (targetActor) {
        const updates = {
          name,
          img,
          'prototypeToken.name': name,
          'prototypeToken.texture.src': (source.__dccritTokenImg || img),
          'system.details.level': level,
          'system.details.creatureType': capWords(creatureTypeRaw),
          'system.details.role': roleRaw.toLowerCase(),
          'system.details.category': roleRaw.toLowerCase(),
          'system.size.size': size,
          'system.attributes.mig.current': might,
          'system.attributes.agi.current': agility,
          'system.attributes.int.current': intelligence,
          'system.attributes.cha.current': charisma,
          'system.resources.health.value': hp,
          'system.resources.health.max': hp,
          'system.resources.health.current': hp,
          'system.movement.ground.current': groundSpeed,
          'system.movement.ground.value': groundSpeed,
          'system.movement.flying.current': flyingSpeed,
          'system.movement.flying.value': flyingSpeed,
          'system.senses.darkvision.range': senses.darkvision,
          'system.senses.blindsight.range': senses.blindsight,
          'system.senses.tremorsense.range': senses.tremorsense,
          'system.senses.truesight.range': senses.truesight,
          'system.defences.precision.value': pd,
          'system.defences.precision.normal': pd,
          'system.defences.area.value': ad,
          'system.defences.area.normal': ad,
          'system.damageReduction.pdr.number': damageReduction.pdr.number,
          'system.damageReduction.mdr.number': damageReduction.mdr.number,
          'system.journal': `<h2>${name}</h2><p>Imported from DCCrit</p>${descHtml}`
        };
        for (const dt in damageReduction.damageTypes) { updates[`system.damageReduction.damageTypes.${dt}.immune`] = !!damageReduction.damageTypes[dt].immune; updates[`system.damageReduction.damageTypes.${dt}.resistance`] = !!damageReduction.damageTypes[dt].resistance; }
        await targetActor.update(updates);
        // CHANGED: use FLAG_SCOPE instead of MODULE_ID
        await targetActor.setFlag(FLAG_SCOPE, 'dccrit', { original: source, importedAt: new Date().toISOString(), conditions, languages, detectedLevel: level });
        // Replace feature items
        const oldFeatureIds = targetActor.items.filter(i=>i.type==='feature').map(i=>i.id);
        if (oldFeatureIds.length) await targetActor.deleteEmbeddedDocuments('Item', oldFeatureIds);
        if (items.length) { const sanitized = items.map(it => { const c = foundry.utils.duplicate(it); c.type = c.type||'feature'; c.name=c.name||'Imported Feature'; c.system=c.system||{ description:'<p>No description</p>' }; if(typeof c.system.description!== 'string') c.system.description='<p>No description</p>'; return c; }); await targetActor.createEmbeddedDocuments('Item', sanitized); }
        ui.notifications?.info(`DCCrit data imported to actor "${targetActor.name}".`);
        return;
      }

      // (Fallback create path retained only if no targetActor supplied)
      let actor; try {
        actor = await Actor.create({
          name,
          type:'npc',
          img,
          prototypeToken:{ name, texture:{ src: (source.__dccritTokenImg || img) } },
          system:{
            details:{ level, creatureType:capWords(creatureTypeRaw), role:roleRaw.toLowerCase(), category:roleRaw.toLowerCase() },
            size:{ fromAncestry:false, size },
            attributes:{ mig:{current:might,value:0}, agi:{current:agility,value:0}, int:{current:intelligence,value:0}, cha:{current:charisma,value:0} },
            resources:{ health:{ value:hp,max:hp,current:hp,bonus:0,temp:null,useFlat:true }, ap:{ value:4,max:4,bonus:0 } },
            movement:{ ground:{useCustom:true,current:groundSpeed,value:groundSpeed,bonus:0}, flying:{useCustom:true,current:flyingSpeed,value:flyingSpeed,bonus:0} },
            senses:{ darkvision:{range:senses.darkvision,bonus:0}, blindsight:{range:senses.blindsight,bonus:0}, tremorsense:{range:senses.tremorsense,bonus:0}, truesight:{range:senses.truesight,bonus:0} },
            defences:{ precision:{formulaKey:'flat',value:pd,normal:pd,heavy:0,brutal:0,label:'dc20rpg.defence.precision',bonuses:{noArmor:0,noHeavy:0,always:0}}, area:{formulaKey:'flat',value:ad,normal:ad,heavy:0,brutal:0,label:'dc20rpg.defence.area',bonuses:{noArmor:0,noHeavy:0,always:0}} },
            damageReduction:{ pdr:{number:damageReduction.pdr.number,value:0,bonus:0,label:'dc20rpg.damageReduction.pdr'}, mdr:{number:damageReduction.mdr.number,value:0,bonus:0,label:'dc20rpg.damageReduction.mdr'}, damageTypes: damageReduction.damageTypes },
            journal:`<h2>${name}</h2><p>Imported from DCCrit.</p>${descHtml}`
          },
          // CHANGED: use FLAG_SCOPE instead of MODULE_ID
          flags:{
            [FLAG_SCOPE]: { dccrit:{ original:source, importedAt:new Date().toISOString(), conditions, languages } }
          }
        }, { renderSheet:true });
      } catch (e) { console.error('[DCCrit Importer] Actor.create failed', e); ui.notifications?.error('Failed to create actor from DCCrit JSON.'); return; }
      if (actor && items.length) { try { await actor.createEmbeddedDocuments('Item', items); } catch(e){ console.warn('[DCCrit Importer] item embed failed', e);} }
      ui.notifications?.info(`DCCrit Actor "${actor?.name}" imported (new).`);
    } catch (e) { console.error('[DCCrit Importer] import error', e); ui.notifications?.error('DCCrit import failed (see console).'); }
  }

  // Robust fetch helper for DCCrit monster JSON with fallbacks
  async function fetchDCCritJSON(rawUrl){
    const original = (rawUrl||'').trim();
    if(!original) throw new Error('No URL provided');
    let idMatch = original.match(/monsters\/([A-Za-z0-9_-]+)/i);
    let id = idMatch ? idMatch[1].replace(/\.json$/i,'') : null;
    if(!id && /^[A-Za-z0-9_-]{6,}$/.test(original)) id = original.replace(/\.json$/i,'');
    const attempts = [];
    const addAttempt = u => { if(u && !attempts.includes(u)) attempts.push(u); };
    // Normalize provided URL
    if (/^https?:/i.test(original)) {
      const hasJson = /\.json($|[?#])/i.test(original);
      addAttempt(hasJson ? original : original.replace(/(#.*|\?.*)$/,'') + (original.endsWith('/')?'':'.json'));
    }
    if(id){
      addAttempt(`https://dccrit.com/monsters/${id}.json`);
      addAttempt(`https://sb.dccrit.com/storage/v1/object/public/media//monsters/jsons/${id}.json`);
      addAttempt(`https://sb.dccrit.com/storage/v1/object/public/media//monsters/${id}.json`);
    }
    // Ensure at least one attempt (raw fallback)
    if(!attempts.length) addAttempt(original);
    // Add proxy wrapped variants (defer until direct paths fail)
    const buildProxy = url => [
      `https://cors.isomorphic-git.org/${url}`,
      `https://corsproxy.io/?${encodeURIComponent(url)}`
    ];

    const directAttempts = [...attempts];
    let proxiesAdded = false;
    const errors = [];
    for (let i=0;i<attempts.length;i++){
      const url = attempts[i];
      try {
        console.debug('[DCCrit Importer] Fetch attempt', url);
        const resp = await fetch(url, { cache:'no-cache', headers:{ 'Accept':'application/json' } });
        if(!resp.ok) { errors.push(`${url} -> HTTP ${resp.status}`); 
          // After all direct attempts fail, push proxy attempts
          if(i === attempts.length-1 && !proxiesAdded){ proxiesAdded=true; directAttempts.forEach(d=> buildProxy(d).forEach(p=>addAttempt(p))); }
          continue; }
        const ct = resp.headers.get('content-type')||'';
        if(!/json/i.test(ct)) { errors.push(`${url} -> Non-JSON content-type: ${ct}`); continue; }
        const text = await resp.text();
        try {
          const json = JSON.parse(text);
          if(json && typeof json === 'object') return json;
          errors.push(`${url} -> Parsed but not object`);
        } catch(pe){ errors.push(`${url} -> JSON parse error: ${pe.message}`); }
      } catch(err){
        errors.push(`${url} -> ${err.message}`);
        if(i === attempts.length-1 && !proxiesAdded){ proxiesAdded=true; directAttempts.forEach(d=> buildProxy(d).forEach(p=>addAttempt(p))); }
      }
    }
    console.error('[DCCrit Importer] All fetch attempts failed:', errors);
    throw new Error(errors.join('\n'));
  }
  
  })();
