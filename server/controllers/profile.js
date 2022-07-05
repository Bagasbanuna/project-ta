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
  console.log(body)
  // console.log(body.dataUser);
  // console.log(body.dataProfile);

  // let usr = await prisma.user.update({
  //   data: {
  //     username: body.dataUser.username?? undefined,
  //     email: body.dataUser.email?? undefined,
  //   },
  //   where: {
  //     Id: body.userId,
  //   },
  // });

  // let nim = Number(body.upProfile.nim)?? null

  // function antiNim(data){
  //   try {
  //     return Number(data.profile.nim)
  //   } catch (error) {
  //     return undefined
  //   }
  // }

  // function antiTahun(data){
  //   try {
  //     return Number(data.profile.tahunAngkatan)
  //   } catch (error) {
  //     return undefined
  //   }
  // }

  // let prof = await prisma.profile.update({
  //   data: {
  //     // ?? undefined adalah Untuk cek data null


  //     nim: antiNim(body.upProfile.nim),     
  //     namaDepan: body.upProfile.namaDepan?? undefined,
  //     namaBelakang: body.upProfile.namaBelakang?? undefined,
  //     alamat: body.upProfile.alamat?? undefined,
  //     nomorHp: body.upProfile.nomorHp?? undefined,
  //     jenisKelamin: body.upProfile.jenisKelamin?? undefined,
  //     tempatLahir: body.upProfile.tempatLahir?? undefined,
  //     tanggalLahir: body.upProfile.tanggalLahir?? undefined,
  //     tahunAngkatan:  antiTahun(body.upProfile.tahunAngkatan),
  //     jurusan: body.upProfile.jurusan?? undefined
  //   },
  //   where: {
  //     Id: body.profileId
  //   },
  // });

  // let success = {
  //   data: {
  //     data: "Data Berhasil Update",
  //     usr: usr,
  //     prof: prof,
  //   },
  // };

  // res.status(200).json(success.data.data);
  res.json(body)
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
