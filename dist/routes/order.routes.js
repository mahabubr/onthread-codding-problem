"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controller/order.controller");
const validationRequest_1 = __importDefault(require("../shared/validationRequest"));
const order_validation_1 = require("../validation/order.validation");
const router = express_1.default.Router();
router.post("/", (0, validationRequest_1.default)(order_validation_1.orderValidation.createOrderValidation), order_controller_1.ordersController.createOrder);
router.get("/", order_controller_1.ordersController.getAllOrders);
router.get("/:id", order_controller_1.ordersController.getSingleOrder);
router.patch("/:id", (0, validationRequest_1.default)(order_validation_1.orderValidation.updateOrderValidation), order_controller_1.ordersController.updateOrder);
router.delete("/:id", order_controller_1.ordersController.deleteOrder);
exports.OrderRouter = router;
