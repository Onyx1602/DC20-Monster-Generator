// Prevent redeclaration if script is loaded multiple times
if (typeof window !== "undefined" && window.__dc20_ai_ability_generator_loaded__) {
  // Already loaded, do nothing
} else {
  if (typeof window !== "undefined") window.__dc20_ai_ability_generator_loaded__ = true;

  // --- Compendium Ability Pools (by Creature Type and Role) ---
  const TYPE_ABILITY_IDS = {
    "Aberrations": [
      // Amphibious
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JEexpdn48pCmSrQ1",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.s6T8uoL471LvJ8N5",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ZSwvvejr4tDqgyOV",
      // Corrosive Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tM089xcLERZUNh46",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.0uceLGjdNrasq2HP",
      // Lurking Shadow
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.AXkUe8mKuTo5x7mo",
      // Mental Burst
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.SdzQ3aoO7Ho3rm0p",
      // Mucous Cloud
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GHkNnGWpZMlWpcW5",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sUb64t4H5pBHIkRS",
      // Probing Telepathy
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.F5AVcWHrsUdu2RBx",
      // Psi Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zU1huueXb5KQ0bmg",
      // Psionic Strike
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2h7PLSl76wkY8k2T",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HVa8R9huZxUIaRFm",
      // Steps of the Night
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.IoMRVnB2WxI8HZaf",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WIXFiBKXYd4TOKsF",
      // Telepathic Link
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JTZes77MTArQDKFe",
      // Tentacle
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.TJU1QCe1y2LVilNA",
      // Warping Grasp
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.QF62UBLk6uac9fJy",
      // Whispers of Despair
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.KZA6wRwTzqzzhSir"
    ],
    "Beasts": [
      // Adrenaline Pheromones
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.xIAj1vKCOv6eynVL",
      // Amphibious
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.rq12ZshO6F4nfX2Z",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9Ba1r6q7MSsjLmyH",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.PboYLHdFv6X1WO9p",
      // Defensive Stance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.XsrdqwjoAZGIswsg",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JwaOdBTg3scnfdL1",
      // Gore
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.frMgn4G4lYP6HjdM",
      // Hivemind Telepathy
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gz2Q9POm6A6wvdFt",
      // Instilled Loyalty
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.t9pa2NMZtvzz6KhM",
      // Keen Sense (Hearing)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ul1HtGMNP21PfFhQ",
      // Keen Sense (Sight)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mb0PergQQY2IjNCm",
      // Keen Sense (Smell)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.uD46x2V6hTyMr8Gu",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.m7udgP49HWdzKMYY",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.G3xlMk4Ho9z6TNgh",
      // Pounce
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.29eZDA542GR5Vxj2",
      // Reckless Charge
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5xYEH3iF9U0ttVJf",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gYKnfqaZBcrckvMn",
      // Spider Climb
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FLL0kr8UeN2YDbdr",
      // Stalking the Prey
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gxleF5TPT3fQ6w8k",
      // Sting
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.1pGZVk5dsjioda9C",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.PWHGxzyEHC2bGfYA",
      // Tunneler
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.G9uUHLnhjgICqY3B",
      // Web Snare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.eFv38pXWo8V2RTkk"
    ],
    Celestials: [
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.R4S0RLtgmZsB9CAK",
      // Blazing Resurgence
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jR0Qa3FmtTn6nXKN",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tfYGVA5tBdi3twi9",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.OL38gM0PGa90dQfe",
      // Flare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jF1EyY3j9zgF9GZv",
      // Guiding Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Ec2QxJ4OAyOqRxTB",
      // Heal
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DsgTrMBQwPv8qnPx",
      // Holy Retribution
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.oFjaSMEnDZExyhZZ",
      // Luminous Presence
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5kI3TLbzQDj73NS1",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Miw1i0iK6RFdVlPR",
      // Purify The Sinner
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.76pPi6oKoSUf006O",
      // Radiant Strike
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.oWOzoOjecEzlPKSK",
      // Rejuvenation
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.XZWnMzC0oL4lvTnR",
      // Sacred Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5MssAEHpgcr2l8HE",
      // Searing Revelation
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.3kfKr8Ypl8M3HdMC",
      // Shield of Faith
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8iVq3xVuloNr23se",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Pufe2QpexfS8TnH5",
      // Spear of Light
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.r02ZSOMIlQ7Hsz98",
      // Sun's Wrath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FeK8Y4USK4JThBq8",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Ts3MarFT2DtZABzw",
      // Truesight
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.1orXvXOTH8Gf3UFM"
    ],
    Constructs: [
      // Analyze Tactic
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.rQcBqwoFBoLEop8P",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Yf31nEcROb8WpRih",
      // Bladed Defense
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.lQrndrMk2xCfSrPf",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zDAVLG6QpURuET0W",
      // Clockwork Precision
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.lPQwhH2LGSdUznOA",
      // Clockwork Slash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.KcldcbvpWelOnOyw",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vgknSJkAXbWkaVIV",
      // False Appearance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HbcdI8GxPhpOvHgH",
      // Katana Strike
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EOzrEiFUeQ4HpW6s",
      // Keen Sense (Hearing)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.THk4dh2CBy9V4upm",
      // Keen Sense (Sight)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gtCycao99PeCuxdk",
      // Lightning Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.A2d04Yot9kBZCzoL",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.bIL4spNPHJdhTKG5",
      // Reckless Charge
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.d0A86XJHCNwet4yW",
      // Reinforce Armor
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GljDSkohayzrZcsy",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Vd3Ohxc7Dsc4MZsS",
      // Steel Resolve
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.MxlTeZzmAUuECFwz",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ptcnNF4xVydRSPPO"
    ],
    Dragons: [
      // Amphibious
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.eQ7PrJhUwrpHlwAk",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.YtR7VsDqmaFGDeAF",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Sz9HPay67aJX95R7",
      // Corrosive Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.0lMQFv4WSjTKyVFV",
      // Damaging Pulse
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.t8JdVz2SwjufjOQ4",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WZv0PzjJJzsMC85F",
      // Electric Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9p0MRU5TV3G8sylo",
      // Enrage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Zm3l8ZQSxfTmMR3x",
      // Fire Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BOqc1mUFUk8CrTC5",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.geih6UbvhZcHBbY4",
      // Psychic Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GZUXvtotRTN88GjQ",
      // Singularity Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.SavdHCH2mt1wDqIo",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.nRm1cuEVq84OXaOf",
      // Spider Climb
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ZKJGsKbRCHbOHzBh",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.3p32vKLK5wFnEbQ3",
      // Terrifying Roar (Doomed)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wZeW1yFurcawXV9o",
      // Terrifying Roar (Exposed)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.op2URpBW92r9xhP5",
      // Terrifying Roar (Stunned)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.0gu9qpHZ04rfT4hP",
      // Toxic Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gGxBZh4lfctYrquc",
      // Tunneler
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GKgAkn3wm4MSIm3s",
      // Wing Cyclone
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Vpb2ojYvCEkteYrX",
      // Winged Terror
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.soNrUbXRWy8YPGpC"
    ],
    Elementals: [
      // Air Pulse
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.V1CqG8zPDSq0bEsv",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.nPw8aUgMBF3my5rs",
      // Boulder
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BNlhqY3GG4hoSslx",
      // Burning Touch
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.joenMqgpU5ydEQRf",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9yRgKaAA66x3Y9as",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.q4qbQt3f6guvGESv",
      // Drench
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5nqF7osuaEXlOsxj",
      // Elemental Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mWiN28soZgu7PZDz",
      // Evasive Maneuvers
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.3y34vRZgMW6su4rp",
      // Fire Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JySqse0xuAlD4507",
      // Fireball
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vAzYDrfwUySG28iX",
      // Flare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.xsfBClNuLdb38RH9",
      // Frost Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.45EtNYkeZHkcBeXM",
      // Gust Slash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.4vCuVSDULni7TaKt",
      // Ignite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9weJyvCXBBotDki6",
      // Lightning Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.6TXHwLwPOVdB5FFn",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.CuY0pinYA7ZRHlyf",
      // Quake
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.SiNHRpBlK1sv8Sz5",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.TcYuMwwaBUir21ea",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ZK4Zqf25ihkYQUrh",
      // Tunneler
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.phO28z9amIEw8wsz",
      // Water Shield
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Qr6wa0PILy7H8UYo",
      // Whirlwind
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.F4RhA4ph9M7WMRrF"
    ],
    Fey: [
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.v6G5B39BTNJJoCMT",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HpJu5BdkyVhvOxFl",
      // Deceptive Whispers
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5lT0982HnymSccT9",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.B2rOdCthuTutjiHu",
      // Ethereal Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wkLn1ZtArj73QEZI",
      // Fey Charm
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Hy9t7WDJdxAfsPIk",
      // Flickering Form
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.daoJlEPDRNmlTFxM",
      // Gust Slash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Ra7QYbCVAt1DbxCK",
      // Illusory Veil
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pLnyt65gL7Y5u1wf",
      // Impostor Syndrome
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.MPLbC4d06CdnaUVM",
      // Luminous Presence
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EadStxWYswTeIJAd",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.YM9vklEsgGg87Xpp",
      // Overgrown Thorn Grass
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gIAT9WxAAR1NeDVj",
      // Radiant Glimmer
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.K3qJHjlHwRUz31xI",
      // Silent Image
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kS6Sz3o96owo7OCW",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.rixg7r1M57AAl31m",
      // Sting of Light
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.g2qfl8HB4i6JJCLx",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.4QWtaZNbdlPkPDzH",
      // Vicious Mockery
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kS6Sz3o96owo7OCW"
    ],
    Fiends: [
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.6IjVIz5Zts5pg2B0",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dpP3rkqGFdEBwkj0",
      // Darkness
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.67PgqqKrnwd8AmBk",
      // Death Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jHj0fJOXmK2V0WFy",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.SIaD5c95fbatK753",
      // Fiery Rebuke
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ylH7rjHd6wA1IO2Y",
      // Fire Aura
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.yNZnUgSzsaUrDO0F",
      // Fire Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sT7O1g2A7RLYBq6Z",
      // Illumination
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.C0aBagQLvFMwMSLQ",
      // Immutable Form
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.xk5ejLjPOKTKfwUV",
      // Infernal Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.C0wQK0Gps27TYPKj",
      // Instilled Loyalty
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2heeMA3UFYR4wD4d",
      // Keen Sense (Hearing)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8ODaPj8EHP7zWG3J",
      // Keen Sense (Sight)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.hQm45MHolOydBmeN",
      // Keen Sense (Smell)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vYM3UZH0TKyi0dMu",
      // Lightning Longsword
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.3HiT7HBMnoLiv6YZ",
      // Magic Resistance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Whf7v8tKXvQh1CTK",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ikRqZo13Mme3VlgO",
      // Sacrificial Burst
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.l8R585x86vXkKCSW",
      // Shadow Stealth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.6fdAOjlFGaSSvwwM",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.RNsnvH36ywG2wTz5",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.glOSNZf4mtc1RH6f",
      // Teleport
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.09Ap3WjilyrHYQUc",
      // Umbral Negation
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pFNuBcrAO0KEkPXK",
      // Vampiric Fang
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.n2ANmmbzlz8ysbrq",
      // Whip
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.3I4vMAOcRqAmgsFI",
      // Whirling Saw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jwQmGWima6r4cxX1"
    ],
    Giants: [
      // Big Whole Squeeze
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8MMBTZbkvo4g6gRA",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vx0FEDY0aG77dMGO",
      // Blacksmith Mastery
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.W5SDqQHmNZ9WU9yn",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.a7PpyzxujfjwvQrB",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.unvEoz4HqomHrVJP",
      // Earth Smash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.4PFFLeMoSlIaeiPQ",
      // Ferocious Endurance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BY5Id0BHOVyNwVqp",
      // Greatclub
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BsyF65Lyt7FycXzs",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sayEk2sPOUxRxkGp",
      // Overwhelming Roar
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.nPZpi2ZsjBBI2NhE",
      // Poor Depth Perception
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EpeH9qHdLoHtzGfR",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ezB2aQ68Sk9cai1w",
      // Strong Arms
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2uqfRql443WIHBNu",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tivQ2xN2WA22GE7x",
      // Throw Rock
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.X3JaPx07KoBQ2KnT",
      // Yeet The Trash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.nMAySXvTXgyEZ1HU"
    ],
    Humanoids: [
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.0ka5FIPIM6NThGvD",
      // Bow
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.AjTOm4u7i5EfvZP3",
      // Brute
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wMx7yubOqgjO9PtS",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Xlzppal75tkwUIq4",
      // Dagger
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.UEJiWtIpC9imdXFC",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vu5VsOqlt88adsPL",
      // Distracting Taunt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HdZNUKsbJZtGiu9Z",
      // Elusive Dash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DiIg1QhuZXWCoa8R",
      // Intimidating Presence
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wnVUZUuhTN0rBYs1",
      // Mace
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.7gYu8U6Lr1HEEtae",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.KJKFhK84aZfusRbG",
      // Morningstar
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.C55tA9FPlX8FuL1L",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jJrsnKbiXkFJES2q",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9A3ZwjWspn9vpbvL",
      // Relentless
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.PZxrYTBGcmSmopjc",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mDOqFHt6XlFkilNF",
      // Surprise Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JUVAhYcFTbBh7h3k",
      // Sword
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WMwYz9DgBmnXVY43",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FDUKGLQOK1O3mxOt",
      // WarCry
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.f3bHe5RzjPT10ebr"
    ],
    Monstrosities: [
      // Amphibious
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.enRKq4aDordwkReI",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.E49axnosB1DPdQ8I",
      // Boulder
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.qMPW2o8I49L8pn47",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Ik1XPapmT0X5Spvt",
      // Constrict
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.49wEwY5Dp8ADndry",
      // Corrosive Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.76iDw9vQ7o71G1M1",
      // Damage Type Sensitivity
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Hz4DfQZjonx8OwYO",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vBVL9ZA1ZEH8To8o",
      // False Appearance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Y0CD8sQawyEkf5nZ",
      // Horrifying Screech
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.s4KW5knKuu7LbSAT",
      // Icy Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vIvsy0lcgsySVxLO",
      // Instilled Loyalty
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2FHYcKnedzeHBQ2r",
      // Keen Sense (Hearing)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tfMoqmkRfG137S05",
      // Keen Sense (Sight)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.V7lEnwgYMSrROC3x",
      // Keen Sense (Smell)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.NVtizGtP2TKvWmoU",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.y9A8C9Z644pOsdmq",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.MYTRjRH1EYUaEPtq",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EKlHZDFneeA8wSMO",
      // Stalking the Prey
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.z7RIFPaSZrgXwqtw",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.e7qpjlHntP5PWRTV",
      // Web Snare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Cr2eYVYPaQbyPuxh"
    ],
    Ooze: [
      // Amorphous Escape
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.lmmszPPMTbB8valD",
      // Amphibious
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ogn8T0CY7Qd4Sdph",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.TEeCM0Oq2Cx4VPYY",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.fSdwD8GSdZe2PyE7",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DK3wiJy2ZJGd7F03",
      // Engulf
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.adg9whvo7TAFUlIB",
      // Frightening Glare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.D0vXha614xu1aaL9",
      // Gluey Stomp
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.35W8uzSjBJpXUTlw",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tkI0xJhrSb5WRAiC",
      // Ooze Lash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.0HiszOQzFVUPwECd",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.rQt952fJzLflAaBX",
      // Parasitic Assault
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9zWrampiIr0oQv0q",
      // Sacrificial Burst
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.qR27eyLfccmjxJuB",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sY5BOYgQ3uYIR4ev",
      // Symbiotic Absorption
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BgIuC6WZS3wyOoxt",
      // Symbiotic Tendrils
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.iu8HtuxhJNrka9zp",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wXsRSLN8vsrcRA1y",
      // Tendril Slash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.E7ANaQIVWFtXYJPd"
    ],
    Plants: [
      // Ambush Predator
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DThjfb5XomKhngML",
      // Amphibious
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.SwiiRf5jRWgu5yb5",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DIzKQVlNnDjvpF1g",
      // Blooming Perfume
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.xxpVmZKkyVktkX9c",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Ujo7ZjeJg8PjmroE",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FjRjLnw2PsP9wRWq",
      // Entangle
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tbafBdoPXUPN8aWM",
      // Instilled Loyalty
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ehwocJdTjISwBT0P",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.PspukYtwvtE20Oad",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.hMO2wsFJaiHQtD3J",
      // Photosynthetic Resilience
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.VhL5Swmta8cUHa1N",
      // Rooted Regrowth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.URO9qbfC2DKBRsec",
      // Rooted Resilience
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.aE7lTMAfLvO0Yd0c",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.IGApizzeBDWLPbgT",
      // Soporific Spores
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BUZdvR8Ysu92cyPV",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pcv0xRVsS7VteBSr",
      // Thorn Spray
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ezRweBPT8NjHq2QP",
      // Vine Lash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.UfzfW1CQLdmqlYEB"
    ],
    Undead: [
      // Amorphous
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9AMPtk7jpb6uf5sq",
      // Bite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JC1MNUndR0jDMj0w",
      // Bushwhack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HEReOPKkDy8dYZEW",
      // Claw
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.AnRYbY7tuz34GF0q",
      // Corrupting Touch
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2flLFtPLWKz3ZbDf",
      // Darklight Candle
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.nj8LAkophnYpdK7s",
      // Death Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.z5Nsk2XZQ8EkRtIl",
      // Deathly Gaze
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vFpbHpue4ZdmCjD9",
      // Detect Life
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.px2BabSQbyu06jyS",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Cl3SJW6IS4OybGFq",
      // Hold Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.b9xLEcupR2DETtep",
      // Incorporeal Movement
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.SQujczwgbNzTVvdL",
      // Instilled Loyalty
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.bpXaB348Wadm9mxG",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.80BOOtEeT3geNruB",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EtezNtjJGCYcnyqc",
      // Shadow Stealth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zCl3ofBlNUBQ0YIj",
      // Slam
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.u5qdeGkwnk7VvJ1C",
      // Spiked Body
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pnbBdpHUYTiqGbUe",
      // Strength Drain
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.bbWD09Io3r1Tcizh",
      // Tail Swipe
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8iQwSeR2ORaxbPZ3",
      // Unrelenting
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DtBiug2cAkA5U9mL",
      // Vampiric Fang
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.6toPrJHGMJwooJGs",
      // Wail
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9Faqvruswmxr9IKA"
    ]
  };

  const ROLE_ABILITY_IDS = {
    "ambusher": [
      // Blade Flurry
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8p8t5vqgz7WOQjNl",
      // Expose
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GxBKFhTez1uUW2Ci",
      // Hamstring
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.TBBGUoJnvympazWy",
      // Hinder
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.aAU12QrWElULlwoz",
      // Needle Volley
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.cqOttfaboDFwyzzn",
      // Poisoned Dagger
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Xxwg4Z5MxPIH47Gl",
      // Shadow Stealth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.yHkwesMGohflBdj1",
      // Shadow Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.OmmN8G5NaBTW7uaI",
      // Skewer Trap
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FXDjKKQjupPhMCZi",
      // Smokebomb Escape
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.O6gsiwmDWX2tsmHI",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DF6oJvW8LrpXSl3z",
      // Stalking the Prey
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FgJTwEo2G5Ocstbn",
      // Sudden Strike
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.g2JnbqvdESs8zjZa",
      // Surprise Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zU5ZTYWfHANA4VnS",
      // Throat Slash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dxaAKcFTN5a272Y5",
      //Trip
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Pyfxw53L556cSxcs",
      // Tripwire Snares
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2jvQmcHsxjpPbkzB",
      // Whirlwind Blades
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.iviNhhtZABeJtPCS"
    ],
    "berserker": [
      // AD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2DcEt5vvOdW8nCGy",
      // Bleed
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.OXhapIe08HIRO33B",
      // Brutal Overhead Swing
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tXCGOv5xewouRv7o",
      // Charge
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GzmA00qIxJblAOZn",
      // Enrage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.AfT1uPWRWGyLtPGx",
      // Expose
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5Azu6tBz4UuN2yIa",
      // Frenzied Slash
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.fgsEZWlZAUFSjfjK",
      // Howling Sweep
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EJquA3fRgjwTjDlE",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ddBVWYv5NuMM3LnS",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JTdPFocCDPq87rYL",
      // Overwhelming Roar
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.v5m0Jxz3tHuZw7K4",
      // Parry
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dIrDfCpeDqm2Q1WX",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pwMaHNKvj38sbgjU",
      // Power Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.048FxxIPR3BkAoIH",
      // Rage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.LLKDFlAFlOsCRaWA",
      // Reckless Charge
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.NnsrnxIbXFeaIlGu",
      // Savage Backhand
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.nnA7KpnPWsk1gwax",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JaXIN2fof3NHy0jx",
      // Taunt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.UqzL8435mTFZ0PqW",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.XQ1Y8Fk3GgtmaG7Z",
      // WarCry
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.fIRwiG2zqcEVHM9g",
      // Wide Cleave
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zPW6URaYuno40Vmj"
    ],
    "bruiser": [
      // AD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.cIyUn59IqRKWjokU",
      // Bleed
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mNgLuXbNtBU13jLy",
      // Brute
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.nVG09F7J7MXrAlrt",
      // Daze
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jEFMISmVTLQoyVrR",
      // Enrage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5dLKIEcGHOXhgTZz",
      // Expose
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EyRFz3uiIHXWvmS5",
      // Extend Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.h6KeGYqnBQ7U3is9",
      // Ferocious Endurance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WqD3QPjj3oYUJ2nY",
      // Groundbreaker
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.RvE2DSwdjHjkk7Js",
      // Impair
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.j8nsnVMoPZindq80",
      // Intimidating Presence
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Y0SEPzRYiBEZks8o",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ZVv50ulMNVdWGTHP",
      // Overwhelming Roar
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.XEml0krj3XhLCm8R",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HlLgJrcUfh7pay4U",
      // Power Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.odwk2pfrF7oYg8iZ",
      // Relentless
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Gq8wMIe9sdPH84xG",
      // Sweep Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ywOmu5NZ0AilczXo",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ush1wbeQjl8fxDHM",
      // Unrelenting
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WpITjWPtE9muisHO"
    ],
    "caster": [
      // Acid Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FwbC2BVA1FTHTtXT",
      // Air Pulse
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.xo0uTTth24owVP46",
      // Arcane Spark
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pYLsFTKO4kV81Psx",
      // Atomic Mind
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.87gDsYmiM2PrtodE",
      // Boulder
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.qt8qK3U5BrWraEEq",
      // Burning Touch
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WAq271KjWxMUpqUd",
      // Death Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.IzdcCct0QWTPQPED",
      // Drench
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.w8hPwNjFkLEhbmdV",
      // Elemental Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8fFASkL47GH1LzEx",
      // Ember Flicker
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.A7iely7ToD4hE0Rv",
      // Ethereal Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pOT5QsjM9ztA86BE",
      // Fire Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.msOE8BJdyWHkca2k",
      // Fireball
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dNqpUmElb1LJy8fR",
      // Flameshot
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8o2okVvDqD875xHW",
      // Flare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.SiPw2ArynfNaPPwW",
      // Freezing Ring
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.rKyvAGSH9TFZtGCP",
      // Frost Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.yKfmqGf8on8DW9xu",
      // Grand Stream
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.crhLDLqzj0RI1K3Y",
      // Graviton
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Nd3kjPyTiyPHrQXG",
      // Guiding Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JOoqT6RHnpGifgrH",
      // Ignite
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dIfRYBPY7Hr7bMI1",
      // Lightning Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wjRSMkKxUepS7jvb",
      // Magic Resistance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WedvK1WjK0AMmCsP",
      // Mental Burst
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.H3ib6vxZZ3HW6iJR",
      // Moon Light
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.lGzTHVEqhVcsG8US",
      // Poison Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JqfuZvi0TBVlydqq",
      // Psi Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.cgBREPvABqRAmGet",
      // Psionic Strike
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BWRk5kZKR1HnwPmx",
      // Quake
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9N0MJTtMHFIZFEAN",
      // Sacred Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.QirU8GAvGTuEBiVz",
      // Spear of Light
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.yyp5YH8wOSdlv8D8",
      // Superior Caster
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2ScLgexKAnyEC5I7",
      // Thunder Bolt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.6qMVJYq5ug7mvrL5",
      // Whirlwind
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.op3iSDU1r9plSAUz"
    ],
    controller: [
      // Constrict
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9x5XeQMYrAAP5lYy",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ZII0oPbQ2lTvfSrs",
      // Entangle
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zDGaj1fQT5YG1h3w",
      // Force Barrier
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.RTPdRVQKEY4iQ32D",
      // Frightening Glare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.eoqaFfHwHO1cbgng",
      // Magnetic Repulsion
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BK8QjHRDBUqEKAdv",
      // Quake
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kiLPP59OqgvA9wXU",
      // Teleport
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kqxYlJiTOyeZy33V",
      // Throw Rock
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.7PPiFh7s4CUHUQBv",
      // Web Snare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.XScCoOmCM88xta4E"
    ],
    enchanter: [
      // Bewitching Mirage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ML9nyHd3PzYUVSgh",
      // Charm
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.syqSQW1Rqp7oV1rI",
      // Darkness
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.E2pdUVMeZIWYMMAh",
      // Ethereal Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wvaW4qkpQccA3Cct",
      // Frightening Glare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ODlMOYmD0Lfs8N2z",
      // Illusory Veil
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JSDDNbVVnXmz12fE",
      // Immutable Form
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.FPxZ4OknQ7LmFBbS",
      // Lurking Shadow
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.7JOOcI4erwmQwagy",
      // Probing Telepathy
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kOZpL4BxuICFR66S",
      // Psionic Strike
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.bA1cfa2jpjpMqycW",
      // Sleepy Suggestion
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dWtFHTXhrjeksg7D",
      // Telepathic Link
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.IUGIfE5AaDOYLOLF"
    ],
    guardian: [
      // AD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mvjIe77ZtGNkTvlm",
      // Enrage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mrRGpAHaLEl4hmag",
      // Guardian’s Rally
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.A6eDqzEqdAgaR9g7",
      // Intercepting Stance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pxXDGuGbACw884AN",
      // Intimidating Presence
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.xnKDjscSmvA8L6Sq",
      // Overwhelming Roar
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.O1aWBorzqHypJLIu",
      // Parry
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.TvIwcbXTn0jBIcdu",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ScB9HrydwRbTWUH3",
      // Protect
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dHIs6utfKxhfkj0q",
      // Protective Shove
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5VWe9y3mNKf9cJZt",
      // Reinforce Armor
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.W6766UFUGvP4zER0",
      // Side Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Up0k8OkOitJfEUIU",
      // Steel Resolve
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.NCXXkLzT5Um4Ixlw",
      // Taunt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.x24i3G4FqpoDjE66",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.cTFiI6a19iSj7BM9",
      // Unrelenting
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.fuDQjEc5dNl9f546"
    ],
    healer: [
      // Heal
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.wqg5CT8cQscZon7q",
      // Healing Radius (HP)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kn0yAp2Nmdgstp2M",
      // Healing Radius (Temp HP)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.fcsAAlPo3NmwgGcj",
      // Light Regen
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.OL8rWdODcYdZqe3c",
      // Magic Resistance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DinIA33C4AjtqEe8",
      // Moon Light
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vsGd6oKnRtzwt28x",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JuzFNumM3NO43KP8",
      // Regrowth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.viBJSzwHwHxxUSko",
      // Resilience
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.KmdTgfZ1PDRWrWGK",
      // Resolve
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.RrSw46VZam5vGAXH",
      // Shield of Faith
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.hV8J6Vw7Yb6AW3ZB",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.hQ8YbcyONYjhOjDL"
    ],
    hunter: [
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ScFuZUQKbdyifPOt",
      // Bleed
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.S5ZfpF5nQXCOnfdt",
      // False Appearance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.oX0jnXTzet3aBy5b",
      // Expose
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.aC5DzzOe6fo2lDdA",
      // Hamstring
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BFRF6ugfI4BOYerb",
      // Hinder
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HsqCxGofMalj9mWo",
      // Impair
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.d5iLwTb2xxTE8CYP",
      // Keen Sense (Hearing)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kQlO5LCGEn6E4ltj",
      // Keen Sense (Sight)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.yxbIYpLpbXshlTYl",
      // Keen Sense (Smell)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.xFZzFeyFk1DhNhCE",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mz5ZaYa3hmfshUhB",
      // Needle Volley
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.11PejJfj7RtrjUKR",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.TFErmvEj72w6Gnfz",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pE3WGFpjSsoxoM1r",
      // Pounce
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WXNiDMn10YfVLtCg",
      // Shadow Stealth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.OaDKpN3p2Nqy7YNS",
      // Smokebomb Escape
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Ge0Ala65GA49oOUT",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.evXXzXdYTAODVqoE",
      // Stalking the Prey
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.UJvnALw45p1PvaEX",
      // Surprise Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jM9CW7wEEM0eQ5JS",
      // Tripwire Snare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.fF101BL2P8VP3IXU"
    ],
    lackey: [
      // AD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.1WqbCde790aEgrHz",
      // Damage Type Sensitivity
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HBkQH5ByNeS8VTr3",
      // Instilled Loyalty
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.L6SFjOwfLO34l8Su",
      // Intercepting Stance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9lvftSBuswCsKrs6",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.bKtBqMQdijB68q6T",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JZrF3yEQUjv6Ionm",
      // Poor Depth Perception
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BvPvOOhk7v0doamb",
      // Precision
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.6RfnmF4S6RQhGYPW",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.M1u9YXdxpLQ7d6tV",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.9MUlpMQBbpgOXYXF"
    ],
    lurker: [
      // Lurking Shadow
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.X3VKGQFusCljcAsJ",
      // Pack Tactics
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GX93MlidMvxpbkYM",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.cG6R9QGHIrtLBKIu",
      // Pounce
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.4ZSiiRTmnbdnE3OU",
      // Shadow Stealth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.i8iLzq6EBiAbByiR",
      // Shadow Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Xw9QI74HmmGOOVcM",
      // Smokebomb Escape
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Sbox8nG6Q24irphp",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Pd8vu4wZAeWtDeLK",
      // Stalking the Prey
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DsUKFi3ySwLLp27i",
      // Surprise Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WunAMkeKOhSdzVeT"
    ],
    scout: [
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.1etEfrW1l9yCSZ6g",
      // Hold Breath
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.naLy3BU62rFjGDHm",
      // Keen Sense (Hearing)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.tZPrE3FUyROmQRd6",
      // Keen Sense (Sight)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gDrkaZBbC6tvguLX",
      // Keen Sense (Smell)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.qUBN3pQ9tcKV7oh7",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zkVvBHOeJtjVveAw",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sc64m0ujzOxEEViK",
      // Speedy Reflexes
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.OD5gQlxmWKxul10G",
      // Spider Climb
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.a99dmqlRzXpUhSkJ",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.XZEIvJkvbugceQPy"
    ],
    skirmisher: [
      // AD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.2rj9CzMkRnqqt9Z2",
      // Brute
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.UBEvw6lmVG5DU6EQ",
      // Charge
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.J7txt7ZoVgz92bfv",
      // Expose
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.8WDXDb70gIjWy2gL",
      // Extend Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.jjfOAi8bXWs5Tpmv",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.c2nE01YVXc0iA9M0",
      // Multi-attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Id20fSz6jdVjtibn",
      // Needle Volley
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.7wsqoW2UNh3XJQZ2",
      // Parry
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.c5ORlmb8CQmWu6AO",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.C4ge2Vw1FqPBcjDF",
      // Power Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.DmaxUv8nC8s0apKO",
      // Reckless Charge
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dzcQFuPAYUCaGUHh",
      // Relentless
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.pafBK29qyjlPWpGV",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.CizQhMCeLIUSVAHc",
      // Sweep Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.7x6wgyk80nHRSl2n",
      // Taunt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.l0bbZSKGhiZmfy9j",
      // Trip
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.A6P5m6g6Ao75ZsR2"
    ],
    sniper: [
      // Speedy Reflexes
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.x6y2WJBSiPF7aimz",
      // Stalking the Prey
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.fAEWoQ6gGClJWMVD",
      // Steady Aim
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.QpcHrnIZPwqmaUXE",
      // Surprise Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kIDJ9G0H1gVXK7Ry",
      // Ambush Predator
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zSr2tICpLNGMTJJU",
      // Bleed
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sd2F7rEDrTQz1K0r",
      // Difficult Terrain Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Es4N8Z52MDlh4gO4",
      // Expose
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.czC63t9LAcIFUIeK",
      // False Appearance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.AnfMQ1zHwZWEYUtp",
      // Hamstring
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.46mB1wg2IkUOLKZK",
      // Keen Sense (Sight)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Km6gJ7lPQVwC7xNF",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.w1c2nsxsBfa1Ef3x",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Z6i3e2Ppt5p2062I",
      // Power Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.dXX4fNv4nf1viLON",
      // Precision
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.P1ktHBPGQYncd4T2",
      // Shadow Stealth
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.KeVjnPFTvkQze3Q1",
      // Smokebomb Escape
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vNDYqT0Sru38Qhd5",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zz4aXGT4EXWSVRZC"
    ],
    summoner: [
      // AD Increase (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.teVFDkLiJeuOOPJA",
      // Desert (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.m3IOniyG2MHUTQUF",
      // Difficult Terrain Master (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.Sg3ONp3aLmrM4ASg",
      // Magic Resistance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.6uyPRRdUwawR68ip",
      // PD Increase (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BJO9nSC5GidB2R01",
      // Sacrificial Need (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.JrOBKCNvPBg4Taf8",
      // Speed Increase (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.kbSlb4caq6zp9zXp",
      // Summon Creature Type
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.NTGV6fzTY7xfoQg4",
      // Superior Caster
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.a1du3IJKqWMuDbyt",
      // Swamp (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.0j2NydHYs8WSstxU",
      // Tough (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.UwGL6ssoonp1NVcr",
      // Tundra (Summon)
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.GfbKF31SYBtpRAcr"
    ],
    tank: [
      // AD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ZP7E81qsn5F8j65z",
      // Ferocious Endurance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.AL7nTxcpFpy33wjH",
      // Knockback
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.gMOXAuWKrTYsQAnL",
      // Martial Advantage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.KCvZ3HmKu9mfRUOO",
      // Parry
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.KHHPVnCYRx9E0pm4",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zOexSwXxY7w8DewU",
      // Power Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.c0A9ruTM9TZlxSJW",
      // Protect
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.UPTAAvHKBHpMD6sH",
      // Reinforce Armor
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.K5Mr0N4PeRCgoIQk",
      // Relentless
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.cTIWgqCPIl2rS4yK",
      // Resilience
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.oy2o9gPxPvtXMaZv",
      // Steel Resolve
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.HAxe8cbk3XAMDE6F",
      // Taunt
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sB3Ve9F0X7yQpqDH",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.auIAVYJQuBwuZHDC",
      // Unrelenting
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.0GN0axfObW0hk903"
    ],
    trickster: [
      // Bewitching Mirage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.5ouw155iagrrkhuN",
      // Charm
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ASxqTINwJfIgZeGN",
      // Darkness
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.7My7zU7UvB4f5gFe",
      // False Appearance
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.iMVWTfYYdowXWnJz",
      // Flare
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.vaIkRF73R9d4JML2",
      // Graviton
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.AdyJpKnTpNCiCXxN",
      // Illusory Veil
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sUJAtKV2LmT6MRfP",
      // Lurking Shadow
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.cWYosDv9xFmEUBxn",
      // Mischief Master
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.qUlgJAbj3VaZHdkg",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.t5gngkAJslNm7SZ2",
      // Probing Telepathy
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.WmTKkYzXI2t08sn4",
      // Shadow Step
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.iqOjZC9iCuf9Ec0Y",
      // Silent Image
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.B0JrtWl49cl6jpmz",
      // Speed Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mqo70N94b4AoEmLw",
      // Teleport
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.RDutxFSJWv0L731Z",
      // Vicious Mockery
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.3D6uWq0bQAzrRJNo"
    ],
    warden: [
      // AD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.ONTl4mCAGGXdovLM",
      // Coast
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.YXxrLaxYta6YV8dE",
      // Desert
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.MnfSpbWJgySZHIAR",
      // Enrage
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.1Y0nW3DZSrIke8nF",
      // Forest
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.sFh8CM5aB1XhwNhQ",
      // Grassland
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.qvTSoh84wziiJGKP",
      // Intimidating Presence
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.mGQ7yo5NH0ajvhP6",
      // Jungle
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.EXQ9IvbRejOMKKtF",
      // Mountain
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.I9Puzfndf888Ignl",
      // PD Increase
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.hwtO3azHIzNQoKNI",
      // Power Attack
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.qmx7U3qdJCr67I11",
      // Reinforce Armor
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.4Zl3UG6Uxfk5pQga",
      // Steel Resolve
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.YyXVF0lVTfDMDawL",
      // Subterranean
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.eCOBZd6XUBtbWczw",
      // Swamp
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.rP2gqSK09ov6yagS",
      // Tough
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.P3hFcnKEBcatqExS",
      // Tundra
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.BMLpG3evCkyRBADH",
      // Unrelenting
      "Compendium.dc20-monster-generator.monster-generator-abilities.Item.zl4Zz9Gq8TUJcL5K"
    ],
  };

  // --- Ability Count Tables ---
  const TYPE_ABILITY_COUNT_BY_LEVEL = {
    "-1": 2, "0": 3, "1": 4, "2": 4, "3": 4, "4": 4, "5": 5, "6": 5, "7": 5, "8": 5, "9": 5,
    "10": 6, "11": 6, "12": 6, "13": 6, "14":  6, "15": 7, "16": 7, "17": 7, "18": 7, "19": 7, "20": 8
  };
  const ROLE_ABILITY_COUNT_BY_LEVEL = {
    "-1": 0, "0": 1, "1": 1, "2": 2, "3": 2, "4": 3, "5": 3, "6": 4, "7": 4, "8": 5, "9": 5,
    "10": 6, "11": 7, "12": 7, "13": 8, "14": 8, "15": 9, "16": 9, "17": 10, "18": 10, "19": 11, "20": 11
  };

  // --- Helper: Fetch and build ability items from compendium IDs ---
  async function getCompendiumAbilities(ids, count, existingNames = new Set()) {
    const abilities = [];
    let attempts = 0;
    // Validate all IDs exist in compendium
    for (const id of ids) {
      if (!id || typeof id !== "string" || !id.includes(".")) continue;
      const parts = id.split(".");
      // Fix: Remove erroneous 'if' and properly destructure
      let [prefix, ...rest] = parts;
      if (prefix === "Compendium") prefix = ""; // ignore
      const [module, pack, type, itemId] = rest.length === 4 ? rest : parts;
      const packId = `${module}.${pack}`; // e.g. "dc20-monster-generator.monster-generator-abilities"
      const packObj = game.packs.get(packId);
      if (!packObj) {
        console.error(`[DC20 Ability Generator] Compendium pack not found: ${packId} (for id: ${id})`);
      } else {
        // Check if item exists in index
        const index = await packObj.getIndex();
        const found = index.find(e => e._id === itemId);
        if (!found) {
          console.error(`[DC20 Ability Generator] Item not found in pack: ${packId} id: ${itemId}`);
        }
      }
    }
    // Randomly select abilities, avoiding duplicates by name
    while (abilities.length < count && attempts < count * 10) {
      attempts++;
      const idx = Math.floor(Math.random() * ids.length);
      const id = ids[idx];
      if (!id || typeof id !== "string" || !id.includes(".")) continue;
      const parts = id.split(".");
      if (parts.length < 4) continue;
      let [prefix, ...rest] = parts;
      if (prefix === "Compendium") prefix = "";
      const [module, pack, type, itemId] = rest.length === 4 ? rest : parts;
      const packId = `${module}.${pack}`;
      const packObj = game.packs.get(packId);
      if (!packObj) continue;
      let entry = await packObj.getDocument(itemId);
      if (!entry) continue;
      if (existingNames.has(entry.name)) continue;
      abilities.push(entry.toObject());
      existingNames.add(entry.name);
    }
    return abilities;
  }

  // --- Helper: Get a random ability id for a type or role, avoiding a specific id if provided ---
  function getRandomAbilityIdForTypeOrRole({ type, role, avoidId = null }) {
    // Defensive: Ensure type/role are strings and match keys
    type = typeof type === "string" ? type.trim() : "";
    role = typeof role === "string" ? role.trim().toLowerCase() : "";
    // Try to match type/role case-insensitively
    let typeKey = Object.keys(TYPE_ABILITY_IDS).find(k => k.toLowerCase() === type.toLowerCase()) || type;
    let roleKey = Object.keys(ROLE_ABILITY_IDS).find(k => k.toLowerCase() === role.toLowerCase()) || role;
    const typePool = TYPE_ABILITY_IDS[typeKey] || [];
    const rolePool = ROLE_ABILITY_IDS[roleKey] || [];
    let poolType = null;
    let pool = [];
    if (typePool.length && rolePool.length) {
      poolType = Math.random() < 0.5 ? "type" : "role";
      pool = poolType === "type" ? typePool : rolePool;
    } else if (typePool.length) {
      poolType = "type";
      pool = typePool;
    } else if (rolePool.length) {
      poolType = "role";
      pool = rolePool;
    }
    if (!pool.length) return { id: null, poolType: null };
    let filtered = avoidId ? pool.filter(id => id !== avoidId) : pool;
    if (!filtered.length) filtered = pool;
    const id = filtered[Math.floor(Math.random() * filtered.length)];
    return { id, poolType };
  }

  /**
   * Returns a random compendium item id for a given type/role, avoiding a specific id if provided.
   * Always returns a full compendium item id string (e.g. "Compendium.dc20-monster-generator.monster-generator-abilities.Item.XXXXX")
   * @param {Object} opts - { type, role, avoidId }
   * @returns {Object} { id, poolType }
   */
  function getRandomAbilityCompendiumItemId(opts = {}) {
    // Defensive: Ensure ai-ability-generator is loaded
    if (!window.TYPE_ABILITY_IDS || !window.ROLE_ABILITY_IDS) return { id: null, poolType: null };
    let { type = "", role = "", avoidId = null } = opts;
    type = typeof type === "string" ? type.trim() : "";
    role = typeof role === "string" ? role.trim().toLowerCase() : "";
    let typeKey = Object.keys(TYPE_ABILITY_IDS).find(k => k.toLowerCase() === type.toLowerCase()) || type;
    let roleKey = Object.keys(ROLE_ABILITY_IDS).find(k => k.toLowerCase() === role.toLowerCase()) || role;
    const typePool = TYPE_ABILITY_IDS[typeKey] || [];
    const rolePool = ROLE_ABILITY_IDS[roleKey] || [];
    let poolType = null;
    let pool = [];
    if (typePool.length && rolePool.length) {
      poolType = Math.random() < 0.5 ? "type" : "role";
      pool = poolType === "type" ? typePool : rolePool;
    } else if (typePool.length) {
      poolType = "type";
      pool = typePool;
    } else if (rolePool.length) {
      poolType = "role";
      pool = rolePool;
    }
    if (!pool.length) return { id: null, poolType: null };
    let filtered = avoidId ? pool.filter(id => id !== avoidId) : pool;
    if (!filtered.length) filtered = pool;
    const id = filtered[Math.floor(Math.random() * filtered.length)];
    return { id, poolType };
  }

  // --- Main Ability Generator: Selects abilities by type and role, no duplicates ---
  async function rollAIAccessories(numAbilities, level, formData) {
    // Defensive: Ensure ability-generator is loaded
    if (!window.TYPE_ABILITY_IDS || !window.ROLE_ABILITY_IDS) {
      ui?.notifications?.warn?.("Ability pools not loaded. Please ensure ability-generator.js is loaded before monster-generator.js in your module.json scripts array.");
      return [];
    }
    // Defensive: Ensure type/role are strings and match keys
    let type = formData?.creatureType || "";
    let role = (formData?.monsterRole || "").toLowerCase();
    type = typeof type === "string" ? type.trim() : "";
    role = typeof role === "string" ? role.trim().toLowerCase() : "";
    let typeKey = Object.keys(TYPE_ABILITY_IDS).find(k => k.toLowerCase() === type.toLowerCase()) || type;
    let roleKey = Object.keys(ROLE_ABILITY_IDS).find(k => k.toLowerCase() === role.toLowerCase()) || role;
    const typeIds = TYPE_ABILITY_IDS[typeKey] || [];
    const roleIds = ROLE_ABILITY_IDS[roleKey] || [];
    const typeCount = TYPE_ABILITY_COUNT_BY_LEVEL[String(level)] || 2;
    const roleCount = ROLE_ABILITY_COUNT_BY_LEVEL[String(level)] || 0;

    // Avoid duplicate names between type and role abilities
    const existingNames = new Set();

    // Fetch type abilities
    let typeAbilities = [];
    if (typeIds.length > 0 && typeCount > 0) {
      typeAbilities = await getCompendiumAbilities(typeIds, typeCount, existingNames);
    }

    // Fetch role abilities
    let roleAbilities = [];
    if (roleIds.length > 0 && roleCount > 0) {
      roleAbilities = await getCompendiumAbilities(roleIds, roleCount, existingNames);
    }

    // Return combined
    return [...typeAbilities, ...roleAbilities];
  }

  // --- Exported functions ---
  if (typeof window !== "undefined") {
    // Force assignment even if already present (to fix race/ordering issues)
    window.TYPE_ABILITY_IDS = TYPE_ABILITY_IDS;
    window.ROLE_ABILITY_IDS = ROLE_ABILITY_IDS;
    window.getRandomAbilityIdForTypeOrRole = getRandomAbilityCompendiumItemId;
    window.getRandomAbilityCompendiumItemId = getRandomAbilityCompendiumItemId;
    window.rollAIAccessories = rollAIAccessories;
  }
}
