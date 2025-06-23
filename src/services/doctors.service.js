import prisma from "../configs/prisma.js";

const doctorsSer = {
  findExistDoctor: async (id) => {
    return await prisma.doctor.findUnique({ where: { id: Number(id) } });
  },
  updateDoctor: async (id, newUser) => {
    return await prisma.doctor.update({
      where: { id: Number(id) },
      data: { username: newUser },
    });
  },
};

export default doctorsSer;
