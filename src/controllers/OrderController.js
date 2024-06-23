import Order from "../models/Orders.js";
import { transformOrderData } from "../services/OrderService.js";

//create new order
const createOrder = async (request, response) => {
  const order = request.body;


  //gets the transformed JSON from the service
  const newOrder = await transformOrderData(order);

  //gets the asynchronous response from the Database, of the order's data from the request body using the Order's model.
  const successful = await Order.create(newOrder);

  //returns 201 once the order is created and sent to the Database
  return response.status(201).json(successful);
};

//get an order data by OrderId
const getOrderByOrderId = async (request, response) => {
  //gets the orderId value from the URL param
  const orderId = request.params.orderId;

  //lookup for the order using the orderId in the database to get all its information
  const order = await Order.find({ orderId: orderId });

  //retrieve the order _id, from the order JSON returned in the map array in string
  let retrieveOrderId = order.map((item)=> item._id.toString());

  //uses the order id in the 0 index of the map's array and find it in the database
  const orderFound = await Order.findById({_id: retrieveOrderId[0]});

  //returns 200 once the order is found and return it as JSON.
  return response.status(200).json(orderFound);
};

//list all orders
const getAllOrders = async (request, response) => {

};

//update order
const updateOrder = async (request, response) => {};

//delete order
const deleteOrder = async (request, response) => {

};

export {createOrder, getOrderByOrderId};
