// Create a chain of request handlers

const AuthMiddleware = require("./AuthMiddleware");
const BodyParserMiddleware = require("./BodyParserMiddleware");
const UpdateUser = require("./UpdateUser");

// NextHandler: (request, handler) => NextHandler | void
//

// Middleware interface:
// processRequest: (request) => { next: NextHandler }

const router = (request) => {
  switch (request.url) {
    case "/update_user":
      return UpdateUser;
  }
};

function requestHandler(request) {
  AuthMiddleware.processRequest(request)
    .next(BodyParserMiddleware)
    .next(router);
}
