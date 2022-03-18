"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var hotel_1 = require("./hotel");
var service_1 = require("./service");
var ServiceHotel = /** @class */ (function () {
    function ServiceHotel() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ServiceHotel.prototype, "id", void 0);
    __decorate([
        typeorm_1.PrimaryColumn("int"),
        __metadata("design:type", Number)
    ], ServiceHotel.prototype, "hotelId", void 0);
    __decorate([
        typeorm_1.PrimaryColumn("int"),
        __metadata("design:type", Number)
    ], ServiceHotel.prototype, "serviceId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ServiceHotel.prototype, "votes", void 0);
    __decorate([
        typeorm_1.Column({ length: 200 }),
        __metadata("design:type", String)
    ], ServiceHotel.prototype, "email", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return hotel_1.Hotel; }, function (hotel) { return hotel.services; }),
        typeorm_1.JoinColumn({ name: "hotelId" }),
        __metadata("design:type", hotel_1.Hotel)
    ], ServiceHotel.prototype, "hotel", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return service_1.Service; }, function (service) { return service.serviceHotels; }, { eager: true }),
        typeorm_1.JoinColumn({ name: "serviceId" }),
        __metadata("design:type", service_1.Service)
    ], ServiceHotel.prototype, "service", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], ServiceHotel.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], ServiceHotel.prototype, "updatedAt", void 0);
    ServiceHotel = __decorate([
        typeorm_1.Entity()
    ], ServiceHotel);
    return ServiceHotel;
}());
exports.ServiceHotel = ServiceHotel;
//# sourceMappingURL=serviceHotel.js.map