// start of dc20-monster-generator.js
/****************************************************************************
 * Type Icon Map: Used for default monster icons by type
 ****************************************************************************/
const TYPE_ICON_MAP = {
  "Aberrations": "modules/dc20-monster-generator/Icons/Aberrations.png",
  "Beasts": "modules/dc20-monster-generator/Icons/Beasts.png",
  "Celestials": "modules/dc20-monster-generator/Icons/Celestials.png",
  "Constructs": "modules/dc20-monster-generator/Icons/Constructs.png",
  "Dragons": "modules/dc20-monster-generator/Icons/Dragons.PNG",
  "Elementals": "modules/dc20-monster-generator/Icons/Elementals.png",
  "Fey": "modules/dc20-monster-generator/Icons/Fey.png",
  "Fiends": "modules/dc20-monster-generator/Icons/Fiends.png",
  "Giants": "modules/dc20-monster-generator/Icons/Giants.png",
  "Humanoids": "modules/dc20-monster-generator/Icons/Humanoids.png",
  "Monstrosities": "modules/dc20-monster-generator/Icons/Monstrosities.png",
  "Ooze": "modules/dc20-monster-generator/Icons/Oozes.png",
  "Plants": "modules/dc20-monster-generator/Icons/Plants.png",
  "Undead": "modules/dc20-monster-generator/Icons/Undead.png"
};
const ROLE_ADJUSTMENTS = {
  ambusher:     { movement: { ground: +1 }, attrib: { agility: +1 }, hp: 0, defenses: { pd: 1, ad: 0 } },
  berserker:    { movement: { ground: 0 },  attrib: { might: +1 }, hp: +2, defenses: { pd: 2, ad: -1 } },
  bruiser:      { movement: { ground: 0 },  attrib: { }, hp: +4, defenses: { pd: 1, ad: 1 } },
  caster:       { movement: { ground: -1 }, attrib: { intelligence: +1 }, hp: -2, defenses: { pd: 0, ad: 2 } },
  controller:   { movement: { ground: 0 },  attrib: { intelligence: +1 }, hp: 0, defenses: { pd: 1, ad: 1 } },
  enchanter:    { movement: { ground: 0 },  attrib: { charisma: +1 }, hp: -1, defenses: { pd: 0, ad: 2 } },
  guardian:     { movement: { ground: +1 }, attrib: { }, hp: +6, defenses: { pd: 2, ad: 0 } },
  healer:       { movement: { ground: 0 },  attrib: { charisma: +1 }, hp: +2, defenses: { pd: 0, ad: 2 } },
  hunter:       { movement: { ground: +1 }, attrib: { agility: +1 }, hp: +2, defenses: { pd: 1, ad: 1 } },
  lackey:       { movement: { ground: -1 }, attrib: { }, hp: -2, defenses: { pd: 0, ad: 0 } },
  lurker:       { movement: { ground: 0 },  attrib: { agility: +1 }, hp: 0, defenses: { pd: 1, ad: 0 } },
  scout:        { movement: { ground: +2 }, attrib: { agility: +1 }, hp: 0, defenses: { pd: 1, ad: 1 } },
  skirmisher:   { movement: { ground: +1 }, attrib: { agility: +1 }, hp: 0, defenses: { pd: 1, ad: 1 } },
  sniper:       { movement: { ground: 0 },  attrib: { agility: +1 }, hp: -2, defenses: { pd: 0, ad: 2 } },
  summoner:     { movement: { ground: 0 },  attrib: { intelligence: +1 }, hp: 0, defenses: { pd: 0, ad: 2 } },
  trickster:    { movement: { ground: +1 }, attrib: { charisma: +1 }, hp: 0, defenses: { pd: 1, ad: 1 } },
  tank:         { movement: { ground: -1 }, attrib: { might: +1 }, hp: +4, defenses: { pd: 3, ad: -1 } },
  warden:       { movement: { ground: +1 }, attrib: { }, hp: +6, defenses: { pd: 2, ad: 0 } }
};


/****************************************************************************
 * Add "Generate Monster" button to Actors Directory tab (Foundry v13+ robust)
 ****************************************************************************/
function addMonsterGenButton(html) {
  // --- Patch: Ensure html is a jQuery object ---
  if (!(html instanceof $)) html = $(html);

  // Only add if not already present (avoid duplicates)
  if (html.find(".dc20-generate-monster-btn").length) return;

  // v13: .directory-header .action-buttons is the correct location
  let header = html.find(".directory-header .action-buttons");
  if (!header.length) {
    // Fallback: v10/v11/v12 UI
    header = html.find(".directory-header");
  }
  if (!header.length) return;

  // Create the button
  const btn = $(`
    <button type="button" class="dc20-generate-monster-btn" style="display:flex;align-items:center;gap:4px;">
      <i class="fas fa-dna"></i>
      ${game.i18n.localize("dc20-monster-generator.ui.generateMonsterButton") || "Generate Monster"}
    </button>
  `);
  btn.on("click", () => {
    new DC20MonsterGeneratorForm().render(true);
  });
  header.append(btn);

  // --- v13: Use MutationObserver to keep the button present if header is re-rendered ---
  // Only attach one observer per header
  if (!header[0].__dc20MonsterGenObserver) {
    const observer = new MutationObserver(() => {
      // If our button is missing, re-add it
      if (!header.find(".dc20-generate-monster-btn").length) {
        header.append(btn.clone(true));
      }
    });
    observer.observe(header[0], { childList: true });
    header[0].__dc20MonsterGenObserver = observer;
  }
}

// Add button on render and after tab switches
Hooks.on("renderActorDirectory", (app, html, data) => {
  addMonsterGenButton(html);
});

// Also add after sidebar tab changes (for v13+)
Hooks.on("renderSidebarTab", (app, html) => {
  if (app.options?.id === "actors" || app.tabName === "actors") {
    addMonsterGenButton(html);
  }
});


/****************************************************************************
 * FORM APPLICATION
 ****************************************************************************/

