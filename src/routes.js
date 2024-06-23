import { Router } from "express";

import {
  createOrder,
  getOrderByOrderId,
  getAllOrders
} from "./controllers/OrderController.js";

const routes = Router();

routes.post("/order", createOrder);
routes.get("/order/:orderId", getOrderByOrderId);
routes.get("/", getAllOrders)

export default routes;
