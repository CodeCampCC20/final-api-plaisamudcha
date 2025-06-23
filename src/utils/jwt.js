import jwt from "jsonwebtoken";

const authJWT = {
  genLoginToken: (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY, {
      algorithm: "HS256",
      expiresIn: "1d",
    });
  },
  verifyLoginToken: (token) => {
    return jwt.verify(token, process.env.SECRET_KEY, { algorithms: ["HS256"] });
  },
  genDoctorLoginToken: (payload) => {
    return jwt.sign(payload, process.env.DOCTOR_KEY, {
      algorithm: "HS256",
      expiresIn: "1d",
    });
  },
  verifyDoctorLoginToken: (token) => {
    return jwt.verify(token, process.env.DOCTOR_KEY, { algorithms: ["HS256"] });
  },
};

export default authJWT;
