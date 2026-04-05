import express from "express";
import router from "./routes/employeeRoutes.js";

const app = express();

export default app;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});