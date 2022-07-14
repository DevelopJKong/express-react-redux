import express from "express";
import { postMail, getUser } from "../controllers/apiController.js";

const rootRouter = express.Router();

rootRouter.post("/user",getUser);
rootRouter.post("/mail",postMail);

export default rootRouter