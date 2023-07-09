"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Radionica = new Schema({
    naziv: {
        type: String
    },
    datum: {
        type: String
    },
    mesto: {
        type: String
    },
    opis: {
        type: String
    },
    detaljnije: {
        type: String
    },
    preostaloMesta: {
        type: Number
    },
    profilnaSlika: {
        type: String
    },
    galerijaSlika: {
        type: Array
    },
    komentari: {
        type: Array
    },
    lajkovi: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Radionica', Radionica, 'radionice');
//# sourceMappingURL=radionica.js.map