const Middleware = require("./Middleware");

class AuthMiddleware extends Middleware {
  processRequest(request) {
    if (!request.token) throw new Error(403);

    return { next: Middleware.createNext(request) };
  }
}

module.exports = new AuthMiddleware();
