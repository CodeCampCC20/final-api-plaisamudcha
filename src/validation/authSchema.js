import * as yup from "yup";

export const registerDoctorSchema = yup.object({
  username: yup
    .string()
    .min(3, "Should be more than 3")
    .required("username is required"),
  password: yup
    .string()
    .min(6, "Should be more than 6")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password not match")
    .required("Confirm password is required"),
  specialization: yup.string().required("specialize is required"),
});

export const registerUserSchema = yup.object({
  username: yup
    .string()
    .min(3, "Should be more than 3")
    .required("username is required"),
  password: yup
    .string()
    .min(6, "Should be more than 6")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password not match")
    .required("Confirm password is required"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const mergeErr = new Error(errMsg.join("."));
    next(mergeErr);
  }
};
