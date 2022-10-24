import express from "express";
import { getUser, createUser, findUser, updateUser, deleteUser} from "../controllers/usersController";

const router = express.Router();

router
  .route('/')
  .get(getUser)
  .post(createUser)

 router
  .route('/:id')
  .get(findUser)
  .put(updateUser)
  .delete(deleteUser)

export default router;