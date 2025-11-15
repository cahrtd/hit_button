const button = document.getElementById("button");
let clickCount = 0;

function btnFont(fonts) {
  const randomFt = Math.floor(Math.random() * fonts.length);
  return fonts[randomFt];
}

const fonts = [
  "Barriecito",
  "Runik Puddles",
  "Pirata One",
  "Peralta",
  "DynaPuff",
  "Rubik Bubbles",
  "Snowburst One",
  "Matemasie",
  "Ole",
  "Rubik Vinyl",
  "Ribeye Marrow",
  "Workbench",
  "Bungee Outline",
  "Rye",
  "Kings",
];

function btnColor(colors) {
  const randomClr = Math.floor(Math.random() * colors.length);
  return colors[randomClr];
}

const colors = [
  "#FFA4A4",
  "#BADFDB",
  "#F8FAB4",
  "#FFDBB6",
  "#CADCAE",
  "#C1C8E4",
  "#D7B2FF",
  "#FFC3DE",
  "#BFFCC6",
  "#FFFFBA",
  "#FF9CEE",
  "#9AFFC2",
  "#A0E7E5",
  "#FFAEBC",
  "#D0F4DE",
  "#FBC4AB",
];

function BtnChange() {
  const randomColor = btnColor(colors);
  const randomFont = btnFont(fonts);
  button.style.color = randomColor;
  button.style.fontFamily = randomFont;
}

const additionalBtns = document.getElementById("additional-buttons");
const btnFirst = document.getElementById("first");
const btnSecond = document.getElementById("second");
const btnThird = document.getElementById("third");

button.addEventListener("click", () => {
  clickCount++;
  BtnChange();
  console.log(clickCount);

  if (clickCount >= 5) {
    additionalBtns.style.opacity = "1";
    additionalBtns.style.pointerEvents = "auto";
    console.log("hi");
  }
});
 