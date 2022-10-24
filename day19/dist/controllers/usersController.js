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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.findUser = exports.createUser = exports.getUser = void 0;
const userService_1 = require("../services/userService");
const getUser = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, userService_1.getUserService)(_req, res);
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, userService_1.createUserService)(req, res);
});
exports.createUser = createUser;
const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, userService_1.findUserService)(req, res);
});
exports.findUser = findUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, userService_1.updateUserService)(req, res);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, userService_1.deleteUserService)(req, res);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=usersController.js.map