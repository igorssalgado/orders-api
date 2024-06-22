import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  numeroPedido: { type: String },
  valorTotal: { type: Number },
  dataCriacao: { type: Date, default: Date.now() },
  items: [
    {
      idItem: { type: String },
      quantidadeItem: { type: String },
      valorItem: { type: Number },
    },
  ],
});

export default mongoose.model("Order", orderSchema);
