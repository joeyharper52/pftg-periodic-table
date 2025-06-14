const svg = document.getElementById("spiral-table");
const tooltip = document.getElementById("tooltip");
const zoneButtons = document.querySelectorAll(".zone-toggle");

// Main spiral layout
elements.forEach((el, i) => {
  const angle = i * 0.65;  // spread more widely around the spiral
  const radius = 60 + i * 5.5;  // slower outward growth

  const x = 400 + radius * Math.cos(angle);
  const y = 400 + radius * Math.sin(angle);

  const btn = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
  btn.setAttribute("x", x - 20);
  btn.setAttribute("y", y - 20);
  btn.setAttribute("width", "40");
  btn.setAttribute("height", "40");

  // Inject inline styles to make the buttons render properly
  btn.innerHTML = `
    <div xmlns="http://www.w3.org/1999/xhtml" class="element" data-zone="${el.zone}"
      style="width:40px; height:40px; border-radius:8px; line-height:40px;
             background:${el.color}; text-align:center; font-weight:bold; color:#000;
             box-shadow:0 0 6px ${el.color}88; font-size:16px;">
      ${el.symbol}
    </div>
  `;

  // Tooltip behavior
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

// Zone filter logic
zoneButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const zone = btn.getAttribute("data-zone");

    document.querySelectorAll(".element").forEach(el => {
      el.style.display = (zone === "all" || el.getAttribute("data-zone") === zone) ? "block" : "none";
    });

    zoneButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
