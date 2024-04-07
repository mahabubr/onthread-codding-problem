"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersController = void 0;
const order_service_1 = require("../view/order.service");
const order_constants_1 = require("../constants/order.constants");
const pick_1 = __importDefault(require("../shared/pick"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordersData = __rest(req.body, []);
        const result = yield order_service_1.ordersServices.createOrder(ordersData);
        res.status(200).send({
            message: "Orders placed Successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = (0, pick_1.default)(req.query, order_constants_1.orderFilterFields);
        const result = yield order_service_1.ordersServices.getAllOrders(filters);
        res.status(200).send({
            message: "Fetched all books successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const getSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield order_service_1.ordersServices.getSingleOrder(id);
        res.status(200).send({
            message: "Fetched single books successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = __rest(req.body, []);
        const result = yield order_service_1.ordersServices.updateOrder(id, updateData);
        res.status(200).send({
            message: "Order updated successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield order_service_1.ordersServices.deleteOrder(id);
        res.status(200).send({
            message: "Delete orders successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.ordersController = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
};
