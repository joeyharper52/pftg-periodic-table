// Complete array of all 118 elements with calculated radius and angle based on spiral layout
const elements = [
    { symbol: "H", name: "Hydrogen", desc: "Core – Primordial scalar anchor", zone: "Core", angle: 0.0, radius: 0 },
    { symbol: "He", name: "Helium", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 0.0, radius: 80 },
    { symbol: "Li", name: "Lithium", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 45.0, radius: 80 },
    { symbol: "Be", name: "Beryllium", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 90.0, radius: 80 },
    { symbol: "B", name: "Boron", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 135.0, radius: 80 },
    { symbol: "C", name: "Carbon", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 180.0, radius: 80 },
    { symbol: "N", name: "Nitrogen", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 225.0, radius: 80 },
    { symbol: "O", name: "Oxygen", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 270.0, radius: 80 },
    { symbol: "F", name: "Fluorine", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 315.0, radius: 80 },
    { symbol: "Ne", name: "Neon", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 360.0, radius: 80 },
    { symbol: "Na", name: "Sodium", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 405.0, radius: 80 },
    { symbol: "Mg", name: "Magnesium", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 450.0, radius: 80 },
    { symbol: "Al", name: "Aluminum", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 495.0, radius: 80 },
    { symbol: "Si", name: "Silicon", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 540.0, radius: 80 },
    { symbol: "P", name: "Phosphorus", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 585.0, radius: 80 },
    { symbol: "S", name: "Sulfur", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 630.0, radius: 80 },
    { symbol: "Cl", name: "Chlorine", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 675.0, radius: 80 },
    { symbol: "Ar", name: "Argon", desc: "Zone 1 – First pressure shell", zone: "Zone 1", angle: 720.0, radius: 80 },
    { symbol: "K", name: "Potassium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 0.0, radius: 130 },
    { symbol: "Ca", name: "Calcium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 45.0, radius: 130 },
    { symbol: "Sc", name: "Scandium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 90.0, radius: 130 },
    { symbol: "Ti", name: "Titanium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 135.0, radius: 130 },
    { symbol: "V", name: "Vanadium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 180.0, radius: 130 },
    { symbol: "Cr", name: "Chromium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 225.0, radius: 130 },
    { symbol: "Mn", name: "Manganese", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 270.0, radius: 130 },
    { symbol: "Fe", name: "Iron", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 315.0, radius: 130 },
    { symbol: "Co", name: "Cobalt", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 360.0, radius: 130 },
    { symbol: "Ni", name: "Nickel", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 405.0, radius: 130 },
    { symbol: "Cu", name: "Copper", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 450.0, radius: 130 },
    { symbol: "Zn", name: "Zinc", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 495.0, radius: 130 },
    { symbol: "Ga", name: "Gallium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 540.0, radius: 130 },
    { symbol: "Ge", name: "Germanium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 585.0, radius: 130 },
    { symbol: "As", name: "Arsenic", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 630.0, radius: 130 },
    { symbol: "Se", name: "Selenium", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 675.0, radius: 130 },
    { symbol: "Br", name: "Bromine", desc: "Zone 2 – Stable field-1 shell", zone: "Zone 2", angle: 720.0, radius: 130 },
    { symbol: "Kr", name: "Krypton", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 0.0, radius: 180 },
    { symbol: "Rb", name: "Rubidium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 36.0, radius: 180 },
    { symbol: "Sr", name: "Strontium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 72.0, radius: 180 },
    { symbol: "Y", name: "Yttrium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 108.0, radius: 180 },
    { symbol: "Zr", name: "Zirconium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 144.0, radius: 180 },
    { symbol: "Nb", name: "Niobium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 180.0, radius: 180 },
    { symbol: "Mo", name: "Molybdenum", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 216.0, radius: 180 },
    { symbol: "Tc", name: "Technetium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 252.0, radius: 180 },
    { symbol: "Ru", name: "Ruthenium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 288.0, radius: 180 },
    { symbol: "Rh", name: "Rhodium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 324.0, radius: 180 },
    { symbol: "Pd", name: "Palladium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 360.0, radius: 180 },
    { symbol: "Ag", name: "Silver", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 396.0, radius: 180 },
    { symbol: "Cd", name: "Cadmium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 432.0, radius: 180 },
    { symbol: "In", name: "Indium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 468.0, radius: 180 },
    { symbol: "Sn", name: "Tin", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 504.0, radius: 180 },
    { symbol: "Sb", name: "Antimony", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 540.0, radius: 180 },
    { symbol: "Te", name: "Tellurium", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 576.0, radius: 180 },
    { symbol: "I", name: "Iodine", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 612.0, radius: 180 },
    { symbol: "Xe", name: "Xenon", desc: "Zone 3 – Medium mass cohesion", zone: "Zone 3", angle: 648.0, radius: 180 },
    { symbol: "Cs", name: "Cesium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 0.0, radius: 230 },
    { symbol: "Ba", name: "Barium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 30.0, radius: 230 },
    { symbol: "La", name: "Lanthanum", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 60.0, radius: 230 },
    { symbol: "Ce", name: "Cerium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 90.0, radius: 230 },
    { symbol: "Pr", name: "Praseodymium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 120.0, radius: 230 },
    { symbol: "Nd", name: "Neodymium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 150.0, radius: 230 },
    { symbol: "Pm", name: "Promethium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 180.0, radius: 230 },
    { symbol: "Sm", name: "Samarium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 210.0, radius: 230 },
    { symbol: "Eu", name: "Europium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 240.0, radius: 230 },
    { symbol: "Gd", name: "Gadolinium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 270.0, radius: 230 },
    { symbol: "Tb", name: "Terbium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 300.0, radius: 230 },
    { symbol: "Dy", name: "Dysprosium", desc: "Zone 4 – Inner interaction shell", zone: "Zone 4", angle: 330.0, radius: 230 },
    { symbol: "Ho", name: "Holmium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 0.0, radius: 280 },
    { symbol: "Er", name: "Erbium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 24.0, radius: 280 },
    { symbol: "Tm", name: "Thulium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 48.0, radius: 280 },
    { symbol: "Yb", name: "Ytterbium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 72.0, radius: 280 },
    { symbol: "Lu", name: "Lutetium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 96.0, radius: 280 },
    { symbol: "Hf", name: "Hafnium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 120.0, radius: 280 },
    { symbol: "Ta", name: "Tantalum", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 144.0, radius: 280 },
    { symbol: "W", name: "Tungsten", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 168.0, radius: 280 },
    { symbol: "Re", name: "Rhenium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 192.0, radius: 280 },
    { symbol: "Os", name: "Osmium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 216.0, radius: 280 },
    { symbol: "Ir", name: "Iridium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 240.0, radius: 280 },
    { symbol: "Pt", name: "Platinum", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 264.0, radius: 280 },
    { symbol: "Au", name: "Gold", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 288.0, radius: 280 },
    { symbol: "Hg", name: "Mercury", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 312.0, radius: 280 },
    { symbol: "Tl", name: "Thallium", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 336.0, radius: 280 },
    { symbol: "Pb", name: "Lead", desc: "Zone 5 – Transitional instability shell", zone: "Zone 5", angle: 360.0, radius: 280 },
    { symbol: "Bi", name: "Bismuth", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 0.0, radius: 330 },
    { symbol: "Po", name: "Polonium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 18.0, radius: 330 },
    { symbol: "At", name: "Astatine", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 36.0, radius: 330 },
    { symbol: "Rn", name: "Radon", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 54.0, radius: 330 },
    { symbol: "Fr", name: "Francium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 72.0, radius: 330 },
    { symbol: "Ra", name: "Radium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 90.0, radius: 330 },
    { symbol: "Ac", name: "Actinium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 108.0, radius: 330 },
    { symbol: "Th", name: "Thorium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 126.0, radius: 330 },
    { symbol: "Pa", name: "Protactinium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 144.0, radius: 330 },
    { symbol: "U", name: "Uranium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 162.0, radius: 330 },
    { symbol: "Np", name: "Neptunium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 180.0, radius: 330 },
    { symbol: "Pu", name: "Plutonium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 198.0, radius: 330 },
    { symbol: "Am", name: "Americium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 216.0, radius: 330 },
    { symbol: "Cm", name: "Curium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 234.0, radius: 330 },
    { symbol: "Bk", name: "Berkelium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 252.0, radius: 330 },
    { symbol: "Cf", name: "Californium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 270.0, radius: 330 },
    { symbol: "Es", name: "Einsteinium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 288.0, radius: 330 },
    { symbol: "Fm", name: "Fermium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 306.0, radius: 330 },
    { symbol: "Md", name: "Mendelevium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 324.0, radius: 330 },
    { symbol: "No", name: "Nobelium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 342.0, radius: 330 },
    { symbol: "Lr", name: "Lawrencium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 360.0, radius: 330 },
    { symbol: "Rf", name: "Rutherfordium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 378.0, radius: 330 },
    { symbol: "Db", name: "Dubnium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 396.0, radius: 330 },
    { symbol: "Sg", name: "Seaborgium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 414.0, radius: 330 },
    { symbol: "Bh", name: "Bohrium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 432.0, radius: 330 },
    { symbol: "Hs", name: "Hassium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 450.0, radius: 330 },
    { symbol: "Mt", name: "Meitnerium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 468.0, radius: 330 },
    { symbol: "Ds", name: "Darmstadtium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 486.0, radius: 330 },
    { symbol: "Rg", name: "Roentgenium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 504.0, radius: 330 },
    { symbol: "Cn", name: "Copernicium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 522.0, radius: 330 },
    { symbol: "Nh", name: "Nihonium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 540.0, radius: 330 },
    { symbol: "Fl", name: "Flerovium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 558.0, radius: 330 },
    { symbol: "Mc", name: "Moscovium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 576.0, radius: 330 },
    { symbol: "Lv", name: "Livermorium", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 594.0, radius: 330 },
    { symbol: "Ts", name: "Tennessine", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 612.0, radius: 330 },
    { symbol: "Og", name: "Oganesson", desc: "Zone 6 – Outer instability shell", zone: "Zone 6", angle: 630.0, radius: 330 }
];

document.addEventListener("DOMContentLoaded", () => {
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
});

function hideDescription() {
    document.getElementById("description-box").classList.add("hidden");
}
