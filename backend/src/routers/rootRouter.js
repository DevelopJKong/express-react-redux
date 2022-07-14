import express from "express";
import { getMail, getUser } from "../controllers/apiController.js";

const rootRouter = express.Router();

rootRouter.post("/user",getUser);
rootRouter.get("/mail",getMail);



export default rootRouter