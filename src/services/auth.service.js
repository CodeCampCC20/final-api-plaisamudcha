import prisma from "../configs/prisma.js";
import bcrypt from "bcryptjs";

const authSer = {
  registerDoctor: async (username, password, specialization) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return await prisma.doctor.create({
      data: { username, password: hashPassword, specialization },
    });
  },
  registerUser: async (username, password) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: { username, password: hashPassword },
    });
  },
  loginDoctor: async (username, password) => {
    const user = await prisma.doctor.findFirst({ where: { username } });
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  },
  loginUser: async (username, password) => {
    const user = await prisma.user.findFirst({ where: { username } });
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  },
};

export default authSer;
