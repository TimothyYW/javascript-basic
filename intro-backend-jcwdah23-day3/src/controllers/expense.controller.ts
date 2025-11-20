import { Request, Response } from "express";
import {
  createExpenseService,
  deleteExpenseService,
  getExpensesByCategoryService,
  getExpensesByDateService,
  getExpenseService,
  getExpensesService,
  updateExpenseService,
} from "../services/expense.service";

export const getExpensesController = (req: Request, res: Response) => {
  const result = getExpensesService();
  res.status(200).send(result);
};

export const getExpenseController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = getExpenseService(id);
  res.status(200).send(result);
};

export const createExpenseController = (req: Request, res: Response) => {
  const result = createExpenseService(req.body);
  res.status(200).send(result);
};

export const updateExpenseController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = updateExpenseService(id, req.body);
  res.status(200).send(result);
};

export const deleteExpenseController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = deleteExpenseService(id);
  res.status(200).send(result);
};

export const getExpensesByDateController = (req: Request, res: Response) => {
  const startDate = req.query.startDate as string;
  const endDate = req.query.endDate as string;
  const result = getExpensesByDateService(startDate, endDate);
  res.status(200).send(result);
};

export const getExpensesByCategoryController = (
  req: Request,
  res: Response
) => {
  const category = req.query.category as string;
  const result = getExpensesByCategoryService(category);
  res.status(200).send(result);
};
