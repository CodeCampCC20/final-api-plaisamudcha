import createError from "../utils/createError.js";
import authJWT from "../utils/jwt.js";

const checkDoctorMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) createError(401, "Token is missing");
    const token = authHeader.split(" ")[1];
    const payload = authJWT.verifyDoctorLoginToken(token);
    console.log(payload);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

export default checkDoctorMiddleware;
