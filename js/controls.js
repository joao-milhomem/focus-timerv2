import { Time } from "./time.js";
import { alternateState } from "./utils.js";

export const Controls = {
  playButton: document.querySelector(".ph-play-circle"),
  pauseButton: document.querySelector(".ph-pause-circle"),
  stopButton: document.querySelector(".ph-stop-circle"),
  addButton: document.querySelector(".ph-plus-circle"),
  minusButton: document.querySelector(".ph-minus-circle"),
  themeButton: document.querySelector("#theme-button"),

  intervalId: null,

  play() {
    let { minutes, seconds } = Time.get();

    this.intervalId = setInterval(() => {
      if (minutes > 0 && seconds == 0) {
        seconds = 59;
        minutes--;
      } else if (minutes == 0 && seconds == 0) {
        clearInterval(this.intervalId);
        alert("Tempo esgotado");
        Time.reset();
        alternateState();
        return;
      } else --seconds;

      Time.set(minutes, seconds);
    }, 1000);
  },

  pause() {
    clearInterval(this.intervalId);
    alternateState();
  },

  stop() {
    if (document.querySelector("html").classList.contains("running")) {
      clearInterval(this.intervalId);
      Time.reset();
      alternateState();
    } else {
      Time.reset();
      clearInterval();
    }
  },

  addTime() {
    let { minutes, seconds } = Time.get();

    clearInterval(this.intervalId);

    if (minutes > 55 || (minutes == 55 && seconds > 0)) {
      alert("Tempo máximo de 60 minutos");
      minutes = 60;
      seconds = 0;
    } else {
      minutes += 5;
    }

    Time.set(minutes, seconds);

    if (document.querySelector("html").classList.contains("running")) {
      this.play();
    }
  },

  minusTime() {
    let { minutes, seconds } = Time.get();

    clearInterval(this.intervalId);

    if (minutes < 5 || (minutes == 5 && seconds == 0)) {
      alert("Tempo não permitido");
    } else {
      minutes -= 5;
    }

    Time.set(minutes, seconds);

    if (document.querySelector("html").classList.contains("running")) {
      this.play();
    }
  },

  ToggleTheme() {
    document.querySelector("body").classList.toggle("dark");
  },
};
