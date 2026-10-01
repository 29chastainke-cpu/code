const elementCatalog = [
  { key: "hydrogen", symbol: "H", name: "Hydrogen" },
  { key: "helium", symbol: "He", name: "Helium" },
  { key: "lithium", symbol: "Li", name: "Lithium" },
  { key: "beryllium", symbol: "Be", name: "Beryllium" },
  { key: "boron", symbol: "B", name: "Boron" },
  { key: "carbon", symbol: "C", name: "Carbon" },
  { key: "nitrogen", symbol: "N", name: "Nitrogen" },
  { key: "oxygen", symbol: "O", name: "Oxygen" },
  { key: "fluorine", symbol: "F", name: "Fluorine" },
  { key: "neon", symbol: "Ne", name: "Neon" },
  { key: "sodium", symbol: "Na", name: "Sodium" },
  { key: "magnesium", symbol: "Mg", name: "Magnesium" },
  { key: "aluminum", symbol: "Al", name: "Aluminum" },
  { key: "silicon", symbol: "Si", name: "Silicon" },
  { key: "phosphorus", symbol: "P", name: "Phosphorus" },
  { key: "sulfur", symbol: "S", name: "Sulfur" },
  { key: "chlorine", symbol: "Cl", name: "Chlorine" },
  { key: "argon", symbol: "Ar", name: "Argon" },
  { key: "potassium", symbol: "K", name: "Potassium" },
  { key: "calcium", symbol: "Ca", name: "Calcium" },
  { key: "scandium", symbol: "Sc", name: "Scandium" },
  { key: "titanium", symbol: "Ti", name: "Titanium" },
  { key: "vanadium", symbol: "V", name: "Vanadium" },
  { key: "chromium", symbol: "Cr", name: "Chromium" },
  { key: "manganese", symbol: "Mn", name: "Manganese" },
  { key: "iron", symbol: "Fe", name: "Iron" },
  { key: "cobalt", symbol: "Co", name: "Cobalt" },
  { key: "nickel", symbol: "Ni", name: "Nickel" },
  { key: "copper", symbol: "Cu", name: "Copper" },
  { key: "zinc", symbol: "Zn", name: "Zinc" },
  { key: "gallium", symbol: "Ga", name: "Gallium" },
  { key: "germanium", symbol: "Ge", name: "Germanium" },
  { key: "arsenic", symbol: "As", name: "Arsenic" },
  { key: "selenium", symbol: "Se", name: "Selenium" },
  { key: "bromine", symbol: "Br", name: "Bromine" },
  { key: "krypton", symbol: "Kr", name: "Krypton" },
  { key: "rubidium", symbol: "Rb", name: "Rubidium" },
  { key: "strontium", symbol: "Sr", name: "Strontium" },
  { key: "yttrium", symbol: "Y", name: "Yttrium" },
  { key: "zirconium", symbol: "Zr", name: "Zirconium" },
  { key: "niobium", symbol: "Nb", name: "Niobium" },
  { key: "molybdenum", symbol: "Mo", name: "Molybdenum" },
  { key: "technetium", symbol: "Tc", name: "Technetium" },
  { key: "ruthenium", symbol: "Ru", name: "Ruthenium" },
  { key: "rhodium", symbol: "Rh", name: "Rhodium" },
  { key: "palladium", symbol: "Pd", name: "Palladium" },
  { key: "silver", symbol: "Ag", name: "Silver" },
  { key: "cadmium", symbol: "Cd", name: "Cadmium" },
  { key: "indium", symbol: "In", name: "Indium" },
  { key: "tin", symbol: "Sn", name: "Tin" },
  { key: "antimony", symbol: "Sb", name: "Antimony" },
  { key: "tellurium", symbol: "Te", name: "Tellurium" },
  { key: "iodine", symbol: "I", name: "Iodine" },
  { key: "xenon", symbol: "Xe", name: "Xenon" },
  { key: "cesium", symbol: "Cs", name: "Cesium" },
  { key: "barium", symbol: "Ba", name: "Barium" },
  { key: "lanthanum", symbol: "La", name: "Lanthanum" },
  { key: "cerium", symbol: "Ce", name: "Cerium" },
  { key: "praseodymium", symbol: "Pr", name: "Praseodymium" },
  { key: "neodymium", symbol: "Nd", name: "Neodymium" },
  { key: "promethium", symbol: "Pm", name: "Promethium" },
  { key: "samarium", symbol: "Sm", name: "Samarium" },
  { key: "europium", symbol: "Eu", name: "Europium" },
  { key: "gadolinium", symbol: "Gd", name: "Gadolinium" },
  { key: "terbium", symbol: "Tb", name: "Terbium" },
  { key: "dysprosium", symbol: "Dy", name: "Dysprosium" },
  { key: "holmium", symbol: "Ho", name: "Holmium" },
  { key: "erbium", symbol: "Er", name: "Erbium" },
  { key: "thulium", symbol: "Tm", name: "Thulium" },
  { key: "ytterbium", symbol: "Yb", name: "Ytterbium" },
  { key: "lutetium", symbol: "Lu", name: "Lutetium" },
  { key: "hafnium", symbol: "Hf", name: "Hafnium" },
  { key: "tantalum", symbol: "Ta", name: "Tantalum" },
  { key: "tungsten", symbol: "W", name: "Tungsten" },
  { key: "rhenium", symbol: "Re", name: "Rhenium" },
  { key: "osmium", symbol: "Os", name: "Osmium" },
  { key: "iridium", symbol: "Ir", name: "Iridium" },
  { key: "platinum", symbol: "Pt", name: "Platinum" },
  { key: "gold", symbol: "Au", name: "Gold" },
  { key: "mercury", symbol: "Hg", name: "Mercury" },
  { key: "thallium", symbol: "Tl", name: "Thallium" },
  { key: "lead", symbol: "Pb", name: "Lead" },
  { key: "bismuth", symbol: "Bi", name: "Bismuth" },
  { key: "polonium", symbol: "Po", name: "Polonium" },
  { key: "astatine", symbol: "At", name: "Astatine" },
  { key: "radon", symbol: "Rn", name: "Radon" },
  { key: "francium", symbol: "Fr", name: "Francium" },
  { key: "radium", symbol: "Ra", name: "Radium" },
  { key: "actinium", symbol: "Ac", name: "Actinium" },
  { key: "thorium", symbol: "Th", name: "Thorium" },
  { key: "protactinium", symbol: "Pa", name: "Protactinium" },
  { key: "uranium", symbol: "U", name: "Uranium" },
  { key: "neptunium", symbol: "Np", name: "Neptunium" },
  { key: "plutonium", symbol: "Pu", name: "Plutonium" },
  { key: "americium", symbol: "Am", name: "Americium" },
  { key: "curium", symbol: "Cm", name: "Curium" },
  { key: "berkelium", symbol: "Bk", name: "Berkelium" },
  { key: "californium", symbol: "Cf", name: "Californium" },
  { key: "einsteinium", symbol: "Es", name: "Einsteinium" },
  { key: "fermium", symbol: "Fm", name: "Fermium" },
  { key: "mendelevium", symbol: "Md", name: "Mendelevium" },
  { key: "nobelium", symbol: "No", name: "Nobelium" },
  { key: "lawrencium", symbol: "Lr", name: "Lawrencium" },
  { key: "rutherfordium", symbol: "Rf", name: "Rutherfordium" },
  { key: "dubnium", symbol: "Db", name: "Dubnium" },
  { key: "seaborgium", symbol: "Sg", name: "Seaborgium" },
  { key: "bohrium", symbol: "Bh", name: "Bohrium" },
  { key: "hassium", symbol: "Hs", name: "Hassium" },
  { key: "meitnerium", symbol: "Mt", name: "Meitnerium" },
  { key: "darmstadtium", symbol: "Ds", name: "Darmstadtium" },
  { key: "roentgenium", symbol: "Rg", name: "Roentgenium" },
  { key: "copernicium", symbol: "Cn", name: "Copernicium" },
  { key: "nihonium", symbol: "Nh", name: "Nihonium" },
  { key: "flerovium", symbol: "Fl", name: "Flerovium" },
  { key: "moscovium", symbol: "Mc", name: "Moscovium" },
  { key: "livermorium", symbol: "Lv", name: "Livermorium" },
  { key: "tennessine", symbol: "Ts", name: "Tennessine" },
  { key: "oganesson", symbol: "Og", name: "Oganesson" },
];

