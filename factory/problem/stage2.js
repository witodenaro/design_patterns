// Your company grew big and now the clients want you
// To have other messengers support

class Viber {
  sendMessage(message) {
    console.log("Sending message via viber");
  }

  addContact(phone) {
    console.log("Adding contact via Viber");
  }
}

class Telegram {
  sendMessage(message) {
    console.log("Sending message via telegram.");
  }

  addContact(phone) {
    console.log("Adding contact via telegram.");
  }
}

// It would require you to support both classes
// and extend your code twice

let userWantsToUseViber = Math.random() > 0.5;

if (userWantsToUseViber) {
  const viber = new Viber();
  viber.sendMessage("I'm home, creating JS implementation of the factory");
  viber.addContact("+3333123");
} else {
  const telegram = new Telegram();
  telegram.sendMessage("I'm home, creating JS implementation of the factory");
  telegram.addContact("12");
}

// The list of classes goes on
