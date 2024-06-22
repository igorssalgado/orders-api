import { Router } from "express";

import {
  createOrder,
  getOrderByNumeroPedido,
} from "./controllers/OrderController.js";

const routes = Router();

routes.post("/order", createOrder);
routes.get("/order/:numeroPedido", getOrderByNumeroPedido);

export default routes;
