// Imaging we are writing the back-end request handling system
// We want to protect our endpoint with token authentication
// and also parse request body before updating a user.

// It makes us use this logic in each request handler, what
// breakes the rules of the DRY principle

class RequestHandler {
  updateUser(request) {
    if (!passesAuth(request)) throw new Error(403);
    const body = this.parseBody(request);

    console.log("Updating user with: ", body);
  }

  passesAuth(request) {
    if (!request.token) return false;
    return true;
  }

  parseBody(request) {
    return JSON.parse(request.body);
  }
}
