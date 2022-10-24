import { Response } from "express";
import { getUserService, createUserService, findUserService, updateUserService, deleteUserService } from "../services/userService";

export const getUser = async (_req :any, res:Response) => {
  getUserService(_req, res);
};

export const createUser = async (req :any, res:Response) => {
  createUserService(req, res);
};

export const findUser = async (req :any, res:Response) => {
  findUserService(req, res);
};

export const updateUser = async (req :any, res:Response) => {
  updateUserService(req, res);
};

export const deleteUser = async (req :any, res:Response) => {
  deleteUserService(req, res);
};