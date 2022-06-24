const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const prisma = new PrismaClient();

const GetUserInclude = expressAsyncHandler(async (req, res) => {
  let userInc = await prisma.user.findMany({
    include: {
      profile: {
        include: { divisi: true, jabatan: true, jurusan: true },
      },
      kritiksaran: {
        include: { User: true },
      },
      rencanakerja: {
        include: {
          
          files: {
            include: { gallery: true, namaFile: true },
          },
        },
      },
    },
  });
  res.json(userInc);
});

module.exports = { GetUserInclude };
