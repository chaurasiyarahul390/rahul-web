const themes = [
  { bg: "#ffffff", text: "#000000" },
  { bg: "#202124", text: "#ffffff" },
  { bg: "#fceabb", text: "#222" },
  { bg: "#c2e9fb", text: "#333" },
  { bg: "#ffdde1", text: "#111" },
  { bg: "#d4fc79", text: "#000" }
];

let themeIndex = 0;

function cycleColors() {
  const theme = themes[themeIndex];
  document.body.style.background = theme.bg;
  document.body.style.color = theme.text;
  themeIndex = (themeIndex + 1) % themes.length;
}

window.onload = () => {
  cycleColors(); // initial
  setInterval(cycleColors, 3000); // every 3 seconds
};
