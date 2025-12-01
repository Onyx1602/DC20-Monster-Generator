// EFFECTS AUTOMATION: List of all effect objects (from Magic Template.json)
const MAGIC_PROPERTY_EFFECTS = [
  {
      "name": "Language, Minor",
      "img": "icons/sundries/scrolls/scroll-magical-yellow.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "IsdMfkMNqFtlXqdl",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.skillPoints.language.bonus",
          "mode": 2,
          "value": "2",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You become Fluent in [type] language.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Language, Major",
      "img": "icons/sundries/scrolls/scroll-writing-grey.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "7UF9DfQBwW0OMqpW",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.skillPoints.language.bonus",
          "value": "6",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You become Fluent in 3 languages.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Health Increase",
      "img": "icons/magic/life/cross-worn-green.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "WGFR7QDBtA9JBwVF",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.resources.health.bonus",
          "mode": 2,
          "value": "3",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your HP Maximum increases by 3.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Mana Increase",
      "img": "icons/magic/symbols/chevron-elipse-circle-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "mPRgdDIPiFsXdomg",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.resources.mana.bonus",
          "mode": 2,
          "value": "4",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your MP Maximum increases by 4.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Stamina Increase",
      "img": "icons/magic/movement/abstract-ribbons-red-orange.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "VwDpNtodPvZ7uRsB",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.resources.stamina.bonus",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your SP Maximum increases by 1.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Grit Increase",
      "img": "icons/magic/control/buff-luck-fortune-green.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "bfI2ojwyD0N5ACqz",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.resources.grit.bonus",
          "value": "2",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Grit Point Maximum increases by 2.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Climb Speed",
      "img": "icons/tools/hand/hammer-and-nail.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "vwIm2ifKxde2QlOD",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.climbing.fullSpeed",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Climb Speed equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Swim Speed",
      "img": "icons/tools/nautical/anchor.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "X196dmkXKk54YUML",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.swimming.fullSpeed",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Swim Speed equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Speed",
      "img": "icons/skills/movement/feet-winged-boots-glowing-yellow.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "RyQ6viNHBXyQPslZ",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.ground.bonus",
          "mode": 2,
          "value": "2",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Speed increases by 2.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Burrow Speed",
      "img": "icons/magic/earth/barrier-stone-explosion-debris.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "w1Hy1lMEcF2KacCM",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.burrow.fullSpeed",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Burrow equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Fly Speed",
      "img": "icons/magic/control/buff-flight-wings-runes-blue-white.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "woC6qMHW8JBQTYjz",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
               "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.flying.fullSpeed",
          "value": "true",
          "mode": 5,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Fly equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Truewalk",
      "img": "icons/creatures/invertebrates/spider-web-red.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "rGlq6Q4ifZ265P4z",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can walk normally up vertical surfaces and upside down (such as on ceilings) without falling or needing to Climb.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Water Walk",
      "img": "icons/magic/water/water-iceberg-bubbles.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "ItdmWk7OB6YeyH0N",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can choose to stand on and move across liquid surfaces as if they were solid ground.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Web Walk",
      "img": "icons/creatures/webs/web-spider-glowing-purple.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "N6qArzEXSbHdcXeB",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can walk along and through webs unimpeded.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Unstoppable",
      "img": "icons/creatures/magical/construct-iron-stomping-yellow.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "hPbebqEMV93iJxVL",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.statusResistances.paralyzed.immunity",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.statusResistances.stunned.immunity",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.statusResistances.slowed.immunity",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You’re immune to the following Conditions: Paralyzed, Stunned, and Slowed.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Darkvision",
      "img": "icons/creatures/eyes/humanoid-single-blind.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "aKEnRKQPpqsuZMCd",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.senses.darkvision.orOption.range",
          "mode": 2,
          "value": "10",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.senses.darkvision.orOption.bonus",
          "mode": 2,
          "value": "5",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain 10 Space Darkvision. If you already have Darkvision, it increases by 5 Spaces.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Blindsight",
      "img": "icons/magic/perception/orb-crystal-ball-scrying-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "lZ2fyb7LSemHIyNe",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.senses.blindsight.orOption.range",
          "mode": 2,
          "value": "3",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.senses.blindsight.orOption.bonus",
          "mode": 2,
          "value": "2",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a 3 Space Blindsight. If you already have Blindsight, it increases by 2 Spaces.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Tremorsense",
      "img": "icons/magic/earth/barrier-stone-pillar-purple.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "xwCY40dy0SJF2mTk",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.senses.tremorsense.orOption.range",
          "value": "3",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.senses.tremorsense.orOption.bonus",
          "value": "2",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a 3 Space Tremorsense. If you already have Tremorsense, it increases by 2 Spaces.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Truesight",
      "img": "icons/magic/perception/orb-eye-scrying.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "VrVylO4BOxMeZWZU",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.senses.truesight.orOption.range",
          "mode": 2,
          "value": "10",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.senses.truesight.orOption.bonus",
          "mode": 2,
          "value": "5",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a 10 Space Truesight. If you already have Truesight, it increases by 5 Spaces.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Eagle Eye",
      "img": "icons/creatures/eyes/lizard-single-slit-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "GV72xbgxpsV84Zsk",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can see things clearly up to 1 mile (1.6 km) away, provided the weather conditions are clear and you have clear line of sight.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Telepathy",
      "img": "icons/magic/perception/eye-ringed-glow-angry-red.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "lbzMBgTBWtqORye1",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You gain Telepathy 10 Spaces. If you already have Telepathy, it instead increases by 5 Spaces.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Mending",
      "img": "icons/tools/hand/hammer-simple-stone.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "ev2cHtpSTU2TJVaQ",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>If the item is ever damaged or broken, it mends itself over the course of 10 minutes. If any section larger than 6 in (15 cm) on a side is missing, it must be reattached before the item can complete mending itself.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Bonded",
      "img": "icons/magic/control/energy-stream-link-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "qagbSAoOWLAtp02V",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can spend 1 AP to bond with this item until you die or you choose to end the bond for free. While bonded with it, you’re immediately alerted if another creature touches the item. Only 1 creature can bond with the item at a time.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Recall",
      "img": "icons/magic/movement/trail-streak-zigzag-teal.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "mYBhfx1Sc1DAnHT2",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can spend 1 AP to summon the item to your hand, provided you have a free hand and the item is within 100 Spaces of you.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Immutable Form",
      "img": "icons/magic/control/silhouette-hold-change-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "B9vUsJLvnQebkiPT",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>Your form can’t be altered against your will.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Mind Shielding",
      "img": "icons/magic/defensive/barrier-shield-dome-pink.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "yfBdilx7jDTHrhxh",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>Creatures can’t read your thoughts or speak to you telepathically unless you allow them to.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Arcane Ammo",
      "img": "icons/weapons/ammunition/arrowhead-glowing-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "vp1DYl9VueOXj6mw",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>When you load this Weapon, it generates its own magical ammunition. The ammunition disappears after an Attack Hits or Misses.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Returning",
      "img": "icons/magic/movement/trail-streak-impact-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "yOcv9aPrjfh1GR92",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>When you throw the Weapon as part of an Attack, it automatically returns to your hand once the Attack is resolved.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Healthy",
      "img": "icons/magic/life/heart-area-circle-red-green.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "Xf2UnWRrSovoTmax",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>Any Disease or Poison afflicting you is suppressed. While suppressed, the affliction is not cured but it has no effect on you.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "origin": "Item.UJM5xUteSe3R3t3H",
      "duration": {
        "rounds": 1,
        "startTime": 0,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "name": "Baleful",
      "img": "icons/magic/unholy/strike-body-life-soul-green.webp",
      "_id": "GIJfQFWdyjwA7dSz",
      "type": "base",
      "system": {
        "statusId": "",
        "disableWhen": {
          "mode": "==",
          "path": "",
          "value": ""
        },
        "requireEnhancement": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false
      },
      "changes": [
        {
          "key": "system.events",
          "value": "\"eventType\": \"basic\", \"trigger\": \"turnStart\", \"label\": \"Dampen Heal\", \"postTrigger\": \"delete\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>When you damage a creature with an Attack made usingthe Weapon, the target can’t regain HP until the start of their next turn.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "flags": {
        "dc20rpg": {
          "disableWhen": {
            "path": "",
            "mode": "==",
            "value": ""
          },
          "requireEnhancement": "LBDqCgGuFvrahGiZ",
          "effectKey": "",
          "addToChat": false,
          "duration": {
            "useCounter": false,
            "resetWhenEnabled": false,
            "onTimeEnd": ""
          }
        }
      },
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Disguising",
      "img": "icons/magic/perception/silhouette-stealth-shadow.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "xvjiOJTVwFA2m4mA",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can spend 1 AP to change its appearance to any of your choice. This change is completely illusory, and can be discerned through by succeeding on an Investigation Check against your Save DC.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Precise Protection",
      "img": "icons/magic/defensive/shield-barrier-deflect-teal.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "vAK2KfeXo5nN9rAL",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.defences.precision.bonuses.always",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +1 bonus to PD.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Area Protection",
      "img": "icons/magic/defensive/shield-barrier-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "kuJiEeoVemX8CfAj",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.defences.area.bonuses.always",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +1 bonus to AD.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Save Protection",
      "img": "icons/magic/defensive/shield-barrier-blades-teal.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "ND6pwHdBMx64cY78",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.mig.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.attributes.agi.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.attributes.int.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.attributes.cha.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +1 bonus to Saves.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Barrier",
      "img": "icons/magic/life/cross-embers-glow-yellow-purple.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "aVYz8J6JGlPhWyaP",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.events",
          "mode": 2,
          "value": "\"eventType\": \"healing\", \"trigger\": \"turnStart\", \"label\": \"Barrier\", \"value\": 1, \"type\": \"temporary\", \"actorId\": \"#SPEAKER_ID#\"",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain 1 Temp HP at the start of each of your turns.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "False Tracks",
      "img": "icons/creatures/abilities/paw-print-pair-purple.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "1YpdpMe4yxu9oyL5",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can choose to leave behind footprints that appear as those of another creature of your choice of the same size.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Non-Detection",
      "img": "icons/magic/perception/orb-crystal-ball-scrying.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "hwBo239uAcj144K5",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can’t be perceived, detected, or located by magical means.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Arcane Compass",
      "img": "icons/tools/navigation/compass-plain-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "JB4dwxgjq0DxgeRC",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You always know the name of the plane you’re on, where you are on that plane, and which way north is (if there is a north).</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Arcane Clock",
      "img": "icons/magic/time/clock-stopwatch-white-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "axNEMuMPjSSjEAc7",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You always know the time of day and the year, month, and day it is (using your preferred time division and calendar systems).</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "img": "icons/magic/perception/eye-slit-red-orange.webp",
      "origin": "Compendium.onyxstudios-homebrew-dc20.items.Item.1XMJGndaMfl1LwI2",
      "duration": {
        "rounds": null,
        "startTime": 0,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "name": "Sentinel",
      "_id": "0aHlwNHOranxfnKq",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.rollLevel.onYou.skills",
          "value": "value\": \"1, \"type\": \"adv\", \"label\": \"Sentinel\", \"skill\": \"awa",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.statusResistances.surprised.immunity",
          "value": "true",
          "mode": 5,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You have ADV on Awareness Checks and can’t be Surprised. The item automatically wakes you if you’re sleeping when Combat begins, or you start your turn asleep while in Combat.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "flags": {
        "dc20rpg": {
          "disableWhen": {
            "path": "",
            "mode": "",
            "value": ""
          },
          "requireEnhancement": ""
        }
      },
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Water Breathing",
      "img": "icons/magic/water/bubbles-air-water-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "ebi1FuzjVlQyDBHP",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can breath normally underwater.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Unending Breath",
      "img": "icons/magic/water/bubbles-air-water-pink.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "5T4WfQhU5eEeiPRx",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>Your Breath Duration becomes infinite.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Driftwood",
      "img": "icons/commodities/wood/log-cut-cherry-brown.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "fEAjAICMhgxH38EJ",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>Whenever you start your turn underwater, you can choose to automatically rise 10 Spaces toward the surface without spending movement. This effect happens automatically while you’re Unconscious or dead.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Nourishing",
      "img": "icons/magic/life/heart-shadow-red.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "klcHcKND9JpxUO29",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You don’t need to eat or drink.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Cold Weather Acclimation",
      "img": "icons/magic/water/snowflake-ice-blue-white.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "4DdWuOiWNnPA8QeJ",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You ignore the effects of temperatures as low as -50 degrees Fahrenheit (-45 Celsius).</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Hot Weather Acclimation",
      "img": "icons/magic/fire/flame-burning-yellow-orange.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "7HhlZJUHbgVAH5MI",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You ignore the effects of temperatures as high as 150 degrees Fahrenheit (65 Celsius).</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Might Increase",
      "img": "icons/magic/control/buff-strength-muscle-damage-orange.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": null,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "RZeKKAxMVyQdNqc0",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const mig = actor.system.attributes?.mig?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (mig <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Health Increase\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Health Increase\",\n    img: \"icons/magic/life/cross-worn-green.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n           statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.resources.health.bonus\",\n      mode: 2,\n      value: \"3\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>Your HP Maximum increases by 3.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.mig.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Might Increase Attribute Limit\", \"withEffectName\": \"Might Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Might increases by 1, up to your Attribute Limit. If your Might is already equal to your Attribute Limit, you instead gain +3 maximum HP.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Agility Increase",
      "img": "icons/skills/movement/arrows-up-trio-red.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": null,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "e6FBR27WYeX7ub2l",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const agi = actor.system.attributes?.agi?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (agi <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Precise Protection\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Precise Protection\",\n    img: \"icons/magic/defensive/shield-barrier-deflect-teal.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n      statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.defences.precision.bonuses.always\",\n      mode: 2,\n      value: \"1\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>You gain a +1 bonus to PD.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.agi.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Agility Increase Attribute Limit\", \"withEffectName\": \"Agility Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Agility increases by 1, up to your Attribute Limit. If your Agility is already equal to your Attribute Limit, you instead gain +1 PD.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Intelligence Increase",
      "img": "icons/commodities/biological/organ-brain-pink.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": null,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "ODYBvhzLEt46QFJx",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const int = actor.system.attributes?.int?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (int <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Skill Increase\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Skill Increase\",\n    img: \"icons/commodities/tech/blueprint.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n      statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.skillPoints.skill.bonus\",\n      mode: 2,\n      value: \"2\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>You gain a +2 Skill Points.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.int.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Intelligence Increase Attribute Limit\", \"withEffectName\": \"Intelligence Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Intelligence increases by 1, up to your Attribute Limit. If your Intelligence is already equal to your Attribute Limit, you instead gain +2 Skill Points.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Charisma Increase",
      "img": "icons/skills/social/diplomacy-handshake-yellow.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": null,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "ayYVDwSwGyKuka4f",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const cha = actor.system.attributes?.cha?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (cha <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Grit Increase\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Grit Increase\",\n    img: \"icons/magic/control/buff-luck-fortune-green.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n      statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.resources.grit.bonus\",\n      mode: 2,\n      value: \"2\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>Your Grit Point Maximum increases by 2.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.cha.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Charisma Increase Attribute Limit\", \"alwaysActive\": true, \"withEffectName\": \"Charisma Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Charisma increases by 1, up to your Attribute Limit. Ifyour Charisma is already equal to your Attribute Limit, you instead gain +2 Grit Points.</p>",
      "tint": "#ffffff",
      "transfer": true,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Skill Increase",
      "img": "icons/commodities/tech/blueprint.webp",
      "origin": "Actor.OCuWdh2hIz46Vul3.Item.xyKaU9FrFJsX6Vgi",
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "duration": {
        "startTime": 0,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": 0,
        "startTurn": 0,
        "combat": null
      },
      "transfer": true,
      "type": "base",
      "tint": "#ffffff",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.skillPoints.skill.bonus",
          "mode": 2,
          "value": "2",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +2 Skill Points.</p>",
      "statuses": [],
      "_id": "s3WmbeatsifxfDt7",
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Skill Increase",
      "img": "icons/commodities/tech/blueprint.webp",
      "origin": "Actor.OCuWdh2hIz46Vul3.Item.xyKaU9FrFJsX6Vgi",
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "duration": {
        "startTime": 0,
        "seconds": null,
        "rounds": null,
        "turns": null,
        "startRound": 0,
        "startTurn": 0,
        "combat": null
      },
      "transfer": true,
      "type": "base",
      "tint": "#ffffff",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": false,
          "resetWhenEnabled": false,
          "onTimeEnd": ""
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.skillPoints.skill.bonus",
          "mode": 2,
          "value": "2",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +2 Skill Points.</p>",
      "statuses": [],
      "_id": "s3WmbeatsifxfDt7",
      "sort": 0,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.2",
        "lastModifiedBy": null
      }
    },
    {
      "name": "[Damage Type] Resist (Potion)",
      "img": "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/13.png",
      "origin": "JdjAUOdy0319BHlZ",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.damageReduction.damageTypes.[Damage Type].resist",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain [Damage Type] Resistance (1)</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_id": "8il8pq6Ula3BnPIT",
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "[Damage Type] Immunity (Potion)",
      "img": "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/33.png",
      "origin": "JdjAUOdy0319BHlZ",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.damageReduction.damageTypes.[Damage Type].immune",
          "value": "true",
          "mode": 5,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain [Damage Type] Resistance (Immune)</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_id": "thRRl6MmBhy3YuAl",
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "[Damage Type] Resistance (Potion)",
      "img": "https://assets.forge-vtt.com/662859f46cc7f6a1844c012b/1%20Assets%20Modules/Fantasy%20RPG%20Icons%20Pack/RPG%20Buff%20skill%20icons/PNG/19.png",
      "origin": "JdjAUOdy0319BHlZ",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.damageReduction.damageTypes[Damage Type].resistance",
          "value": "true",
          "mode": 5,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain [Damage Type] Resistance (Half)</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_id": "6xlCane0P10bnBnp",
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Might Increase (Potion)",
      "img": "icons/magic/control/buff-strength-muscle-damage-orange.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": 3,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "FNp5sNTy04YmmCRI",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const mig = actor.system.attributes?.mig?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (mig <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Health Increase\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Health Increase\",\n    img: \"icons/magic/life/cross-worn-green.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n      statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.resources.health.bonus\",\n      mode: 2,\n      value: \"3\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>Your HP Maximum increases by 3.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.mig.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Might Increase Attribute Limit\", \"withEffectName\": \"Might Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Might increases by 1, up to your Attribute Limit. If your Might is already equal to your Attribute Limit, you instead gain +3 maximum HP.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Agility Increase (Potion)",
      "img": "icons/skills/movement/arrows-up-trio-red.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": 3,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "RxLV4y3FpsbmEnAm",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const agi = actor.system.attributes?.agi?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (agi <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Precise Protection\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Precise Protection\",\n    img: \"icons/magic/defensive/shield-barrier-deflect-teal.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n      statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.defences.precision.bonuses.always\",\n      mode: 2,\n      value: \"1\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>You gain a +1 bonus to PD.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": false,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.agi.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Agility Increase Attribute Limit\", \"withEffectName\": \"Agility Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Agility increases by 1, up to your Attribute Limit. Ifyour Agility is already equal to your Attribute Limit, you instead gain +1 PD.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Intelligence Increase (Potion)",
      "img": "icons/commodities/biological/organ-brain-pink.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": 3,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "2I5wEjRcmLfewJEG",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const int = actor.system.attributes?.int?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (int <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Skill Increase\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Skill Increase\",\n    img: \"icons/commodities/tech/blueprint.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n      statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.skillPoints.skill.bonus\",\n      mode: 2,\n      value: \"2\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>You gain a +2 Skill Points.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.int.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Intelligence Increase Attribute Limit\", \"withEffectName\": \"Intelligence Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Intelligence increases by 1, up to your Attribute Limit.If your Intelligence is already equal to your Attribute Limit, you instead gain +2 Skill Points.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Charisma Increase (Potion)",
      "img": "icons/skills/social/diplomacy-handshake-yellow.webp",
      "origin": "Item.1N3HJ74FJvsBMsVH",
      "duration": {
        "startTime": 0,
        "combat": null,
        "startRound": 0,
        "startTurn": 0,
        "seconds": null,
        "rounds": 3,
        "turns": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "vDNKbiSiBCAazjWb",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "(async () => {\n  if (!actor || !effect) return;\n\n  // Get the parent item this effect is on\n  const parentItem = effect.parent?.documentName === \"Item\" ? effect.parent : null;\n  if (!parentItem) {\n    ui.notifications.warn(\"This effect is not attached to an item.\");\n    return;\n  }\n\n  const level = actor.system.details?.level ?? 0;\n  const cha = actor.system.attributes?.cha?.current ?? 0;\n\n  const threshold =\n    level >= 20 ? 6 :\n    level >= 15 ? 5 :\n    level >= 10 ? 4 :\n    level >= 5  ? 3 :\n    level >= 1  ? 2 :\n    Infinity;\n\n  if (cha <= threshold) return;\n\n  // Remove the current effect from the item\n  await parentItem.deleteEmbeddedDocuments(\"ActiveEffect\", [effect.id]);\n\n  // Add the new \"Grit Increase\" effect to the item\n  await parentItem.createEmbeddedDocuments(\"ActiveEffect\", [{\n    name: \"Grit Increase\",\n    img: \"icons/magic/control/buff-luck-fortune-green.webp\",\n    origin: parentItem.uuid,\n    disabled: false,\n    flags: { dc20rpg: {} },\n    duration: effect.duration,\n    transfer: true,\n    type: \"base\",\n    tint: \"#ffffff\",\n    system: {\n      statusId: \"\",\n      duration: {\n        useCounter: false,\n        resetWhenEnabled: false,\n        onTimeEnd: \"\"\n      },\n      effectKey: \"\",\n      macro: \"\",\n      addToChat: false,\n      nonessential: false,\n      disableWhen: { path: \"\", mode: \"\", value: \"\" },\n      requireEnhancement: \"\"\n    },\n    changes: [{\n      key: \"system.resources.grit.bonus\",\n      mode: 2,\n      value: \"2\",\n      priority: null,\n      useCustom: false\n    }],\n    description: \"<p>Your Grit Point Maximum increases by 2.</p>\",\n    statuses: []\n  }]);\n})();",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.cha.bonuses.value",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.events",
          "value": "\"eventType\": \"macro\", \"trigger\": \"effectEnabled\", \"label\": \"Charisma Increase Attribute Limit\", \"alwaysActive\": true, \"withEffectName\": \"Charisma Increase\", \"actorId\": \"#SPEAKER_ID#\"",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Charisma increases by 1, up to your Attribute Limit. Ifyour Charisma is already equal to your Attribute Limit, you instead gain +2 Grit Points.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Water Breathing (Potion)",
      "img": "icons/magic/water/bubbles-air-water-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 6,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "33Cu7BvdMU8huVrH",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [],
      "description": "<p>You can breath normally underwater.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Barrier (Potion)",
      "img": "icons/magic/life/cross-embers-glow-yellow-purple.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "66ljI9YU9VVm1p25",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.events",
          "mode": 2,
          "value": "\"eventType\": \"healing\", \"trigger\": \"turnStart\", \"label\": \"Barrier\", \"value\": 1, \"type\": \"temporary\", \"actorId\": \"#SPEAKER_ID#\"",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain 1 Temp HP at the start of each of your turns.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Save Protection (Potion)",
      "img": "icons/magic/defensive/shield-barrier-blades-teal.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "oYyBuOlO88Rso5Nu",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.attributes.mig.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.attributes.agi.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.attributes.int.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        },
        {
          "key": "system.attributes.cha.bonuses.save",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +1 bonus to Saves.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Area Protection (Potion)",
      "img": "icons/magic/defensive/shield-barrier-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "lj76yZJS3Ph0AplK",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.defences.area.bonuses.always",
          "value": "1",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +1 bonus to AD.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Precise Protection (Potion)",
      "img": "icons/magic/defensive/shield-barrier-deflect-teal.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "bCWh6ElYf0UsIjyT",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.defences.precision.bonuses.always",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a +1 bonus to PD.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Fly Speed (Potion)",
      "img": "icons/magic/control/buff-flight-wings-runes-blue-white.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 6,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "HgUvSwg3BFU9t6yp",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.flying.fullSpeed",
          "value": "true",
          "mode": 5,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Fly equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Burrow Speed (Potion)",
      "img": "icons/magic/earth/barrier-stone-explosion-debris.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 6,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "88oYdr3jfRaWdAQO",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.burrow.fullSpeed",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Burrow equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Speed (Potion)",
      "img": "icons/skills/movement/feet-winged-boots-glowing-yellow.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 6,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "GXiNHr0Pv4GfVh6Z",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.ground.bonus",
          "mode": 2,
          "value": "2",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Speed increases by 2.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Climb Speed (Potion)",
      "img": "icons/tools/hand/hammer-and-nail.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 6,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "K9DMUrj7CAS0G2GJ",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.climbing.fullSpeed",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Climb Speed equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Swim Speed (Potion)",
      "img": "icons/tools/nautical/anchor.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 6,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "IPa9q1Qj8E3RaIuR",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.movement.swimming.fullSpeed",
          "mode": 5,
          "value": "true",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>You gain a Swim Speed equal to your Ground Speed.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Grit Increase (Potion)",
      "img": "icons/magic/control/buff-luck-fortune-green.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "era2YcGKTM1f76F2",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.resources.grit.bonus",
          "value": "2",
          "mode": 2,
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your Grit Point Maximum increases by 2.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Stamina Increase (Potion)",
      "img": "icons/magic/movement/abstract-ribbons-red-orange.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "cexha96BfCCNE7jT",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.resources.stamina.bonus",
          "mode": 2,
          "value": "1",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your SP Maximum increases by 1.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    },
    {
      "name": "Mana Increase (Potion)",
      "img": "icons/magic/symbols/chevron-elipse-circle-blue.webp",
      "origin": "Item.6xQbPKfwAbvYnZqA",
      "duration": {
        "startTime": 0,
        "combat": null,
        "seconds": null,
        "rounds": 3,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "flags": {
        "dc20rpg": {}
      },
      "_id": "URd4tgmPKrKJsGFn",
      "type": "base",
      "system": {
        "statusId": "",
        "duration": {
          "useCounter": true,
          "resetWhenEnabled": false,
          "onTimeEnd": "delete"
        },
        "effectKey": "",
        "macro": "",
        "addToChat": true,
        "nonessential": false,
        "disableWhen": {
          "path": "",
          "mode": "",
          "value": ""
        },
        "requireEnhancement": ""
      },
      "changes": [
        {
          "key": "system.resources.mana.bonus",
          "mode": 2,
          "value": "4",
          "priority": null,
          "useCustom": false
        }
      ],
      "description": "<p>Your MP Maximum increases by 4.</p>",
      "tint": "#ffffff",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "coreVersion": "13.348",
        "systemId": "dc20rpg",
        "systemVersion": "0.9.7.3",
        "lastModifiedBy": null
      }
    }
];

// Allows the Generator and Builder to access these effects
window.MAGIC_PROPERTY_EFFECTS = MAGIC_PROPERTY_EFFECTS;