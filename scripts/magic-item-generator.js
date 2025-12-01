// Prevent syntax errors: this file must not be empty.
console.log("Loaded dc20-monster-generator/scripts/magic-item-generator.js");

// Add "Generate Magic Item" button to Items Directory (v13+)
function addMagicItemGenButton(html) {
  // Only show for GM users
  if (!game.user?.isGM) return;

  // Ensure html is a jQuery object
  if (!(html instanceof $)) html = $(html);

  // Only add if not already present (avoid duplicates)
  if (html.find(".dc20-generate-magic-item-btn").length) return;

  // Find the header (v13+)
  let header = html.find(".directory-header");
  if (!header.length) return;

  // Find the action buttons container (where create/folder buttons are)
  let actionBtns = header.find(".action-buttons");
  if (!actionBtns.length) {
    // Fallback: sometimes buttons are direct children of header
    actionBtns = header;
  }

  // Create the button
  const btn = $(`
    <button type="button" class="dc20-generate-magic-item-btn" style="display:flex;align-items:center;gap:4px;">
      <i class="fas fa-hat-wizard"></i>
      ${game.i18n.localize("dc20-monster-generator.magic-item-generator.form.generateButton") || "Generate Magic Item"}
    </button>
  `);
  // Build button (sits next to Generate)
  const buildBtn = $(`
    <button type="button" class="dc20-build-magic-item-btn" style="display:flex;align-items:center;gap:4px;">
      <i class="fas fa-hammer"></i>
      Build Magic Item
    </button>
  `);

  btn.on("click", () => {
    if (typeof DC20MagicItemGeneratorForm === "function") {
      new DC20MagicItemGeneratorForm().render(true);
    } else {
      ui.notifications.warn("Magic Item Generator form not loaded.");
    }
  });
  buildBtn.on("click", () => {
    if (typeof DC20MagicItemBuilderForm === "function") {
      new DC20MagicItemBuilderForm().render(true);
    } else {
      ui.notifications?.warn?.("Magic Item Builder form not loaded.");
    }
  });

  // Insert after the last create/create-folder button, but before the search bar
  const createBtns = actionBtns.find('button[data-action="create"], button[data-action="create-folder"]');
  if (createBtns.length) {
    // Insert after the last create/folder button
    createBtns.last().after(btn);
    btn.after(buildBtn); // place Build right after Generate
  } else {
    // If no create buttons, insert at the top of actionBtns
    actionBtns.prepend(btn);
    btn.after(buildBtn); 
  }

  // If the search bar is in the header, ensure our button is above it
  const search = header.find('input[type="search"], .directory-search');
  if (search.length) {
    // If our button is after the search, move it before
    const btnInHeader = header.find(".dc20-generate-magic-item-btn");
    if (btnInHeader.length && btnInHeader.index() > search.parent().index()) {
      search.parent().before(btnInHeader);
    }
  }

  // MutationObserver to keep the button present if header is re-rendered
  if (!header[0].__dc20MagicItemGenObserver) {
    const observer = new MutationObserver(() => {
      if (!header.find(".dc20-generate-magic-item-btn").length) {
        const createBtns = actionBtns.find('button[data-action="create"], button[data-action="create-folder"]');
        const btnClone = btn.clone(true);
        if (createBtns.length) {
          createBtns.last().after(btnClone);
        } else {
          actionBtns.prepend(btnClone);
        }
        // Ensure above search bar if present
        const search = header.find('input[type="search"], .directory-search');
        if (search.length) {
          const btnInHeader = header.find(".dc20-generate-magic-item-btn");
          if (btnInHeader.length && btnInHeader.index() > search.parent().index()) {
            search.parent().before(btnInHeader);
          }
        }
      }
      // ensure Build button persists as well
      if (!header.find(".dc20-build-magic-item-btn").length) {
        const createBtns = actionBtns.find('button[data-action="create"], button[data-action="create-folder"]');
        const buildClone = buildBtn.clone(true);
        if (createBtns.length) {
          // If Generate exists, we want Build right after it, else just after last create
          const gen = header.find(".dc20-generate-magic-item-btn");
          if (gen.length) {
            gen.after(buildClone);
          } else {
            createBtns.last().after(buildClone);
          }
        } else {
          actionBtns.prepend(buildClone);
        }
      }
    });
    observer.observe(header[0], { childList: true, subtree: true });
    header[0].__dc20MagicItemGenObserver = observer;
  }
}

// Magic Item Generator Form
class DC20MagicItemGeneratorForm extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: game.i18n.localize("dc20-monster-generator.magic-item-generator.title"),
      template: "modules/dc20-monster-generator/templates/magic-item-generator-form.html",
      width: 600,
      height: 500
    });
  }
  getData() {
    return {};
  }
  async _updateObject(event, formData) {
    // Gather values
    const name = formData.magicItemName?.trim() || "Unnamed Magic Item";
    const img = (formData.magicItemImage || "").trim(); // no hardcoded default
    const type = formData.magicItemType || "";
    const subtypeId = formData.magicItemSubtype || "";
    const properties = Number(formData.magicItemProperties) || 1;
    let magicPower = Number(formData.magicItemPower);
    if (isNaN(magicPower)) magicPower = 0;
    const count = Math.max(1, Number(formData.magicItemCount) || 1);

    // Find subtype name from id
    let subtypeName = "";
    for (const t in window.magicItemSubtypes) {
      const found = window.magicItemSubtypes[t].find(s => s.id === subtypeId);
      if (found) { subtypeName = found.name; break; }
    }

    // --- Fix: Prevent error if no subtype selected ---
    if (!subtypeId || !subtypeId.includes(".")) {
      ui.notifications.warn("Please select a valid magic item subtype.");
      return;
    }

    // Fetch the template item from compendium
    const [ , module, pack, typeStr, itemId ] = subtypeId.split(".");
    const compPack = game.packs.get(`${module}.${pack}`);
    if (!compPack) {
      ui.notifications.warn("Could not find compendium pack for selected subtype.");
      return;
    }
    const templateDoc = await compPack.getDocument(itemId);
    if (!templateDoc) {
      ui.notifications.warn("Could not find template item in compendium.");
      return;
    }

    // Generate items
    for (let i = 0; i < count; i++) {
      // Clone template and modify
      let itemData = templateDoc.toObject();
      itemData.name = name + (count > 1 ? ` #${i+1}` : "");
      // Only override if user provided an image
      if (img) itemData.img = img;
      itemData.system = itemData.system || {};

      // Pick magic item properties based on selected options
      const selectedProperties = pickMagicProperties(magicPower, properties, type);

      // Set the magic item description based on selected properties
      setMagicItemDescription(itemData, subtypeName, selectedProperties, type);

      // Create the item
      await Item.create(itemData);
    }
    ui.notifications.info(`Magic item${count > 1 ? "s" : ""} "${name}" created!`);
  }
}

