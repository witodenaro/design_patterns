const PC_STATUSES = {
  OFF: "off",
  ON: "on",
  IDLE: "idle",
};

class Computer {
  status = PC_STATUSES.OFF;

  powerMotherBoard() {
    console.log("Powering the motherboard!");
  }

  sendVideoToDisplays() {
    console.log("Sending video to the monitors!");
  }

  startCooler() {
    console.log("Starting the cooler!");
  }
}

module.expors = new Computer();
