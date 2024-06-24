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

const orderIdExists = async (orderId, isNewOrder) => {

  //check if the orderId exists in the database
  const order = await Order.find({ orderId: orderId });
  
  //if length is greater than 0 and it is new order, avoid create a duplicate order
  //if length is iquals to 0 and is not a new order, it should exists, therefore it returns the error.
  if (order.length == 0) {
    if (isNewOrder == false) throw new Error("orderId does not exists.");
  }else if (order.length > 0){
    if (isNewOrder == true) throw new Error("orderId already in use");
  }
};

export { transformOrderData, getOrderId, orderIdExists };
