import doctorsSer from "../services/doctors.service.js";
import createError from "../utils/createError.js";
import authJWT from "../utils/jwt.js";

const doctorsCon = {
  getDoctors: async (req, res, next) => {
    try {
      const { id } = req.user;
      const doctor = await doctorsSer.findExistDoctor(id);
      console.log("doctor", doctor);
      if (!doctor) createError(401, "Invalid Token");
      res.json({
        id: doctor.id,
        username: doctor.username,
        specialization: doctor.specialization,
      });
    } catch (error) {
      next(error);
    }
  },
  updateDoctor: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { username } = req.body;
      const doctor = await doctorsSer.findExistDoctor(id);
      if (!doctor) createError(401, "Invalid token");
      const newUser = await doctorsSer.updateDoctor(id, username);
      res.json({
        id: newUser.id,
        username: newUser.username,
        specialization: newUser.specialization,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default doctorsCon;
