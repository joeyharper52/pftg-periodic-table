const elements = [
  { symbol: "H",  number: 1,  zone: "Zone 1", color: "#00ffff", desc: "Primordial scalar anchor" },
  { symbol: "He", number: 2,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "Li", number: 3,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "Be", number: 4,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "B",  number: 5,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "C",  number: 6,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "N",  number: 7,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "O",  number: 8,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "F",  number: 9,  zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "Ne", number: 10, zone: "Zone 1", color: "#00ffaa", desc: "First pressure shell" },
  { symbol: "Na", number: 11, zone: "Zone 2", color: "#aaff00", desc: "Stable field shell" },
  { symbol: "Mg", number: 12, zone: "Zone 2", color: "#aaff00", desc: "Stable field shell" },
  // ... (you can paste your full list here — truncated for brevity)
  { symbol: "Og", number: 118, zone: "Zone 6", color: "#8800ff", desc: "Outer instability fringe" }
];

const svg = document.getElementById("spiral-table");
const tooltip = document.getElementById("tooltip");
const zoneButtons = document.querySelectorAll(".zone-toggle");

// Draw elements in spiral
elements.forEach((el, i) => {
  const angle = i * 0.35;
  const radius = 40 + i * 3.8;
  const x = 400 + radius * Math.cos(angle);
  const y = 400 + radius * Math.sin(angle);

  const btn = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
  btn.setAttribute("x", x - 20);
  btn.setAttribute("y", y - 20);
  btn.setAttribute("width", "40");
  btn.setAttribute("height", "40");
  btn.innerHTML = `
    <div xmlns="http://www.w3.org/1999/xhtml"
         data-zone="${el.zone}"
         style="
           width: 40px;
           height: 40px;
           line-height: 40px;
           background-color: ${el.color};
           color: white;
           text-align: center;
           font-weight: bold;
           border-radius: 8px;
           box-shadow: 0 0 8px ${el.color};
           font-size: 0.9rem;
           font-family: 'Segoe UI', sans-serif;
         ">
      ${el.symbol}
    </div>
  `;

  btn.addEventListener("mouseenter", (e) => {
    tooltip.innerHTML = `<strong>${el.symbol} (#${el.number})</strong><br>${el.desc}`;
    tooltip.classList.remove("hidden");
  });

  btn.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  btn.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });

  svg.appendChild(btn);
});

// Zone filter buttons
zoneButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const zone = btn.getAttribute("data-zone");
    document.querySelectorAll("[data-zone]").forEach(el => {
      el.style.display = (zone === "all" || el.getAttribute("data-zone") === zone) ? "block" : "none";
    });
    zoneButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
