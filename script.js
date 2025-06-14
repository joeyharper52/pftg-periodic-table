const elements = [
  { symbol: "H", number: 1, zone: "Core", color: "#00ffff", desc: "Core – Primordial scalar anchor" },
  { symbol: "He", number: 2, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  { symbol: "Li", number: 3, zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 – First pressure shell" },
  // Add the rest of the elements...
];

const svg = document.getElementById("spiral-table");
const tooltip = document.getElementById("tooltip");
const zoneButtons = document.querySelectorAll(".zone-toggle");

// Draw buttons
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

  // XHTML required inside foreignObject!
  const divHTML = `
    <div xmlns="http://www.w3.org/1999/xhtml" 
         style="display:flex;align-items:center;justify-content:center;
                width:40px;height:40px;border-radius:8px;font-weight:bold;
                background:${el.color};color:#000;box-shadow:0 0 10px ${el.color};
                font-size:0.8rem;cursor:pointer;"
         class="element" data-zone="${el.zone}">
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

// Filtering
zoneButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const zone = btn.getAttribute("data-zone");
    document.querySelectorAll(".element").forEach(el => {
      el.style.display = (zone === "all" || el.dataset.zone === zone) ? "flex" : "none";
    });

    zoneButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
