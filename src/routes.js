import { Router } from "express";

import {
  createOrder,
  getOrderByOrderId,
} from "./controllers/OrderController.js";

const routes = Router();

routes.post("/order", createOrder);
routes.get("/order/:orderId", getOrderByOrderId);


export default routes;
