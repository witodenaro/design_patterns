class Telegram {
  sendMessage(message) {
    console.log("Sending message via telegram.");
  }

  addContact(phone) {
    console.log("Adding contact via telegram.");
  }
}

// Imagine that you are some communication services provider.
// You started your application by using only Telegram
// and created lots of logic related to it's methods

const telegram = new Telegram();

telegram.sendMessage("I'm home");
telegram.addContact("+3753333123");
