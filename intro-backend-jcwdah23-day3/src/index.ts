import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import userRouter from "./routes/user.router";
import expenseRouter from "./routes/expense.router";

const PORT = 8000;

const app = express();

app.use(express.json()); // agar bisa menerima request body

app.use("/users", userRouter);
app.use("/expenses", expenseRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
