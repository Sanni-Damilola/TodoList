"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("../Routes/route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.port || 2001;
require("../Config/config");
app.all("/", (req, res) => {
    return res.status(200).json({
        message: "I'm up",
    });
});
app.use((0, cors_1.default)());
app.use("/api", route_1.default);
app.listen(port, () => {
    console.log("done on port", port);
});
