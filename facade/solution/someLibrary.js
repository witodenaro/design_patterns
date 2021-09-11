const PC_STATUSES = {
  OFF: "off",
  ON: "on",
  IDLE: "idle",
};

class Computer {
  status = PC_STATUSES.OFF;

  _powerMotherBoard() {
    console.log("Powering the motherboard!");
  }

  _sendVideoToDisplays() {
    console.log("Sending video to the monitors!");
  }

  _startCooler() {
    console.log("Starting the cooler!");
  }

  run() {
    this._powerMotherBoard();
    this._startCooler();
    this._sendVideoToDisplays();
  }
}

module.expors = new Computer();
