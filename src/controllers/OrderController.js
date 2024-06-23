import Order from "../models/Orders.js";
import {
  transformOrderData,
  getOrderId,
  orderIdExists,
} from "../services/OrderService.js";

//create new order
const createOrder = async (request, response) => {
  try {
    const order = request.body;

    //gets the transformed JSON from the service
    const newOrder = await transformOrderData(order);

    //gets the asynchronous response from the Database, of the order's data from the request body using the Order's model.
    const successful = await Order.create(newOrder);

    //returns 201 once the order is created and sent to the Database
    return response.status(201).json(successful);
  } catch (error) {
    return response.json({ response: error.message });
  }
};

//get an order data by OrderId
const getOrderByOrderId = async (request, response) => {
  try {
    //check if the orderId exists
    const idFound = await orderIdExists(request.params.orderId);

    //if idFound is not true, throw error
    if (idFound != true) {
      throw new Error();
    }

    //gets the orderId value from the URL param e calls getOrderId service, to get order id to findById
    const id = await getOrderId(request.params.orderId);

    //uses the order id in the 0 index of the map's array and find it in the database
    const orderFound = await Order.findById({ _id: id });

    //returns 200 once the order is found and return it as JSON.
    return response.status(200).json(orderFound);
  } catch (error) {
    return response.json({ response: error.message });
  }
};

//list all orders
const getAllOrders = async (request, response) => {
  try {
    const orders = await Order.find();

    return response.status(200).json(orders);
  } catch (error) {
    return response.json({ response: error.message });
  }
};

//update order
const updateOrder = async (request, response) => {};

//delete order
const deleteOrder = async (request, response) => {
  try {
    //check if the orderId exists
    const idFound = await orderIdExists(request.params.orderId);

    //if idFound is not true, throw error
    if (idFound != true) {
      throw new Error();
    }

    //gets the orderId value from the URL param e calls getOrderId service, to get order id to delete
    const id = await getOrderId(request.params.orderId);

    //uses the order id in the 0 index of the map's array and find it in the database
    await Order.findByIdAndDelete({ _id: id });

    //returns 200 once the order is found and confirm the deleted orderId.
    return response
      .status(200)
      .json({ response: `orderId: ${request.params.orderId} deleted.` });
  } catch (error) {
    return response.json({ response: error.message });
  }
};

export { createOrder, getOrderByOrderId, getAllOrders, deleteOrder };
