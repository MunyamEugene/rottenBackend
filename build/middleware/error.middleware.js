"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = function (err, req, res, _next) {
    var status = err.status || 500;
    var message = err.message || 'Something went wrong';
    res.status(status).send({ status: status, message: message });
};
//# sourceMappingURL=error.middleware.js.map