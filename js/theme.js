import { themeButton } from "./elements.js";

themeButton.addEventListener("click", () =>
  document.querySelector("body").classList.toggle("dark")
);