// Move "Generate Magic Item" button to the bottom of the Items tab, below the item list.
function addMagicItemGenButtonBottom(html) {
  if (!(html instanceof $)) html = $(html);
  if (html.find(".dc20-generate-magic-item-btn").length) return;

  // Find the directory-list (the main item list)
  const list = html.find(".directory-list");
  if (!list.length) return;

  // Create the button
  const btn = $(`
    <button type="button" class="dc20-generate-magic-item-btn" style="display:flex;align-items:center;gap:4px;margin:16px auto 0 auto;">
      <i class="fas fa-hat-wizard"></i>
      Generate Magic Item
    </button>
  `);
  btn.on("click", () => {
    if (typeof DC20MagicItemGeneratorForm === "function") {
      new DC20MagicItemGeneratorForm().render(true);
    } else {
      ui.notifications.warn("Magic Item Generator form not loaded.");
    }
  });

  // Insert the button after the directory-list (at the bottom of the tab)
  list.after(btn);
}

// Register Ctrl+Shift+M to open the Magic Item Generator form
Hooks.once("ready", () => {
  window.addEventListener("keydown", function(e) {
    // Why, Why a keybind hook? How the Fuck did this fix the button logic seriously How the Fuck
    if (e.ctrlKey && e.shiftKey && (e.key === "ThisIsDumb" || e.key === "ThisIsDumb")) {
      e.preventDefault();
      if (typeof DC20MagicItemGeneratorForm === "function") {
        new DC20MagicItemGeneratorForm().render(true);
      } else {
        ui.notifications?.warn?.("Magic Item Generator form not loaded.");
      }
    }
  });
});

Hooks.on("renderItemDirectory", (app, html) => {
  if (!game.user?.isGM) return;
  addMagicItemGenButtonHeader(html);
});
Hooks.on("renderSidebarTab", (app, html) => {
  if (!game.user?.isGM) return;
  if (app.options?.id === "items" || app.tabName === "items") {
    addMagicItemGenButtonHeader(html);
  }
});

function addMagicItemGenButtonHeader(html) {
  if (!(html instanceof $)) html = $(html);
  // Remove any existing button row and any stray button in the header/action-buttons
  html.find(".dc20-generate-magic-item-btn-row").remove();
  html.find(".dc20-generate-magic-item-btn").remove();

  // Find the header (v13+)
  let header = html.find(".directory-header");
  if (!header.length) return;

  // Find the action buttons container (where create/folder buttons are)
  let actionBtns = header.find(".action-buttons");
  if (!actionBtns.length) actionBtns = header;

  // Create a full-width row for the button(s) - smaller text, full labels
  const btnRow = $(`
    <div class="dc20-generate-magic-item-btn-row" style="width:100%;display:flex;justify-content:flex-start;margin-top:8px;gap:8px;">
      <button type="button" class="dc20-generate-magic-item-btn" style="display:flex;align-items:center;gap:8px;flex:1;padding:6px 0;font-size:0.9em;white-space:nowrap;">
        <i class="fas fa-hat-wizard"></i>
        Generate Magic Item
      </button>
      <button type="button" class="dc20-build-magic-item-btn" style="display:flex;align-items:center;gap:8px;flex:1;padding:6px 0;font-size:0.9em;white-space:nowrap;">
        <i class="fas fa-hammer"></i>
        Build Magic Item
      </button>
    </div>
  `);

  btnRow.find("button.dc20-generate-magic-item-btn").on("click", () => {
    if (typeof DC20MagicItemGeneratorForm === "function") {
      new DC20MagicItemGeneratorForm().render(true);
    } else {
      ui.notifications.warn("Magic Item Generator form not loaded.");
    }
  });
  btnRow.find("button.dc20-build-magic-item-btn").on("click", () => {
    if (typeof DC20MagicItemBuilderForm === "function") {
      new DC20MagicItemBuilderForm().render(true);
    } else {
      ui.notifications.warn("Magic Item Builder form not loaded.");
    }
  });

  // Insert the button row after the action buttons container
  actionBtns.after(btnRow);
}

// Dummy form for demonstration (replace with your actual implementation)
if (typeof DC20MagicItemGeneratorForm === "undefined") {
  class DC20MagicItemGeneratorForm extends FormApplication {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        title: "Magic Item Generator",
        template: "modules/dc20-monster-generator/templates/magic-item-generator-form.html",
        width: 600,
        height: 500
      });
    }
    getData() { return {}; }
    async _updateObject(event, formData) {}
  }
  window.DC20MagicItemGeneratorForm = DC20MagicItemGeneratorForm;
}

// Fallback builder definition to avoid "form not loaded" errors
if (typeof DC20MagicItemBuilderForm === "undefined") {
  class DC20MagicItemBuilderForm extends FormApplication {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        title: "Magic Item Builder",
        template: "modules/dc20-monster-generator/templates/magic-item-builder-form.html",
        width: 650,
        height: "auto",
        classes: ["dc20-magic-item-builder"]
      });
    }
    getData() { return {}; }
    async _updateObject(event, formData) {}
  }
  window.DC20MagicItemBuilderForm = DC20MagicItemBuilderForm;
}

// Keep only ONE set of hooks that inject the single header row (no extra buttons)
Hooks.on("renderItemDirectory", (app, html) => {
  if (!game.user?.isGM) return;
  addMagicItemGenButtonHeader(html);
});
Hooks.on("renderSidebarTab", (app, html) => {
  if (!game.user?.isGM) return;
  if (app.options?.id === "items" || app.tabName === "items") {
    addMagicItemGenButtonHeader(html);
  }
});

