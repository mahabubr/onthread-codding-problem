import { z } from "zod";

const createOrderValidation = z.object({
  body: z.object({
    user_id: z.string({ required_error: "User id is required" }),
    product_id: z.number({ required_error: "Product id is Required" }),
    quantities: z.number({ required_error: "Quantity id is Required" }),
    payments: z.string({ required_error: "Payments id is Required" }),
  }),
});

const updateOrderValidation = z.object({
  body: z.object({
    user_id: z.string({ required_error: "User id is required" }).optional(),
    product_id: z
      .number({ required_error: "Product id is Required" })
      .optional(),
    quantities: z
      .number({ required_error: "Quantity id is Required" })
      .optional(),
    payments: z
      .string({ required_error: "Payments id is Required" })
      .optional(),
  }),
});

export const orderValidation = { createOrderValidation, updateOrderValidation };
