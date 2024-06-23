import { Router } from "express";

import {
  createOrder,
  getOrderByOrderId,
  getAllOrders,
  deleteOrder
} from "./controllers/OrderController.js";

const routes = Router();

routes.post("/order", createOrder);
routes.get("/order/:orderId", getOrderByOrderId);
routes.get("/", getAllOrders)
routes.delete("/order/:orderId", deleteOrder)

export default routes;
