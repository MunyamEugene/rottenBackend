"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var service_hotel_service_1 = require("./service.hotel.service");
var serviceHotel_1 = require("../../database/entity/serviceHotel");
var ServiceHoltelCtrl = /** @class */ (function () {
    function ServiceHoltelCtrl() {
        var _this = this;
        this.rateHotel = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, hotel_1, badServices, email_1;
            var _this = this;
            return __generator(this, function (_b) {
                try {
                    _a = req['body'], hotel_1 = _a.hotel, badServices = _a.badServices, email_1 = _a.email;
                    badServices.forEach(function (badService) {
                        _this.saveVote(hotel_1, badService, email_1);
                    });
                    res.status(201).send({ messade: "Youhave voted" });
                }
                catch (error) {
                    res.status(500).send({ error: error });
                }
                return [2 /*return*/];
            });
        }); };
        this.saveVote = function (hotel, service, email) { return __awaiter(_this, void 0, void 0, function () {
            var signleVote, existVote, votes, newVote, newVote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceHtelServ.getVote(hotel.id, service.id)];
                    case 1:
                        signleVote = _a.sent();
                        if (!(signleVote.length > 0)) return [3 /*break*/, 3];
                        existVote = signleVote[0];
                        votes = existVote.votes;
                        newVote = Number(votes) + 1;
                        existVote.votes = newVote;
                        return [4 /*yield*/, this.serviceHtelServ.updateVote(existVote)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        newVote = new serviceHotel_1.ServiceHotel();
                        newVote.hotel = hotel;
                        newVote.service = service;
                        newVote.votes = 1;
                        newVote.email = email;
                        newVote.createdAt = new Date();
                        return [4 /*yield*/, this.serviceHtelServ.create(newVote)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.voteRoutes = function () {
            _this.route.post(_this.path, _this.rateHotel);
        };
        this.path = '/vote';
        this.route = express_1.Router();
        this.serviceHtelServ = new service_hotel_service_1.ServiceHotelServ();
        this.voteRoutes();
    }
    return ServiceHoltelCtrl;
}());
exports.ServiceHoltelCtrl = ServiceHoltelCtrl;
//# sourceMappingURL=serviceHotel.controller.js.map