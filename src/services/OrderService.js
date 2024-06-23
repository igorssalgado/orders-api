// import { OrderController } from '../controllers/OrderController.js';

const renameKey = (orderNew) => {
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

export { transformOrderData };
