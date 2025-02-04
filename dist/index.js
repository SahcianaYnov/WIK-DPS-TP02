"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/ping', (req, res) => {
    const headers = req.headers;
    console.log('Request headers:', headers);
    res.json({ headers });
});
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});
app.use((req, res) => {
    res.status(404).end();
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map