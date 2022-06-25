const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { data } = require("jquery");
const prisma = new PrismaClient();

const GetRencanakerja = expressAsyncHandler(async (req, res) => {
  let renja = await prisma.rencanakerja.findMany({
    select: {
      Id: true,
      title: true,
      keterangan: true,
      tanggal: true,
      files: {
        select: {
          Id: true,
          file: true,
          namaFile: {
            select: {
              Id: true,
              namaFile: true,
            },
          },
        },
      },
      gallery: {
        select: {
          Id: true,
          gambar: true,
        },
      },
    },
  });

  res.json(renja);
});

const CreateRencanakerja = expressAsyncHandler(async (req, res) => {
  let body = req.body;
  console.log(body);

  if (body.file) {
    let file = await prisma.files.create({
      data: {
        file: body.file,
      },
    });
  }

  let gambar = await prisma.gallery.create({
    data: {
      gambar: body.gambar,
    },
  });

  let renja = await prisma.rencanakerja.create({
    data: {
      title: body.title,
      tanggal: new Date(body.tanggal),
      keterangan: body.keterangan,
      // files: {
      //   connect: {
      //    Id: file.Id
      //   },
      // },
      gallery: {
        connect: {
          Id: gambar.Id,
        },
      },
    },
  });

  let bd = {
    sukes: "iya",
    data: {
      renja: renja,
      gambar: gambar,
    },
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // res.status(200).json(bd);

  // let renja = await prisma.rencanakerja.create({
  //     data: {

  //         title: body.title,
  //         tanggal: new Date (body.tanggal),
  //         keterangan: body.keterangan,
  //         status: body.status,
  //         userId: body.userId

  //     }
  // })

  // let success = renja !=null
  // let result = {
  //     success: success,
  //     data: renja
  // }

  // res.json(result)
});

const UpdateRencanakerja = expressAsyncHandler(async (req, res) => {
  let { Id, title, tanggal, keterangan, status, userId } = req.body;

  let renja = await prisma.rencanakerja.update({
    data: {
      Id: Number(Id),
      title: title,
      tanggal: new Date(tanggal),
      keterangan: keterangan,
      status: status,
      userId: Number(userId),
    },
    where: {
      Id: Number(Id),
    },
  });

  res.json(renja);
});

const DeleteRencanakerja = expressAsyncHandler(async (req, res) => {
  let { Id } = req.body;

  let renja = await prisma.rencanakerja.delete({
    where: {
      Id: Number(Id),
    },
  });
  res.json(renja);
});

module.exports = {
  GetRencanakerja,
  CreateRencanakerja,
  UpdateRencanakerja,
  DeleteRencanakerja,
};