const elementInfo = Object.fromEntries(
  elementCatalog.map((element) => [element.key, { ...element }])
);

Object.assign(elementInfo, {
  water: { symbol: "H₂O", name: "Water", equation: "2H + O → H₂O", ion: "Hydroxide" },
  salt: { symbol: "NaCl", name: "Salt", equation: "Na + Cl → NaCl", ion: "Chloride" },
  carbon_dioxide: { symbol: "CO₂", name: "Carbon Dioxide", equation: "C + 2O → CO₂", ion: "Carbonate" },
  methane: { symbol: "CH₄", name: "Methane", equation: "C + 4H → CH₄", ion: "Hydride" },
  sodium_oxide: { symbol: "Na₂O", name: "Sodium Oxide", equation: "2Na + O → Na₂O", ion: "Oxide" },
  magnesium_oxide: { symbol: "MgO", name: "Magnesium Oxide", equation: "2Mg + O₂ → 2MgO", ion: "Oxide" },
  silica: { symbol: "SiO₂", name: "Silica", equation: "Si + 2O → SiO₂", ion: "Silicate" },
  ammonia: { symbol: "NH₃", name: "Ammonia", equation: "N + 3H → NH₃", ion: "Ammonium" },
  hydrochloric_acid: { symbol: "HCl", name: "Hydrochloric Acid", equation: "H + Cl → HCl", ion: "Chloride" },
  iron_oxide: { symbol: "Fe₂O₃", name: "Iron Oxide", equation: "2Fe + 3O₂ → 2Fe₂O₃", ion: "Ferric" },
  copper_oxide: { symbol: "CuO", name: "Copper Oxide", equation: "2Cu + O₂ → 2CuO", ion: "Cupric" },
  calcium_carbide: { symbol: "CaC₂", name: "Calcium Carbide", equation: "Ca + 2C → CaC₂", ion: "Carbide" },
  ozone: { symbol: "O₃", name: "Ozone", equation: "3O → O₃", ion: "Ozonide" },
  hydrogen_gas: { symbol: "H₂", name: "Hydrogen Gas", equation: "2H → H₂", ion: "Hydride" },
  chlorine_gas: { symbol: "Cl₂", name: "Chlorine Gas", equation: "2Cl → Cl₂", ion: "Chloride" },
  nitrogen_gas: { symbol: "N₂", name: "Nitrogen Gas", equation: "2N → N₂", ion: "Nitride" },
  zinc_oxide: { symbol: "ZnO", name: "Zinc Oxide", equation: "Zn + O → ZnO", ion: "Oxide" },
  calcium_oxide: { symbol: "CaO", name: "Calcium Oxide", equation: "Ca + O → CaO", ion: "Oxide" },
  sulfur_dioxide: { symbol: "SO₂", name: "Sulfur Dioxide", equation: "S + 2O → SO₂", ion: "Sulfite" },
  hydrogen_sulfide: { symbol: "H₂S", name: "Hydrogen Sulfide", equation: "2H + S → H₂S", ion: "Sulfide" },
  potassium_oxide: { symbol: "K₂O", name: "Potassium Oxide", equation: "2K + O → K₂O", ion: "Oxide" },
  sodium_carbonate: { symbol: "Na₂CO₃", name: "Sodium Carbonate", equation: "2Na + C + 3O → Na₂CO₃", ion: "Carbonate" },
  magnesium_silicate: { symbol: "MgSiO₃", name: "Magnesium Silicate", equation: "Mg + Si + 3O → MgSiO₃", ion: "Silicate" },
});

const initialItems = elementCatalog.map((element) => element.key);

const recipeIdeas = [
  ["hydrogen", "oxygen", "water"],
  ["sodium", "chlorine", "salt"],
  ["carbon", "oxygen", "carbon_dioxide"],
  ["carbon", "hydrogen", "methane"],
  ["sodium", "oxygen", "sodium_oxide"],
  ["magnesium", "oxygen", "magnesium_oxide"],
  ["silicon", "oxygen", "silica"],
  ["nitrogen", "hydrogen", "ammonia"],
  ["hydrogen", "chlorine", "hydrochloric_acid"],
  ["iron", "oxygen", "iron_oxide"],
  ["copper", "oxygen", "copper_oxide"],
  ["calcium", "carbon", "calcium_carbide"],
  ["oxygen", "oxygen", "ozone"],
  ["hydrogen", "hydrogen", "hydrogen_gas"],
  ["chlorine", "chlorine", "chlorine_gas"],
  ["nitrogen", "nitrogen", "nitrogen_gas"],
  ["zinc", "oxygen", "zinc_oxide"],
  ["calcium", "oxygen", "calcium_oxide"],
  ["magnesium", "silicon", "magnesium_silicate"],
  ["sodium", "carbon", "sodium_carbonate"],
  ["potassium", "oxygen", "potassium_oxide"],
  ["sulfur", "oxygen", "sulfur_dioxide"],
  ["hydrogen", "sulfur", "hydrogen_sulfide"],
];

