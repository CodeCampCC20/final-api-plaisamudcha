import healthSer from "../services/health.service.js";
import usersSer from "../services/users.service.js";
import createError from "../utils/createError.js";

const healthCon = {
  createHealth: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { type, value } = req.body;
      const user = await usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      await healthSer.createHealth(id, type, value);
      res.json({ message: "create health record successfully" });
    } catch (error) {
      next(error);
    }
  },
  getAllHealth: async (req, res, next) => {
    try {
      const { id } = req.user;
      const user = await usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      const healthRecords = await healthSer.getAllHealth();
      res.json({ healthRecords });
    } catch (error) {
      next(error);
    }
  },
  getHealthById: async (req, res, next) => {
    try {
      const { id } = req.user;
      const user = await usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      const healtRecordInUser = await healthSer.getHealthById(req.params.id);
      if (!healtRecordInUser) createError(400, "user not found");
      res.json({ healtRecordInUser });
    } catch (error) {
      next(error);
    }
  },
  updateHealthById: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { type, value } = req.body;
      const user = await usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      const newHealth = await healthSer.updateHealth(
        req.params.id,
        id,
        type,
        value
      );
      res.json({ message: "update success", newHealth });
    } catch (error) {
      next(error);
    }
  },
  deleteHealth: async (req, res, next) => {
    try {
      const { id } = req.user;
      const user = await usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      await healthSer.deleteHealth(req.params.id, id);
      res.json({ message: "deleted success" });
    } catch (error) {
      next(error);
    }
  },
};

export default healthCon;
