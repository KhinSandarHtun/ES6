import {Response} from "express";
import User from "../models/user";

export const getUserService = async (_req :any, res:Response) => {
  try {
    const result = await User.find();
    res.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createUserService = async (req :any, res:Response) => {
  try {
   console.log(req.body)
    const userData = {
      name: req.body.name,
      gmail: req.body.gmail,
      phone: req.body.phone,
    }
    console.log(userData)
    const category = new User(userData);
    const result = await category.save();
    res.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findUserService = async (req :any, res:Response) => {
  try {
    const findData = await User.findById(req.params.id)
    res.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updateUserService = async (req :any, res:Response) => {
  try {
    const user:any = await User.findById(req.params.id)
    user.name = req.body.name;
    user.gmail = req.body.gmail;
    user.phone =req.body.phone;
    const result = await user.save();
    res.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deleteUserService = async (req :any, res:Response) => {
  try {
    await User.findById(req.params.id);
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: "User with id " + req.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};