// Ensure subtypes map is available globally (used by generator and builder)
if (typeof window.magicItemSubtypes === "undefined") {
  window.magicItemSubtypes = {
    "Armor": [
      { name: "Defensive (Heavy)", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.JdjAUOdy0319BHlZ" },
      { name: "Defensive (Light)", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.NxzRbdoeKZOdEExz" },
      { name: "Deflecting (Heavy)", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.VB4572PFOP70e9u4" },
      { name: "Deflecting (Light)", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.olXhUqCGW4vqYzTE" },
      { name: "Fortified (Heavy)", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.vfgeuwGb3MPOHzqB" },
      { name: "Fortified (Light)", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.xwuXod8PwFwf5IAa" },
      { name: "Highly Defensive (Heavy)", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.edU1OY1zmj6lUpHc" }
    ],
    "One-Handed Weapons": [
      { name: "Brass Knuckles", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.30ZrtfjY9pkz8za3" },
      { name: "Chain Whip", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.k24D7kE34EVyX9ZR" },
      { name: "Club", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.fjUagzvxk63SJCoE" },
      { name: "Hand Axe", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.ohzqeyWkSjKitG9U" },
      { name: "Javelin", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.8IfvMwc3iEGuS3OW" },
      { name: "Light Hammer", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.MXawsCtLLL6x8pBz" },
      { name: "Mining Pick", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.tlj53jDgI7oLB9xf" },
      { name: "Rapier", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.QvQa1su5IEJxBvIm" },
      { name: "Short Sword", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.jGpeKsGbBkMAoEQl" },
      { name: "Sickle", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.CpKfXJYlh6lOgmDs" },
      { name: "Throwing Dagger", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.4uOo8axsTV51QUOq" },
      { name: "Throwing Star", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.ppGt3wCT5rCnKPBB" }
    ],
    "Other Equipment": [
      { name: "Foot Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.s5nvO0VoP4b78K7O" },
      { name: "Hand Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.X1CHbIkZnA1g4ySb" },
      { name: "Head Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.IoMz2iq5zae4HGTN" },
      { name: "Mantle Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.UpTckx8gYYLriYj1" },
      { name: "Neck Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.ZrEDvjq7OSRGrA2v" },
      { name: "Ring Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.XGnfOwxaLAkRyFdp" },
      { name: "Trinket Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.aJMy2WD7If4Rmn0b" },
      { name: "Waist Gear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.FxbMkE2G6eLNOvFh" }
    ],
    "Ranged Weapons": [
      { name: "Blowgun", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.1LW6ItR27EEZQ86L" },
      { name: "Greatbow", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.JIGOA7txQakWzJYn" },
      { name: "Hand Crossbow", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.GzLE39LF5dyutfiD" },
      { name: "Heavy Crossbow", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.hdMJQUXhtSCMR1QQ" },
      { name: "Light Crossbow", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.OSBRTTkl1fX7yvUG" },
      { name: "Longbow", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.RHUl6evDl6yfNhDH" },
      { name: "Shortbow", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.qoiU9NJ47c0Rrnwk" },
      { name: "Sling", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.O58HsRNqtwo5tiTg" }
    ],
    "Shields": [
      { name: "Buckler", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.WtIlCb7zFCUKfIl6" },
      { name: "Heater Shield", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.bFG6ma9xfFDSQxLo" },
      { name: "Kite Shield", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.g8byrlm1XW90Wtbu" },
      { name: "Round Shield", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.1pKle1yI7kdgKZNb" },
      { name: "Tower Shield", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.6Cg9tBkaagRLC8Hc" }
    ],
    "Two-Handed Weapons": [
      { name: "Glaive", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.gn7gvXCthdVqWD9g" },
      { name: "Great Whip", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.wWUPJfUMgh3FD6hS" },
      { name: "Greataxe", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.QNwmvQKEKnNWhvlg" },
      { name: "Greatmaul", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.ExFuxYW83bfrmqxz" },
      { name: "Greatsword", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.f3jhCDrDs2iqSH5d" },
      { name: "Halberd", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.3by7F0lRqTQqqz9r" },
      { name: "Longpole", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.zz4TuGO78wytgVuQ" },
      { name: "Meteor Hammer", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.jBSavWTcghV3Y4fi" },
      { name: "Pike", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.U8jfpIH98CBDTDiQ" },
      { name: "Scythe", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.xwmZWI5qbpZUyKFI" },
      { name: "War Flail", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.T44JiTaDj4sAcCte" }
    ],
    "Versatile Weapons": [
      { name: "Bastard Sword", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.qjgG3IZ1fLdypnOf" },
      { name: "Battleaxe", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.Dtcerphyw5mqINjq" },
      { name: "Bull Whip", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.J6f8aeEgOUA1gCQ5" },
      { name: "Flail", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.gEOyEtT9345tL1Bp" },
      { name: "Long Spear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.lNQslOk7QNbKqpiA" },
      { name: "Longsword", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.CsmaMkiy6vPtEXNY" },
      { name: "Morningstar", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.y5zLfBHqT6yancdm" },
      { name: "Pickaxe", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.edE6yePQXBkOPXma" },
      { name: "Quarterstaff", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.MnPkpzvRuN9SxRiS" },
      { name: "Spear", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.jgVh5FKMFxH7PNbt" },
      { name: "Warhammer", id: "Compendium.dc20-monster-generator.magic-item-generator-templates.Item.ccMXj2kd7QTZ1C5n" }
    ]
  };
}

// Damage types for "Change Damage Type" property
const ALL_DAMAGE_TYPES = [
  "bludgeoning",
  "piercing",
  "slashing",
  "fire",
  "cold",
  "lightning",
  "poison",
  "corrosion",
  "radiant",
  "umbral",
  "psychic",
  "sonic"
];

// Full magic property list for description generation
const MAGIC_PROPERTIES = [
  { name: "Language, Minor", power: 0, description: "Requires: Attunement. You become Fluent in [type] language." },
  { name: "Language, Major", power: 1, description: "Requires: Attunement. You become Fluent in 3 languages." },
  { name: "Health Increase", power: 1, description: "Requires: Attunement. Your HP Maximum increases by 3." },
  { name: "Grit Increase", power: 1, description: "Requires: Attunement. Your Grit Point Maximum increases by 2." },
  { name: "Mana Increase", power: 3, description: "Requires: Attunement. Your MP Maximum increases by 4." },
  { name: "Stamina Increase", power: 3, description: "Requires: Attunement. Your SP Maximum increases by 1." },
  { name: "Climb Speed", power: 1, description: "Requires: Attunement. You gain a Climb Speed equal to your Ground Speed." },
  { name: "Swim Speed", power: 2, description: "Requires: Attunement. You gain a Swim Speed equal to your Ground Speed." },
  { name: "Speed", power: 2, description: "Requires: Attunement. Your Speed increases by 2." },
  { name: "Burrow Speed", power: 6, description: "Requires: Attunement. You gain a Burrow Speed equal to your Ground Speed. You can move through sand, dirt, mud, and snow, but not through solid ice or rock. When you do, you leave a collapsed tunnel behind you." },
  { name: "Fly Speed", power: 6, description: "Requires: Attunement. You gain a Fly Speed equal to your Ground Speed." },
  { name: "Truewalk", power: 3, description: "Requires: Attunement. You can walk normally up vertical surfaces and upside down (such as on ceilings) without falling or needing to Climb." },
  { name: "Water Walk", power: 1, description: "You can choose to stand on and move across liquid surfaces as if they were solid ground." },
  { name: "Unstoppable", power: 6, description: "You’re immune to the following Conditions: Paralyzed, Stunned, and Slowed." },
  { name: "Darkvision", power: 1, description: "Requires: Attunement. You gain 10 Space Darkvision. If you already have Darkvision, it increases by 5 Spaces." },
  { name: "Blindsight", power: 3, description: "Requires: Attunement. You gain a 3 Space Blindsight. If you already have Blindsight, it increases by 2 Spaces." },
  { name: "Tremorsense", power: 3, description: "Requires: Attunement. You gain a 3 Space Tremorsense. If you already have Tremorsense, it increases by 2 Spaces." },
  { name: "Truesight", power: 6, description: "Requires: Attunement. You gain a 10 Space Truesight. If you already have Truesight, it increases by 5 Spaces." },
  { name: "Eagle Eye", power: 1, description: "Requires: Attunement. You can see things clearly up to 1 mile (1.6 km) away, provided the weather conditions are clear and you have clear line of sight." },
  { name: "Telepathy", power: 1, description: "Requires: Attunement. You gain Telepathy 10 Spaces. If you already have Telepathy, it instead increases by 5 Spaces." },
  { name: "Mending", power: 0, description: "If the item is ever damaged or broken, it mends itself over the course of 10 minutes. If any section larger than 6 in (15 cm) on a side is missing, it must be reattached before the item can complete mending itself." },
  { name: "Bonded", power: 0, description: "Requires: Attunement. You can spend 1 AP to bond with this item until you die or you choose to end the bond for free. While bonded with it, you’re immediately alerted if another creature touches the item. Only 1 creature can bond with the item at a time." },
  { name: "Recall", power: 1, description: "Requires: Attunement. You can spend 1 AP to summon the item to your hand, provided you have a free hand and the item is within 100 Spaces of you." },
  { name: "Immutable Form", power: 2, description: "Requires: Attunement. Your form can’t be altered against your will." },
  { name: "Mind Shielding", power: 1, description: "Requires: Attunement. Creatures can’t read your thoughts or speak to you telepathically unless you allow them to." },
  { name: "Healthy", power: 2, description: "Requires: Attunement. Any Disease or Poison afflicting you is suppressed. While suppressed, the affliction is not cured but it has no effect on you." },
  { name: "Arcane Ammo", power: 0, description: "When you load this Weapon, it generates its own magical ammunition. The ammunition disappears after an Attack Hits or Misses." },
  { name: "Returning", power: 1, description: "Requires: Weapon with the Toss Property. When you throw the Weapon as part of an Attack, it automatically returns to your hand once the Attack is resolved." },
  { name: "Baleful", power: 2, description: "Requires: Weapon. When you damage a creature with an Attack made using the Weapon, the target can’t regain HP until the start of their next turn." },
  { name: "Web Walk", power: 0, description: "Requires: Attunement. You can walk along and through webs unimpeded." },
  { name: "Precise Protection", power: 2, description: "Requires: Attunement. You gain a +1 bonus to PD." },
  { name: "Area Protection", power: 2, description: "Requires: Attunement. You gain a +1 bonus to AD." },
  { name: "Save Protection", power: 2, description: "Requires: Attunement. You gain a +1 bonus to Saves." },
  { name: "Barrier", power: 3, description: "Requires: Attunement. You gain 1 Temp HP at the start of each of your turns." },
  { name: "False Tracks", power: 0, description: "Requires: Attunement. Requires: Boots. You can choose to leave behind footprints that appear as those of another creature of your choice of the same size." },
  { name: "Non-Detection", power: 3, description: "Requires: Attunement. You can’t be perceived, detected, or located by magical means." },
  { name: "Sentinel", power: 4, description: "Requires: Attunement. You have ADV on Awareness Checks and can’t be Surprised. The item automatically wakes you if you’re sleeping when Combat begins, or you start your turn asleep while in Combat." },
  { name: "Water Breathing", power: 1, description: "Requires: Attunement. You can breath normally underwater." },
  { name: "Unending Breath", power: 2, description: "Requires: Attunement. Your Breath Duration becomes infinite." },
  { name: "Driftwood", power: 1, description: "Requires: Attunement. Requires: Armor or Vestment. Whenever you start your turn underwater, you can choose to automatically rise 10 Spaces toward the surface without spending movement. This effect happens automatically while you’re Unconscious or dead." },
  { name: "Arcane Compass", power: 0, description: "You always know the name of the plane you’re on, where you are on that plane, and which way north is (if there is a north)." },
  { name: "Arcane Clock", power: 0, description: "You always know the time of day and the year, month, and day it is (using your preferred time division and calendar systems)." },
  { name: "Nourishing", power: 1, description: "Requires: Attunement. You don’t need to eat or drink." },
  { name: "Cold Weather Acclimation", power: 1, description: "Requires: Attunement. You ignore the effects of temperatures as low as -50 degrees Fahrenheit (-45 Celsius)." },
  { name: "Hot Weather Acclimation", power: 1, description: "Requires: Attunement. You ignore the effects of temperatures as high as 150 degrees Fahrenheit (65 Celsius)." },
  { name: "Might Increase", power: 2, description: "Requires: Attunement. Your Might increases by 1, up to your Attribute Limit. If your Might is already equal to your Attribute Limit, you instead gain +3 maximum HP." },
  { name: "Agility Increase", power: 2, description: "Requires: Attunement. Your Agility increases by 1, up to your Attribute Limit. If your Agility is already equal to your Attribute Limit, you instead gain +1 PD." },
  { name: "Intelligence Increase", power: 2, description: "Requires: Attunement. Your Intelligence increases by 1, up to your Attribute Limit. If your Intelligence is already equal to your Attribute Limit, you instead gain +2 Skill Points." },
  { name: "Charisma Increase", power: 2, description: "Requires: Attunement. Your Charisma increases by 1, up to your Attribute Limit. If your Charisma is already equal to your Attribute Limit, you instead gain +2 Grit Points." },
  { name: "Skill Increase", power: 2, description: "Requires: Attunement.  You	gain	1	level	of	[skill]	Mastery,	up-to	your	Skill	Mastery Cap.	If	your	[skill]	Mastery	is	already	equal	to	your	Skill	Mastery	Cap,	you	instead	gain	a	+2	bonus	to	[skill]	Checks." },
  { name: "Change Damage Type", power: 1, description: "The	Weapon	can	deal	[Damage	Type	except	True	Damage]	damage	instead	of	its	normal	type.	Choose	each	time	you	make	an	Attack	with	this	weapon." },
  { name: "Reaching", power: 1, description: "The Weapon’s Melee Range magically increases by 1 Space." },
  { name: "Light Weight", power: 1, description: "The Weapon gains the Toss Property (5/10). If it already has the Toss Property, its normal and long range are both doubled instead." },
  { name: "Heavy Weight", power: 1, description: "The Weapon gains the Impact Property. If it already has the Impact Property, then it loses the Impact Property and gains +1 damage instead." },
  { name: "Longshot", power: 1, description: "This weapon’s normal range increases by 10 Spaces and its long range increases by 30 Spaces." },
  { name: "[Damage Type] Resistance", power: 6, description: "Requires: Attunement. You gain [Damage Type] Resistance (Half)" },
  { name: "[Damage Type] Immunity", power: 9, description: "Requires: Attunement. You gain [Damage Type] Resistance (Immune)" }
];

// Map item types to allowed property names
const MAGIC_PROPERTY_TYPE_MAP = {
  "Armor": [
    "Climb Speed", "Swim Speed", "Burrow Speed", "Truewalk", "Driftwood"
  ],
  "One-Handed Weapons": [
    "Returning", "Baleful", "Change Damage Type", "Reaching", "Light Weight", "Heavy Weight", "Recall"
  ],
  "Two-Handed Weapons": [
    "Baleful", "Change Damage Type", "Reaching", "Light Weight", "Heavy Weight", "Recall"
  ],
  "Versatile Weapons": [
    "Baleful", "Change Damage Type", "Reaching", "Light Weight", "Heavy Weight", "Recall"
  ],
  "Ranged Weapons": [
    "Arcane Ammo", "Baleful", "Change Damage Type", "Longshot", "Recall"
  ],
  "Shields": [
    "Returning", "Light Weight", "Recall"
  ],
  "Other Equipment": [
    "False Tracks", "Climb Speed", "Swim Speed", "Burrow Speed", "Truewalk", "Driftwood"
  ],
  "Generic": [
    "Language, Minor", "Language, Major", "Health Increase", "Grit Increase", "Mana Increase", "Stamina Increase", "Speed", "Fly Speed", "Water Walk", "Unstoppable", "Darkvision", "Blindsight", "Tremorsense", "Truesight", "Eagle Eye", "Telepathy", "Mending", "Bonded", "Immutable Form", "Mind Shielding", "Disease/Poison Suppression", "Web Walk", "Precise Protection", "Area Protection", "Save Protection", "Barrier", "Non-Detection", "Sentinel", "Water Breathing", "Unending Breath", "Arcane Compass", "Arcane Clock", "Nourishing", "Cold Weather Acclimation", "Hot Weather Acclimation", "Might Increase", "Agility Increase", "Intelligence Increase", "Charisma Increase", "Skill Increase", "[Damage Type] Resistance", "[Damage Type] Immunity"
  ]
};

// Helper: Pick random properties for the item, respecting total magic power and count, and item type
function pickMagicProperties(maxPower, count, itemType) {
  // Build allowed property names:
  // - Others: generic + type-specific
  let allowedNames = new Set();
  const hasType = itemType && MAGIC_PROPERTY_TYPE_MAP[itemType];

  if (hasType) {
    MAGIC_PROPERTY_TYPE_MAP[itemType].forEach(n => allowedNames.add(n));
  }

  // Include Generic
  MAGIC_PROPERTY_TYPE_MAP["Generic"].forEach(n => allowedNames.add(n));

  // Filter properties by allowed names
  const allowedProps = MAGIC_PROPERTIES.filter(p => allowedNames.has(p.name));

  let selected = [];
  let totalPower = 0;
  let tries = 0;
  while (selected.length < count && tries < 200) {
    tries++;
    const candidates = allowedProps.filter(p => !selected.includes(p) && (totalPower + p.power) <= maxPower);
    if (!candidates.length) break;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    selected.push(pick);
    totalPower += pick.power;
  }
  return selected;
}

// Main: Generate magic item description in requested format
function generateMagicItemDescription({ itemSubtype, magicPower, propertyCount }) {
  // Defensive: ensure itemSubtype is defined
  const subtypeName = itemSubtype || "(None Selected)";

  // Pick properties randomly, fitting within magicPower and propertyCount
  const props = pickMagicProperties(magicPower, propertyCount);
  const totalPower = props.reduce((a, p) => a + p.power, 0);

  // Build description in requested format
  let desc = `Item: ${subtypeName}\n\nMagic Power: ${totalPower}\n\n`;
  props.forEach((prop) => {
    desc += `(${prop.power}) ${prop.name}: ${prop.description}\n\n`;
  });

  return desc.trim();
}

/**
 * Set the magic item description and attunement property in itemData.
 * If any property requires attunement, set itemData.system.properties.attunement.active = true.
 * Also, attach matching effects to itemData.effects.
 */
function setMagicItemDescription(itemData, subtypeName, properties, itemType = null) {
  // Defensive: ensure properties is an array
  if (!Array.isArray(properties) || properties.length === 0) {
    itemData.system.description = `<p><strong>Item:</strong> ${subtypeName}</p>
<p><strong>Magic Power:</strong> 0</p>
<p><em>No magic properties could be selected for this item and power.</em></p>`;
    if (itemData.system?.properties?.attunement?.active) {
      delete itemData.system.properties.attunement.active;
    }
    // Set price to 0 if no properties
    if (itemData.system?.price) {
      itemData.system.price.value = 0;
      itemData.system.price.currency = "gp";
    }
    return;
  }

  const totalPower = properties.reduce((sum, p) => sum + p.power, 0);
  // Count attunement slots (number of properties that require attunement)
  const attunementSlots = properties.filter(
    prop => /requires:\s*attunement/i.test(prop.description)
  ).length;

  // --- Handle Change Damage Type property ---
  let changeDamageType = null;
  let selectedDamageType = null;
  let hasReaching = false;
  let hasLightWeight = false;
  let hasHeavyWeight = false;
  let hasLongshot = false; // <-- Add this line
  // Helper to capitalize damage type for display
  const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  // Helper to build a dynamic ActiveEffect object for damage resistances
  function buildDamageTypeEffect(kind, typeKey, name, description) {
    const imgMap = {
      resist: "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/13.png",
      resistance: "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/19.png",
      immunity: "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/33.png"
    };
    // Key/Mode/Value per effect kind
    const keyMap = {
      resist: { key: `system.damageReduction.damageTypes.${typeKey}.resist`, mode: 2, value: "1" },
      resistance: { key: `system.damageReduction.damageTypes.${typeKey}.resistance`, mode: 5, value: "true" },
      immunity: { key: `system.damageReduction.damageTypes.${typeKey}.immune`, mode: 5, value: "true" }
    };
    const km = keyMap[kind];
    return {
      name,
      img: imgMap[kind],
      origin: itemData?.uuid || itemData?._id || "",
      duration: { startTime: 0, combat: null, seconds: null, rounds: null, turns: null, startRound: null, startTurn: null },
      disabled: false,
      flags: { dc20rpg: {} },
      type: "base",
      system: {
        statusId: "",
        duration: { useCounter: false, resetWhenEnabled: false, onTimeEnd: "" },
        effectKey: "",
        macro: "",
        addToChat: false,
        nonessential: false,
        disableWhen: { path: "", mode: "", value: "" },
        requireEnhancement: ""
      },
      changes: [ { key: km.key, mode: km.mode, value: km.value, priority: null, useCustom: false } ],
      description,
      tint: "#ffffff",
      transfer: true,
      statuses: [],
      sort: 0
    };
  }

  let updatedProperties = properties.map((prop) => {
    if (prop.name === "Change Damage Type") {
      // Prefer user-selected damage type, else random
      selectedDamageType = prop._selectedDamageType || ALL_DAMAGE_TYPES[Math.floor(Math.random() * ALL_DAMAGE_TYPES.length)];
      let newProp = { ...prop };
      const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
      newProp.description = prop.description.replace("[type]", cap(selectedDamageType));
      changeDamageType = selectedDamageType;
      return newProp;
    }
    // --- Handle Damage Type dynamic properties (prefer user choice) ---
    if (prop.name === "[Damage Type] Resistance") {
      const dt = prop._selectedDamageType || ALL_DAMAGE_TYPES[Math.floor(Math.random() * ALL_DAMAGE_TYPES.length)];
      let newProp = { ...prop };
      const label = cap(dt);
      newProp.name = `${label} Resistance`;
      newProp.description = prop.description.replaceAll("[Damage Type]", label);
      newProp._dynamicEffect = buildDamageTypeEffect("resistance", dt, newProp.name, `<p>${newProp.description}</p>`);
      newProp._selectedDamageType = dt;
      return newProp;
    }
    if (prop.name === "[Damage Type] Immunity") {
      const dt = prop._selectedDamageType || ALL_DAMAGE_TYPES[Math.floor(Math.random() * ALL_DAMAGE_TYPES.length)];
      let newProp = { ...prop };
      const label = cap(dt);
      newProp.name = `${label} Immunity`;
      newProp.description = prop.description.replaceAll("[Damage Type]", label);
      newProp._dynamicEffect = buildDamageTypeEffect("immunity", dt, newProp.name, `<p>${newProp.description}</p>`);
      newProp._selectedDamageType = dt;
      return newProp;
    }
    if (prop.name === "Reaching") {
      hasReaching = true;
    }
    if (prop.name === "Light Weight") {
      hasLightWeight = true;
    }
    if (prop.name === "Heavy Weight") {
      hasHeavyWeight = true;
    }
    if (prop.name === "Longshot") { // <-- Add this block
      hasLongshot = true;
    }
    return prop;
  });

  // --- Set the actual weapon damage type if Change Damage Type is present ---
  if (changeDamageType && itemData.system && itemData.system.formulas && itemData.system.formulas.weaponDamage) {
    itemData.system.formulas.weaponDamage.type = changeDamageType;
  }

  // --- Set the actual melee range if Reaching is present ---
  if (hasReaching && itemData.system && itemData.system.range) {
    // Default to 1 if not set, then add 1
    let melee = Number(itemData.system.range.melee);
    if (isNaN(melee)) melee = 1;
    itemData.system.range.melee = melee + 1;
  }

  // --- Handle Light Weight property ---
  if (hasLightWeight && itemData.system) {
    // Ensure range object exists
    itemData.system.range = itemData.system.range || {};
    // Check if toss property exists
    const hasToss =
      itemData.system.properties &&
      itemData.system.properties.toss &&
      itemData.system.properties.toss.active;

    if (!hasToss) {
      // Add toss property
      if (!itemData.system.properties) itemData.system.properties = {};
      itemData.system.properties.toss = {
        active: true,
        label: "dc20rpg.properties.toss",
        journalUuid: "Compendium.dc20rpg.rules.JournalEntry.51wyjg5pkl8Vmh8e.JournalEntryPage.iTsd5sG8SiaYCOA6",
        for: ["melee", "lshield"],
        cost: 1
      };
      // Set normal and max range to 5/10
      itemData.system.range.normal = 5;
      itemData.system.range.max = 10;
    } else {
      // Double normal and max range if already has toss
      let normal = Number(itemData.system.range.normal);
      let max = Number(itemData.system.range.max);
      if (!isNaN(normal)) itemData.system.range.normal = normal * 2;
      if (!isNaN(max)) itemData.system.range.max = max * 2;
    }
  }

  // --- Handle Heavy Weight property ---
  if (hasHeavyWeight && itemData.system) {
    // Ensure properties object exists
    if (!itemData.system.properties) itemData.system.properties = {};
    // Check if impact property exists and is active
    let hadImpact =
      itemData.system.properties.impact &&
      itemData.system.properties.impact.active;

    if (!hadImpact) {
      // Add impact property
      itemData.system.properties.impact = {
        active: true,
        label: "dc20rpg.properties.impact",
        journalUuid: "Compendium.dc20rpg.rules.JournalEntry.51wyjg5pkl8Vmh8e.JournalEntryPage.eRclHKhWpouQHVIY",
        for: ["melee"],
        cost: 1
      };
    } else {
      // Remove impact property (set active to false) and increase damage by 1
      itemData.system.properties.impact.active = false;
      // Increase weapon damage formula by 1 if possible
      if (
        itemData.system.formulas &&
        itemData.system.formulas.weaponDamage &&
        typeof itemData.system.formulas.weaponDamage.formula === "string"
      ) {
        let dmg = Number(itemData.system.formulas.weaponDamage.formula);
        if (!isNaN(dmg)) {
          itemData.system.formulas.weaponDamage.formula = String(dmg + 1);
        }
      }
    }
  }

  // --- Handle Longshot property ---
  if (hasLongshot && itemData.system && itemData.system.range) {
    let normal = Number(itemData.system.range.normal);
    let max = Number(itemData.system.range.max);
    if (!isNaN(normal)) itemData.system.range.normal = normal + 10;
    if (!isNaN(max)) itemData.system.range.max = max + 30;
  }

  // Build HTML description for better readability
  let desc = `<p><strong>Item:</strong> ${subtypeName}</p>\n`;
  desc += `<p><strong>Magic Power:</strong> ${totalPower}</p>\n`;
  if (attunementSlots > 0) {
    desc += `<p><strong>Attunement Slots:</strong> ${attunementSlots}</p>\n`;
  }
  updatedProperties.forEach((prop) => {
    desc += `<p><strong>(${prop.power}) ${prop.name}:</strong> ${prop.description}</p>\n`;
  });

  itemData.system.description = desc.trim();

  // Set or remove attunement.active accordingly
  if (itemData.system && itemData.system.properties && itemData.system.properties.attunement) {
    if (attunementSlots > 0) {
      itemData.system.properties.attunement.active = true;
    } else {
      delete itemData.system.properties.attunement.active;
    }
  }

  // --- Set price based on formula: 100 gp per magic power, 50 gp per magic property ---
  if (itemData.system && itemData.system.price) {
    let priceValue = (totalPower * 100) + (properties.length * 50);
    itemData.system.price.value = priceValue;
    itemData.system.price.currency = "gp";
  }

  // --- Add matching effects ---
  itemData.effects = [];
  for (const prop of updatedProperties) {
    if (prop._dynamicEffect) {
      itemData.effects.push(JSON.parse(JSON.stringify(prop._dynamicEffect)));
      continue;
    }
    const effect = getEffectByName(prop.name);
    if (effect) {
      // Deep clone the effect to avoid reference issues
      itemData.effects.push(JSON.parse(JSON.stringify(effect)));
    }
  }
}

// --- EFFECTS AUTOMATION: use global list from scripts/magic-item-effects.js ---
function getEffectByName(name) {
  const list = window.MAGIC_PROPERTY_EFFECTS || [];
  return list.find(e => e.name === name);
}

// Expose generator data/functions for the Builder
try {
  window.ALL_DAMAGE_TYPES = ALL_DAMAGE_TYPES;
  window.MAGIC_PROPERTIES = MAGIC_PROPERTIES;
  // window.MAGIC_PROPERTY_EFFECTS = MAGIC_PROPERTY_EFFECTS; // removed: provided by magic-item-effects.js
  window.setMagicItemDescription = setMagicItemDescription;
  window.MAGIC_PROPERTY_TYPE_MAP = MAGIC_PROPERTY_TYPE_MAP; // <-- expose type map
} catch (e) {
  // no-op
}

// PDF UNLOCK DETECTION (New Mag and Linux)
(function () {
  const UNLOCK_KEY = "dc20MagicItemPdfVerified";
  if (!window.DC20_MAGIC_PDF) window.DC20_MAGIC_PDF = {};

  const KNOWN_SHA256 = [
    "968bb8ee9614fc53ae7622aa3ef630b476e0678a2de0009a173a0b6c2008eb84",
  ];

  // Trailer Ids Magic
  const ALLOWED_ID_PAIRS = new Set([
    // Version 1 Magic
    "CB992A96E51E434B94E546EA5D757671:80F52C2705E0C54184990B2513588C91",
    "80F52C2705E0C54184990B2513588C91:CB992A96E51E434B94E546EA5D757671",

    // Version 2 Magic
    "C8A1CC4ADC87E34F8D161A8B8F763D34:2317033ED19EE9498164C9E0F4FF1D78",
    "2317033ED19EE9498164C9E0F4FF1D78:C8A1CC4ADC87E34F8D161A8B8F763D34",
  ]);

  const LINEARIZED_PATTERNS = [
    // ORIGINAL
    /Linearized\s+1\/L\s+1639960\/O\s+1118\/E\s+453722\/N\s+15\/T\s+1617538/i,
    // NEW (Magazine v2)
    /Linearized\s+1\/L\s+3103784\/O\s+1480\/E\s+1157067\/N\s+20\/T\s+3074122/i,
  ];

  // Helpers for linux 
  function isSecureContextAvailable() {
    // Some Linux / Electron environments load under file:// and lack subtle crypto
    return !!(window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === "function");
  }

  // Minimal SHA-256 fallback (pure JS). Not fastest, but fine for UI validation.
  // Based on a tiny, public-domain style implementation pattern.
  function sha256Fallback(bytes) {
    function rotr(n, x){ return (x >>> n) | (x << (32 - n)); }
    function ch(x,y,z){ return (x & y) ^ (~x & z); }
    function maj(x,y,z){ return (x & y) ^ (x & z) ^ (y & z); }
    function S0(x){ return rotr(2,x) ^ rotr(13,x) ^ rotr(22,x); }
    function S1(x){ return rotr(6,x) ^ rotr(11,x) ^ rotr(25,x); }
    function s0(x){ return rotr(7,x) ^ rotr(18,x) ^ (x >>> 3); }
    function s1(x){ return rotr(17,x) ^ rotr(19,x) ^ (x >>> 10); }
    const K = new Uint32Array([
      0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
      0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
      0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
      0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
      0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
      0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
      0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
      0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
    ]);
    let h0=0x6a09e667,h1=0xbb67ae85,h2=0x3c6ef372,h3=0xa54ff53a,h4=0x510e527f,h5=0x9b05688c,h6=0x1f83d9ab,h7=0x5be0cd19;
    const len = bytes.length;
    const withOne = new Uint8Array(((len + 9 + 63) >> 6) << 6);
    withOne.set(bytes);
    withOne[len] = 0x80;
    const bitLen = len * 8;
    new DataView(withOne.buffer).setUint32(withOne.length - 4, bitLen >>> 0, false);
    new DataView(withOne.buffer).setUint32(withOne.length - 8, Math.floor(bitLen / 2**32) >>> 0, false);

    const w = new Uint32Array(64);
    for (let i = 0; i < withOne.length; i += 64) {
      for (let j = 0; j < 16; j++) {
        const off = i + j * 4;
        w[j] = (withOne[off] << 24) | (withOne[off+1] << 16) | (withOne[off+2] << 8) | (withOne[off+3]);
      }
      for (let j = 16; j < 64; j++) w[j] = (s1(w[j-2]) + w[j-7] + s0(w[j-15]) + w[j-16]) >>> 0;

      let a=h0,b=h1,c=h2,d=h3,e=h4,f=h5,g=h6,h=h7;
      for (let j = 0; j < 64; j++) {
        const t1 = (h + S1(e) + ch(e,f,g) + K[j] + w[j]) >>> 0;
        const t2 = (S0(a) + maj(a,b,c)) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0;
        d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }
      h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0;
      h4 = (h4 + e) >>> 0; h5 = (h5 + f) >>> 0; h6 = (h6 + g) >>> 0; h7 = (h7 + h) >>> 0;
    }
    const hh = [h0,h1,h2,h3,h4,h5,h6,h7];
    return hh.map(x => x.toString(16).padStart(8,"0")).join("");
  }

  async function sha256(buf) {
    const bytes = new Uint8Array(buf);
    if (isSecureContextAvailable()) {
      const hash = await crypto.subtle.digest("SHA-256", bytes);
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
    }
    // Fallback for Linux Fuck you Linux
    return sha256Fallback(bytes);
  }

  function textFromBuffer(buf) {
    // ISO-8859-1 style decode to preserve single-byte PDF chars
    let s = "", b = new Uint8Array(buf);
    for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
    return s;
  }

  // Extract *all* possible /ID pairs, including those embedded in xref streams.
  function extractAllTrailerIds(txt) {
    const re = /\/ID\s*\[\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*\]/g;
    const out = [];
    let m;
    while ((m = re.exec(txt))) out.push([m[1].toUpperCase(), m[2].toUpperCase()]);
    return out;
  }

  function matchesAnyLinearized(txt) {
    return LINEARIZED_PATTERNS.some(rx => rx.test(txt));
  }

  // Basic structural sanity checks for PDFs (less strict; fixes false negatives on Linux)
  function basicPdfStructureOK(bytes, txt) {
    // Must begin with %PDF-
    const head = txt.slice(0, 16);
    if (!/%PDF-\d\.\d/.test(head)) return false;

    // Must contain a Catalog object
    if (!/\/Type\s*\/Catalog/.test(txt)) return false;

    // Should end with %%EOF somewhere near the end (allow trailing bytes)
    const tail = txt.slice(-2048);
    if (!/%%EOF/.test(tail)) return false;

    return true;
  }

  // Core Api
  window.DC20_MAGIC_PDF.validateFile = async function (file) {
    try {
      const buf = await file.arrayBuffer();
      const sha = await sha256(buf);
      const txt = textFromBuffer(buf);

      // Freindly errors for Linux cause linux sucks yeah
      const structureOK = basicPdfStructureOK(new Uint8Array(buf), txt);
      if (!structureOK) {
        return { ok: false, reason: "not-a-pdf-structure", sha, hint: "Missing %PDF- header, /Type /Catalog, or %%EOF." };
      }

      // Exact Hash
      if (KNOWN_SHA256.includes(sha)) {
        return { ok: true, method: "sha256", sha };
      }

      // Trailer /Id pairs
      const allIds = extractAllTrailerIds(txt);
      for (const pair of allIds) {
        const keyA = `${pair[0]}:${pair[1]}`;
        const keyB = `${pair[1]}:${pair[0]}`;
        if (ALLOWED_ID_PAIRS.has(keyA) || ALLOWED_ID_PAIRS.has(keyB)) {
          return { ok: true, method: "trailer-id", sha, ids: pair };
        }
      }

      // Linerized Header
      if (matchesAnyLinearized(txt)) {
        return { ok: true, method: "linearized", sha };
      }

      // Helpful Linux Hints cause of course
      const linuxHint = isSecureContextAvailable()
        ? undefined
        : "WebCrypto unavailable (file:// or non-secure context). Hash fallback used.";
      return { ok: false, reason: "unknown-pdf", sha, idsFound: allIds.length, hint: linuxHint || undefined };
    } catch (e) {
      const secure = isSecureContextAvailable();
      return {
        ok: false,
        reason: "exception",
        error: String(e),
        hint: secure ? undefined : "WebCrypto disabled; using JS hash fallback.",
      };
    }
  };

  // Cache result if valid
  window.DC20_MAGIC_PDF.validateAndCache = async function (file) {
    const res = await window.DC20_MAGIC_PDF.validateFile(file);
    if (res?.ok) {
      localStorage.setItem(UNLOCK_KEY, JSON.stringify({ ts: Date.now(), ...res }));
    }
    return res;
  };

  // Unlock state check (supports legacy bool and new JSON)
  window.DC20_MAGIC_PDF.isUnlocked = function () {
    const v = localStorage.getItem(UNLOCK_KEY);
    if (!v) return false;
    if (v === "true") return true; // legacy bool
    try { return !!JSON.parse(v)?.ok; } catch { return false; }
  };

  window.DC20_MAGIC_PDF.forceLock = function (showNotice = true) {
    try {
      localStorage.removeItem(UNLOCK_KEY);
      document.querySelectorAll(".magic-item-generator-form").forEach((f) => {
        if (!f.classList.contains("pdf-locked")) f.classList.add("pdf-locked");
      });
      if (showNotice && window.ui?.notifications?.info) {
        ui.notifications.info("Magic Item Generator locked again.");
      } else if (showNotice) {
        console.log("[INFO] Magic Item Generator locked again.");
      }
    } catch (e) {
      console.error("Force lock failed:", e);
    }
    return true;
  };
})();
// Force-lock the UI for testing pruposes
window.DC20_MAGIC_PDF.forceLock = function ({
  showNotice = true,
  clearFileInputs = true,
  formSelector = ".magic-item-generator-form",
  gatedSelector = "[data-requires-pdf], .requires-pdf"
} = {}) {
  try {
    // Clear cached unlock token
    localStorage.removeItem("dc20MagicItemPdfVerified");

    // Relock Ui containers
    const forms = document.querySelectorAll(formSelector);
    forms.forEach((f) => {
      f.classList.add("pdf-locked");
      f.classList.remove("pdf-unlocked");

      // Disable any elements that require the PDF
      f.querySelectorAll(gatedSelector).forEach((el) => {
        // disable form controls
        if ("disabled" in el) el.disabled = true;
        // add a visual state if you style it in CSS
        el.classList.add("pdf-gated");
      });

      // Clear any existing validation state
      f.querySelectorAll('input[name="pdfValidated"], input[name="pdf_validated"]').forEach((el) => {
        el.value = "";
      });

      // Clear the file inputs as well this needs to be done or esle
      if (clearFileInputs) {
        f.querySelectorAll('input[type="file"]').forEach((fi) => { try { fi.value = ""; } catch {} });
      }
    });

    // Notify the User
    if (showNotice) {
      if (window.ui?.notifications?.info) {
        ui.notifications.info("Magic Item Generator locked.");
      } else {
        console.log("[INFO] Magic Item Generator locked.");
      }
    }
    return true;
  } catch (e) {
    console.error("forceLock failed:", e);
    return false;
  }
};


