"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = require("express");
var passport_1 = __importDefault(require("passport"));
var passport_google_oauth_1 = __importDefault(require("passport-google-oauth"));
var AuthCtrl = /** @class */ (function () {
    function AuthCtrl() {
        var _this = this;
        this.googleCofig = function () {
            passport_1.default.use(new passport_google_oauth_1.default.OAuth2Strategy({
                clientID: _this.google_client_id,
                clientSecret: _this.google_client_secret,
                callbackURL: process.env.callbackURL
            }, function (accessToken, refreshToken, profile, done) {
                _this.userPorfile = profile._json;
                done(null, profile);
            }));
        };
        this.serialize = function () {
            return passport_1.default.serializeUser(function (user, done) {
                done(null, user);
            });
        };
        this.deserialize = function () {
            return passport_1.default.deserializeUser(function (user, done) {
                done(null, user);
            });
        };
        this.authSucces = function (req, res) {
            res.send(_this.userPorfile);
        };
        this.errRoute = function (req, res) {
            res.send("error loggin");
        };
        this.successRoute = function (req, res) {
            res.redirect(process.env.UI_URL);
        };
        this.logOut = function (req, res) {
            _this.userPorfile = {};
            res.send(_this.userPorfile);
        };
        this.authROutes = function () {
            _this.route.get(_this.path + "/google", passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
            _this.route.get(_this.path + "/google/callback", passport_1.default.authenticate('google', { failureRedirect: '/api/err' }), _this.successRoute);
            _this.route.get('/err', _this.errRoute);
            _this.route.get(_this.path + "/success", _this.authSucces);
            _this.route.get(_this.path + "/logout", _this.logOut);
        };
        this.userPorfile = {};
        this.path = '/auth';
        this.route = express_1.Router();
        this.google_client_id = process.env.GOOGLE_ID;
        this.google_client_secret = process.env.GOOGLE_SECRET;
        this.googleCofig();
        this.serialize();
        this.deserialize();
        this.authROutes();
    }
    return AuthCtrl;
}());
exports.AuthCtrl = AuthCtrl;
//# sourceMappingURL=authCtrl.js.map