import { Controls } from "./controls.js";
import { Sound } from "./sounds.js";
import { Time } from "./time.js";
import { alternateState } from "./utils.js";

function handlePlayButton() {
  const { minutes, seconds } = Time.get();

  if (minutes <= 0 || seconds < 0) {
    return alert("Digite um numero válido");
  }

  if (minutes > 60) {
    return alert("Tempo máximo de 60 minutos");
  }

  Controls.play();
  alternateState();
}

function handlePauseButton() {
  Controls.pause();
}

function handleStopButton() {
  Controls.stop();
}

function handleAddButton() {
  Controls.addTime();
}

function handleMinusButton() {
  Controls.minusTime();
}

function handleThemeButton() {
  Controls.ToggleTheme();
}

function handleSound(e) {
  Sound.play(e);
}

Controls.playButton.addEventListener("click", handlePlayButton);
Controls.pauseButton.addEventListener("click", handlePauseButton);
Controls.stopButton.addEventListener("click", handleStopButton);
Controls.addButton.addEventListener("click", handleAddButton);
Controls.minusButton.addEventListener("click", handleMinusButton);
Controls.themeButton.addEventListener("click", handleThemeButton);

Sound.coffeShopButton.addEventListener("click", handleSound);
Sound.firePlaceButton.addEventListener("click", handleSound);
Sound.rainButton.addEventListener("click", handleSound);
Sound.forestButton.addEventListener("click", handleSound);
