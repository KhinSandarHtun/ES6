"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.js.map