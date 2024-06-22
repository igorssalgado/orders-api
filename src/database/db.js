import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.USER;
const pwd = process.env.PASSWORD;

const connectDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${user}:${pwd}@cluster0.qsos54a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
};

export default connectDatabase;
