const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const prisma = new PrismaClient();

const GetStatusOrganisasi = expressAsyncHandler(async (req, res) => {
  let so = await prisma.profile.findMany({
    select: {
      Id: true,
      namaDepan: true,
      jabatan: true,
      FotoProfile: {
        select: {
          id: true,
          gambarProfile: true
        },
      },
    },
    where: {
      jabatan: {
        Id: {
            not: undefined
        }
      }
    }
  });
  console.log(so)
  res.json(so);
});

module.exports = {
  GetStatusOrganisasi,
};