const recipes = [
  ["hydrogen", "oxygen", "water"],
  ["sodium", "chlorine", "salt"],
  ["carbon", "oxygen", "carbon_dioxide"],
  ["carbon", "hydrogen", "methane"],
  ["sodium", "oxygen", "sodium_oxide"],
  ["magnesium", "oxygen", "magnesium_oxide"],
  ["silicon", "oxygen", "silica"],
  ["nitrogen", "hydrogen", "ammonia"],
  ["hydrogen", "chlorine", "hydrochloric_acid"],
  ["iron", "oxygen", "iron_oxide"],
  ["copper", "oxygen", "copper_oxide"],
  ["calcium", "carbon", "calcium_carbide"],
  ["oxygen", "oxygen", "ozone"],
  ["hydrogen", "hydrogen", "hydrogen_gas"],
  ["chlorine", "chlorine", "chlorine_gas"],
  ["nitrogen", "nitrogen", "nitrogen_gas"],
  ["zinc", "oxygen", "zinc_oxide"],
  ["calcium", "oxygen", "calcium_oxide"],
  ["magnesium", "silicon", "magnesium_silicate"],
  ["sodium", "carbon", "sodium_carbonate"],
  ["potassium", "oxygen", "potassium_oxide"],
  ["sulfur", "oxygen", "sulfur_dioxide"],
  ["hydrogen", "sulfur", "hydrogen_sulfide"],
];

const icons = {
  hydrogen: "H",
  oxygen: "O",
  carbon: "C",
  sodium: "Na",
  magnesium: "Mg",
  chlorine: "Cl",
  nitrogen: "N",
  silicon: "Si",
  iron: "Fe",
  copper: "Cu",
  calcium: "Ca",
  sulfur: "S",
  potassium: "K",
  neon: "Ne",
  silver: "Ag",
  water: "💧",
  salt: "🧂",
  carbon_dioxide: "💨",
  methane: "🔥",
  sodium_oxide: "⚗️",
  magnesium_oxide: "🪨",
  silica: "🔬",
  ammonia: "🧪",
  hydrochloric_acid: "🧪",
  iron_oxide: "🩸",
  copper_oxide: "🟤",
  calcium_carbide: "⚙️",
  ozone: "🌫️",
  hydrogen_gas: "💨",
  chlorine_gas: "💨",
  nitrogen_gas: "💨",
  zinc_oxide: "🧿",
  calcium_oxide: "🔥",
  magnesium_silicate: "🧱",
  sodium_carbonate: "🧼",
  potassium_oxide: "⚡",
  sulfur_dioxide: "☁️",
  hydrogen_sulfide: "☠️",
};

const categoryPalettes = {
  alkali_metal: ["#f59e0b", "#ffedd5"],
  alkaline_earth_metal: ["#facc15", "#fef9c3"],
  transition_metal: ["#a78bfa", "#ede9fe"],
  post_transition_metal: ["#94a3b8", "#e2e8f0"],
  metalloid: ["#34d399", "#d1fae5"],
  nonmetal: ["#f87171", "#fee2e2"],
  halogen: ["#22d3ee", "#cffafe"],
  noble_gas: ["#60a5fa", "#dbeafe"],
  lanthanide: ["#f472b6", "#fdf2f8"],
  actinide: ["#fb7185", "#ffe4e6"],
  compound: ["#8b5cf6", "#ddd6fe"],
};

const categoryNames = {
  alkali_metal: "Alkali metal",
  alkaline_earth_metal: "Alkaline earth metal",
  transition_metal: "Transition metal",
  post_transition_metal: "Post-transition metal",
  metalloid: "Metalloid",
  nonmetal: "Nonmetal",
  halogen: "Halogen",
  noble_gas: "Noble gas",
  lanthanide: "Lanthanide",
  actinide: "Actinide",
  compound: "Compound",
};

const elementCategories = {
  hydrogen: "nonmetal",
  helium: "noble_gas",
  lithium: "alkali_metal",
  beryllium: "alkaline_earth_metal",
  boron: "metalloid",
  carbon: "nonmetal",
  nitrogen: "nonmetal",
  oxygen: "nonmetal",
  fluorine: "halogen",
  neon: "noble_gas",
  sodium: "alkali_metal",
  magnesium: "alkaline_earth_metal",
  aluminum: "post_transition_metal",
  silicon: "metalloid",
  phosphorus: "nonmetal",
  sulfur: "nonmetal",
  chlorine: "halogen",
  argon: "noble_gas",
  potassium: "alkali_metal",
  calcium: "alkaline_earth_metal",
  scandium: "transition_metal",
  titanium: "transition_metal",
  vanadium: "transition_metal",
  chromium: "transition_metal",
  manganese: "transition_metal",
  iron: "transition_metal",
  cobalt: "transition_metal",
  nickel: "transition_metal",
  copper: "transition_metal",
  zinc: "transition_metal",
  gallium: "post_transition_metal",
  germanium: "metalloid",
  arsenic: "metalloid",
  selenium: "nonmetal",
  bromine: "halogen",
  krypton: "noble_gas",
  rubidium: "alkali_metal",
  strontium: "alkaline_earth_metal",
  yttrium: "transition_metal",
  zirconium: "transition_metal",
  niobium: "transition_metal",
  molybdenum: "transition_metal",
  technetium: "transition_metal",
  ruthenium: "transition_metal",
  rhodium: "transition_metal",
  palladium: "transition_metal",
  silver: "transition_metal",
  cadmium: "transition_metal",
  indium: "post_transition_metal",
  tin: "post_transition_metal",
  antimony: "metalloid",
  tellurium: "metalloid",
  iodine: "halogen",
  xenon: "noble_gas",
  cesium: "alkali_metal",
  barium: "alkaline_earth_metal",
  lanthanum: "lanthanide",
  cerium: "lanthanide",
  praseodymium: "lanthanide",
  neodymium: "lanthanide",
  promethium: "lanthanide",
  samarium: "lanthanide",
  europium: "lanthanide",
  gadolinium: "lanthanide",
  terbium: "lanthanide",
  dysprosium: "lanthanide",
  holmium: "lanthanide",
  erbium: "lanthanide",
  thulium: "lanthanide",
  ytterbium: "lanthanide",
  lutetium: "lanthanide",
  hafnium: "transition_metal",
  tantalum: "transition_metal",
  tungsten: "transition_metal",
  rhenium: "transition_metal",
  osmium: "transition_metal",
  iridium: "transition_metal",
  platinum: "transition_metal",
  gold: "transition_metal",
  mercury: "transition_metal",
  thallium: "post_transition_metal",
  lead: "post_transition_metal",
  bismuth: "post_transition_metal",
  polonium: "post_transition_metal",
  astatine: "halogen",
  radon: "noble_gas",
  francium: "alkali_metal",
  radium: "alkaline_earth_metal",
  actinium: "actinide",
  thorium: "actinide",
  protactinium: "actinide",
  uranium: "actinide",
  neptunium: "actinide",
  plutonium: "actinide",
  americium: "actinide",
  curium: "actinide",
  berkelium: "actinide",
  californium: "actinide",
  einsteinium: "actinide",
  fermium: "actinide",
  mendelevium: "actinide",
  nobelium: "actinide",
  lawrencium: "actinide",
  rutherfordium: "transition_metal",
  dubnium: "transition_metal",
  seaborgium: "transition_metal",
  bohrium: "transition_metal",
  hassium: "transition_metal",
  meitnerium: "transition_metal",
  darmstadtium: "transition_metal",
  roentgenium: "transition_metal",
  copernicium: "transition_metal",
  nihonium: "post_transition_metal",
  flerovium: "post_transition_metal",
  moscovium: "post_transition_metal",
  livermorium: "post_transition_metal",
  tennessine: "halogen",
  oganesson: "noble_gas",
  water: "compound",
  salt: "compound",
  carbon_dioxide: "compound",
  methane: "compound",
  sodium_oxide: "compound",
  magnesium_oxide: "compound",
  silica: "compound",
  ammonia: "compound",
  hydrochloric_acid: "compound",
  iron_oxide: "compound",
  copper_oxide: "compound",
  calcium_carbide: "compound",
  magnesium_silicate: "compound",
  sodium_carbonate: "compound",
  potassium_oxide: "compound",
  sulfur_dioxide: "compound",
  hydrogen_sulfide: "compound",
};

