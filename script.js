// Complete array of all 118 elements with placeholder radius and angle
// Adjust radius and angle based on your spiral image's layout
const elements = [
    { symbol: "H", name: "Hydrogen", desc: "A light, colorless gas.", radius: 10, angle: 0 },
    { symbol: "He", name: "Helium", desc: "A noble gas used in balloons.", radius: 10, angle: 30 },
    { symbol: "Li", name: "Lithium", desc: "A soft, silvery metal.", radius: 20, angle: 0 },
    { symbol: "Be", name: "Beryllium", desc: "A lightweight, strong metal.", radius: 20, angle: 45 },
    { symbol: "B", name: "Boron", desc: "A metalloid used in glass.", radius: 30, angle: 0 },
    { symbol: "C", name: "Carbon", desc: "Basis of organic chemistry.", radius: 30, angle: 60 },
    { symbol: "N", name: "Nitrogen", desc: "Makes up 78% of air.", radius: 40, angle: 0 },
    { symbol: "O", name: "Oxygen", desc: "Essential for respiration.", radius: 40, angle: 45 },
    { symbol: "F", name: "Fluorine", desc: "A highly reactive halogen.", radius: 50, angle: 0 },
    { symbol: "Ne", name: "Neon", desc: "Used in glowing signs.", radius: 50, angle: 36 },
    { symbol: "Na", name: "Sodium", desc: "A reactive alkali metal.", radius: 60, angle: 0 },
    { symbol: "Mg", name: "Magnesium", desc: "Burns with a bright flame.", radius: 60, angle: 30 },
    { symbol: "Al", name: "Aluminum", desc: "A lightweight metal.", radius: 70, angle: 0 },
    { symbol: "Si", name: "Silicon", desc: "Used in semiconductors.", radius: 70, angle: 25 },
    { symbol: "P", name: "Phosphorus", desc: "Essential for life.", radius: 80, angle: 0 },
    { symbol: "S", name: "Sulfur", desc: "Known for its smell.", radius: 80, angle: 22.5 },
    { symbol: "Cl", name: "Chlorine", desc: "A disinfectant gas.", radius: 90, angle: 0 },
    { symbol: "Ar", name: "Argon", desc: "An inert noble gas.", radius: 90, angle: 20 },
    { symbol: "K", name: "Potassium", desc: "Vital for cells.", radius: 100, angle: 0 },
    { symbol: "Ca", name: "Calcium", desc: "Strengthens bones.", radius: 100, angle: 18 },
    { symbol: "Sc", name: "Scandium", desc: "A rare earth metal.", radius: 110, angle: 0 },
    { symbol: "Ti", name: "Titanium", desc: "Strong and light.", radius: 110, angle: 16 },
    { symbol: "V", name: "Vanadium", desc: "Used in steel alloys.", radius: 120, angle: 0 },
    { symbol: "Cr", name: "Chromium", desc: "Adds shine to metals.", radius: 120, angle: 14 },
    { symbol: "Mn", name: "Manganese", desc: "Improves steel strength.", radius: 130, angle: 0 },
    { symbol: "Fe", name: "Iron", desc: "Core component of steel.", radius: 130, angle: 12 },
    { symbol: "Co", name: "Cobalt", desc: "Used in magnets.", radius: 140, angle: 0 },
    { symbol: "Ni", name: "Nickel", desc: "Resistant to corrosion.", radius: 140, angle: 10 },
    { symbol: "Cu", name: "Copper", desc: "Excellent conductor.", radius: 150, angle: 0 },
    { symbol: "Zn", name: "Zinc", desc: "Used in galvanizing.", radius: 150, angle: 8 },
    { symbol: "Ga", name: "Gallium", desc: "Melts near room temp.", radius: 160, angle: 0 },
    { symbol: "Ge", name: "Germanium", desc: "Used in electronics.", radius: 160, angle: 6 },
    { symbol: "As", name: "Arsenic", desc: "A toxic metalloid.", radius: 170, angle: 0 },
    { symbol: "Se", name: "Selenium", desc: "Used in photocells.", radius: 170, angle: 4 },
    { symbol: "Br", name: "Bromine", desc: "A reddish liquid.", radius: 180, angle: 0 },
    { symbol: "Kr", name: "Krypton", desc: "A rare noble gas.", radius: 180, angle: 2 },
    { symbol: "Rb", name: "Rubidium", desc: "Highly reactive.", radius: 190, angle: 0 },
    { symbol: "Sr", name: "Strontium", desc: "Used in fireworks.", radius: 190, angle: 358 },
    { symbol: "Y", name: "Yttrium", desc: "Rare earth element.", radius: 200, angle: 0 },
    { symbol: "Zr", name: "Zirconium", desc: "Corrosion-resistant.", radius: 200, angle: 356 },
    { symbol: "Nb", name: "Niobium", desc: "Used in alloys.", radius: 210, angle: 0 },
    { symbol: "Mo", name: "Molybdenum", desc: "High melting point.", radius: 210, angle: 354 },
    { symbol: "Tc", name: "Technetium", desc: "First synthetic element.", radius: 220, angle: 0 },
    { symbol: "Ru", name: "Ruthenium", desc: "Used in catalysts.", radius: 220, angle: 352 },
    { symbol: "Rh", name: "Rhodium", desc: "Shiny and rare.", radius: 230, angle: 0 },
    { symbol: "Pd", name: "Palladium", desc: "Used in catalysis.", radius: 230, angle: 350 },
    { symbol: "Ag", name: "Silver", desc: "Precious metal.", radius: 240, angle: 0 },
    { symbol: "Cd", name: "Cadmium", desc: "Toxic metal.", radius: 240, angle: 348 },
    { symbol: "In", name: "Indium", desc: "Soft and malleable.", radius: 250, angle: 0 },
    { symbol: "Sn", name: "Tin", desc: "Used in solder.", radius: 250, angle: 346 },
    { symbol: "Sb", name: "Antimony", desc: "Brittle metalloid.", radius: 260, angle: 0 },
    { symbol: "Te", name: "Tellurium", desc: "Rare metalloid.", radius: 260, angle: 344 },
    { symbol: "I", name: "Iodine", desc: "Used in medicine.", radius: 270, angle: 0 },
    { symbol: "Xe", name: "Xenon", desc: "Used in lighting.", radius: 270, angle: 342 },
    { symbol: "Cs", name: "Cesium", desc: "Highly reactive.", radius: 280, angle: 0 },
    { symbol: "Ba", name: "Barium", desc: "Used in X-rays.", radius: 280, angle: 340 },
    { symbol: "La", name: "Lanthanum", desc: "Rare earth metal.", radius: 290, angle: 0 },
    { symbol: "Ce", name: "Cerium", desc: "Used in catalysts.", radius: 290, angle: 338 },
    { symbol: "Pr", name: "Praseodymium", desc: "Rare earth element.", radius: 300, angle: 0 },
    { symbol: "Nd", name: "Neodymium", desc: "Used in magnets.", radius: 300, angle: 336 },
    { symbol: "Pm", name: "Promethium", desc: "Radioactive rare earth.", radius: 310, angle: 0 },
    { symbol: "Sm", name: "Samarium", desc: "Used in electronics.", radius: 310, angle: 334 },
    { symbol: "Eu", name: "Europium", desc: "Used in phosphors.", radius: 320, angle: 0 },
    { symbol: "Gd", name: "Gadolinium", desc: "Used in MRI.", radius: 320, angle: 332 },
    { symbol: "Tb", name: "Terbium", desc: "Green phosphor.", radius: 330, angle: 0 },
    { symbol: "Dy", name: "Dysprosium", desc: "High magnetic strength.", radius: 330, angle: 330 },
    { symbol: "Ho", name: "Holmium", desc: "Used in lasers.", radius: 340, angle: 0 },
    { symbol: "Er", name: "Erbium", desc: "Used in fiber optics.", radius: 340, angle: 328 },
    { symbol: "Tm", name: "Thulium", desc: "Rare earth metal.", radius: 350, angle: 0 },
    { symbol: "Yb", name: "Ytterbium", desc: "Used in lasers.", radius: 350, angle: 326 },
    { symbol: "Lu", name: "Lutetium", desc: "Rare earth element.", radius: 360, angle: 0 },
    { symbol: "Hf", name: "Hafnium", desc: "Corrosion-resistant.", radius: 360, angle: 324 },
    { symbol: "Ta", name: "Tantalum", desc: "High melting point.", radius: 370, angle: 0 },
    { symbol: "W", name: "Tungsten", desc: "Used in filaments.", radius: 370, angle: 322 },
    { symbol: "Re", name: "Rhenium", desc: "High melting point.", radius: 380, angle: 0 },
    { symbol: "Os", name: "Osmium", desc: "Densest natural element.", radius: 380, angle: 320 },
    { symbol: "Ir", name: "Iridium", desc: "Very dense.", radius: 390, angle: 0 },
    { symbol: "Pt", name: "Platinum", desc: "Precious metal.", radius: 390, angle: 318 },
    { symbol: "Au", name: "Gold", desc: "Valuable and malleable.", radius: 400, angle: 0 },
    { symbol: "Hg", name: "Mercury", desc: "Only liquid metal.", radius: 400, angle: 316 },
    { symbol: "Tl", name: "Thallium", desc: "Toxic metal.", radius: 410, angle: 0 },
    { symbol: "Pb", name: "Lead", desc: "Dense and soft.", radius: 410, angle: 314 },
    { symbol: "Bi", name: "Bismuth", desc: "Low toxicity metal.", radius: 420, angle: 0 },
    { symbol: "Po", name: "Polonium", desc: "Radioactive.", radius: 420, angle: 312 },
    { symbol: "At", name: "Astatine", desc: "Rare halogen.", radius: 430, angle: 0 },
    { symbol: "Rn", name: "Radon", desc: "Radioactive gas.", radius: 430, angle: 310 },
    { symbol: "Fr", name: "Francium", desc: "Highly radioactive.", radius: 440, angle: 0 },
    { symbol: "Ra", name: "Radium", desc: "Radioactive.", radius: 440, angle: 308 },
    { symbol: "Ac", name: "Actinium", desc: "Radioactive metal.", radius: 450, angle: 0 },
    { symbol: "Th", name: "Thorium", desc: "Nuclear fuel.", radius: 450, angle: 306 },
    { symbol: "Pa", name: "Protactinium", desc: "Rare actinide.", radius: 460, angle: 0 },
    { symbol: "U", name: "Uranium", desc: "Nuclear energy.", radius: 460, angle: 304 },
    { symbol: "Np", name: "Neptunium", desc: "Synthetic actinide.", radius: 470, angle: 0 },
    { symbol: "Pu", name: "Plutonium", desc: "Nuclear weapon material.", radius: 470, angle: 302 },
    { symbol: "Am", name: "Americium", desc: "Used in smoke detectors.", radius: 480, angle: 0 },
    { symbol: "Cm", name: "Curium", desc: "Synthetic actinide.", radius: 480, angle: 300 },
    { symbol: "Bk", name: "Berkelium", desc: "Synthetic element.", radius: 490, angle: 0 },
    { symbol: "Cf", name: "Californium", desc: "Used in research.", radius: 490, angle: 298 },
    { symbol: "Es", name: "Einsteinium", desc: "Synthetic element.", radius: 500, angle: 0 },
    { symbol: "Fm", name: "Fermium", desc: "Synthetic element.", radius: 500, angle: 296 },
    { symbol: "Md", name: "Mendelevium", desc: "Synthetic element.", radius: 510, angle: 0 },
    { symbol: "No", name: "Nobelium", desc: "Synthetic element.", radius: 510, angle: 294 },
    { symbol: "Lr", name: "Lawrencium", desc: "Synthetic element.", radius: 520, angle: 0 },
    { symbol: "Rf", name: "Rutherfordium", desc: "Synthetic element.", radius: 520, angle: 292 },
    { symbol: "Db", name: "Dubnium", desc: "Synthetic element.", radius: 530, angle: 0 },
    { symbol: "Sg", name: "Seaborgium", desc: "Synthetic element.", radius: 530, angle: 290 },
    { symbol: "Bh", name: "Bohrium", desc: "Synthetic element.", radius: 540, angle: 0 },
    { symbol: "Hs", name: "Hassium", desc: "Synthetic element.", radius: 540, angle: 288 },
    { symbol: "Mt", name: "Meitnerium", desc: "Synthetic element.", radius: 550, angle: 0 },
    { symbol: "Ds", name: "Darmstadtium", desc: "Synthetic element.", radius: 550, angle: 286 },
    { symbol: "Rg", name: "Roentgenium", desc: "Synthetic element.", radius: 560, angle: 0 },
    { symbol: "Cn", name: "Copernicium", desc: "Synthetic element.", radius: 560, angle: 284 },
    { symbol: "Nh", name: "Nihonium", desc: "Synthetic element.", radius: 570, angle: 0 },
    { symbol: "Fl", name: "Flerovium", desc: "Synthetic element.", radius: 570, angle: 282 },
    { symbol: "Mc", name: "Moscovium", desc: "Synthetic element.", radius: 580, angle: 0 },
    { symbol: "Lv", name: "Livermorium", desc: "Synthetic element.", radius: 580, angle: 280 },
    { symbol: "Ts", name: "Tennessine", desc: "Synthetic element.", radius: 590, angle: 0 },
    { symbol: "Og", name: "Oganesson", desc: "Synthetic noble gas.", radius: 590, angle: 278 }
];

const overlay = document.getElementById("element-overlay");

elements.forEach(el => {
    const angleRad = el.angle * Math.PI / 180;
    const x = 50 + el.radius * Math.cos(angleRad);
    const y = 50 + el.radius * Math.sin(angleRad);

    const div = document.createElement("div");
    div.className = "element";
    div.style.position = "absolute";
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    div.style.transform = "translate(-50%, -50%)";
    div.style.width = "2%"; // Adjust size based on your image
    div.style.height = "2%";
    div.style.cursor = "pointer";
    // For testing, make divs visible
    div.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    // For final version, uncomment the line below and comment out the one above
    // div.style.backgroundColor = "transparent";

    div.addEventListener("click", () => {
        document.getElementById("element-name").textContent = `${el.name} (${el.symbol})`;
        document.getElementById("element-desc").textContent = el.desc;
        document.getElementById("description-box").classList.remove("hidden");
    });

    overlay.appendChild(div);
});

function hideDescription() {
    document.getElementById("description-box").classList.add("hidden");
}
