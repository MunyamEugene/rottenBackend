"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var passport_1 = require("passport");
var App = /** @class */ (function () {
    function App(controllers, port) {
        this.port = port;
        this.express = express_1.default();
        this.initializeMiddelware();
        this.initializeControllers(controllers);
    }
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.express.use('/api', controller.route);
        });
    };
    App.prototype.initializeMiddelware = function () {
        this.express.use(helmet_1.default());
        this.express.use(cors_1.default());
        this.express.use(express_session_1.default({ resave: false, saveUninitialized: true, secret: 'SECRET'
        }));
        this.express.use(express_1.default.json());
        this.express.use(passport_1.initialize());
        this.express.use(passport_1.session());
        this.express.use(express_1.default.urlencoded({ extended: false }));
    };
    App.prototype.listen = function () {
        var _this = this;
        this.express.listen(this.port, function () { return console.log("listening on port " + _this.port); });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map