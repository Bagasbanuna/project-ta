// ingat ganti prisma jadi PrismaClient
const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const prisma = new PrismaClient();

const GetProfile = expressAsyncHandler(async (req, res) => {
  //   let prof = await prisma.user.findMany({
  //     select: {
  //       Id: true,
  //       username: true,
  //       email: true,
  //       profile: {
  //         select: {
  //           Id: true,
  //           nim: true,
  //           namaDepan: true,
  //           FotoProfile: {
  //             select: {
  //               id: true,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });

  let Id = req.params.Id;
  console.log(Id);

  let prf = await prisma.user.findUnique({
    where: {
      Id: Number(Id),

    },
    include: {
      profile: {
        include: {
          jurusan: true,
          FotoProfile: {
            select: {
              id: true,
            },
          },
          FotoKtp: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });

  res.json(prf);

  // res.json("hehe")
});

const CreateProfile = expressAsyncHandler(async (req, res) => {
  let body = req.body;

  let FotoKtp = await prisma.fotoKtp.create({
    data: {
      id: body.id,
    },
  });

  let FotoProfile = await prisma.fotoProfile.create({
    data: {
      id: body.id,
    },
  });

  let prof = await prisma.profile.create({
    data: {
      nim: Number(body.nim),
      namaDepan: body.namaDepan,

      userId: Number(body.userId),
      FotoProfile: {
        connect: {
          id: body.id,
        },
      },
      // FotoKtp: {
      //     connect: {
      //         id: body.id
      //     }
      // }

      // namaBelakang: namaBelakang,
      // alamat: alamat,
      // tempatLahir: tempatLahir,
      // tanggalLahir: tanggalLahir,
      // jenisKelamin: jenisKelamin,
      // nomorHp: nomorHp,
      // tahunAngkatan: Number(tahunAngkatan),
    },
  });

  // let success = prof !=null
  // let result = {
  //     success: success,
  //     data: prof
  // }

  let success = {
    data: {
      prof: prof,
    },
  };

  res.status(200).json(success, "Data Berhasil Update");
});

const UpdateProfile = expressAsyncHandler(async (req, res) => {
  let body = req.body;
  // console.log(body.userId)
  // console.log(body.dataUser);
  // console.log(body.dataProfile);

  let usr = await prisma.user.update({
    data: {
      username: body.dataUser.username,
      email: body.dataUser.email,
    },
    where: {
      Id: body.userId,
    },
  });

  let prof = await prisma.profile.update({
    data: {
      nim: Number(body.dataProfile.nim),
     
      namaDepan: body.dataProfile.namaDepan,
      namaBelakang: body.dataProfile.namaBelakang,
      alamat: body.dataProfile.alamat,
      nomorHp: body.dataProfile.nomorHp,
      jenisKelamin: body.dataProfile.jenisKelamin,
      tempatLahir: body.dataProfile.tempatLahir,
      tanggalLahir: body.dataProfile.tanggalLahir,
      tahunAngkatan: Number(body.dataProfile.tahunAngkatan),
      // jurusan: body.dataProfile.jurusan,
    },
    where: {
      userId: body.userId,
    },
  });

  let success = {
    data: {
      data: "Data Berhasil Update",
      usr: usr,
      prof: prof,
    },
  };

  res.status(200).json(success.data.data);
  // res.status(200).json(body)
});

const DeleteProfile = expressAsyncHandler(async (req, res) => {
  let Id = req.params.Id;

  let prof = await prisma.profile.delete({
    where: {
      Id: Number(Id),
    },
  });
  res.status(201).json(prof);
});

module.exports = { GetProfile, CreateProfile, UpdateProfile, DeleteProfile };
