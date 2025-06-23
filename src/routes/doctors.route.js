import express from "express";
import doctorsCon from "../controllers/doctors.controller.js";
import checkDoctorMiddleware from "../middlewares/checkDoctorMiddleware.js";

const doctorsRoute = express.Router();

doctorsRoute.use(checkDoctorMiddleware);

doctorsRoute.get("/me", doctorsCon.getDoctors);
doctorsRoute.patch("/me", doctorsCon.updateDoctor);

export default doctorsRoute;
