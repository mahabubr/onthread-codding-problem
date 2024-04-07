"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    user_id: { type: String, required: true },
    product_id: { type: Number, required: true },
    quantities: { type: Number, required: true },
    payments: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Payments" },
}, {
    timestamps: true,
});
exports.Orders = (0, mongoose_1.model)("Orders", orderSchema);
