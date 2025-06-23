import prisma from "../configs/prisma.js";

const noteSer = {
  createNote: async (id, note, userId) => {
    return await prisma.doctorNote.create({
      data: { note, doctorId: Number(id), userId: Number(userId) },
    });
  },
  getAllNotes: async () => {
    return await prisma.doctorNote.findMany();
  },
  getNoteFromUser: async (id) => {
    return await prisma.doctorNote.findMany({
      where: { userId: Number(id) },
    });
  },
  getNotefromDoctor: async (id) => {
    return await prisma.doctorNote.findMany({
      where: { userId: Number(id) },
    });
  },
  updateNote: async (reqId, id, note) => {
    return await prisma.doctorNote.update({
      where: { id: Number(reqId), doctorId: Number(id) },
      data: { note },
    });
  },
  deleteNote: async (reqId, id) => {
    return await prisma.doctorNote.delete({
      where: { id: Number(reqId), doctorId: Number(id) },
    });
  },
};

export default noteSer;
