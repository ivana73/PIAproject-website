"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RadionicaAkcije = new Schema({
    username: {
        type: String
    },
    prijavljen: {
        type: Boolean
    },
    radionica: {
        type: Object
    },
    lajkovi: {
        type: Boolean
    },
    attended: {
        type: Boolean
    },
    chat: {
        type: Array
    }
});
exports.default = mongoose_1.default.model('RadionicaAkcije', RadionicaAkcije, 'radionicaAkcije');
//# sourceMappingURL=radionicaAkcije.js.map