"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesController_1 = require("../controllers/moviesController");
const router = express_1.default.Router();
router
    .route('/')
    .get(moviesController_1.getMovie)
    .post(moviesController_1.createMovie);
router
    .route('/:id')
    .get(moviesController_1.findMovie)
    .put(moviesController_1.updateMovie)
    .delete(moviesController_1.deleteMovie);
exports.default = router;
//# sourceMappingURL=movie_route.js.map