<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Periodic Table</title>
  <style>
    #periodic-table {
      border-collapse: collapse;
      margin: 20px;
    }
    #periodic-table td {
      width: 50px;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    #periodic-table td:empty {
      border: none;
      cursor: default;
    }
    .placeholder {
      background-color: #f0f0f0;
      cursor: default;
    }
  </style>
</head>
<body>
  <table id="periodic-table">
    <tbody></tbody>
  </table>
  <script>
    // Array of all 118 elements with their name, symbol, atomic number, row, and column
    const elements = [
      { name: "Hydrogen", symbol: "H", atomicNumber: 1, row: 1, column: 1 },
      { name: "Helium", symbol: "He", atomicNumber: 2, row: 1, column: 18 },
      { name: "Lithium", symbol: "Li", atomicNumber: 3, row: 2, column: 1 },
      { name: "Beryllium", symbol: "Be", atomicNumber: 4, row: 2, column: 2 },
      { name: "Boron", symbol: "B", atomicNumber: 5, row: 2, column: 13 },
      { name: "Carbon", symbol: "C", atomicNumber: 6, row: 2, column: 14 },
      { name: "Nitrogen", symbol: "N", atomicNumber: 7, row: 2, column: 15 },
      { name: "Oxygen", symbol: "O", atomicNumber: 8, row: 2, column: 16 },
      { name: "Fluorine", symbol: "F", atomicNumber: 9, row: 2, column: 17 },
      { name: "Neon", symbol: "Ne", atomicNumber: 10, row: 2, column: 18 },
      { name: "Sodium", symbol: "Na", atomicNumber: 11, row: 3, column: 1 },
      { name: "Magnesium", symbol: "Mg", atomicNumber: 12, row: 3, column: 2 },
      { name: "Aluminum", symbol: "Al", atomicNumber: 13, row: 3, column: 13 },
      { name: "Silicon", symbol: "Si", atomicNumber: 14, row: 3, column: 14 },
      { name: "Phosphorus", symbol: "P", atomicNumber: 15, row: 3, column: 15 },
      { name: "Sulfur", symbol: "S", atomicNumber: 16, row: 3, column: 16 },
      { name: "Chlorine", symbol: "Cl", atomicNumber: 17, row: 3, column: 17 },
      { name: "Argon", symbol: "Ar", atomicNumber: 18, row: 3, column: 18 },
      { name: "Potassium", symbol: "K", atomicNumber: 19, row: 4, column: 1 },
      { name: "Calcium", symbol: "Ca", atomicNumber: 20, row: 4, column: 2 },
      { name: "Scandium", symbol: "Sc", atomicNumber: 21, row: 4, column: 3 },
      { name: "Titanium", symbol: "Ti", atomicNumber: 22, row: 4, column: 4 },
      { name: "Vanadium", symbol: "V", atomicNumber: 23, row: 4, column: 5 },
      { name: "Chromium", symbol: "Cr", atomicNumber: 24, row: 4, column: 6 },
      { name: "Manganese", symbol: "Mn", atomicNumber: 25, row: 4, column: 7 },
      { name: "Iron", symbol: "Fe", atomicNumber: 26, row: 4, column: 8 },
      { name: "Cobalt", symbol: "Co", atomicNumber: 27, row: 4, column: 9 },
      { name: "Nickel", symbol: "Ni", atomicNumber: 28, row: 4, column: 10 },
      { name: "Copper", symbol: "Cu", atomicNumber: 29, row: 4, column: 11 },
      { name: "Zinc", symbol: "Zn", atomicNumber: 30, row: 4, column: 12 },
      { name: "Gallium", symbol: "Ga", atomicNumber: 31, row: 4, column: 13 },
      { name: "Germanium", symbol: "Ge", atomicNumber: 32, row: 4, column: 14 },
      { name: "Arsenic", symbol: "As", atomicNumber: 33, row: 4, column: 15 },
      { name: "Selenium", symbol: "Se", atomicNumber: 34, row: 4, column: 16 },
      { name: "Bromine", symbol: "Br", atomicNumber: 35, row: 4, column: 17 },
      { name: "Krypton", symbol: "Kr", atomicNumber: 36, row: 4, column: 18 },
      { name: "Rubidium", symbol: "Rb", atomicNumber: 37, row: 5, column: 1 },
      { name: "Strontium", symbol: "Sr", atomicNumber: 38, row: 5, column: 2 },
      { name: "Yttrium", symbol: "Y", atomicNumber: 39, row: 5, column: 3 },
      { name: "Zirconium", symbol: "Zr", atomicNumber: 40, row: 5, column: 4 },
      { name: "Niobium", symbol: "Nb", atomicNumber: 41, row: 5, column: 5 },
      { name: "Molybdenum", symbol: "Mo", atomicNumber: 42, row: 5, column: 6 },
      { name: "Technetium", symbol: "Tc", atomicNumber: 43, row: 5, column: 7 },
      { name: "Ruthenium", symbol: "Ru", atomicNumber: 44, row: 5, column: 8 },
      { name: "Rhodium", symbol: "Rh", atomicNumber: 45, row: 5, column: 9 },
      { name: "Palladium", symbol: "Pd", atomicNumber: 46, row: 5, column: 10 },
      { name: "Silver", symbol: "Ag", atomicNumber: 47, row: 5, column: 11 },
      { name: "Cadmium", symbol: "Cd", atomicNumber: 48, row: 5, column: 12 },
      { name: "Indium", symbol: "In", atomicNumber: 49, row: 5, column: 13 },
      { name: "Tin", symbol: "Sn", atomicNumber: 50, row: 5, column: 14 },
      { name: "Antimony", symbol: "Sb", atomicNumber: 51, row: 5, column: 15 },
      { name: "Tellurium", symbol: "Te", atomicNumber: 52, row: 5, column: 16 },
      { name: "Iodine", symbol: "I", atomicNumber: 53, row: 5, column: 17 },
      { name: "Xenon", symbol: "Xe", atomicNumber: 54, row: 5, column: 18 },
      { name: "Cesium", symbol: "Cs", atomicNumber: 55, row: 6, column: 1 },
      { name: "Barium", symbol: "Ba", atomicNumber: 56, row: 6, column: 2 },
      { name: "Hafnium", symbol: "Hf", atomicNumber: 72, row: 6, column: 4 },
      { name: "Tantalum", symbol: "Ta", atomicNumber: 73, row: 6, column: 5 },
      { name: "Tungsten", symbol: "W", atomicNumber: 74, row: 6, column: 6 },
      { name: "Rhenium", symbol: "Re", atomicNumber: 75, row: 6, column: 7 },
      { name: "Osmium", symbol: "Os", atomicNumber: 76, row: 6, column: 8 },
      { name: "Iridium", symbol: "Ir", atomicNumber: 77, row: 6, column: 9 },
      { name: "Platinum", symbol: "Pt", atomicNumber: 78, row: 6, column: 10 },
      { name: "Gold", symbol: "Au", atomicNumber: 79, row: 6, column: 11 },
      { name: "Mercury", symbol: "Hg", atomicNumber: 80, row: 6, column: 12 },
      { name: "Thallium", symbol: "Tl", atomicNumber: 81, row: 6, column: 13 },
      { name: "Lead", symbol: "Pb", atomicNumber: 82, row: 6, column: 14 },
      { name: "Bismuth", symbol: "Bi", atomicNumber: 83, row: 6, column: 15 },
      { name: "Polonium", symbol: "Po", atomicNumber: 84, row: 6, column: 16 },
      { name: "Astatine", symbol: "At", atomicNumber: 85, row: 6, column: 17 },
      { name: "Radon", symbol: "Rn", atomicNumber: 86, row: 6, column: 18 },
      { name: "Francium", symbol: "Fr", atomicNumber: 87, row: 7, column: 1 },
      { name: "Radium", symbol: "Ra", atomicNumber: 88, row: 7, column: 2 },
      { name: "Rutherfordium", symbol: "Rf", atomicNumber: 104, row: 7, column: 4 },
      { name: "Dubnium", symbol: "Db", atomicNumber: 105, row: 7, column: 5 },
      { name: "Seaborgium", symbol: "Sg", atomicNumber: 106, row: 7, column: 6 },
      { name: "Bohrium", symbol: "Bh", atomicNumber: 107, row: 7, column: 7 },
      { name: "Hassium", symbol: "Hs", atomicNumber: 108, row: 7, column: 8 },
      { name: "Meitnerium", symbol: "Mt", atomicNumber: 109, row: 7, column: 9 },
      { name: "Darmstadtium", symbol: "Ds", atomicNumber: 110, row: 7, column: 10 },
      { name: "Roentgenium", symbol: "Rg", atomicNumber: 111, row: 7, column: 11 },
      { name: "Copernicium", symbol: "Cn", atomicNumber: 112, row: 7, column: 12 },
      { name: "Nihonium", symbol: "Nh", atomicNumber: 113, row: 7, column: 13 },
      { name: "Flerovium", symbol: "Fl", atomicNumber: 114, row: 7, column: 14 },
      { name: "Moscovium", symbol: "Mc", atomicNumber: 115, row: 7, column: 15 },
      { name: "Livermorium", symbol: "Lv", atomicNumber: 116, row: 7, column: 16 },
      { name: "Tennessine", symbol: "Ts", atomicNumber: 117, row: 7, column: 17 },
      { name: "Oganesson", symbol: "Og", atomicNumber: 118, row: 7, column: 18 },
      // Lanthanides (rows 8, columns 3-17)
      { name: "Lanthanum", symbol: "La", atomicNumber: 57, row: 8, column: 3 },
      { name: "Cerium", symbol: "Ce", atomicNumber: 58, row: 8, column: 4 },
      { name: "Praseodymium", symbol: "Pr", atomicNumber: 59, row: 8, column: 5 },
      { name: "Neodymium", symbol: "Nd", atomicNumber: 60, row: 8, column: 6 },
      { name: "Promethium", symbol: "Pm", atomicNumber: 61, row: 8, column: 7 },
      { name: "Samarium", symbol: "Sm", atomicNumber: 62, row: 8, column: 8 },
      { name: "Europium", symbol: "Eu", atomicNumber: 63, row: 8, column: 9 },
      { name: "Gadolinium", symbol: "Gd", atomicNumber: 64, row: 8, column: 10 },
      { name: "Terbium", symbol: "Tb", atomicNumber: 65, row: 8, column: 11 },
      { name: "Dysprosium", symbol: "Dy", atomicNumber: 66, row: 8, column: 12 },
      { name: "Holmium", symbol: "Ho", atomicNumber: 67, row: 8, column: 13 },
      { name: "Erbium", symbol: "Er", atomicNumber: 68, row: 8, column: 14 },
      { name: "Thulium", symbol: "Tm", atomicNumber: 69, row: 8, column: 15 },
      { name: "Ytterbium", symbol: "Yb", atomicNumber: 70, row: 8, column: 16 },
      { name: "Lutetium", symbol: "Lu", atomicNumber: 71, row: 8, column: 17 },
      // Actinides (row 9, columns 3-17)
      { name: "Actinium", symbol: "Ac", atomicNumber: 89, row: 9, column: 3 },
      { name: "Thorium", symbol: "Th", atomicNumber: 90, row: 9, column: 4 },
      { name: "Protactinium", symbol: "Pa", atomicNumber: 91, row: 9, column: 5 },
      { name: "Uranium", symbol: "U", atomicNumber: 92, row: 9, column: 6 },
      { name: "Neptunium", symbol: "Np", atomicNumber: 93, row: 9, column: 7 },
      { name: "Plutonium", symbol: "Pu", atomicNumber: 94, row: 9, column: 8 },
      { name: "Americium", symbol: "Am", atomicNumber: 95, row: 9, column: 9 },
      { name: "Curium", symbol: "Cm", atomicNumber: 96, row: 9, column: 10 },
      { name: "Berkelium", symbol: "Bk", atomicNumber: 97, row: 9, column: 11 },
      { name: "Californium", symbol: "Cf", atomicNumber: 98, row: 9, column: 12 },
      { name: "Einsteinium", symbol: "Es", atomicNumber: 99, row: 9, column: 13 },
      { name: "Fermium", symbol: "Fm", atomicNumber: 100, row: 9, column: 14 },
      { name: "Mendelevium", symbol: "Md", atomicNumber: 101, row: 9, column: 15 },
      { name: "Nobelium", symbol: "No", atomicNumber: 102, row: 9, column: 16 },
      { name: "Lawrencium", symbol: "Lr", atomicNumber: 103, row: 9, column: 17 }
    ];

    // Get the table body
    const tbody = document.querySelector("#periodic-table tbody");

    // Create 9 rows and 18 columns
    for (let row = 1; row <= 9; row++) {
      const tr = document.createElement("tr");
      for (let col = 1; col <= 18; col++) {
        const td = document.createElement("td");

        // Handle placeholders for lanthanides and actinides
        if (row === 6 && col === 3) {
          td.textContent = "La-Lu";
          td.className = "placeholder";
        } else if (row === 7 && col === 3) {
          td.textContent = "Ac-Lr";
          td.className = "placeholder";
        } else {
          // Find element for this row and column
          const element = elements.find(e => e.row === row && e.column === col);
          if (element) {
            td.textContent = element.symbol;
            td.title = element.name; // Tooltip on hover
            td.addEventListener("click", () => {
              alert(`${element.name} (${element.symbol}, Atomic Number: ${element.atomicNumber})`);
            });
          }
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  </script>
</body>
</html>
