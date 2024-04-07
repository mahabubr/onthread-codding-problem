import { Schema, model } from "mongoose";
import { OrdersModel, TOrders } from "../interface/order.types";

const orderSchema = new Schema<TOrders>(
  {
    user_id: { type: String, required: true },
    product_id: { type: Number, required: true },
    quantities: { type: Number, required: true },
    payments: { type: Schema.Types.ObjectId, required: true, ref: "Payments" },
  },
  {
    timestamps: true,
  }
);

export const Orders = model<TOrders, OrdersModel>("Orders", orderSchema);
