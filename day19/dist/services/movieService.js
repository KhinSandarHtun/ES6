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
exports.deleteMovieServices = exports.updateMovieServices = exports.findMovieServices = exports.createMovieServices = exports.getMovieServices = void 0;
const movie_1 = __importDefault(require("../models/movie"));
const getMovieServices = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movie_1.default.find().populate("created_user_id");
        res.json({ data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getMovieServices = getMovieServices;
const createMovieServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const movieData = {
            name: req.body.name,
            year: req.body.year,
            rating: req.body.rating,
            created_user_id: req.body.created_user_id,
        };
        console.log(movieData);
        const category = new movie_1.default(movieData);
        const result = yield category.save();
        res.status(201).json({ message: "Created Successfully", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.createMovieServices = createMovieServices;
const findMovieServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findData = yield movie_1.default.findById(req.params.id).populate("created_user_id");
        res.send({ data: findData });
    }
    catch (err) {
        console.log(err);
    }
});
exports.findMovieServices = findMovieServices;
const updateMovieServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield movie_1.default.findById(req.params.id);
        movie.name = req.body.name;
        movie.year = req.body.year;
        movie.rating = req.body.rating;
        movie.created_user_id = req.body.created_user_id;
        const result = yield movie.save();
        res.json({ message: "Updated Successfully!", data: result });
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateMovieServices = updateMovieServices;
const deleteMovieServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movie_1.default.findById(req.params.id);
        yield movie_1.default.findByIdAndRemove(req.params.id);
        res.json({ message: "Movie with id " + req.params.id + " removed." });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteMovieServices = deleteMovieServices;
//# sourceMappingURL=movieService.js.map