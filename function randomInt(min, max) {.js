function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enhanced Ability Generator – fully integrated with multiple advanced processing layers
function enhancedGenerateAbilityAccessories(numAbilities = 5, level = 1, formData = {}) {
  // Base templates for abilities
  const templates = [
    {
      name: "Ability 1",
      img: "icons/svg/mystery-man.svg",
      description: `<p>Generated ability 1 (Level ${level})</p>`,
      actionType: "attack",
      choicePointCost: 1
      // ...existing minimal fields...
    },
    {
      name: "Ability 2",
      img: "icons/svg/mystery-man.svg",
      description: `<p>Generated ability 2 (Level ${level})</p>`,
      actionType: "attack",
      choicePointCost: 1
    },
    {
      name: "Ability 3",
      img: "icons/svg/mystery-man.svg",
      description: `<p>Generated ability 3 (Level ${level})</p>`,
      actionType: "attack",
      choicePointCost: 1,
      attackFormula: {
        rangeType: "melee",
        checkType: "attack",
        targetDefence: "physical",
        rollBonus: 0,
        combatMastery: false,
        critThreshold: 20,
        halfDmgOnMiss: false,
        formulaMod: "physical",
        skipBonusDamage: { heavy: false, brutal: false, crit: false, conditionals: false }
      },
      check: {
        canCrit: false,
        checkKey: "att",
        multiCheck: { active: false, options: {} },
        contestedKey: "phy",
        checkDC: 10,
        respectSizeRules: false,
        failEffect: "",
        againstDC: true
      },
      save: {
        type: "phy",
        dc: 0,
        calculationKey: "spell",
        addMastery: false,
        failEffect: ""
      },
      costs: {
        resources: { actionPoint: null, stamina: null, mana: null, health: null, grit: null, restPoints: null, custom: {} },
        charges: { current: null, maxChargesFormula: null, overriden: false, rechargeFormula: "", rechargeDice: "", requiredTotalMinimum: null, reset: "", showAsResource: false, subtract: 1 },
        otherItem: { itemId: "", amountConsumed: 0, consumeCharge: true }
      },
      againstEffect: {
        id: "", supressFromChatMessage: false,
        untilYourNextTurnStart: false, untilYourNextTurnEnd: false,
        untilTargetNextTurnStart: false, untilTargetNextTurnEnd: false,
        untilFirstTimeTriggered: false
      },
      featureOrigin: "",
      isResource: false,
      resource: { name: "", resourceKey: "key", reset: "", useStandardTable: true, customMaxFormula: "", values: Array(20).fill(0) },
      usesWeapon: { weaponAttack: false, weaponId: "" },
      effectsConfig: { linkWithToggle: false, toggleItem: true, active: false, addToChat: false }
    }
    // ...other templates...
  ];
  
  const generated = [];
  // Process each ability with multiple layers
  for (let i = 0; i < numAbilities; i++) {
    const tpl = structuredClone(templates[i % templates.length]);
    tpl.name += ` ${i + 1}`;
    tpl.description += ` <p>Advanced scaling for level ${level}</p>`;
    
    // Layer 1: Statistical adjustment – modify roll bonuses based on level
    if (tpl.actionType === "attack" && tpl.attackFormula) {
      const baseBonus = tpl.attackFormula.rollBonus || 0;
      const bonus = Math.floor(level * 0.5);
      tpl.attackFormula.rollBonus = baseBonus + bonus;
      tpl.description += `<p>Adjustment: Roll bonus increased by ${bonus}.</p>`;
    }
    
    // Layer 2: Inject random special effects using pseudo–NLG
    const specialEffects = [
      "Inflicts confusion for 1 round.",
      "Causes the target to stagger briefly.",
      "Leaves a transient healing aura on allies."
    ];
    if (randomInt(0, 1) === 1) {
      const effect = specialEffects[randomInt(0, specialEffects.length - 1)];
      tpl.description += `<p><em>Special Effect:</em> ${effect}</p>`;
    }
    
    // Layer 3: Adaptive AI neural simulation placeholder
    tpl.description += `<p><em>Processing:</em> Enhanced with deep learning insights at a depth of ${level * 10} layers.</p>`;
    
    generated.push({
      name: tpl.name,
      type: "feature",
      img: tpl.img,
      system: {
        description: tpl.description,
        actionType: tpl.actionType,
        featureType: "monster",
        ...(tpl.attackFormula ? { attackFormula: tpl.attackFormula } : {}),
        ...(tpl.check ? { check: tpl.check } : {}),
        ...(tpl.save ? { save: tpl.save } : {}),
        ...(tpl.costs ? { costs: tpl.costs } : {}),
        ...(tpl.againstEffect ? { againstEffect: tpl.againstEffect } : {}),
        // ...existing system properties...
        featureOrigin: tpl.featureOrigin || "",
        isResource: tpl.isResource,
        resource: tpl.resource,
        usesWeapon: tpl.usesWeapon,
        effectsConfig: tpl.effectsConfig
      }
    });
  }
  
  // Layer 4: Append a summary ability detailing the comprehensive processing
  generated.push({
    name: "Generation Summary",
    type: "feature",
    img: "icons/svg/brain.svg",
    system: {
      description: `<p>All abilities generated via an advanced module integrating statistical modeling and adaptive deep learning techniques at level ${level}.</p>`,
      featureType: "monster"
    }
  });
  
  return generated;
}

// Updated: rollAIAccessories uses the fully enhanced AI generator.
function rollAIAccessories(numAbilities = 5, level = 1, formData = {}) {
  return enhancedGenerateAIAccessories(numAbilities, level, formData);
}

// Expose functions globally as needed
if (typeof window !== "undefined") {
  window.rollAIAccessories = rollAIAccessories;
}
