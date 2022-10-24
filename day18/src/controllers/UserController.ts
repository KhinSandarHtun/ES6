import {  Response } from "express";
import User from "../models/User";

export const getUser = async (_request :any, response:Response) => {
  try {
    const result = await User.find();
    response.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createUser = async (request :any, response:Response) => {
  try {
   console.log(request.body)
    const userData = {
      name: request.body.name,
      gmail: request.body.gmail,
      phone: request.body.phone,
    }
    console.log(userData)
    const category = new User(userData);
    const result = await category.save();
    response.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findUser = async (request :any, response:Response) => {
  try {
    const findData = await User.findById(request.params.id)
    response.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updateUser = async (request :any, response:Response) => {
  try {
    const user:any = await User.findById(request.params.id)
    user.name = request.body.name;
    user.gmail = request.body.gmail;
    user.phone =request.body.phone;
    const result = await user.save();
    response.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deleteUser = async (request :any, response:Response) => {
  try {
    await User.findById(request.params.id);
    await User.findByIdAndRemove(request.params.id);
    response.json({ message: "User with id " + request.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};