const elementHazards = {
  hydrogen: "Highly flammable; it can ignite quickly and form explosive mixtures with oxygen.",
  fluorine: "Extremely reactive and toxic; it can burn skin and damage tissues very quickly.",
  sodium: "Reacts violently with water and can cause serious burns and fire hazards.",
  magnesium: "Burns with very intense heat and a bright flame, so it is a fire hazard.",
  chlorine: "A corrosive gas that irritates the lungs, eyes, and throat and can be very dangerous in large amounts.",
  sulfur: "Can irritate skin, eyes, and lungs; some sulfur compounds are harmful if inhaled.",
  bromine: "Corrosive and toxic; it causes severe burns and dangerous fumes.",
  iodine: "Can irritate the skin and lungs and is harmful in larger amounts.",
  arsenic: "Toxic and harmful to the nervous system and organs with prolonged exposure.",
  selenium: "Some forms are toxic; inhalation or ingestion can harm the body.",
  cadmium: "Toxic metal that can damage kidneys, bones, and the respiratory system.",
  lead: "Poisonous and harmful to the brain and nervous system, especially in children.",
  mercury: "A highly toxic metal that can damage the brain, kidneys, and nervous system.",
  polonium: "Radioactive and extremely dangerous even in tiny amounts.",
  radon: "Radioactive gas that can build up indoors and increase lung cancer risk.",
  ozone: "Toxic gas that irritates the lungs and can damage tissues.",
  sodium_oxide: "A corrosive compound that can irritate skin and eyes if handled carelessly.",
  hydrochloric_acid: "Strong acid that can burn skin and eyes and damage tissue.",
  sulfur_dioxide: "Irritating gas that can harm the eyes, lungs, and respiratory system.",
  hydrogen_sulfide: "Very toxic gas that can cause poisoning and respiratory failure in higher amounts.",
};

const highRiskElementKeys = [
  "hydrogen",
  "fluorine",
  "sodium",
  "chlorine",
  "bromine",
  "arsenic",
  "cadmium",
  "lead",
  "mercury",
  "polonium",
  "radon",
];

const elementSafetyGuidance = {
  hydrogen: {
    harm: "A fire or explosion can cause severe burns, blast injuries, and death. A large leak can also displace oxygen and cause suffocation.",
    prevention: "Use only approved, secured cylinders and trained supervision. Check for leaks, provide suitable ventilation, and keep ignition sources away.",
  },
  fluorine: {
    harm: "Contact can cause deep chemical burns; breathing it can severely injure the airways and lungs and may be fatal.",
    prevention: "Do not handle it outside specialist facilities. Experts use closed, compatible equipment, remote operation, effective containment, and emergency plans.",
  },
  sodium: {
    harm: "A reaction with water can release heat and caustic material, causing serious skin and eye burns or starting a fire.",
    prevention: "Keep it away from water and moisture. Only trained staff should store or use it in a dry, approved setup with protective barriers and suitable PPE.",
  },
  chlorine: {
    harm: "Breathing the gas can cause coughing, chest tightness, and severe lung injury; serious exposure can be fatal.",
    prevention: "Never mix chemicals to make chlorine. Use gas only in closed professional systems with ventilation, leak detection, and an evacuation plan.",
  },
  bromine: {
    harm: "Liquid or vapor can burn skin and eyes and severely irritate or damage the respiratory tract.",
    prevention: "Avoid all contact and inhalation. Trained labs keep it in sealed compatible containers with secondary containment and handle it in a functioning fume hood.",
  },
  arsenic: {
    harm: "Swallowing or breathing arsenic-containing dust can cause poisoning; long-term exposure can damage organs and increase cancer risk.",
    prevention: "Do not touch, taste, or disturb suspect materials. Use regulated professional testing and remediation, dust controls, handwashing, and approved hazardous-waste disposal.",
  },
  cadmium: {
    harm: "Breathing dust or fumes can seriously injure the lungs; repeated exposure can damage the kidneys and bones and increase cancer risk.",
    prevention: "Do not sand, burn, or heat cadmium-containing items. Professionals use local exhaust ventilation, exposure controls, hygiene practices, and hazardous-waste procedures.",
  },
  lead: {
    harm: "Lead can harm the brain and nervous system, kidneys, and blood; it is especially dangerous to children and during pregnancy.",
    prevention: "Prevent dust and paint chips from spreading. Use certified lead-safe professionals for old paint or contaminated soil, wash hands, and keep children away from work areas.",
  },
  mercury: {
    harm: "Mercury vapor can be breathed in and damage the brain, nerves, and kidneys; some forms can also harm development before birth.",
    prevention: "Do not touch or vacuum a spill. Keep people away and contact local hazardous-materials guidance; trained handlers use appropriate spill procedures and sealed waste containers.",
  },
  polonium: {
    harm: "Radiation can damage cells and organs; if radioactive material enters the body, exposure can cause severe radiation injury and cancer.",
    prevention: "Only licensed radiation specialists should work with it, using sealed containment, controlled access, monitoring, and approved radioactive-waste procedures.",
  },
  radon: {
    harm: "Long-term breathing of radon increases the risk of lung cancer. It has no reliable smell or visible warning.",
    prevention: "Test indoor air with an approved radon test. If levels are high, use a qualified radon-mitigation professional and retest after the work.",
  },
};

