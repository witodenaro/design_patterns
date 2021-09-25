class BodyParserMiddleware extends Middleware {
  processRequest(request) {
    request.body = JSON.parse(request.body);

    return { next: Middleware.createNext(request) };
  }
}

module.exports = new BodyParserMiddleware();
