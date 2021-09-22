// Create a factory
// It's a class that has creator-method and returns
// an instance of a common interface class

// Your company grew big and now the clients want you
// To have other messengers support

// Messenger interface
// sendMessage(string) -> void
// addContact(string) -> void

// Implements MESSENGER interface

class Viber {
  sendMessage(message) {
    console.log("Sending message via viber");
  }

  addContact(phone) {
    console.log("Adding contact via Viber");
  }
}

// Implements MESSENGER interface

class Telegram {
  sendMessage(message) {
    console.log("Sending message via telegram.");
  }

  addContact(phone) {
    console.log("Adding contact via telegram.");
  }
}

class MessengerFactory {
  static createMessenger(type) {
    switch (type) {
      case "Telegram":
        return new Telegram();
      case "Viber":
        return new Viber();
      default:
        throw new Error("Messenger cannot be found");
    }
  }
}

let userInput = "Telegram";

// Make the application indepedent of the chosen class
const messenger = MessengerFactory.createMessenger(userInput);

messenger.sendMessage(
  "Honey, I'm home. Already implemented the factory pattern"
);

messenger.addContact(8805553535);
