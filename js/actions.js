import { Time } from "./time.js";
let intervalId;

export function play() {
  let { minutes, seconds } = Time.get();

  if (minutes <= 0 || seconds < 0) {
    return alert("Digite um numero válido");
  }

  if (minutes >= 60 && seconds > 0) {
    return alert("Tempo máximo de 60 minutos");
  }

  intervalId = setInterval(() => {
    if (minutes > 0 && seconds == 0) {
      seconds = 59;
      minutes--;
    } else if (minutes == 0 && seconds == 0) {
      clearInterval(intervalId);
      alert("Tempo esgotado");
      Time.reset();
      alternateState();
      return;
    } else --seconds;

    Time.set(minutes, seconds);
  }, 1000);

  if (document.documentElement.classList.contains("running")) {
    return;
  }

  alternateState();
}

export function pause() {
  clearInterval(intervalId);
  alternateState();
}

export function stop() {
  Time.reset();
  clearInterval(intervalId);

  if (document.documentElement.classList.contains("running")) {
    alternateState();
  }
}

export function add() {
  let { minutes, seconds } = Time.get();

  clearInterval(intervalId);

  if (minutes > 55 || (minutes == 55 && seconds > 0)) {
    alert("Tempo máximo de 60 minutos");
    minutes = 60;
    seconds = 0;
  } else {
    minutes += 5;
  }

  Time.set(minutes, seconds);

  if (document.documentElement.classList.contains("running")) {
    this.play();
  }
}

export function subtract() {
  let { minutes, seconds } = Time.get();

  clearInterval(intervalId);

  if (minutes < 5 || (minutes == 5 && seconds == 0)) {
    alert("Tempo não permitido");
  } else {
    minutes -= 5;
  }

  Time.set(minutes, seconds);

  if (document.querySelector("html").classList.contains("running")) {
    this.play();
  }
}

function alternateState() {
  document.querySelector("html").classList.toggle("running");
}
