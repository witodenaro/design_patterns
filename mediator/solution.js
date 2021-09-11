// Mediator
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

  heat(temperature, onDegreeChange) {
    setTimeout(() => {
      this.increaseDegree(5);
      onDegreeChange(this.degree);

      if (this.degree < temperature) {
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

class InternetOfThings {
  constructor(oven, smartphone) {
    this.requiredOvenDegree = null;
    this.oven = oven;
    this.smartphone = smartphone;
  }

  handleOvenDegreeChange(degree) {
    if (degree >= this.requiredOvenDegree) {
      this.smartphone.alarm();
      this.smartphone.changeColor("red");
      this.oven.cool();
    }
  }

  startOven(degree) {
    this.requiredOverDegree = degree;
    this.oven.heat(degree, this.handleOvenDegreeChange.bind(this));
  }
}

const oven = new Oven();
const smartphone = new Smartphone();
const IOT = new InternetOfThings(oven, smartphone);

IOT.startOven(100);

/* 
  Objects are independent.
  They may be reused in the other parts of the code.
  They only relate to the mediator, which they don't know about.
  The mediator controls the objects.
  
  This way we have all the commucation logic in one place
  hence it's easier to understand the business logic flow
  and modify it later
*/
