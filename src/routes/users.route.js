import express from "express";
import checkUserMiddleware from "../middlewares/checkUserMiddleware.js";
import usersCon from "../controllers/users.controller.js";

const usersRoute = express.Router();

usersRoute.use(checkUserMiddleware);

usersRoute.get("/me", usersCon.getUsers);
usersRoute.patch("/me", usersCon.updateUser);

export default usersRoute;
