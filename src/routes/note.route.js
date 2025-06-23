import express from "express";
import checkDoctorMiddleware from "../middlewares/checkDoctorMiddleware.js";
import noteCon from "../controllers/note.controller.js";
import checkUserMiddleware from "../middlewares/checkUserMiddleware.js";

const noteRoute = express.Router();

noteRoute.post("/", checkDoctorMiddleware, noteCon.createNote);
noteRoute.get("/my-notes", checkDoctorMiddleware, noteCon.getAllNotes);
noteRoute.get("/user/:userId", checkDoctorMiddleware, noteCon.getNoteFromUser);
noteRoute.patch("/:id", checkDoctorMiddleware, noteCon.updateNote);
noteRoute.delete("/:id", checkDoctorMiddleware, noteCon.deleteNote);
noteRoute.get("/received", checkUserMiddleware, noteCon.getNoteFromDoctor);

export default noteRoute;
