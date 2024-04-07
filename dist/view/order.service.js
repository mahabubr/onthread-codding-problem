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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersServices = void 0;
const order_schema_1 = require("../model/order.schema");
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_schema_1.Orders.create(payload);
    return result;
});
const getAllOrders = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const filtersData = __rest(filters, []);
    const andConditions = [];
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield order_schema_1.Orders.find(whereConditions).sort({ createdAt: -1 });
    return result;
});
const getSingleOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_schema_1.Orders.findById(id);
    return result;
});
const updateOrder = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_schema_1.Orders.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_schema_1.Orders.findByIdAndDelete(id);
    return result;
});
exports.ordersServices = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
};
