const elements = [
  { symbol: "H", number: 1, zone: "Core", color: "#00ffff", desc: "Core – Primordial scalar anchor" },
  { symbol: "He", number: 2, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "Li", number: 3, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "Be", number: 4, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "B", number: 5, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "C", number: 6, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "N", number: 7, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "O", number: 8, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "F", number: 9, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "Ne", number: 10, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "Na", number: 11, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "Mg", number: 12, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "Al", number: 13, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "Si", number: 14, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "P", number: 15, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "S", number: 16, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "Cl", number: 17, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "Ar", number: 18, zone: "Zone 2", color: "#aaff00", desc: "Zone 2 – Stable field shell" },
  { symbol: "K", number: 19, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Ca", number: 20, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Sc", number: 21, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Ti", number: 22, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "V", number: 23, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Cr", number: 24, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Mn", number: 25, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Fe", number: 26, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Co", number: 27, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Ni", number: 28, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Cu", number: 29, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Zn", number: 30, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Ga", number: 31, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Ge", number: 32, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "As", number: 33, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Se", number: 34, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Br", number: 35, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Kr", number: 36, zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 – Medium mass cohesion" },
  { symbol: "Rb", number: 37, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Sr", number: 38, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Y", number: 39, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Zr", number: 40, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Nb", number: 41, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Mo", number: 42, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Tc", number: 43, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Ru", number: 44, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Rh", number: 45, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Pd", number: 46, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Ag", number: 47, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Cd", number: 48, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "In", number: 49, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Sn", number: 50, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Sb", number: 51, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Te", number: 52, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "I", number: 53, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Xe", number: 54, zone: "Zone 4", color: "#ff6600", desc: "Zone 4 – Outer interaction shell" },
  { symbol: "Cs", number: 55, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Ba", number: 56, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "La", number: 57, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Ce", number: 58, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Pr", number: 59, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Nd", number: 60, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Pm", number: 61, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Sm", number: 62, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Eu", number: 63, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Gd", number: 64, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Tb", number: 65, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Dy", number: 66, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Ho", number: 67, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Er", number: 68, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Tm", number: 69, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Yb", number: 70, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Lu", number: 71, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Hf", number: 72, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Ta", number: 73, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "W", number: 74, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Re", number: 75, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Os", number: 76, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Ir", number: 77, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Pt", number: 78, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Au", number: 79, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Hg", number: 80, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Tl", number: 81, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Pb", number: 82, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Bi", number: 83, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Po", number: 84, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "At", number: 85, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Rn", number: 86, zone: "Zone 5", color: "#ff0000", desc: "Zone 5 – Transitional instability shell" },
  { symbol: "Fr", number: 87, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Ra", number: 88, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Ac", number: 89, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Th", number: 90, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Pa", number: 91, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "U", number: 92, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Np", number: 93, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Pu", number: 94, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Am", number: 95, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Cm", number: 96, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Bk", number: 97, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Cf", number: 98, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Es", number: 99, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Fm", number: 100, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Md", number: 101, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "No", number: 102, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Lr", number: 103, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Rf", number: 104, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Db", number: 105, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Sg", number: 106, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Bh", number: 107, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Hs", number: 108, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Mt", number: 109, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Ds", number: 110, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Rg", number: 111, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Cn", number: 112, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Nh", number: 113, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Fl", number: 114, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Mc", number: 115, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Lv", number: 116, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Ts", number: 117, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" },
  { symbol: "Og", number: 118, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" }
];

// Create spiral element buttons
const container = document.getElementById("table-container");
elements.forEach(el => {
  const angle = (el.number - 1) * 0.3;
  const radius = 70 + el.number * 2;
  const x = 400 + radius * Math.cos(angle); // Centered at 400 (half of 800 viewBox)
  const y = 400 + radius * Math.sin(angle); // Centered at 400 (half of 800 viewBox)

  const div = document.createElement("div");
  div.className = `element ${el.zone.replace(" ", "")}`;
  div.style.left = `${x - 30}px`; // Adjust for element width (60px)
  div.style.top = `${y - 30}px`;  // Adjust for element height (60px)
  div.style.backgroundColor = el.color;
  div.style.position = "absolute";
  div.textContent = el.symbol;
  div.setAttribute("title", `${el.symbol} (${el.number}): ${el.desc}`);

  container.appendChild(div);
});

// Toggle zones by buttons
document.querySelectorAll(".zone-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const zone = button.getAttribute("data-zone").replace(" ", "");
    const isVisible = button.classList.toggle("active");

    if (zone === "all") {
      document.querySelectorAll(".element").forEach(el => {
        el.style.display = isVisible ? "block" : "none";
      });
    } else {
      document.querySelectorAll(`.element.${zone}`).forEach(el => {
        el.style.display = isVisible ? "block" : "none";
      });
    }

    // Deactivate other buttons when "All" is toggled
    if (zone === "all" && isVisible) {
      document.querySelectorAll(".zone-toggle").forEach(btn => {
        if (btn.getAttribute("data-zone") !== "all") btn.classList.remove("active");
      });
    }
  });
});

// Tooltip functionality
const tooltip = document.getElementById("tooltip");
document.querySelectorAll(".element").forEach(element => {
  element.addEventListener("mousemove", (e) => {
    const title = element.getAttribute("title");
    tooltip.textContent = title;
    tooltip.classList.remove("hidden");
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
  });

  element.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });
});
