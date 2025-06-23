import e from "express";
import doctorsSer from "../services/doctors.service.js";
import noteSer from "../services/note.service.js";
import createError from "../utils/createError.js";
import usersSer from "../services/users.service.js";

const noteCon = {
  createNote: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { note, userId } = req.body;
      const doctor = await doctorsSer.findExistDoctor(id);
      if (!doctor) createError(401, "Invalid token");
      await noteSer.createNote(id, note, userId);
      res.json({ message: "create doctorNote successful" });
    } catch (error) {
      next(error);
    }
  },
  getAllNotes: async (req, res, next) => {
    try {
      const { id } = req.user;
      const doctor = await doctorsSer.findExistDoctor(id);
      if (!doctor) createError(401, "Invalid token");
      const notes = await noteSer.getAllNotes();
      res.json({ notes });
    } catch (error) {
      next(error);
    }
  },
  getNoteFromUser: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { userId } = req.params;
      const doctor = await doctorsSer.findExistDoctor(id);
      if (!doctor) createError(401, "Invalid token");
      const notesFromUser = await noteSer.getNoteFromUser(userId);
      if (notesFromUser.length == 0)
        createError(400, "user not found || no note in this user");
      res.json({ notesFromUser });
    } catch (error) {
      next(error);
    }
  },
  getNoteFromDoctor: async (req, res, next) => {
    try {
      const { id } = req.user;
      const user = usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      const notes = await noteSer.getNotefromDoctor(id);
      res.json({ notes });
    } catch (error) {
      next(error);
    }
  },
  updateNote: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { note } = req.body;
      const doctor = await doctorsSer.findExistDoctor(id);
      if (!doctor) createError(401, "Invalid token");
      await noteSer.updateNote(req.params.id, id, note);
      res.json({ message: "updated note success" });
    } catch (error) {
      next(error);
    }
  },
  deleteNote: async (req, res, next) => {
    try {
      const { id } = req.user;
      const doctor = await doctorsSer.findExistDoctor(id);
      if (!doctor) createError(401, "Invalid token");
      await noteSer.deleteNote(req.params.id, id);
      res.json({ message: "deleted success" });
    } catch (error) {
      next(error);
    }
  },
};

export default noteCon;
