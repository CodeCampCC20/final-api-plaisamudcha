import usersSer from "../services/users.service.js";
import createError from "../utils/createError.js";

const usersCon = {
  getUsers: async (req, res, next) => {
    try {
      const { id } = req.user;
      const user = await usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      res.json({ id: user.id, username: user.username });
    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { username } = req.body;
      const user = await usersSer.findExistUser(id);
      if (!user) createError(401, "Invalid token");
      const newUser = await usersSer.updateUser(id, username);
      res.json({ id: newUser.id, username: newUser.username });
    } catch (error) {
      next(error);
    }
  },
};

export default usersCon;
