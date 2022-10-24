"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = require("../controllers/usersController");
const router = express_1.default.Router();
router
    .route('/')
    .get(usersController_1.getUser)
    .post(usersController_1.createUser);
router
    .route('/:id')
    .get(usersController_1.findUser)
    .put(usersController_1.updateUser)
    .delete(usersController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user_route.js.map