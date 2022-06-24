const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const prisma = new PrismaClient();

const GetRenjaByUser = expressAsyncHandler(async (req, res) => {
  let renUse = await prisma.rencanakerja.findMany({
    where: {
      userId: {
        not: null
      } 
    },
    include: {
      files: {
        include: {
          gallery: true,
          namaFile: true,
        },
      },
      
    },
      

  });

  res.json(renUse);
});

module.exports = { GetRenjaByUser };
