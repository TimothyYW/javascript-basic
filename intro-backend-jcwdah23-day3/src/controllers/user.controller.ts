import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserService,
  getUsersService,
  updateUserService,
} from "../services/user.service";

export const getUsersController = (req: Request, res: Response) => {
  const result = getUsersService();
  res.status(200).send(result);
};

export const getUserController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = getUserService(id);
  res.status(200).send(result);
};

export const createUserController = async(req: Request, res: Response) => {
  const result = await createUserService(req.body);
  res.status(200).send(result);
};

export const updateUserController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await updateUserService(id, req.body);
  res.status(200).send(result);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteUserService(id);
  res.status(200).send(result);
};
