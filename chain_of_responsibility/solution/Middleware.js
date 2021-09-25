class Middleware {
  static passRequest(request, handler) {
    return handler.processRequest(request);
  }

  static createNext(request) {
    return Middleware.passRequest.bind(null, request);
  }

  processRequest(request) {
    throw new Error("processRequest method must be initialized!");
  }
}

module.exports = Middleware;