const worldThings = [
  {
    name: "Water",
    description: "Found in rivers, lakes, rain, and the ocean; it is made mostly from hydrogen and oxygen.",
    elements: ["hydrogen", "oxygen"],
  },
  {
    name: "Salt",
    description: "Table salt and ocean salt contain sodium and chlorine, which form sodium chloride.",
    elements: ["sodium", "chlorine"],
  },
  {
    name: "Air",
    description: "The air around us is mostly nitrogen with oxygen and smaller amounts of noble gases.",
    elements: ["nitrogen", "oxygen", "argon"],
  },
  {
    name: "Steel",
    description: "Many tools and buildings use iron and carbon in alloys, giving strength and durability.",
    elements: ["iron", "carbon"],
  },
  {
    name: "Copper wire",
    description: "Used in electrical wiring because copper conducts electricity very well.",
    elements: ["copper"],
  },
  {
    name: "Batteries",
    description: "Many batteries use metals like zinc, manganese, and lithium to store and release energy.",
    elements: ["zinc", "manganese", "lithium"],
  },
  {
    name: "Glass",
    description: "Glass often contains silicon and oxygen, made from silica compounds.",
    elements: ["silicon", "oxygen"],
  },
  {
    name: "Bones and teeth",
    description: "Calcium and phosphorus help form strong structures in the bodies of living things.",
    elements: ["calcium", "phosphorus"],
  },
  {
    name: "Skin and hair",
    description: "Many proteins and compounds in bodies include sulfur, carbon, hydrogen, and oxygen.",
    elements: ["sulfur", "carbon", "hydrogen", "oxygen"],
  },
  {
    name: "Sunlight and stars",
    description: "Hydrogen is the main element in stars and powers fusion reactions in the Sun.",
    elements: ["hydrogen"],
  },
  {
    name: "Rock and soil",
    description: "Earth materials are rich in silicon, oxygen, aluminum, and iron.",
    elements: ["silicon", "oxygen", "aluminum", "iron"],
  },
  {
    name: "Fertilizer",
    description: "Nitrogen and phosphorus are used in fertilizers to support plant growth.",
    elements: ["nitrogen", "phosphorus"],
  },
  {
    name: "Pencil graphite",
    description: "The writing core is graphite, a form of carbon; it is not lead despite the common name 'pencil lead'.",
    elements: ["carbon"],
  },
  {
    name: "Aluminum cans",
    description: "Drink cans are commonly made from lightweight aluminum, often with thin protective coatings.",
    elements: ["aluminum"],
  },
  {
    name: "Coins",
    description: "Coin metals vary by country and date; copper, nickel, and zinc are common ingredients in coin alloys.",
    elements: ["copper", "nickel", "zinc"],
  },
  {
    name: "Jewelry",
    description: "Gold and silver jewelry is often mixed with other metals to change its strength and color.",
    elements: ["gold", "silver", "copper"],
  },
  {
    name: "Light bulb filaments",
    description: "Some incandescent bulbs use tungsten wire because it withstands very high temperatures.",
    elements: ["tungsten"],
  },
  {
    name: "Computer chips",
    description: "Silicon is the basis of most computer chips, with copper and other materials used in connections.",
    elements: ["silicon", "copper"],
  },
  {
    name: "Ceramics",
    description: "Many ceramics are made from compounds containing silicon, oxygen, and aluminum.",
    elements: ["silicon", "oxygen", "aluminum"],
  },
  {
    name: "Tooth enamel",
    description: "Tooth enamel contains calcium and phosphorus in a hard mineral compound called hydroxyapatite.",
    elements: ["calcium", "phosphorus", "oxygen"],
  },
  {
    name: "Helium balloons",
    description: "Helium is a light, nonflammable gas used to make party balloons float; it should never be inhaled.",
    elements: ["helium"],
  },
  {
    name: "Stainless steel cookware",
    description: "Stainless steel commonly contains iron, chromium, and nickel, which help resist rust and corrosion.",
    elements: ["iron", "chromium", "nickel"],
  },
  {
    name: "Sunscreen",
    description: "Some sunscreens use zinc oxide or titanium dioxide to help protect skin from ultraviolet light.",
    elements: ["zinc", "titanium", "oxygen"],
  },
  {
    name: "Plant leaves",
    description: "Chlorophyll molecules contain magnesium, while plants also use nitrogen, phosphorus, and potassium.",
    elements: ["magnesium", "nitrogen", "phosphorus", "potassium"],
  },
];

function getElementPalette(name) {
  const category = elementCategories[name] || "compound";
  return categoryPalettes[category] || categoryPalettes.compound;
}

function getValenceValue(name) {
  const valenceMap = {
    hydrogen: 1,
    helium: 2,
    lithium: 1,
    beryllium: 2,
    boron: 3,
    carbon: 4,
    nitrogen: 3,
    oxygen: 2,
    fluorine: 1,
    neon: 8,
    sodium: 1,
    magnesium: 2,
    aluminum: 3,
    silicon: 4,
    phosphorus: 3,
    sulfur: 2,
    chlorine: 1,
    argon: 8,
    potassium: 1,
    calcium: 2,
    bromine: 1,
    iodine: 1,
    xenon: 8,
    radon: 8,
  };

  return valenceMap[name] ?? "varies";
}

const saveKey = "element-forge-save";
const legacyNames = new Set([
  "fire",
  "water",
  "earth",
  "air",
  "dust",
  "plant",
  "stone",
  "steam",
  "mud",
  "lava",
  "energy",
  "rain",
  "cloud",
  "brick",
  "gunpowder",
  "storm",
  "metal",
  "ash",
  "life",
  "animal",
  "fossil",
  "coral",
  "forge",
  "swamp",
  "peat",
  "rainstorm",
  "tornado",
]);

