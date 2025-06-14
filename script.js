/* Spiral Layout + Tooltip + Filter */


const svg = document.getElementById("spiral-table");
const tooltip = document.getElementById("tooltip");
const zoneButtons = document.querySelectorAll(".zone-toggle");

const scale = 3.4;
const baseRadius = 32;

// Draw spiral buttons
elements.forEach((el, i) => {
  const angle = i * 0.33;
  const radius = baseRadius + i * scale;
  const x = 400 + radius * Math.cos(angle);
  const y = 400 + radius * Math.sin(angle);

  const btn = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
  btn.setAttribute("x", x - 18);
  btn.setAttribute("y", y - 18);
  btn.setAttribute("width", "36");
  btn.setAttribute("height", "36");
  btn.innerHTML = `
    <div xmlns="http://www.w3.org/1999/xhtml" class="element" data-zone="${el.zone}">
      ${el.symbol}
    </div>
  `;

  btn.addEventListener("mouseenter", () => {
    tooltip.innerHTML = `<strong>${el.symbol} (#${el.number})</strong><br>${el.desc}`;
    tooltip.classList.remove("hidden");
  });

  btn.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 12 + "px";
    tooltip.style.top = e.pageY + 12 + "px";
  });

  btn.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });

  svg.appendChild(btn);
});

// Zone filtering logic
zoneButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-zone");
    const allElements = document.querySelectorAll(".element");

    allElements.forEach(el => {
      const match = (target === "all" || el.getAttribute("data-zone") === target);
      el.style.display = match ? "block" : "none";
    });

    zoneButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
  });
});
