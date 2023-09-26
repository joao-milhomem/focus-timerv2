import * as el from "./elements.js";

export const Time = {
  get() {
    const minutes = Number(el.inputMinutes.value);
    const seconds = Number(el.inputSeconds.value);

    return {
      minutes,
      seconds,
    };
  },

  set(minutes, seconds = 0) {
    seconds < 10 ? (seconds = `0${seconds}`) : seconds;
    minutes < 10 ? (minutes = `0${minutes}`) : minutes;

    el.inputMinutes.value = minutes;
    el.inputSeconds.value = seconds;
  },

  reset() {
    el.inputMinutes.value = 25;
    el.inputSeconds.value = `0${0}`;
  },
};
