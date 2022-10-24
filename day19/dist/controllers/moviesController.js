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
exports.deleteMovie = exports.updateMovie = exports.findMovie = exports.createMovie = exports.getMovie = void 0;
const movieService_1 = require("../services/movieService");
const getMovie = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, movieService_1.getMovieServices)(_req, res);
});
exports.getMovie = getMovie;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, movieService_1.createMovieServices)(req, res);
});
exports.createMovie = createMovie;
const findMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, movieService_1.findMovieServices)(req, res);
});
exports.findMovie = findMovie;
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, movieService_1.updateMovieServices)(req, res);
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, movieService_1.deleteMovieServices)(req, res);
});
exports.deleteMovie = deleteMovie;
//# sourceMappingURL=moviesController.js.map