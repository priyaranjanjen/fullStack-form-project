import express from "express";
import { getUsers, postUser  } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/users", getUsers)

router.post("/createUser", postUser);

export default router;