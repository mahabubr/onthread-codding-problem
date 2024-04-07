import { TOrders } from "../interface/order.types";
import { Orders } from "../model/order.schema";

const createOrder = async (payload: TOrders) => {
  const result = await Orders.create(payload);
  return result;
};

const getAllOrders = async (filters: { search?: string }) => {
  const { ...filtersData } = filters;
  const andConditions = [];

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Orders.find(whereConditions).sort({ createdAt: -1 });
  return result;
};

const getSingleOrder = async (id: string) => {
  const result = await Orders.findById(id);
  return result;
};

const updateOrder = async (id: string, payload: Partial<TOrders>) => {
  const result = await Orders.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Orders.findByIdAndDelete(id);
  return result;
};

export const ordersServices = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
