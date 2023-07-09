"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    telefon: {
        type: String
    },
    mejl: {
        type: String
    },
    tip: {
        type: String
    },
    nazivOrganizacije: { type: String },
    adresaSedistaOrg: { type: String },
    matBrOrg: { type: Number },
    odobren: { type: Number },
    slika: { type: String },
    istorijaRadionica: { type: Array },
    prijavljeneRadionice: { type: Array }
});
exports.default = mongoose_1.default.model('User', User, 'users');
//# sourceMappingURL=user.js.map