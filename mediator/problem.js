/* 
  We have two objects that relate to each other directly
  They modify each others properties.
  This makes them dependent on each other thus making this code unreusable by it's parts.
  It also makes it difficult to track the logic that goes there on some specific actions.
*/

class Smartphone {
  screenColor = "white";

  alarm() {
    console.log("ALARM!");
  }

  changeScreenColor(color) {
    this.screenColor = color;
  }
}

class Oven {
  degree = 0;

  constructor(smartphone) {
    this.smartphone = smartphone;
  }

  heat() {
    setTimeout(() => {
      this.increaseDegree(5);

      if (this.degree > 100) {
        this.smartphone.alarm();
        this.smartphone.changeScreenColor("red");
      } else {
        this.heat();
      }
    }, 500);
  }

  cool() {
    this.degree = 0;
  }

  increaseDegree(degree) {
    this.degree += degree;
  }
}

const smartphone = new Smartphone();
const oven = new Oven(smartphone);

oven.heat();

// Objects communicate with each other directly
