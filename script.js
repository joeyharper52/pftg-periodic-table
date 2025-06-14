const elements = [ /* your element array, same as before */ ];

const svg = document.getElementById("spiral-table");
const tooltip = document.getElementById("tooltip");
const zoneButtons = document.querySelectorAll(".zone-toggle");

// Spiral constants
const angleStep = 0.33;
const radiusStep = 4;
const centerX = 400;
const centerY = 400;

// Draw element buttons around a spiral
elements.forEach((el, i) => {
  const angle = i * angleStep;
  const radius = 30 + i * radiusStep;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  const btn = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
  btn.setAttribute("x", x - 20);
  btn.setAttribute("y", y - 20);
  btn.setAttribute("width", "40");
  btn.setAttribute("height", "40");

  btn.innerHTML = `
    <div xmlns="http://www.w3.org/1999/xhtml" 
         class="element" 
         data-zone="${el.zone}" 
         style="
           width: 40px; height: 40px; 
           border-radius: 8px; 
           background: ${el.color}; 
           display: flex; align-items: center; justify-content: center;
           font-weight: bold;
           color: black;
           font-size: 1rem;
           cursor: pointer;
         ">
      ${el.symbol}
    </div>
  `;

  // Tooltip behavior
  btn.addEventListener("mouseenter", () => {
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

// Zone filtering logic
zoneButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const zone = btn.getAttribute("data-zone");
    document.querySelectorAll(".element").forEach(el => {
      const show = zone === "all" || el.getAttribute("data-zone") === zone;
      el.style.display = show ? "flex" : "none";
    });

    zoneButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
