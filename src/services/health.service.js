import prisma from "../configs/prisma.js";

const healthSer = {
  createHealth: async (id, type, value) => {
    return await prisma.healthRecord.create({
      data: { type, value, userId: Number(id) },
    });
  },
  getAllHealth: async () => {
    return await prisma.healthRecord.findMany();
  },
  getHealthById: async (id) => {
    return await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { records: true },
    });
  },
  updateHealth: async (reqId, id, type, value) => {
    return await prisma.healthRecord.update({
      where: { id: Number(reqId), userId: Number(id) },
      data: { type, value },
    });
  },
  deleteHealth: async (reqId, id) => {
    return await prisma.healthRecord.delete({
      where: { id: Number(reqId), userId: Number(id) },
    });
  },
};

export default healthSer;
