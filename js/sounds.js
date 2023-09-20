export const Sound = {
  coffeShop: new Audio("../assets/Cafeteria.wav"),
  rain: new Audio("../assets/Chuva.wav"),
  forest: new Audio("../assets/Floresta.wav"),
  firePlace: new Audio("../assets/Lareira.wav"),

  coffeShopButton: document.querySelector(".ph-storefront"),
  firePlaceButton: document.querySelector(".ph-campfire"),
  rainButton: document.querySelector(".ph-cloud-rain"),
  forestButton: document.querySelector(".ph-tree"),

  play(e) {
    const button = e.target;

    switch (button.classList[1]) {
      case "ph-storefront":
        this.coffeShopButton.classList.toggle("playing");

        if (this.coffeShopButton.classList.contains("playing")) {
          this.turnOffAllSounds();
          this.coffeShopButton.classList.add("playing");

          this.coffeShop.loop;
          this.coffeShop.play();
          return;
        }

        this.turnOffAllSounds();
        break;

      case "ph-tree":
        this.forestButton.classList.toggle("playing");

        if (this.forestButton.classList.contains("playing")) {
          this.turnOffAllSounds();
          this.forestButton.classList.add("playing");

          this.forest.loop;
          this.forest.play();
          return;
        }

        this.turnOffAllSounds();

        break;

      case "ph-cloud-rain":
        this.rainButton.classList.toggle("playing");

        if (this.rainButton.classList.contains("playing")) {
          this.turnOffAllSounds();
          this.rainButton.classList.add("playing");

          this.rain.loop;
          this.rain.play();
          return;
        }

        this.turnOffAllSounds();
        break;

      case "ph-campfire":
        this.firePlaceButton.classList.toggle("playing");

        if (this.firePlaceButton.classList.contains("playing")) {
          this.turnOffAllSounds();
          this.firePlaceButton.classList.add("playing");

          this.firePlace.loop;
          this.firePlace.play();
          return;
        }

        this.turnOffAllSounds();
        break;

      default:
        break;
    }
  },

  turnOffAllSounds() {
    this.coffeShop.pause();
    this.coffeShopButton.classList.remove("playing");

    this.rain.pause();
    this.rainButton.classList.remove("playing");

    this.forest.pause();
    this.forestButton.classList.remove("playing");

    this.firePlace.pause();
    this.firePlaceButton.classList.remove("playing");
  },
};
