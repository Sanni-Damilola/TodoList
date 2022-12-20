"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    Title: {
        type: String,
    },
    Status: {
        type: String,
        default: "Not Completed",
    },
    ShortDiscription: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("ToDoList", Schema);
