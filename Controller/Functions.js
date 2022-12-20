"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneData = exports.UpdateToDoList = exports.getOneTodoList = exports.deletOneToList = exports.deletAllToDoList = exports.postToDoList = exports.getAllData = void 0;
const schema_1 = __importDefault(require("../Schema/schema"));
// Get All Data
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTheData = yield schema_1.default.find();
        return res.status(200).json({
            message: "Successfully gotten all data",
            data: getTheData,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An  error occured",
            error: error,
        });
    }
});
exports.getAllData = getAllData;
// Post Data
const postToDoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Title, ShortDescription } = req.body;
        const postaList = yield schema_1.default.create({
            Title,
            ShortDescription,
        }, { timestamps: true });
        return res.status(201).json({
            message: "Successfully posted Your To Do List",
            data: postaList,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An  error occured",
            error: error,
        });
    }
});
exports.postToDoList = postToDoList;
// Delete All Data
const deletAllToDoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DeteleteAll = yield schema_1.default.deleteMany();
        return res.status(201).json({
            message: "Successfully Deleted All Your To Do List",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.deletAllToDoList = deletAllToDoList;
//  Delete One Deta
const deletOneToList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletOne = yield schema_1.default.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            message: "Successfully Deleted " + req.params.id,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.deletOneToList = deletOneToList;
// get All => Done or Undone, Others..
const getOneTodoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query;
        const getone = yield schema_1.default.find(search);
        return res.status(201).json({
            message: "Successfully gotten Data",
            data: getone,
        });
    }
    catch (error) {
        return res.status(401).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.getOneTodoList = getOneTodoList;
const getOneData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getdata = yield schema_1.default.findById(req.params.id);
        return res.status(400).json({
            message: "Successfully gotten Data",
            data: getdata,
        });
    }
    catch (error) {
        return res.status(401).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.getOneData = getOneData;
// Update
const UpdateToDoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Status } = req.body;
        const Update = yield schema_1.default.findByIdAndUpdate(req.params.id, {
            Status: Status === "Not Completed" ? "Not Completed" : "Completed",
        }, { new: true });
        return res.status(201).json({
            message: Status === "Not Completed"
                ? "Your Task as Not Been Done"
                : "Successfully Done Your Task",
            data: Update,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An Error Occured",
            error: error,
        });
    }
});
exports.UpdateToDoList = UpdateToDoList;
