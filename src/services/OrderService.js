// import { OrderController } from '../controllers/OrderController.js';
import Order from "../models/Orders.js";

const renameKey = (orderNew) => {
  //get the order JSON, stringify it and replace the keys names to the translated text
  orderNew = JSON.stringify(orderNew).replace("numeroPedido", "orderId");
  orderNew = orderNew.replace("valorTotal", "value");
  orderNew = orderNew.replace("dataCriacao", "creationDate");
  orderNew = orderNew.replace("idItem", "productId");
  orderNew = orderNew.replace("quantidadeItem", "quantity");
  orderNew = orderNew.replace("valorItem", "price");
  return JSON.parse(orderNew);
};

//transformOrderData
const transformOrderData = async (order) => {
  const orderNew = await renameKey(order);

  return orderNew;
};

//getOrderId
const getOrderId = async (orderId) => {
  //lookup for the order using the orderId in the database to get all its information
  const order = await Order.find({ orderId: orderId });

  //retrieve the order id, from the order JSON returned in the map array
  let retrieveOrderId = order.map((item) => item._id.toString());

  //returns the order id to be deleted in the database
  return retrieveOrderId;
};

const orderIdExists = async (orderId) => {
  const order = await Order.find({ orderId: orderId });
  //check if the orderId exists in the database
  if (order.length == 0) {
    throw new Error("orderId does not exists.");;
  }
};

export { transformOrderData, getOrderId, orderIdExists };
