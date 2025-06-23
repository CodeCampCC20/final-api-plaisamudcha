import authSer from "../services/auth.service.js";
import createError from "../utils/createError.js";
import authJWT from "../utils/jwt.js";

const authCon = {
  registerDoctor: async (req, res, next) => {
    try {
      const { username, password, specialization } = req.body;
      await authSer.registerDoctor(username, password, specialization);
      res.json({ message: "Register doctor successfully" });
    } catch (error) {
      next(error);
    }
  },
  registerUser: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      await authSer.registerUser(username, password);
      res.json({ message: "Register user successfully" });
    } catch (error) {
      next(error);
    }
  },
  loginDoctor: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await authSer.loginDoctor(username, password);
      if (!user) createError(401, "Invalid username or password");
      const payload = { id: user.id, username: user.username };
      const accessToken = authJWT.genDoctorLoginToken(payload);
      res.json({
        id: user.id,
        username: user.username,
        specialization: user.specialization,
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await authSer.loginUser(username, password);
      if (!user) createError(401, "Invalid username or password");
      const payload = { id: user.id, username: user.username };
      const accessToken = authJWT.genLoginToken(payload);
      res.json({
        id: user.id,
        username: user.username,
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default authCon;
