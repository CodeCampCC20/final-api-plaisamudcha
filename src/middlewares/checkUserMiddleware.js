import createError from "../utils/createError.js";
import authJWT from "../utils/jwt.js";

const checkUserMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) createError(401, "Token is missing");
    const token = authHeader.split(" ")[1];
    const payload = authJWT.verifyLoginToken(token);
    console.log(payload);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

export default checkUserMiddleware;
