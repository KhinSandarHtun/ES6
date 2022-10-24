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
exports.deleteUserService = exports.updateUserService = exports.findUserService = exports.createUserService = exports.getUserService = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUserService = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_1.default.find();
        res.json({ data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getUserService = getUserService;
const createUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const userData = {
            name: req.body.name,
            gmail: req.body.gmail,
            phone: req.body.phone,
        };
        console.log(userData);
        const category = new user_1.default(userData);
        const result = yield category.save();
        res.status(201).json({ message: "Created Successfully", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.createUserService = createUserService;
const findUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findData = yield user_1.default.findById(req.params.id);
        res.send({ data: findData });
    }
    catch (err) {
        console.log(err);
    }
});
exports.findUserService = findUserService;
const updateUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(req.params.id);
        user.name = req.body.name;
        user.gmail = req.body.gmail;
        user.phone = req.body.phone;
        const result = yield user.save();
        res.json({ message: "Updated Successfully!", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateUserService = updateUserService;
const deleteUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.default.findById(req.params.id);
        yield user_1.default.findByIdAndRemove(req.params.id);
        res.json({ message: "User with id " + req.params.id + " removed." });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteUserService = deleteUserService;
//# sourceMappingURL=userService.js.map