import prisma from "../configs/prisma.js";

const usersSer = {
  findExistUser: async (id) => {
    return await prisma.user.findUnique({ where: { id: Number(id) } });
  },
  updateUser: async (id, newUser) => {
    return await prisma.user.update({
      where: { id: Number(id) },
      data: { username: newUser },
    });
  },
};

export default usersSer;
