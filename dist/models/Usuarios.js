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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const AuditEntity_1 = require("./AuditEntity");
let Usuario = class Usuario extends AuditEntity_1.AuditEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: "usr_codigo"
    }),
    __metadata("design:type", Number)
], Usuario.prototype, "usrCodigo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "usr_nombre",
        type: "varchar",
        length: 50
    }),
    __metadata("design:type", String)
], Usuario.prototype, "usrNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "usr_type",
        type: "numeric",
        precision: 1
    }),
    __metadata("design:type", Number)
], Usuario.prototype, "usrType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "usr_correo",
        type: "varchar",
        length: 60
    }),
    __metadata("design:type", String)
], Usuario.prototype, "usrCorreo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "usr_nacimiento",
        type: "datetime"
    }),
    __metadata("design:type", Date)
], Usuario.prototype, "usrNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "usr_codcolegiatura",
        type: "numeric",
        precision: 5
    }),
    __metadata("design:type", Number)
], Usuario.prototype, "usrCodColegiatura", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "usr_psswd",
        type: "varchar",
        length: 20
    }),
    __metadata("design:type", String)
], Usuario.prototype, "usrPsswd", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], Usuario);
exports.Usuario = Usuario;
