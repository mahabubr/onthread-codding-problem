import { Request, Response } from "express";
import { ordersServices } from "../view/order.service";
import { orderFilterFields } from "../constants/order.constants";
import pick from "../shared/pick";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { ...ordersData } = req.body;

    const result = await ordersServices.createOrder(ordersData);

    res.status(200).send({
      message: "Orders placed Successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, orderFilterFields);

    const result = await ordersServices.getAllOrders(filters);

    res.status(200).send({
      message: "Fetched all books successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ordersServices.getSingleOrder(id);

    res.status(200).send({
      message: "Fetched single books successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { ...updateData } = req.body;

    const result = await ordersServices.updateOrder(id, updateData);

    res.status(200).send({
      message: "Order updated successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ordersServices.deleteOrder(id);

    res.status(200).send({
      message: "Delete orders successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const ordersController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