const quizQuestions = [
  {
    prompt: "What type of element is sodium?",
    options: ["Alkali metal", "Halogen", "Noble gas", "Metalloid"],
    answer: "Alkali metal",
  },
  {
    prompt: "What type of element is chlorine?",
    options: ["Transition metal", "Halogen", "Lanthanide", "Alkaline earth metal"],
    answer: "Halogen",
  },
  {
    prompt: "What type of element is neon?",
    options: ["Noble gas", "Nonmetal", "Actinide", "Post-transition metal"],
    answer: "Noble gas",
  },
  {
    prompt: "What type of element is silicon?",
    options: ["Metalloid", "Alkali metal", "Halogen", "Transition metal"],
    answer: "Metalloid",
  },
  {
    prompt: "What type of element is carbon?",
    options: ["Nonmetal", "Alkaline earth metal", "Lanthanide", "Compound"],
    answer: "Nonmetal",
  },
  {
    prompt: "Which type of ion forms when an atom gains electrons?",
    options: ["Cation", "Anion", "Neutral ion", "Isotope"],
    answer: "Anion",
  },
  {
    prompt: "What is the charge on a sodium ion after it loses one electron?",
    options: ["Na+", "Na-", "Na2+", "Na2-"],
    answer: "Na+",
  },
  {
    prompt: "How many valence electrons does oxygen have?",
    options: ["2", "4", "6", "8"],
    answer: "6",
  },
  {
    prompt: "Which statement best describes a cation?",
    options: ["A positively charged ion", "A negatively charged ion", "A neutral atom", "A molecule"],
    answer: "A positively charged ion",
  },
  {
    prompt: "What is the ion name for Cl-?",
    options: ["Sodium ion", "Chloride ion", "Calcium ion", "Oxide ion"],
    answer: "Chloride ion",
  },
  {
    prompt: "How many valence electrons does magnesium have?",
    options: ["1", "2", "6", "7"],
    answer: "2",
  },
  {
    prompt: "Which ion is negatively charged?",
    options: ["Cation", "Anion", "Atom", "Proton"],
    answer: "Anion",
  },
  {
    prompt: "What is the symbol for a calcium ion after it loses 2 electrons?",
    options: ["Ca+", "Ca2+", "Ca-", "Ca2-"],
    answer: "Ca2+",
  },
];

const quizState = {
  index: 0,
  score: 0,
  answered: false,
};

const inventory = new Set(loadGame());
const selected = [];

function loadGame() {
  const saved = localStorage.getItem(saveKey);
  if (!saved) {
    return [...initialItems];
  }

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length) {
      const hasLegacyItems = parsed.some((item) => legacyNames.has(item));
      const hasFullElementSet = elementCatalog.every((element) => parsed.includes(element.key));

      if (!hasLegacyItems && hasFullElementSet) {
        return parsed;
      }
    }
  } catch (error) {
    console.error("Failed to parse saved game:", error);
  }

  localStorage.setItem(saveKey, JSON.stringify([...initialItems]));
  return [...initialItems];
}

function saveGame() {
  localStorage.setItem(saveKey, JSON.stringify([...inventory]));
}

function getRecipeKey(a, b) {
  return [a, b].slice().sort().join("|");
}

function getRecipeMap() {
  const map = new Map();
  recipes.forEach(([first, second, result]) => {
    map.set(getRecipeKey(first, second), result);
  });
  return map;
}

function getResultInfo(name) {
  return elementInfo[name] || { symbol: icons[name] || "✨", name: formatName(name), equation: "Unknown reaction", ion: "Unknown" };
}

function getAllItems() {
  const categoryOrder = [
    "alkali_metal",
    "alkaline_earth_metal",
    "transition_metal",
    "post_transition_metal",
    "metalloid",
    "nonmetal",
    "halogen",
    "noble_gas",
    "lanthanide",
    "actinide",
    "compound",
  ];

  return [...inventory].sort((a, b) => {
    const aCategory = elementCategories[a] || "compound";
    const bCategory = elementCategories[b] || "compound";
    const categoryDiff = (categoryOrder.indexOf(aCategory) - categoryOrder.indexOf(bCategory));
    if (categoryDiff !== 0) {
      return categoryDiff;
    }
    return a.localeCompare(b);
  });
}

function renderInventory() {
  const inventoryEl = document.getElementById("inventory");
  const countBadge = document.getElementById("count-badge");
  const items = getAllItems();

  countBadge.textContent = String(items.length);
  inventoryEl.innerHTML = "";

  items.forEach((name) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "element-card";
    const info = getResultInfo(name);
    const palette = getElementPalette(name);
    const categoryKey = elementCategories[name] || "compound";
    const categoryLabel = categoryNames[categoryKey] || "Compound";
    card.style.setProperty("--element-color", palette[0]);
    card.style.setProperty("--element-color-soft", palette[1]);

    if (selected.includes(name)) {
      card.classList.add("selected");
    }

    card.innerHTML = `
      <div class="element-visual" aria-hidden="true">
        <span class="orbit orbit-one"></span>
        <span class="orbit orbit-two"></span>
        <span class="element-core">${icons[name] || info.symbol || "✨"}</span>
      </div>
      <span class="element-name">${info.name || formatName(name)}</span>
      <span class="element-type-badge">${categoryLabel}</span>
    `;

    card.addEventListener("click", () => toggleSelection(name));
    inventoryEl.appendChild(card);
  });
}

function renderSelection() {
  const selectionEl = document.getElementById("selection");
  selectionEl.innerHTML = "";

  for (let i = 0; i < 2; i += 1) {
    const slot = document.createElement("div");
    slot.className = "selection-slot";

    if (selected[i]) {
      const name = selected[i];
      const info = getResultInfo(name);
      const palette = getElementPalette(name);
      slot.style.setProperty("--element-color", palette[0]);
      slot.style.setProperty("--element-color-soft", palette[1]);
      slot.classList.add("filled");
      slot.innerHTML = `
        <div class="selection-mini">
          <div class="mini-visual" aria-hidden="true">
            <span class="mini-core">${icons[name] || info.symbol || "✨"}</span>
          </div>
          <span>${info.name || formatName(name)}</span>
        </div>
      `;
    } else {
      slot.textContent = i === 0 ? "First" : "Second";
    }

    selectionEl.appendChild(slot);
  }
}

