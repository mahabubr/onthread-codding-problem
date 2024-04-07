"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const zod_1 = require("zod");
const createOrderValidation = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string({ required_error: "User id is required" }),
        product_id: zod_1.z.number({ required_error: "Product id is Required" }),
        quantities: zod_1.z.number({ required_error: "Quantity id is Required" }),
        payments: zod_1.z.string({ required_error: "Payments id is Required" }),
    }),
});
const updateOrderValidation = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string({ required_error: "User id is required" }).optional(),
        product_id: zod_1.z
            .number({ required_error: "Product id is Required" })
            .optional(),
        quantities: zod_1.z
            .number({ required_error: "Quantity id is Required" })
            .optional(),
        payments: zod_1.z
            .string({ required_error: "Payments id is Required" })
            .optional(),
    }),
});
exports.orderValidation = { createOrderValidation, updateOrderValidation };
