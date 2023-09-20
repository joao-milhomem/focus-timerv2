export const Time = {
  inputMinutes: document.querySelector("#minutes"),
  inputSeconds: document.querySelector("#seconds"),

  get() {
    const minutes = Number(this.inputMinutes.value);
    const seconds = Number(this.inputSeconds.value);

    return {
      minutes,
      seconds,
    };
  },

  set(minutes, seconds = 0) {
    seconds < 10 ? (seconds = `0${seconds}`) : seconds;
    minutes < 10 ? (minutes = `0${minutes}`) : minutes;

    this.inputMinutes.value = minutes;
    this.inputSeconds.value = seconds;
  },

  reset() {
    this.inputMinutes.value = 25;
    this.inputSeconds.value = `0${0}`;
  },
};
