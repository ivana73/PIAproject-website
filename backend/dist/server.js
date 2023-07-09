"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./model/user"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const radionica_router_1 = __importDefault(require("./routers/radionica.router"));
const radionicaAkcija_router_1 = __importDefault(require("./routers/radionicaAkcija.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1:27017/umetnost');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
router.route('/login').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/register').post((req, res) => {
    let u = new user_1.default(req.body);
    u.save().then(u => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.use('/users', user_router_1.default);
router.use('/radionica', radionica_router_1.default);
router.use('/radionicaAkcije', radionicaAkcija_router_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map