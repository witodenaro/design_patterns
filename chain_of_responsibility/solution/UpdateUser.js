class UpdateUserHandler {
  processRequest(request) {
    console.log("Updating user with: ", request.body);
  }
}

module.exports = new UpdateUserHandler();