class DC20MonsterGeneratorForm extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "DC20 Monster Generator",
      template: "modules/dc20-monster-generator/templates/monster-generator.html",
      width: 560,
      height: 770
    });
  }

  async render(force, options) {
    return super.render(force, options);
  }

  close(options) {
    return super.close(options);
  }

  getData() {
    return {
      name: "",
      level: 1,
      creatureType: "",
      creatureSubtype: "",
      monsterRole: "ambusher",
      hpRank: "normal",
      creatureSize: "medium",
      description: "",
      types: [
        "Aberrations",
        "Beasts",
        "Celestials",
        "Constructs",
        "Dragons",
        "Elementals",
        "Fey",
        "Fiends",
        "Giants",
        "Monstrosities",
        "Ooze",
        "Undead"
      ],
      // New drop-down options can be provided if needed in the template.
      roleOptions: ["ambusher", "berserker", "bruiser", "caster", "controller", "enchanter", "guardian", "healer", "hunter", "lackey", "lurker", "scout", "skirmisher", "sniper", "summoner", "trickster", "tank", "warden"],
      hpRankOptions: ["minion", "normal", "elite", "boss", "solo"],
    };
  }

  async _updateObject(event, formData) {
    // Capitalize the name if present
    if (formData.name) {
      formData.name = capitalizeWords(formData.name.trim());
    }

    // If no description is provided, set a default
    if (!formData.description.trim()) {
      formData.description = "No description provided – generate standard features for a balanced DC20 creature.";
    }

    // Generate the monster data
    const monsterData = await generateMonster(formData);

    // --- Always add "Regenerate Abilities" item ---
    const REGEN_ABILITIES_ID = "Compendium.dc20-monster-generator.monster-generator-abilities.Item.yfKWeQDjxjoBouES";
    const [ , module, pack, type, itemId ] = REGEN_ABILITIES_ID.split(".");
    const regenPack = game.packs.get(`${module}.${pack}`);
    if (regenPack) {
      const regenDoc = await regenPack.getDocument(itemId);
      if (regenDoc) {
        monsterData.features = monsterData.features || [];
        // Only add if not already present by sourceId
        const alreadyHas = monsterData.features.some(
          ab => ab.flags?.core?.sourceId === REGEN_ABILITIES_ID || ab.name === regenDoc.name
        );
        if (!alreadyHas) {
          monsterData.features.push(regenDoc.toObject());
        }
      }
    }

    // --- HP Rank Abilities (for elite/boss/solo) ---
    const hpRank = formData.hpRank;
    const HP_RANK_ABILITIES = {
      elite: [
        "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Ykxvr20djvc2oyAi",
      ],
      boss: [
        "Compendium.dc20-monster-generator.monster-generator-abilities.Item.61vUDm0L6IVT29Fm",
        "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WEUQx8UUJBECUTzh"
      ],
      solo: [
        "Compendium.dc20-monster-generator.monster-generator-abilities.Item.q0RdL1kBZduauMI6",
        "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Gez3j4HUbqMbZN3T"
      ]
    };
    if (["elite", "boss", "solo"].includes(hpRank)) {
      const ids = HP_RANK_ABILITIES[hpRank] || [];
      for (const id of ids) {
        const [ , module, pack, type, itemId ] = id.split(".");
        const packObj = game.packs.get(`${module}.${pack}`);
        if (packObj) {
          const doc = await packObj.getDocument(itemId);
          if (doc) {
            // Only add if not already present by name or sourceId
            const alreadyHas = (monsterData.features || []).some(
              ab => ab.flags?.core?.sourceId === id || ab.name === doc.name
            );
            if (!alreadyHas) {
              monsterData.features = monsterData.features || [];
              monsterData.features.push(doc.toObject());
            }
          }
        }
      }
    }

    // --- Summoner Role: Always add Summon Creature Type ability and generate a summon ---
    let summonActor = null;
    if ((formData.monsterRole || "").toLowerCase() === "summoner") {
      // 1. Always add Summon Creature Type ability from compendium, unless already present
      const summonAbilityId = "Compendium.dc20-monster-generator.monster-generator-abilities.Item.NTGV6fzTY7xfoQg4";
      const alreadyHasSummon = (monsterData.features || []).some(
        ab => ab.flags?.core?.sourceId === summonAbilityId || ab.name === "Summon Creature Type"
      );
      if (!alreadyHasSummon) {
        const [ , module, pack, type, itemId ] = summonAbilityId.split(".");
        const packObj = game.packs.get(`${module}.${pack}`);
        if (packObj) {
          // Fetch the summon ability from the compendium and add it to features
          const doc = await packObj.getDocument(itemId);
          if (doc) {
            monsterData.features = monsterData.features || [];
            monsterData.features.push(doc.toObject());
          }
        }
      }

      // 2. Generate a summon monster (minion, lackey, medium, same type/subtype, level-2)
      const summonLevel = Math.max(-1, Number(formData.level) - 2);
      const summonType = formData.creatureType;
      const summonSubtype = formData.creatureSubtype;
      // --- Change: name and description to just type + (Summon) ---
      let summonName = summonType ? summonType.trim() : "Summon";
      summonName += " (Summon)";
      const summonFormData = {
        name: summonName,
        level: summonLevel,
        creatureType: summonType,
        creatureSubtype: summonSubtype,
        monsterRole: "lackey",
        hpRank: "minion",
        creatureSize: "medium",
        description: summonName,
        _isSummon: true // <-- mark as summon for HP override
      };
      // --- Force hpRank to minion for the summon, regardless of anything else ---
      // This ensures generateMonster always applies the correct HP rules for minion
      const summonData = await generateMonster(summonFormData);

      // --- Force HP to summonHpTable value after generation (in case override missed) ---
      const summonHpTable = {
        "-1": 3, "0": 5, "1": 5, "2": 5, "3": 5, "4": 9, "5": 11, "6": 12, "7": 13, "8": 15,
        "9": 16, "10": 18, "11": 19, "12": 20, "13": 21, "14": 22, "15": 24, "16": 25, "17": 26,
        "18": 27, "19": 28, "20": 30
      };
      const summonLevelKey = String(summonLevel);
      if (summonHpTable.hasOwnProperty(summonLevelKey)) {
        summonData.stats.health = summonHpTable[summonLevelKey];
      }
      // Determine icon for summon
      let summonIcon = TYPE_ICON_MAP[summonType] || "icons/svg/mystery-man.svg";
      // Build summon actor data
      const summonActorData = {
        name: summonData.name,
        type: "npc",
        img: summonIcon,
        system: {
          details: {
            level: summonFormData.level,
            creatureType: summonFormData.creatureType,
            role: summonFormData.monsterRole,
            category: formData.monsterRole
          },
          size: {
            fromAncestry: false,
            size: summonData.size
          },
          attributes: {
            mig: { current: summonData.attributes.might, value: 0 },
            agi: { current: summonData.attributes.agility, value: 0 },
            int: { current: summonData.attributes.intelligence, value: 0 },
            cha: { current: summonData.attributes.charisma, value: 0 }
          },
          resources: {
            health: {
              value: summonData.stats.health,
              max: summonData.stats.health,
              current: summonData.stats.health,
              bonus: 0,
              temp: null,
              useFlat: true
            },
            ap: {
              value: summonData.stats.actionPoints,
              max: summonData.stats.actionPoints,
              bonus: 0
            }
          },
          movement: {
            ground: {
              useCustom: true,
              current: summonData.movement.ground,
              value: summonData.movement.ground,
              bonus: 0
            },
            flying: {
              useCustom: true,
              current: summonData.movement.flying,
              value: summonData.movement.flying,
              bonus: 0
            }
          },
          senses: {
            darkvision: {
              range: summonData.senses.darkvision,
              bonus: 0
            },
            blindsight: {
              range: summonData.senses.blindsight,
              bonus: 0
            },
            tremorsense: {
              range: summonData.senses.tremorsense,
              bonus: 0
            },
            truesight: {
              range: summonData.senses.truesight,
              bonus: 0
            }
          },
          defences: {
            precision: {
              formulaKey: "flat",
              value:      summonData.stats.pd,
              normal:     summonData.stats.pd,
              heavy:      0,
              brutal:     0,
              label:      "dc20rpg.defence.precision",
              bonuses:    { noArmor:0,noHeavy:0,always:0 }
            },
            area: {
              formulaKey: "flat",
              value:      summonData.stats.ad,
              normal:     summonData.stats.ad,
              heavy:      0,
              brutal:     0,
              label:      "dc20rpg.defence.area",
              bonuses:    { noArmor:0,noHeavy:0,always:0 }
            }
          },
          damageReduction: {
            pdr: { number: summonData.stats.damageReduction, value:0, bonus:0, label:"dc20rpg.damageReduction.pdr" },
            mdr: { number: 0, value:0, bonus:0, label:"dc20rpg.damageReduction.mdr" },
            damageTypes: {
              corrosion:  { immune:false, resistance:false },
              cold:       { immune:false, resistance:false },
              fire:       { immune:false, resistance:false },
              lightning:  { immune:false, resistance:false },
              poison:     { immune:false, resistance:false },
              radiant:    { immune:false, resistance:false },
              psychic:    { immune:false, resistance:false },
              sonic:      { immune:false, resistance:false },
              umbral:     { immune:false, resistance:false },
              piercing:   { immune:false, resistance:false },
              slashing:   { immune:false, resistance:false },
              bludgeoning:{ immune:false, resistance:false }
            }
          },
          flags: {
            "dc20-monster-generator": {
              description: summonData.description
            }
          },
          journal: `<h2>${summonData.name}'s Description</h2><p>${summonData.description}</p>`
        }
      };
      // Insert Resist/Immune flags from summonData.damageTypes
      for (let dmgType in summonData.damageTypes) {
        const val = summonData.damageTypes[dmgType];
        if (summonActorData.system.damageReduction.damageTypes[dmgType]) {
          if (val === "resistance") {
            summonActorData.system.damageReduction.damageTypes[dmgType].resistance = true;
          } else if (val === "immune") {
            summonActorData.system.damageReduction.damageTypes[dmgType].immune = true;
          }
        }
      }
      // Create the summon Actor
      summonActor = await Actor.create(summonActorData);
      // Create embedded Items for summon features
      if (summonData.features && Array.isArray(summonData.features) && summonData.features.length) {
        // Patch ability descriptions and formulas for summon
        const DAMAGE_BY_LEVEL = {
          "-1": "1", "0": "1", "1": "2", "2": "2", "3": "3", "4": "4", "5": "5", "6": "5",
          "7": "6", "8": "6", "9": "7", "10": "7", "11": "8", "12": "8", "13": "9", "14": "10",
          "15": "11", "16": "11", "17": "12", "18": "12", "19": "13", "20": "13"
        };
        const DAMAGE_TYPES = [
          "slashing", "piercing", "bludgeoning", "fire", "cold", "corrosion", "poison",
          "lightning", "sonic", "radiant", "umbral", "psychic"
        ];
        const TRUE_DAMAGE = "true";
        function getRandomDamageType() {
          if (Math.random() < 0.05) return TRUE_DAMAGE;
          return DAMAGE_TYPES[Math.floor(Math.random() * DAMAGE_TYPES.length)];
        }
        const levelKey = String(summonFormData.level ?? 1);
        const tableDamage = DAMAGE_BY_LEVEL.hasOwnProperty(levelKey) ? DAMAGE_BY_LEVEL[levelKey] : "2";
        const items = summonData.features.map(({ system, ...rest }) => {
          if (system && typeof system.description === "string") {
            let desc = system.description;
            let dmgVal = null;
            if (system.formulas && typeof system.formulas === "object") {
              for (const k in system.formulas) {
                if (system.formulas[k]?.category === "damage") {
                  system.formulas[k].formula = tableDamage;
                  dmgVal = tableDamage;
                  if (!system.formulas[k].type || !String(system.formulas[k].type).trim()) {
                    system.formulas[k].type = getRandomDamageType();
                  }
                }
              }
            }
            if (dmgVal) {
              desc = desc.replace(/(Damage:\s*["']?)X(["']?\s+\w+)/gi, `$1${dmgVal}$2`);
              desc = desc.replace(/(Damage:\s*["']?)X(["']?)/gi, `$1${dmgVal}$2`);
              desc = desc.replace(/(["']?)X(["']?\s*damage)/gi, `$1${dmgVal}$2`);
              desc = desc.replace(/(?<!spaces\s)(?<!radius\s)(?<!within\s)(?<!for\s)(?<!by\s)(?<!of\s)(?<!to\s)(?<!in\s)(?<!for\s)(?<!\d\s)(?<!\d)(?<!\w)(?<!\w\s)X\s+damage/gi, `${dmgVal} damage`);
            }
            system.description = desc;
          }
          return { ...rest, system };
        });
        await summonActor.createEmbeddedDocuments("Item", items);
      }
    }

    // Determine the icon based on creature type, but override if customImage is set
    let icon = formData.customImage && formData.customImage.trim()
      ? formData.customImage.trim()
      : (TYPE_ICON_MAP[formData.creatureType] || "icons/svg/mystery-man.svg");

    // --- Name fallback logic ---
    let actorName = monsterData.name;
    if (!actorName || !actorName.trim()) {
      // Use "Unnamed {Subtype} {Type}" if no name provided
      const sub = formData.creatureSubtype ? capitalizeWords(formData.creatureSubtype) : "";
      const typ = formData.creatureType ? capitalizeWords(formData.creatureType) : "";
      actorName = `Unnamed${sub ? " " + sub : ""}${typ ? " " + typ : ""}`.trim();
    }

    // --- Ability summary for journal ---
    let abilitySummary = "";
    if (monsterData.features && Array.isArray(monsterData.features) && monsterData.features.length) {
      // Show all abilities, each with its name and description
      abilitySummary = monsterData.features.map(f =>
        `<b>${f.name}</b><br>${f.system?.description || ""}`
      ).join("<hr>");
    }

    // --- Buff/Debuff Table ---
    const buffDebuffTableHtml = await generateBuffDebuffTable(monsterData, formData);

    // --- Journal HTML ---
    const journalHtml = `<h2>${actorName}'s Description</h2><p>${monsterData.description}</p>
      <h2>${actorName}'s Ability Summary</h2><p>${abilitySummary}</p>
      ${buffDebuffTableHtml}
    `;

    // Build Actor data (update: use "system" instead of "data" for v10+)
    const actorData = {
      name: actorName,
      type: "npc",
      img: icon,
      system: {
        details: {
          level: formData.level,
          creatureType: formData.creatureType,
          role: formData.monsterRole,
          category: formData.monsterRole
        },
        size: {
          fromAncestry: false,
          size: monsterData.size
        },
        attributes: {
          mig: { current: monsterData.attributes.might, value: 0 },
          agi: { current: monsterData.attributes.agility, value: 0 },
          int: { current: monsterData.attributes.intelligence, value: 0 },
          cha: { current: monsterData.attributes.charisma, value: 0 }
        },
        resources: {
          health: {
            value: monsterData.stats.health,
            max: monsterData.stats.health,
            current: monsterData.stats.health,
            bonus: 0,
            temp: null,
            useFlat: true
          },
          ap: {
            value: monsterData.stats.actionPoints,
            max: monsterData.stats.actionPoints,
            bonus: 0
          }
        },
        movement: {
          ground: {
            useCustom: true,
            current: monsterData.movement.ground,
            value: monsterData.movement.ground,
            bonus: 0
          },
          flying: {
            useCustom: true,
            current: monsterData.movement.flying,
            value: monsterData.movement.flying,
            bonus: 0
          }
        },
        senses: {
          darkvision: {
            range: monsterData.senses.darkvision,
            bonus: 0
          },
          blindsight: {
            range: monsterData.senses.blindsight,
            bonus: 0
          },
          tremorsense: {
            range: monsterData.senses.tremorsense,
            bonus: 0
          },
          truesight: {
            range: monsterData.senses.truesight,
            bonus: 0
          }
        },
        defences: {
          precision: {
            formulaKey: "flat",
            value:      monsterData.stats.pd,
            normal:     monsterData.stats.pd,
            heavy:      0,
            brutal:     0,
            label:      "dc20rpg.defence.precision",
            bonuses:    { noArmor:0,noHeavy:0,always:0 }
          },
          area: {
            formulaKey: "flat",
            value:      monsterData.stats.ad,
            normal:     monsterData.stats.ad,
            heavy:      0,
            brutal:     0,
            label:      "dc20rpg.defence.area",
            bonuses:    { noArmor:0,noHeavy:0,always:0 }
          }
        },
        damageReduction: {
          pdr: { number: monsterData.stats.damageReduction, value:0, bonus:0, label:"dc20rpg.damageReduction.pdr" },
          mdr: { number: 0, value:0, bonus:0, label:"dc20rpg.damageReduction.mdr" },
          damageTypes: {
            corrosion:  { immune:false, resistance:false },
            cold:       { immune:false, resistance:false },
            fire:       { immune:false, resistance:false },
            lightning:  { immune:false, resistance:false },
            poison:     { immune:false, resistance:false },
            radiant:    { immune:false, resistance:false },
            psychic:    { immune:false, resistance:false },
            sonic:      { immune:false, resistance:false },
            umbral:     { immune:false, resistance:false },
            piercing:   { immune:false, resistance:false },
            slashing:   { immune:false, resistance:false },
            bludgeoning:{ immune:false, resistance:false }
          }
        },
        flags: {
          "dc20-monster-generator": {
            description: monsterData.description
          }
        },
        // Add journal summary
        journal: journalHtml,
        // Add journal summary if present
        ...(monsterData.features?.journal ? { journal: monsterData.features.journal } : {})
      } // <-- This closes the system object
    }; // <-- Add this line to close the actorData object

    // Insert Resist/Immune flags from monsterData.damageTypes
    for (let dmgType in monsterData.damageTypes) {
      const val = monsterData.damageTypes[dmgType]; // "resistance" or "immune" or null
      if (actorData.system.damageReduction.damageTypes[dmgType]) {
        if (val === "resistance") {
          actorData.system.damageReduction.damageTypes[dmgType].resistance = true;
        } else if (val === "immune") {
          actorData.system.damageReduction.damageTypes[dmgType].immune = true;
        }
      }
    }

    // Create the Actor
    const createdActor = await Actor.create(actorData);

    // Create embedded Items for features
    if (monsterData.features && Array.isArray(monsterData.features) && monsterData.features.length) {
      // --- Patch ability descriptions and formulas to match the damage table ---
      // Damage table by level
      const DAMAGE_BY_LEVEL = {
        "-1": "1", "0": "1", "1": "2", "2": "2", "3": "3", "4": "4", "5": "5", "6": "5",
        "7": "6", "8": "6", "9": "7", "10": "7", "11": "8", "12": "8", "13": "9", "14": "10",
        "15": "11", "16": "11", "17": "12", "18": "12", "19": "13", "20": "13"
      };
      // Damage types for random assignment
      const DAMAGE_TYPES = [
        "slashing", "piercing", "bludgeoning", "fire", "cold", "corrosion", "poison",
        "lightning", "sonic", "radiant", "umbral", "psychic"
      ];
      const TRUE_DAMAGE = "true";
      function getRandomDamageType() {
        // 5% chance for "true", else uniform random from DAMAGE_TYPES
        if (Math.random() < 0.05) return TRUE_DAMAGE;
        return DAMAGE_TYPES[Math.floor(Math.random() * DAMAGE_TYPES.length)];
      }
      const levelKey = String(formData.level ?? 1);
      const tableDamage = DAMAGE_BY_LEVEL.hasOwnProperty(levelKey) ? DAMAGE_BY_LEVEL[levelKey] : "2";
      const items = monsterData.features.map(({ system, ...rest }) => {
        if (system && typeof system.description === "string") {
          let desc = system.description;
          let dmgVal = null;
          // Patch all formulas with category "damage"
          if (system.formulas && typeof system.formulas === "object") {
            for (const k in system.formulas) {
              if (system.formulas[k]?.category === "damage") {
                // Set formula to table value
                system.formulas[k].formula = tableDamage;
                dmgVal = tableDamage;
                // If no type, assign a random one
                if (!system.formulas[k].type || !String(system.formulas[k].type).trim()) {
                  system.formulas[k].type = getRandomDamageType();
                }
              }
            }
          }
          // Patch description as before, using the new dmgVal if set
          if (dmgVal) {
            desc = desc.replace(/(Damage:\s*["']?)X(["']?\s+\w+)/gi, `$1${dmgVal}$2`);
            desc = desc.replace(/(Damage:\s*["']?)X(["']?)/gi, `$1${dmgVal}$2`);
            desc = desc.replace(/(["']?)X(["']?\s*damage)/gi, `$1${dmgVal}$2`);
            desc = desc.replace(/(?<!spaces\s)(?<!radius\s)(?<!within\s)(?<!for\s)(?<!by\s)(?<!of\s)(?<!to\s)(?<!in\s)(?<!for\s)(?<!\d\s)(?<!\d)(?<!\w)(?<!\w\s)X\s+damage/gi, `${dmgVal} damage`);
          }
          system.description = desc;
        }
        return { ...rest, system };
      });
      await createdActor.createEmbeddedDocuments("Item", items);
    }

    ui.notifications.info(`Monster "${createdActor.name}" created and imported!`);
    if (summonActor) {
      ui.notifications.info(`Summoned monster "${summonActor.name}" also created!`);
    }
  }
}


/****************************************************************************
 * More Generate Logic for Generator polished up for 0.9.5 Because Stuff Broke
 ****************************************************************************/

async function generateMonster(formData) {
  // Capitalize the name again for safety
  if (formData.name) {
    formData.name = capitalizeWords(formData.name.trim());
  }
  let level = Number(formData.level) || 1;
  if (level < -1) level = -1;

  // --- Summon HP Table (for minion summons only) ---
  const summonHpTable = {
    "-1": 3, "0": 5, "1": 5, "2": 5, "3": 5, "4": 9, "5": 11, "6": 12, "7": 13, "8": 15,
    "9": 16, "10": 18, "11": 19, "12": 20, "13": 21, "14": 22, "15": 24, "16": 25, "17": 26,
    "18": 27, "19": 28, "20": 30
  };

  // Magazine table for HP, PD, AD for normal (medium) size, levels -1 to 20
  const statTable = {
    "-1": { hp: 5,  pd: 10, ad: 10 },
    "0":  { hp: 8,  pd: 11, ad: 11 },
    "1":  { hp: 10, pd: 12, ad: 12 },
    "2":  { hp: 13, pd: 12, ad: 12 },
    "3":  { hp: 15, pd: 13, ad: 13 },
    "4":  { hp: 18, pd: 13, ad: 13 },
    "5":  { hp: 21, pd: 15, ad: 15 },
    "6":  { hp: 24, pd: 15, ad: 15 },
    "7":  { hp: 26, pd: 16, ad: 16 },
    "8":  { hp: 29, pd: 16, ad: 16 },
    "9":  { hp: 32, pd: 17, ad: 17 },
    "10": { hp: 35, pd: 18, ad: 18 },
    "11": { hp: 37, pd: 19, ad: 19 },
    "12": { hp: 40, pd: 19, ad: 19 },
    "13": { hp: 42, pd: 20, ad: 20 },
    "14": { hp: 45, pd: 20, ad: 20 },
    "15": { hp: 48, pd: 22, ad: 22 },
    "16": { hp: 51, pd: 22, ad: 22 },
    "17": { hp: 53, pd: 23, ad: 23 },
    "18": { hp: 56, pd: 23, ad: 23 },
    "19": { hp: 59, pd: 24, ad: 24 },
    "20": { hp: 62, pd: 25, ad: 25 }
  };

  // For normal size, use the table. For other sizes, you may want to scale.
  let hp, pd, ad;
  if (level <= 20) {
    const stats = statTable[level] || statTable["1"];
    hp = stats.hp;
    pd = stats.pd;
    ad = stats.ad;
  } else {
    // Continue progression by difference between 20 and 19
    const dhp = statTable["20"].hp - statTable["19"].hp;
    const dpd = statTable["20"].pd - statTable["19"].pd;
    const dad = statTable["20"].ad - statTable["19"].ad;
    const over = level - 20;
    hp = statTable["20"].hp + dhp * over;
    pd = statTable["20"].pd + dpd * over;
    ad = statTable["20"].ad + dad * over;
  }

  // --- Apply all modifiers to HP, PD, AD, then round up at the end ---
  // HP Rank multiplier (minion/normal/elite/boss/solo)
  const hpMultipliers = { minion: 0.5, normal: 1.0, elite: 1.5, boss: 2.0, solo: 4.0 };
  let hpRaw = hp * (hpMultipliers[formData.hpRank] || 1.0);

  // Size defense modifiers
  const sizeDefenseBonus = {
    tiny:        { pd: +2, ad: -2 },
    small:       { pd: +1, ad: -1 },
    medium:      { pd:  0, ad:  0 },
    large:       { pd: -1, ad: +1 },
    huge:        { pd: -2, ad: +2 },
    gargantuan:  { pd: -3, ad: +3 },
    colossal:    { pd: -4, ad: +4 },
    titanic:     { pd: -5, ad: +5 }
  };
  const sizeKey = (formData.creatureSize || "medium").toLowerCase();
  const defenseBonus = sizeDefenseBonus[sizeKey] ?? { pd: 0, ad: 0 };
  let pdRaw = pd + defenseBonus.pd;
  let adRaw = ad + defenseBonus.ad;

  // Always round up after all modifiers to avoid decimals
  hp = Math.ceil(hpRaw);
  pd = Math.ceil(pdRaw);
  ad = Math.ceil(adRaw);

  // --- Summon HP override: If this is a summon minion, use the summonHpTable ---
  // Heuristic: If formData._isSummon is true, or (formData.hpRank === "minion" && formData.monsterRole === "lackey" && formData.creatureSize === "medium" && formData.description?.startsWith("Summoned "))
  let isSummon = false;
  if (formData._isSummon) {
    isSummon = true;
  } else if (
    formData.hpRank === "minion" &&
    formData.monsterRole === "lackey" &&
    formData.creatureSize === "medium" &&
    typeof formData.description === "string" &&
    formData.description.startsWith("Summoned ")
  ) {
    isSummon = true;
  }
  if (isSummon) {
    const summonLevelKey = String(level);
    if (summonHpTable.hasOwnProperty(summonLevelKey)) {
      hp = summonHpTable[summonLevelKey];
    }
  }

  // --- AP calculation as requested ---
  let actionPoints;
  if (formData.hpRank === "minion") {
    if (level <= 0) actionPoints = 1;
    else actionPoints = 2;
  } else {
    actionPoints = 4;
  }

  // Damage Reduction: 1 at level 2+, else 0
  const damageReduction = level >= 2 ? 1 : 0;

  // Attributes: Magazine 12 recommends 1-3 at low levels, scale up slowly
  let might = Math.min(3, 1 + Math.floor(level / 2));
  let agility = Math.min(3, 1 + Math.floor(level / 3));
  let intelligence = Math.floor(level / 4);
  let charisma = 1 + Math.floor(level / 3);

  // For level -1 and 0, cap all attributes at 2
  let statLimit;
  if (level <= 0) {
    statLimit = 2;
  } else if (level <= 4) {
    statLimit = 3;
  } else if (level <= 9) {
    statLimit = 4;
  } else if (level <= 14) {
    statLimit = 5;
  } else {
    statLimit = 6;
  }
  const stats = { might, agility, intelligence, charisma };
  // Cap all stats at statLimit
  Object.keys(stats).forEach(k => { if (stats[k] > statLimit) stats[k] = statLimit; });
  // If none are at statLimit, set the highest to statLimit
  if (!Object.values(stats).some(val => val >= statLimit)) {
    const maxKey = Object.keys(stats).reduce((a, b) => (stats[a] > stats[b] ? a : b));
    stats[maxKey] = statLimit;
  }
  ({ might, agility, intelligence, charisma } = stats);

  // Movement: base 5, dragons fly 6
  let groundSpeed = 5, flyingSpeed = 0;
  if (formData.creatureType === "Dragons") flyingSpeed = 6;

  // Senses: dragons get darkvision/blindsight
  let darkvision = 0, blindsight = 0, tremorsense = 0, truesight = 0;
  if (formData.creatureType === "Dragons") { darkvision = 10; blindsight = 5; }

  // Damage types: fire resist for dragons, poison immune for undead
  let damageTypes = {
    corrosion: null, cold: null, fire: null, lightning: null, poison: null,
    radiant: null, psychic: null, sonic: null, umbral: null,
    piercing: null, slashing: null, bludgeoning: null
  };
  if (formData.creatureType === "Dragons") damageTypes.fire = "resistance";
  else if (formData.creatureType === "Undead") damageTypes.poison = "immune";

  // Apply resistance/immune tweaks by type/subtype (expand as needed)
  damageTypes = applyResistanceModifiers(formData.creatureType, formData.creatureSubtype || "", damageTypes);

  // Role adjustments (magazine: +HP, +defense, +attribute, +move)
  const role = (formData.monsterRole||"").toLowerCase();
  if (ROLE_ADJUSTMENTS[role]) {
    groundSpeed += ROLE_ADJUSTMENTS[role].movement.ground;
    hp += ROLE_ADJUSTMENTS[role].hp; // <-- fix: use hp, not health
    if (ROLE_ADJUSTMENTS[role].attrib.might) might += ROLE_ADJUSTMENTS[role].attrib.might;
    if (ROLE_ADJUSTMENTS[role].attrib.agility) agility += ROLE_ADJUSTMENTS[role].attrib.agility;
    if (ROLE_ADJUSTMENTS[role].attrib.intelligence) intelligence += ROLE_ADJUSTMENTS[role].attrib.intelligence;
    if (ROLE_ADJUSTMENTS[role].attrib.charisma) charisma += ROLE_ADJUSTMENTS[role].attrib.charisma;
    pd += ROLE_ADJUSTMENTS[role].defenses.pd || 0;
    ad += ROLE_ADJUSTMENTS[role].defenses.ad || 0;
  }

  // Features: use compendium-based generator
  let features = [];
  if (!formData._skipAbilities) {
    features = await generateMonsterAbilities(formData, level);
  }

  // Description: auto-generate if blank
  let description = formData.description;
  if (!description.trim() || /^No description provided/.test(description)) {
    const names = features.map(f => f.name).join(", ");
    description = `A${formData.creatureSubtype ? " " + formData.creatureSubtype : ""} ${formData.creatureType || "creature"} with traits like ${names}.`;
  } else {
    description = customizeDescription(description, { features });
  }

  return new Promise(resolve => {
    setTimeout(() => resolve({
      name: formData.name && formData.name.trim()
        ? formData.name
        : `Unnamed${formData.creatureSubtype ? " " + capitalizeWords(formData.creatureSubtype) : ""}${formData.creatureType ? " " + capitalizeWords(formData.creatureType) : ""}`.trim(),
      size: formData.creatureSize || "medium",
      description,
      attributes: { might, agility, intelligence, charisma },
      stats: { health: hp, pd, ad, damageReduction, actionPoints },
      movement: { ground: groundSpeed, flying: flyingSpeed },
      senses: { darkvision, blindsight, tremorsense, truesight },
      damageTypes,
      features
    }), formData._skipAbilities ? 0 : 200);
  });
}

/****************************************************************************
 * New Helper: applyResistanceModifiers
 ****************************************************************************/
function applyResistanceModifiers(creatureType, creatureSubtype, damageTypes) {
  // Normalize for easier matching
  const type = (creatureType || "").toLowerCase();
  const subtype = (creatureSubtype || "").toLowerCase();

  // --- DRAGONS ---
  if (type === "dragons") {
    // Red Dragon, Red Dragon Wyrmling: Fire resistance (half) or (1)
    if (subtype.includes("red dragon wyrmling")) {
      damageTypes.fire = "resistance"; 
    } else if (subtype.includes("red dragon")) {
      damageTypes.fire = "resistance"; 
    } else if (subtype.includes("blue dragon")) {
      damageTypes.lightning = "resistance";
    } else if (subtype.includes("white dragon")) {
      damageTypes.cold = "resistance";
    } else if (subtype.includes("black dragon")) {
      damageTypes.corrosion = "resistance";
    } else if (subtype.includes("green dragon")) {
      damageTypes.poison = "resistance";
    } else if (subtype.includes("gold dragon")) {
      damageTypes.fire = "resistance";
      damageTypes.radiant = "resistance";
    } else if (subtype.includes("silver dragon")) {
      damageTypes.cold = "resistance";
      damageTypes.radiant = "resistance";
    } else if (subtype.includes("brass dragon")) {
      damageTypes.fire = "resistance";
      damageTypes.sonic = "resistance";
    } else if (subtype.includes("bronze dragon")) {
      damageTypes.lightning = "resistance";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("copper dragon")) {
      damageTypes.corrosion = "resistance";
      damageTypes.lightning = "resistance";
    } else if (subtype.includes("crystal dragon")) {
      damageTypes.radiant = "resistance";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("emerald dragon")) {
      damageTypes.psychic = "resistance";
    } else if (subtype.includes("obsidian dragon")) {
      damageTypes.umbral = "resistance";
      damageTypes.fire = "resistance";
    } else if (subtype.includes("sapphire dragon")) {
      damageTypes.sonic = "resistance";
      damageTypes.psychic = "resistance";
    } else if (subtype.includes("ruby dragon")) {
      damageTypes.fire = "resistance";
      damageTypes.radiant = "resistance";
    } else if (subtype.includes("onyx dragon")) {
      damageTypes.umbral = "resistance";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("ivory dragon")) {
      damageTypes.cold = "resistance";
      damageTypes.radiant = "resistance";
    } else if (subtype.includes("shadow dragon")) {
      damageTypes.umbral = "resistance";
      damageTypes.psychic = "resistance";
    } else if (subtype.includes("celestial dragon")) {
      damageTypes.radiant = "immune";
      damageTypes.fire = "resistance";
    }
    // All dragons: physical resistance (bludgeoning, slashing, piercing)
    damageTypes.bludgeoning = damageTypes.bludgeoning || "resistance";
    damageTypes.slashing = damageTypes.slashing || "resistance";
    damageTypes.piercing = damageTypes.piercing || "resistance";
  }

  // --- ELEMENTALS ---
  if (type === "elementals") {
    if (subtype.includes("fire")) {
      damageTypes.fire = "immune";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("water")) {
      damageTypes.cold = "resistance";
      damageTypes.fire = "resistance";
    } else if (subtype.includes("air")) {
      damageTypes.sonic = "resistance";
      damageTypes.lightning = "resistance";
    } else if (subtype.includes("earth")) {
      damageTypes.corrosion = "resistance";
      damageTypes.bludgeoning = "resistance";
    } else if (subtype.includes("ice")) {
      damageTypes.cold = "immune";
      damageTypes.fire = "resistance";
    } else if (subtype.includes("lightning")) {
      damageTypes.lightning = "immune";
      damageTypes.fire = "resistance";
    } else if (subtype.includes("mud")) {
      damageTypes.corrosion = "resistance";
      damageTypes.bludgeoning = "resistance";
    } else if (subtype.includes("metal")) {
      damageTypes.piercing = "resistance";
      damageTypes.slashing = "resistance";
    } else if (subtype.includes("plasma")) {
      damageTypes.fire = "immune";
      damageTypes.lightning = "resistance";
    }
    // All elementals: poison immune
    damageTypes.poison = "immune";
  }

  // --- UNDEAD ---
  if (type === "undead") {
    if (subtype.includes("skeleton")) {
      damageTypes.poison = "immune";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("zombie")) {
      damageTypes.poison = "immune";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("wight") || subtype.includes("wraith") || subtype.includes("banshee") || subtype.includes("phantom")) {
      damageTypes.poison = "immune";
      damageTypes.umbral = "resistance";
      damageTypes.psychic = "resistance";
    } else if (subtype.includes("lich")) {
      damageTypes.poison = "immune";
      damageTypes.cold = "resistance";
      damageTypes.psychic = "resistance";
    } else if (subtype.includes("mummy")) {
      damageTypes.poison = "immune";
      damageTypes.radiant = "resistance";
    } else if (subtype.includes("vampire")) {
      damageTypes.poison = "immune";
      damageTypes.radiant = "resistance";
      damageTypes.psychic = "resistance";
    }
    // All undead: poison immune
    damageTypes.poison = "immune";
  }

  // --- OOZE ---
  if (type === "ooze") {
    if (subtype.includes("gelatinous cube") || subtype.includes("slime") || subtype.includes("mold")) {
      damageTypes.corrosion = "immune";
      damageTypes.poison = "resistance";
    } else if (subtype.includes("acidic") || subtype.includes("corrosive")) {
      damageTypes.corrosion = "immune";
    } else if (subtype.includes("icy") || subtype.includes("ice")) {
      damageTypes.cold = "immune";
    }
    // All oozes: bludgeoning resistance
    damageTypes.bludgeoning = "resistance";
  }

  // --- FIENDS ---
  if (type === "fiends") {
    if (subtype.includes("pit fiend") || subtype.includes("cinder fiend") || subtype.includes("abyssal fiend")) {
      damageTypes.fire = "immune";
      damageTypes.umbral = "resistance";
    } else if (subtype.includes("hell hound")) {
      damageTypes.fire = "immune";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("succubus") || subtype.includes("incubus")) {
      damageTypes.psychic = "resistance";
      damageTypes.umbral = "resistance";
    }
    // All fiends: fire resistance
    damageTypes.fire = damageTypes.fire || "resistance";
  }

  // --- CELESTIALS ---
  if (type === "celestials") {
    if (subtype.includes("seraph") || subtype.includes("solar") || subtype.includes("radiant")) {
      damageTypes.radiant = "immune";
      damageTypes.fire = "resistance";
    } else if (subtype.includes("guardian angel") || subtype.includes("deva")) {
      damageTypes.radiant = "resistance";
      damageTypes.psychic = "resistance";
    }
    // All celestials: radiant resistance
    damageTypes.radiant = damageTypes.radiant || "resistance";
  }

  // --- GIANTS ---
  if (type === "giants") {
    if (subtype.includes("frost giant")) {
      damageTypes.cold = "resistance";
    } else if (subtype.includes("fire giant")) {
      damageTypes.fire = "resistance";
    } else if (subtype.includes("storm giant") || subtype.includes("thunder giant")) {
      damageTypes.lightning = "resistance";
      damageTypes.sonic = "resistance";
    } else if (subtype.includes("hill giant") || subtype.includes("mountain giant")) {
      damageTypes.bludgeoning = "resistance";
    }
    // All giants: poison resistance
    damageTypes.poison = damageTypes.poison || "resistance";
  }

  // --- BEASTS ---
  if (type === "beasts") {
    if (subtype.includes("dire wolf") || subtype.includes("wolf")) {
      damageTypes.cold = "resistance";
    } else if (subtype.includes("giant scorpion")) {
      damageTypes.poison = "resistance";
    } else if (subtype.includes("giant spider")) {
      damageTypes.poison = "resistance";
      damageTypes.corrosion = "resistance";
    } else if (subtype.includes("mammoth") || subtype.includes("cave bear")) {
      damageTypes.cold = "resistance";
      damageTypes.bludgeoning = "resistance";
    }
    // All beasts: poison resistance
    damageTypes.poison = damageTypes.poison || "resistance";
  }

  // --- FEY ---
  if (type === "fey") {
    if (subtype.includes("pixie") || subtype.includes("sprite")) {
      damageTypes.psychic = "resistance";
      damageTypes.radiant = "resistance";
    } else if (subtype.includes("dryad") || subtype.includes("nymph")) {
      damageTypes.radiant = "resistance";
      damageTypes.cold = "resistance";
    }
    // All fey: psychic resistance
    damageTypes.psychic = damageTypes.psychic || "resistance";
  }

  // --- CONSTRUCTS ---
  if (type === "constructs") {
    if (subtype.includes("golem") || subtype.includes("stone guardian") || subtype.includes("living statue")) {
      damageTypes.bludgeoning = "resistance";
      damageTypes.slashing = "resistance";
      damageTypes.piercing = "resistance";
      damageTypes.poison = "immune";
    } else if (subtype.includes("clockwork") || subtype.includes("automaton")) {
      damageTypes.lightning = "resistance";
      damageTypes.poison = "immune";
    }
    // All constructs: poison immune
    damageTypes.poison = "immune";
  }

  // --- PLANTS ---
  if (type === "plants") {
    if (subtype.includes("shambling mound") || subtype.includes("vine horror")) {
      damageTypes.cold = "resistance";
      damageTypes.poison = "resistance";
    } else if (subtype.includes("corpse flower") || subtype.includes("blight")) {
      damageTypes.poison = "immune";
      damageTypes.cold = "resistance";
    }
    // All plants: poison resistance
    damageTypes.poison = damageTypes.poison || "resistance";
  }

  // --- MONSTROSITIES ---
  if (type === "monstrosities") {
    if (subtype.includes("hydra") || subtype.includes("chimera")) {
      damageTypes.fire = "resistance";
      damageTypes.cold = "resistance";
    } else if (subtype.includes("basilisk")) {
      damageTypes.corrosion = "resistance";
      damageTypes.poison = "resistance";
    }
    // All monstrosities: poison resistance
    damageTypes.poison = damageTypes.poison || "resistance";
  }

  // --- HUMANOIDS ---
  if (type === "humanoids") {
    if (subtype.includes("dragonborn")) {
      damageTypes.fire = "resistance";
    } else if (subtype.includes("tiefling")) {
      damageTypes.fire = "resistance";
      damageTypes.umbral = "resistance";
    } else if (subtype.includes("aasimar")) {
      damageTypes.radiant = "resistance";
    }
    // All humanoids: no default, but ensure at least one resistance
    if (!Object.values(damageTypes).some(v => v === "resistance" || v === "immune")) {
      damageTypes.psychic = "resistance";
    }
  }

  // --- DEFAULT: If no resistance/immune assigned, give psychic resistance as fallback ---
  if (!Object.values(damageTypes).some(v => v === "resistance" || v === "immune")) {
    damageTypes.psychic = "resistance";
  }

  return damageTypes;
}

/****************************************************************************
 * New Helper: generateAbilities
 * Using The DC20 Magazine 0.9.5 buff/debuff rules, generate/change abilities based on monster subtype and role.
 ****************************************************************************/
function generateAbilities(monsterData, formData) {
  const level = Number(formData.level) || 1;
  // Always use the AI generator with full formData to incorporate type, subtype and role info.
  let abilities = rollAIAccessories(5, level, formData);
  
  // Append type and subtype details to each ability for traceability.
  if (formData.creatureType) {
    abilities = abilities.map(ability => {
      ability.system.description += `<p><em>Creature Type:</em> ${formData.creatureType}</p>`;
      if(formData.creatureSubtype && formData.creatureSubtype.trim())
        ability.system.description += `<p><em>Creature Subtype:</em> ${formData.creatureSubtype}</p>`;
      return ability;
    });
  }
  
  // Apply role-specific extra tweaks.
  const role = formData.monsterRole ? formData.monsterRole.toLowerCase() : "ambusher";
  abilities = abilities.map(ability => {
    if (role === "berserker") {
      ability.system.description += " <p><em>Berserker bonus: +1 extra damage.</em></p>";
    } else if (role === "caster") {
      ability.system.description += " <p><em>Caster bonus: Enhanced Spell Check.</em></p>";
    }
    return ability;
  });
  
  // Always pick features based on level from the enriched abilities list.
  return pickFeaturesByLevel(abilities, level);
}

/****************************************************************************
 * New Helper: customizeDescription
 * If user entered a description, run it through an algorithm to adjust it with the guidelines Provided.
 ****************************************************************************/
function customizeDescription(inputDesc, monsterData) {
	// Placeholder: integrate guidelines to modify description.
	// For example, if description exists, append extra details from abilities.
	const abilityNames = monsterData.features.map(f => f.name).join(", ");
	return `${inputDesc} Additional traits include: ${abilityNames}.`;
}
/****************************************************************************
 * New Helper: getRandomDC20DamageType
 * --- DC20 Damage Types for randomization ---
 ****************************************************************************/
const PHYSICAL_DAMAGE_TYPES = ["slashing", "piercing", "bludgeoning"];
const ELEMENTAL_DAMAGE_TYPES = ["cold", "corrosion", "fire", "lightning", "poison", "sonic"];
const MYSTICAL_DAMAGE_TYPES = ["psychic", "radiant", "umbral"];
const TRUE_DAMAGE_TYPE = "true";
function getRandomDC20DamageType(opts = {}) {
  const allTypes = [
    ...PHYSICAL_DAMAGE_TYPES,
    ...ELEMENTAL_DAMAGE_TYPES,
    ...MYSTICAL_DAMAGE_TYPES
  ];
  if (!opts.excludeTrue && Math.random() < 0.025) return TRUE_DAMAGE_TYPE;
  return allTypes[Math.floor(Math.random() * allTypes.length)];
}
/****************************************************************************
 * Updated Helper: pickFeaturesByLevel
 ****************************************************************************/
function pickFeaturesByLevel(arr, level) {
  const minPick = Math.min(level + 2, arr.length);
  const maxPick = Math.min(level + 4, arr.length);
  const numberToPick = randomInt(minPick, maxPick);
  return getRandomItems(arr, numberToPick);
}

/****************************************************************************
 * New Helper: extraEffects
 ****************************************************************************/
const extraEffects = [
  "It also causes a minor stun effect.",
  "Additionally, it has a 20% chance to inflict bleed.",
  "It may knock the target back.",
  "The attack leaves a burning mark.",
  "It temporarily reduces the target's defense."
];

/****************************************************************************
 * Updated Helper: randomInt
 ****************************************************************************/
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/****************************************************************************
 * Updated Helper: getRandomItems
 ****************************************************************************/
function getRandomItems(arr, count) {
  if (count >= arr.length) return structuredClone(arr);
  const clone = structuredClone(arr);
  const result = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * clone.length);
    result.push(clone.splice(idx, 1)[0]);
  }
  return result;
}

/****************************************************************************
 * Helper: generateMonsterAbilities
 * Only generate compendium abilities from ability-generator.js.
 ****************************************************************************/
async function generateMonsterAbilities(formData, level) {
  // Use the compendium-based generator (from ability-generator.js)
  if (typeof window !== "undefined" && typeof window.rollAIAccessories === "function") {
    // Debug: Log all input and output for troubleshooting
    console.groupCollapsed("[DC20 Monster Generator] generateMonsterAbilities Debug");
    console.log("formData:", structuredClone(formData));
    console.log("level:", level);
    try {
      const abilities = await window.rollAIAccessories(undefined, level, formData);
      console.log("rollAIAccessories returned:", abilities);

      // If abilities are already compendium items with sourceId, return as-is
      if (
        Array.isArray(abilities) &&
        abilities.length > 0 &&
        abilities.every(
          ab =>
            (ab.flags?.core?.sourceId && ab.flags.core.sourceId.startsWith("Compendium.dc20-monster-generator.monster-generator-abilities.Item.")) ||
            (ab._id && ab._id.length === 16)
        )
      ) {
        console.log("Returning compendium items as-is.");
        console.groupEnd();
        return abilities;
      }

      // If abilities are missing sourceId, but have a name, try to fetch from compendium by name
      if (Array.isArray(abilities) && abilities.length > 0) {
        const pack = game.packs.get("dc20-monster-generator.monster-generator-abilities");
        if (!pack) {
          console.warn("Compendium pack not found.");
          console.groupEnd();
          return [];
        }
        const allIndex = await pack.getIndex();
        const result = [];
        for (const ab of abilities) {
          // Try to find by name (case-insensitive)
          const idx = allIndex.find(e => e.name?.toLowerCase() === ab.name?.toLowerCase());
          if (idx) {
            const doc = await pack.getDocument(idx._id);
            if (doc) result.push(doc.toObject());
          } else {
            console.warn("Ability not found in compendium by name:", ab.name);
          }
        }
        console.log("Abilities after compendium lookup:", result);
        console.groupEnd();
        return result;
      }

      // If for some reason it fails, return empty array (do not fallback to local pools)
      console.warn("No abilities returned or matched.");
      console.groupEnd();
      return [];
    } catch (err) {
      console.error("[DC20 Monster Generator] Error in generateMonsterAbilities:", err);
      console.groupEnd();
      return [];
    }
  }
  // If not loaded, return empty array
  console.warn("[DC20 Monster Generator] rollAIAccessories not found on window.");
  return [];
}

/****************************************************************************
 * Callback Macro: Regenerate Monster Ability for an Actor
 * Usage: await window["get.dc20-monster-generator.regen-abilities"]();
 ****************************************************************************/
if (typeof window !== "undefined") {
  window["get.dc20-monster-generator.regen-abilities"] = async function (macroItem) {
    let actor = null;
    let item = macroItem;
    if (!item && typeof window.item !== "undefined") item = window.item;
    if (item && item.parent) {
      actor = item.parent;
    } else if (canvas?.tokens?.controlled?.length === 1) {
      actor = canvas.tokens.controlled[0].actor;
    } else if (game.user?.character) {
      actor = game.user.character;
    }
    if (!actor) {
      ui.notifications.warn("No actor found to regenerate abilities for.");
      return;
    }

    // --- DEBUG: Log what is present on window for troubleshooting ---
    console.log("[DC20 Regen Macro] DEBUG: window.TYPE_ABILITY_IDS:", !!window.TYPE_ABILITY_IDS, "window.ROLE_ABILITY_IDS:", !!window.ROLE_ABILITY_IDS, "window.getRandomAbilityCompendiumItemId:", typeof window.getRandomAbilityCompendiumItemId, "window.getRandomAbilityIdForTypeOrRole:", typeof window.getRandomAbilityIdForTypeOrRole);

    // Defensive: Check for pools and helper
    if (
      !window.TYPE_ABILITY_IDS ||
      !window.ROLE_ABILITY_IDS ||
      (typeof window.getRandomAbilityCompendiumItemId !== "function" && typeof window.getRandomAbilityIdForTypeOrRole !== "function")

    ) {
      ui.notifications.warn("Ability pools not loaded. Please ensure ability-generator.js is loaded before monster-generator.js in your module.json scripts array.");
      return;
    }

    // Only allow items of type weapon, technique, spell, or feature
    const allowedTypes = ["weapon", "technique", "spell", "feature"];
    const items = actor.items.filter(i => allowedTypes.includes(i.type));
    if (!items.length) {
      ui.notifications.warn("No weapons, techniques, spells, or features found on this actor.");
      return;
    }

    // Build options for popup (show type in label)
    const options = Object.fromEntries(
      items.map(i => [i.id, `[${i.type}] ${i.name}`])
    );
    const selectedItemId = await game.dc20rpg.tools.getSimplePopup("select", {
      header: "Choose an Item to Regenerate",
      selectOptions: options
    });
    if (!selectedItemId) return;
    const selectedItem = actor.items.get(selectedItemId);
    if (!selectedItem) {
      ui.notifications.warn("Selected item not found.");
      return;
    }

    // Get type and role from actor or item
    let creatureType = "";
    let monsterRole = "";
    if (actor.system?.details) {
      creatureType = actor.system.details.creatureType || "";
      monsterRole = (actor.system.details.role || actor.system.details.category || "").toLowerCase();
    }
    if ((!creatureType || !monsterRole) && item) {
      if (!creatureType && item.flags?.["dc20-monster-generator"]?.creatureType) {
        creatureType = item.flags["dc20-monster-generator"].creatureType;
      }
      if (!monsterRole && item.flags?.["dc20-monster-generator"]?.monsterRole) {
        monsterRole = item.flags["dc20-monster-generator"].monsterRole.toLowerCase();
      }
      if (!creatureType && item.system?.creatureType) {
        creatureType = item.system.creatureType;
      }
      if (!monsterRole && item.system?.monsterRole) {
        monsterRole = item.system.monsterRole.toLowerCase();
      }
    }

    // Helper to get compendium item id from item
    function getItemCompendiumId(item) {
      if (item.flags?.core?.sourceId) return item.flags.core.sourceId;
      if (typeof item._id === "string" && item._id.startsWith("Compendium.")) return item._id;
      if (item.system?.sourceId) return item.system.sourceId;
      return null;
    }
    const itemCompendiumId = getItemCompendiumId(selectedItem);

    // Use the new helper to get a random compendium item id for this type/role
    const getRandomAbility =
      window.getRandomAbilityCompendiumItemId ||
      window.getRandomAbilityIdForTypeOrRole;
    const { id: newCompendiumId, poolType } = getRandomAbility({
      type: creatureType,
      role: monsterRole,
      avoidId: itemCompendiumId
    });
    if (!newCompendiumId) {
      ui.notifications.warn("No ability pool found for this actor's type or role. (Type: " + creatureType + ", Role: " + monsterRole + ")");
      return;
    }

    // Defensive: Log what we're about to load
    console.log("[DC20 Regen Macro] Loading compendium item:", newCompendiumId);

    // Load the compendium item (always a full compendium item id)
    const parts = newCompendiumId.split(".");
    let [prefix, ...rest] = parts;
    if (prefix === "Compendium") prefix = "";
    const [module, pack, type, itemId] = rest.length === 4 ? rest : parts;
    const packId = `${module}.${pack}`;
    const packObj = game.packs.get(packId);
    if (!packObj) {
      ui.notifications.warn(`Compendium pack not found: ${packId}`);
      return;
    }
    const doc = await packObj.getDocument(itemId);
    if (!doc) {
      ui.notifications.warn("Could not load ability from compendium.");
      return;
    }

    // --- Instead of updating, delete the selected item and create the new one ---
    await selectedItem.delete();
    await actor.createEmbeddedDocuments("Item", [doc.toObject()]);

    ui.notifications.info(`Item "${selectedItem.name}" has been replaced with a new ability from the ${poolType || "type/role"} pool!`);
  };
}

/****************************************************************************
 * Helper: Generate Buff/Debuff Table for Monster (Consistent Abilities, Scaled Damage, Fast)
 * Optimized: Only simulate stats (not abilities) for each level row.
 ****************************************************************************/
async function generateBuffDebuffTable(monsterData, formData) {
  const DAMAGE_BY_LEVEL = {
    "-1": "1", "0": "1", "1": "2", "2": "2", "3": "3", "4": "4", "5": "5", "6": "5",
    "7": "6", "8": "6", "9": "7", "10": "7", "11": "8", "12": "8", "13": "9", "14": "10",
    "15": "11", "16": "11", "17": "12", "18": "12", "19": "13", "20": "13"
  };

  let html = `<h2>Monster Buff/Debuff Table</h2>
  <table style="border-collapse:collapse;width:100%;font-size:0.95em;">
    <thead>
      <tr>
        <th style="border:1px solid #888;padding:2px 6px;">Level</th>
        <th style="border:1px solid #888;padding:2px 6px;">HP</th>
        <th style="border:1px solid #888;padding:2px 6px;">PD</th>
        <th style="border:1px solid #888;padding:2px 6px;">AD</th>
        <th style="border:1px solid #888;padding:2px 6px;">MIG</th>
        <th style="border:1px solid #888;padding:2px 6px;">AGI</th>
        <th style="border:1px solid #888;padding:2px 6px;">CHA</th>
        <th style="border:1px solid #888;padding:2px 6px;">INT</th>
        <th style="border:1px solid #888;padding:2px 6px;">Base Damage for Monster Abilities</th>
      </tr>
    </thead>
    <tbody>
  `;

  // Use the original monster's features for all levels
  const baseFeatures = monsterData.features || [];

  // Precompute all stats for levels -1 to 20 in parallel (no await in loop)
  const levelRange = Array.from({length: 22}, (_, i) => i - 1);
  const statPromises = levelRange.map(lvl => {
    // Only simulate stats, not abilities (pass a flag to skip abilities)
    return generateMonster({ ...formData, level: lvl, _skipAbilities: true });
  });
  const statResults = await Promise.all(statPromises);

  for (let i = 0; i < levelRange.length; i++) {
    const lvl = levelRange[i];
    const simMonster = statResults[i];
    let dmgHtml = "";
    for (const f of baseFeatures) {
      if (f.system && f.system.formulas) {
        for (const k in f.system.formulas) {
          const formula = f.system.formulas[k];
          if (formula && formula.category === "damage") {
            const tableDmg = DAMAGE_BY_LEVEL.hasOwnProperty(String(lvl)) ? DAMAGE_BY_LEVEL[String(lvl)] : "2";
            dmgHtml += `<div><b>${f.name}:</b> ${tableDmg}</div>`;
          }
        }
      }
    }
    if (!dmgHtml) dmgHtml = "<i>No damaging abilities</i>";

    const stats = simMonster.stats || {};
    const attrs = simMonster.attributes || {};

    html += `<tr>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${lvl}</td>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${stats.health ?? ""}</td>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${stats.pd ?? ""}</td>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${stats.ad ?? ""}</td>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${attrs.might ?? ""}</td>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${attrs.agility ?? ""}</td>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${attrs.charisma ?? ""}</td>
      <td style="border:1px solid #888;padding:2px 6px;text-align:center;">${attrs.intelligence ?? ""}</td>
      <td style="border:1px solid #888;padding:2px 6px;">${dmgHtml}</td>
    </tr>`;
  }
  html += "</tbody></table>";
  return html;
}

/****************************************************************************
 * Utility: Capitalize each word in a string
 ****************************************************************************/
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/****************************************************************************
 * End of monster-generator.js for now......
 ****************************************************************************/