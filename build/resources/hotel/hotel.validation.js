"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
exports.createValidation = joi_1.default.object({
    name: joi_1.default.string().required(),
    starts: joi_1.default.number(),
    location: joi_1.default.string().required(),
});
exports.updateValidation = joi_1.default.object({
    name: joi_1.default.string(),
    starts: joi_1.default.number(),
    location: joi_1.default.string(),
});
//# sourceMappingURL=hotel.validation.js.map