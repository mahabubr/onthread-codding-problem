import express from "express";
import { ordersController } from "../controller/order.controller";

const router = express.Router();

router.post("/", ordersController.createOrder);
router.get("/", ordersController.getAllOrders);
router.get("/:id", ordersController.getSingleOrder);
router.patch("/:id", ordersController.updateOrder);
router.delete("/:id", ordersController.deleteOrder);

export const OrderRouter = router;
