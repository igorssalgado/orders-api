import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: { type: String },
  value: { type: Number },
  creationDate: { type: Date, default: Date.now() },
  items: [
    {
      productId: { type: String },
      quantity: { type: String },
      price: { type: Number },
    },
  ],
});

export default mongoose.model("Order", orderSchema);
