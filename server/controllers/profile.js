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

  // console.log(prf)
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
      username: body.dataUser.username?? undefined,
      email: body.dataUser.email?? undefined,
    },
    where: {
      Id: body.userId,
    },
  });

  let prof = await prisma.profile.update({
    data: {
      // ?? undefined adalah Untuk cek data null
      nim: Number(body.dataProfile.nim)?? undefined,     
      namaDepan: body.dataProfile.namaDepan?? undefined,
      namaBelakang: body.dataProfile.namaBelakang?? undefined,
      alamat: body.dataProfile.alamat?? undefined,
      nomorHp: body.dataProfile.nomorHp?? undefined,
      jenisKelamin: body.dataProfile.jenisKelamin?? undefined,
      tempatLahir: body.dataProfile.tempatLahir?? undefined,
      tanggalLahir: body.dataProfile.tanggalLahir?? undefined,
      // tahunAngkatan: undefined,
      // jurusan: body.dataProfile.jurusan,
    },
    where: {
      Id: body.profileId
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
