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
  { symbol: "Og", number: 118, zone: "Zone 6", color: "#ff00ff", desc: "Zone 6 – Outer instability fringe" }
  // Add more for full table…
];

const svg = document.getElementById("spiral-table");
const tooltip = document.getElementById("tooltip");
const zoneButtons = document.querySelectorAll(".zone-toggle");

// Draw each element in spiral form
elements.forEach((el, i) => {
  const angle = i * 0.35;
  const radius = 40 + i * 6;
  const x = 400 + radius * Math.cos(angle);
  const y = 400 + radius * Math.sin(angle);

  const btn = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
  btn.setAttribute("x", x - 20);
  btn.setAttribute("y", y - 20);
  btn.setAttribute("width", "40");
  btn.setAttribute("height", "40");

  const divHTML = `
    <div xmlns="http://www.w3.org/1999/xhtml"
      data-zone="${el.zone}"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-weight: bold;
        border-radius: 8px;
        font-size: 0.8rem;
        background-color: ${el.color};
        color: #000;
        box-shadow: 0 0 8px ${el.color};
        cursor: pointer;
      ">
      ${el.symbol}
    </div>
  `;

  btn.innerHTML = divHTML;

  btn.addEventListener("mouseenter", () => {
    tooltip.innerHTML = `<strong>${el.symbol} (#${el.number})</strong><br>${el.desc}`;
    tooltip.classList.remove("hidden");
  });

  btn.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
  });

  btn.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });

  svg.appendChild(btn);
});

// Filter logic
zoneButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const zone = btn.getAttribute("data-zone");
    document.querySelectorAll("[data-zone]").forEach(el => {
      el.style.display = (zone === "all" || el.getAttribute("data-zone") === zone) ? "flex" : "none";
    });

    zoneButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