function renderRecipes() {
  const recipesEl = document.getElementById("recipes");
  const map = getRecipeMap();
  const known = [...map.entries()].filter(([, result]) => inventory.has(result));

  recipesEl.innerHTML = "";

  if (!known.length) {
    const empty = document.createElement("li");
    empty.className = "recipe-item";
    empty.textContent = "No discoveries yet";
    recipesEl.appendChild(empty);
  } else {
    known.forEach(([pair, result]) => {
      const item = document.createElement("li");
      item.className = "recipe-item";
      const [first, second] = pair.split("|");
      const info = getResultInfo(result);
      item.innerHTML = `
        <div class="recipe-row">
          <span><strong>${formatName(first)}</strong> + <strong>${formatName(second)}</strong></span>
          <span>${icons[result] || info.symbol || "✨"} ${info.name || formatName(result)}</span>
        </div>
        <div class="recipe-meta">Equation: ${info.equation || "Unknown"}</div>
        <div class="recipe-meta">Ion: ${info.ion || "Unknown"}</div>
      `;
      recipesEl.appendChild(item);
    });
  }
}

function renderIdeas() {
  const ideasEl = document.getElementById("ideas");
  ideasEl.innerHTML = "";

  const suggested = recipeIdeas.filter(([, , result]) => !inventory.has(result));

  if (!suggested.length) {
    const item = document.createElement("li");
    item.className = "recipe-item";
    item.textContent = "You’ve explored the main formulas.";
    ideasEl.appendChild(item);
    return;
  }

  suggested.slice(0, 10).forEach(([first, second, result]) => {
    const item = document.createElement("li");
    item.className = "recipe-item";
    const info = getResultInfo(result);
    item.innerHTML = `
      <div class="recipe-row">
        <span><strong>${formatName(first)}</strong> + <strong>${formatName(second)}</strong></span>
        <span>${icons[result] || info.symbol || "✨"} ${info.name || formatName(result)}</span>
      </div>
      <div class="recipe-meta">Equation: ${info.equation || "Unknown"}</div>
      <div class="recipe-meta">Ion: ${info.ion || "Unknown"}</div>
    `;
    ideasEl.appendChild(item);
  });
}

function updateStatus(message) {
  document.getElementById("status-text").textContent = message;
}

function toggleSelection(name) {
  const existingIndex = selected.indexOf(name);

  if (existingIndex !== -1) {
    if (selected.length === 1) {
      selected.push(name);
      renderSelection();
      renderInventory();

      if (selected.length === 2) {
        tryCombine();
      }
      return;
    }

    selected.splice(existingIndex, 1);
    renderSelection();
    renderInventory();
    updateStatus(`Removed ${formatName(name)} from the mix.`);
    return;
  }

  if (selected.length >= 2) {
    updateStatus("You can only combine two elements at a time.");
    return;
  }

  selected.push(name);
  renderSelection();
  renderInventory();

  if (selected.length === 2) {
    tryCombine();
  }
}

function tryCombine() {
  const [first, second] = selected;
  const result = getRecipeMap().get(getRecipeKey(first, second));

  if (!result) {
    const message = `No new compound formed from ${formatName(first)} and ${formatName(second)}. Try a different pair.`;
    selected.length = 0;
    renderSelection();
    renderInventory();
    updateStatus(message);
    return;
  }

  if (inventory.has(result)) {
    selected.length = 0;
    renderSelection();
    renderInventory();
    updateStatus(`${getResultInfo(result).name || formatName(result)} is already in your collection.`);
    return;
  }

  inventory.add(result);
  saveGame();
  selected.length = 0;
  renderSelection();
  renderInventory();
  renderRecipes();
  renderIdeas();
  updateStatus(`Success! You created ${getResultInfo(result).name || formatName(result)} ${icons[result] || getResultInfo(result).symbol || "✨"}.`);
}

