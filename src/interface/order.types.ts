import { Model, Schema } from "mongoose";

export interface TOrders {
  user_id: string;
  product_id: number;
  quantities: number;
  payments: Schema.Types.ObjectId;
}

export type OrdersModel = Model<TOrders, Record<string, unknown>>;
