import { Router } from "express";

import {
  createOrder,
  getOrderByOrderId,
  getAllOrders,
  deleteOrder,
  updateOrder
} from "./controllers/OrderController.js";

const routes = Router();

routes.get("/order/list", getAllOrders)
routes.post("/order", createOrder);
routes.get("/order/:orderId", getOrderByOrderId);
routes.delete("/order/:orderId", deleteOrder)
routes.put("/order/:orderId", updateOrder)

export default routes;
