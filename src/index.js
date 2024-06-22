import express from "express";
import connectDatabase from "./database/db.js";
import routes from "./routes.js";

const server = express();

server.use(express.json());
server.use(routes);

connectDatabase()
  .then(() => {
    server.listen(3000, () =>
      console.log("Server is running and Database connected.")
    );
  })
  .catch((e) => console.log("Error: " + e));
