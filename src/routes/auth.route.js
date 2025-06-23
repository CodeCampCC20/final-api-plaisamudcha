import express from "express";
import authCon from "../controllers/auth.controller.js";
import {
  registerDoctorSchema,
  registerUserSchema,
  validate,
} from "../validation/authSchema.js";

const authRoute = express.Router();

authRoute.post(
  "/register/doctor",
  validate(registerDoctorSchema),
  authCon.registerDoctor
);

authRoute.post(
  "/register/user",
  validate(registerUserSchema),
  authCon.registerUser
);

authRoute.post("/login/doctor", authCon.loginDoctor);
authRoute.post("/login/user", authCon.loginUser);

export default authRoute;