function formatName(name) {
  return String(name)
    .replace(/_/g, " ")
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function resetGame() {
  inventory.clear();
  initialItems.forEach((item) => inventory.add(item));
  selected.length = 0;
  saveGame();
  renderInventory();
  renderSelection();
  renderRecipes();
  renderIdeas();
  updateStatus("The lab has been reset with more real periodic-table elements and compound formulas.");
}

function renderElementInfo() {
  const infoList = document.getElementById("element-info-list");
  if (!infoList) {
    return;
  }

  infoList.innerHTML = "";

  const familyOrder = [
    "alkali_metal",
    "alkaline_earth_metal",
    "transition_metal",
    "post_transition_metal",
    "metalloid",
    "nonmetal",
    "halogen",
    "noble_gas",
    "lanthanide",
    "actinide",
  ];

  familyOrder.forEach((familyKey) => {
    const familyItems = elementCatalog.filter((element) => (elementCategories[element.key] || "compound") === familyKey);
    if (!familyItems.length) {
      return;
    }

    const section = document.createElement("div");
    section.className = "family-section";

    const heading = document.createElement("h3");
    heading.className = `family-heading ${familyKey}`;
    heading.textContent = categoryNames[familyKey] || "Element Family";
    section.appendChild(heading);

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "family-items";

    familyItems.forEach((element) => {
      const item = document.createElement("div");
      item.className = "info-item";
      const category = elementCategories[element.key] || "compound";
      const palette = getElementPalette(element.key);
      const hazard = elementHazards[element.key];
      const symbol = element.symbol || icons[element.key] || "✦";
      const valence = getValenceValue(element.key);

      item.innerHTML = `
        <div class="element-detail-visual" style="background: linear-gradient(135deg, ${palette[1]}, ${palette[0]}44);">
          <span>${symbol}</span>
        </div>
        <div class="element-detail-copy">
          <div class="element-detail-header">
            <strong>${element.name}</strong>
            ${hazard ? '<span class="danger-flag" aria-label="Dangerous element">🚩</span>' : '<span aria-label="Generally safe">✅</span>'}
          </div>
          <div class="element-meta">
            <span>${categoryNames[category] || "Element"}</span>
            <span>Valence: ${valence}</span>
          </div>
          ${hazard
            ? `<div class="danger-text"><strong>Why dangerous:</strong> ${hazard}</div>`
            : '<div class="safe-text">This element is generally safe to handle in normal classroom demonstrations.</div>'}
        </div>
      `;

      itemsWrap.appendChild(item);
    });

    section.appendChild(itemsWrap);
    infoList.appendChild(section);
  });
}

function renderWorldThings() {
  const worldList = document.getElementById("world-item-list");
  if (!worldList) {
    return;
  }

  worldList.innerHTML = "";

  worldThings.forEach((item) => {
    const card = document.createElement("article");
    card.className = "world-item";

    const chips = item.elements
      .map((elementKey) => {
        const info = elementInfo[elementKey] || { name: formatName(elementKey), symbol: elementKey.slice(0, 2) };
        return `<span class="element-chip">${info.symbol || formatName(elementKey)}</span>`;
      })
      .join("");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="world-item-meta">${chips}</div>
    `;

    worldList.appendChild(card);
  });
}

function renderDangerousElements() {
  const dangerList = document.getElementById("danger-item-list");
  if (!dangerList) {
    return;
  }

  dangerList.innerHTML = "";

  highRiskElementKeys.forEach((elementKey) => {
    const element = elementCatalog.find((entry) => entry.key === elementKey);
    const hazard = elementHazards[elementKey];
    const guidance = elementSafetyGuidance[elementKey];
    if (!element || !hazard || !guidance) {
      return;
    }

    const card = document.createElement("article");
    card.className = "danger-item";
    const symbol = document.createElement("span");
    symbol.className = "danger-item-symbol";
    symbol.textContent = element.symbol;
    symbol.setAttribute("aria-hidden", "true");

    const copy = document.createElement("div");
    copy.className = "danger-item-copy";
    const heading = document.createElement("h3");
    heading.textContent = element.name;
    const summary = document.createElement("p");
    summary.className = "danger-item-summary";
    summary.textContent = hazard;

    const harm = document.createElement("p");
    harm.className = "danger-item-detail";
    const harmLabel = document.createElement("strong");
    harmLabel.textContent = "Possible bodily harm: ";
    harm.append(harmLabel, document.createTextNode(guidance.harm));

    const prevention = document.createElement("p");
    prevention.className = "danger-item-detail";
    const preventionLabel = document.createElement("strong");
    preventionLabel.textContent = "Prevention: ";
    prevention.append(preventionLabel, document.createTextNode(guidance.prevention));

    copy.append(heading, summary, harm, prevention);
    card.append(symbol, copy);
    dangerList.appendChild(card);
  });
}

function showTab(tabName) {
  const forgeTab = document.getElementById("forge-tab");
  const quizTab = document.getElementById("quiz-tab");
  const infoTab = document.getElementById("info-tab");
  const worldTab = document.getElementById("world-tab");
  const dangerTab = document.getElementById("danger-tab");
  const forgeButton = document.getElementById("tab-forge");
  const quizButton = document.getElementById("tab-quiz");
  const infoButton = document.getElementById("tab-info");
  const worldButton = document.getElementById("tab-world");
  const dangerButton = document.getElementById("tab-danger");

  const isForge = tabName === "forge";
  const isQuiz = tabName === "quiz";
  const isInfo = tabName === "info";
  const isWorld = tabName === "world";
  const isDanger = tabName === "danger";

  forgeTab.classList.toggle("hidden", !isForge);
  quizTab.classList.toggle("hidden", !isQuiz);
  infoTab.classList.toggle("hidden", !isInfo);
  worldTab.classList.toggle("hidden", !isWorld);
  dangerTab.classList.toggle("hidden", !isDanger);

  forgeButton.classList.toggle("active", isForge);
  quizButton.classList.toggle("active", isQuiz);
  infoButton.classList.toggle("active", isInfo);
  worldButton.classList.toggle("active", isWorld);
  dangerButton.classList.toggle("active", isDanger);

  forgeButton.setAttribute("aria-selected", String(isForge));
  quizButton.setAttribute("aria-selected", String(isQuiz));
  infoButton.setAttribute("aria-selected", String(isInfo));
  worldButton.setAttribute("aria-selected", String(isWorld));
  dangerButton.setAttribute("aria-selected", String(isDanger));

  forgeTab.setAttribute("aria-hidden", String(!isForge));
  quizTab.setAttribute("aria-hidden", String(!isQuiz));
  infoTab.setAttribute("aria-hidden", String(!isInfo));
  worldTab.setAttribute("aria-hidden", String(!isWorld));
  dangerTab.setAttribute("aria-hidden", String(!isDanger));
}

function resetQuiz() {
  quizState.index = 0;
  quizState.score = 0;
  quizState.answered = false;
  document.getElementById("quiz-score").textContent = "0";
  renderQuiz();
}

function renderQuiz() {
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const feedbackEl = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("quiz-next");

  if (quizState.index >= quizQuestions.length) {
    questionEl.textContent = `Quiz complete! You scored ${quizState.score} out of ${quizQuestions.length}.`;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "Excellent work — review the ion and valence patterns and try again for a higher score.";
    nextButton.classList.add("hidden");
    return;
  }

  const currentQuestion = quizQuestions[quizState.index];
  const scoreEl = document.getElementById("quiz-score");
  scoreEl.textContent = String(quizState.score);
  questionEl.textContent = `Question ${quizState.index + 1} of ${quizQuestions.length}: ${currentQuestion.prompt}`;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextButton.classList.add("hidden");
  quizState.answered = false;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      if (quizState.answered) {
        return;
      }

      quizState.answered = true;
      const isCorrect = option === currentQuestion.answer;

      if (isCorrect) {
        quizState.score += 1;
        scoreEl.textContent = String(quizState.score);
        feedbackEl.textContent = "Correct! Nice job.";
      } else {
        feedbackEl.textContent = `Not quite — the correct answer is ${currentQuestion.answer}.`;
      }

      Array.from(optionsEl.children).forEach((child) => {
        const childOption = child.textContent;
        child.disabled = true;
        child.classList.toggle("correct", childOption === currentQuestion.answer);
        child.classList.toggle("wrong", childOption === option && !isCorrect);
      });

      nextButton.classList.remove("hidden");
    });
    optionsEl.appendChild(button);
  });
}

document.getElementById("quiz-next").addEventListener("click", () => {
  quizState.index += 1;
  renderQuiz();
});

document.getElementById("tab-forge").addEventListener("click", () => showTab("forge"));
document.getElementById("tab-quiz").addEventListener("click", () => {
  showTab("quiz");
  if (quizState.index === 0 && quizState.score === 0 && !quizState.answered) {
    renderQuiz();
  }
});
document.getElementById("tab-info").addEventListener("click", () => {
  showTab("info");
  renderElementInfo();
});
document.getElementById("tab-world").addEventListener("click", () => {
  showTab("world");
  renderWorldThings();
});
document.getElementById("tab-danger").addEventListener("click", () => {
  showTab("danger");
  renderDangerousElements();
});
document.getElementById("reset-btn").addEventListener("click", () => {
  resetGame();
  resetQuiz();
});
renderInventory();
renderSelection();
renderRecipes();
renderIdeas();
renderElementInfo();
renderWorldThings();
renderDangerousElements();
resetQuiz();
showTab("forge");
updateStatus("Combine real periodic-table elements to form compounds, and watch the formula and ion details update.");
