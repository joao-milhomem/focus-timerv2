import * as audios from "./sounds.js";
import * as el from "./elements.js";
import * as actions from "./actions.js";
import "./theme.js";

el.controls.addEventListener("click", (event) => {
  const action = event.target.dataset["action"];

  if (typeof event.target.dataset["action"] == "undefined") {
    return;
  }

  actions[action]();
})

el.soundPanel.addEventListener("click", (event) => {
  const currentSound = el.soundPanel.querySelector(".playing");
  const audio = audios[event.target.dataset["sound"]];

  if (event.target.dataset["sound"] == undefined) {
    return;
  }

  if (currentSound == event.target) {
    event.target.classList.remove("playing");
    audio.pause();
    return;
  }

  if (currentSound && currentSound != event.target) {
    currentSound.classList.remove("playing");
    audios[currentSound.dataset["sound"]].pause();
  }

  event.target.classList.add("playing");
  audio.play();
});
