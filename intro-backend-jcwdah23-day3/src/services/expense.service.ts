import fs from "fs";
import path from "path";
import { ApiError } from "../utils/api-error";
import { Expense } from "../types/expense";

const filePath = path.join(__dirname, "../../db.json");
const rawData = fs.readFileSync(filePath).toString();

export const getExpensesService = () => {
  const result = JSON.parse(rawData);
  return result.expenses;
};

export const getExpenseService = (id: number) => {
  const data = JSON.parse(rawData);

  const result = data.expenses.find((expense: Expense) => {
    return expense.id === id;
  });

  if (!result) {
    throw new ApiError("expense not found", 404);
  }

  return result;
};

export const createExpenseService = (body: Expense) => {
  const result = JSON.parse(rawData);
  const latestId = result.expenses[result.expenses.length - 1].id;

  body.id = latestId + 1;

  result.expenses.push(body);

  fs.writeFileSync(filePath, JSON.stringify(result));

  return { message: "create expense success" };
};

export const updateExpenseService = (id: number, body: Partial<Expense>) => {
  const result = JSON.parse(rawData);
  const index = result.expenses.findIndex((expense: Expense) => {
    return expense.id === id;
  });

  if (index === -1) {
    throw new ApiError("expense not found", 404);
  }

  result.expenses[index] = { ...result.expenses[index], ...body };

  fs.writeFileSync(filePath, JSON.stringify(result));

  return { message: "update expense success" };
};

export const deleteExpenseService = (id: number) => {
  const result = JSON.parse(rawData);
  const index = result.expenses.findIndex((expense: Expense) => {
    return expense.id === id;
  });

  if (index === -1) {
    throw new ApiError("expense not found", 404);
  }

  result.expenses.splice(index, 1);

  fs.writeFileSync(filePath, JSON.stringify(result));

  return { message: "delete expense success" };
};

export const getExpensesByDateService = (
  startDate: string,
  endDate: string
) => {
  const result = JSON.parse(rawData);

  if (!startDate || !endDate) {
    throw new ApiError("start date / end date cannot be empty", 400);
  }

  const filteredExpense: Expense[] = result.expenses.filter(
    (expense: Expense) => {
      const expenseDate = new Date(expense.date);
      const start = new Date(startDate);
      const end = new Date(endDate);

      return expenseDate >= start && expenseDate <= end;
    }
  );

  const total = filteredExpense.reduce((a, b) => a + b.nominal, 0);

  return {
    data: filteredExpense,
    total: total,
  };
};

export const getExpensesByCategoryService = (category: string) => {
  const result = JSON.parse(rawData);

  if (!category) {
    throw new ApiError("category cannot be empty", 400);
  }

  const filteredExpense: Expense[] = result.expenses.filter((expense: Expense) => {
    return expense.category.includes(category);
  });

  const total = filteredExpense.reduce((a, b) => a + b.nominal, 0);

  return {
    data: filteredExpense,
    total: total,
  };
};
