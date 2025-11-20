import express from "express";
import {
  createExpenseController,
  deleteExpenseController,
  getExpenseController,
  getExpensesByCategoryController,
  getExpensesByDateController,
  getExpensesController,
  updateExpenseController,
} from "../controllers/expense.controller";

const router = express.Router();

router.get("/", getExpensesController);
router.get("/date", getExpensesByDateController);
router.get("/category", getExpensesByCategoryController);
router.get("/:id", getExpenseController);
router.post("/", createExpenseController);
router.patch("/:id", updateExpenseController);
router.delete("/:id", deleteExpenseController);

export default router;
