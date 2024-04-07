import express from "express";
import { ordersController } from "../controller/order.controller";
import validateRequest from "../shared/validationRequest";
import { orderValidation } from "../validation/order.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(orderValidation.createOrderValidation),
  ordersController.createOrder
);
router.get("/", ordersController.getAllOrders);
router.get("/:id", ordersController.getSingleOrder);
router.patch(
  "/:id",
  validateRequest(orderValidation.updateOrderValidation),
  ordersController.updateOrder
);
router.delete("/:id", ordersController.deleteOrder);

export const OrderRouter = router;
