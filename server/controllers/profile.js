// ingat ganti prisma jadi PrismaClient
const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const prisma = new PrismaClient();
const _ = require("lodash");

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
  // console.log(Id);

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
              gambarProfile: true,
            },
          },
          FotoKtp: {
            select: {
              id: true,
              gambarKtp: true,
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

  res.status(200).json(success, "Data Berhasil Di creat");
});

function antiFotoP(body) {
  try {
    return body.upProfile.gambarProfile;
  } catch (error) {
    return undefined;
  }
}

function antiTahun(body) {
  try {
    Number(body.upProfile.tahunAngkatan);
    return;
  } catch (error) {
    return undefined;
  }
}

////////// UPDATE INI BOOSS ////

const UpdateProfile = expressAsyncHandler(async (req, res) => {
  let body = req.body;
  // let name = Number(body.upProfile.nim)
  // console.log( _.isNaN(name));
  console.log(body.profileId);
  console.log(body.upProfile);

  // let fotoP = await prisma.fotoProfile.upsert({
  //   create: {
  //     profileId: Number(body.profileId),
  //     gambarProfile: antiFotoP(body.upProfile.gambarProfile),
  //   },
  //   update: {
  //     gambarProfile: antiFotoP(body.upProfile.gambarProfile),
  //   },
  //   where: {
  //     id: Number(body.profileId),
  //   },
  // });

  // let fotoK = await prisma.fotoKtp.upsert({
  //   create: {
  //     profileId: Number(body.profileId),
  //     gambarKtp: body.upProfile.gambarKtp ?? undefined
  //   },update: {
  //     gambarKtp: body.upProfile.gambarKtp ?? undefined
  //   },
  //   where: {
  //    id: Number(body.profileId)
  //   }
  // })
  // console.log(fotoK)

  let usr = await prisma.user.update({
    data: {
      username: body.dataUser.username ?? undefined,
      email: body.dataUser.email ?? undefined,
    },
    where: {
      Id: body.userId,
    },
  });

  // Kalo tanda tanya 1 ?  nanyak di depan nya , setelah tandan tanya pertama itu jawaban , setelah  titik : adalah jawban kedua
  // bisa di bilang ini adalah IF else dark web
  // kaLO dua tanda tanya ?? kalo didepan tanda tanya jika benaar nilai nya kembali kedepan , kalao sallah dibelakang nya
  let data = {
    nim: _.isNaN(Number(body.upProfile.nim))
      ? undefined
      : Number(body.upProfile.nim),

    tahunAngkatan: _.isNaN(Number(body.upProfile.tahunAngkatan))
      ? undefined
      : Number(body.upProfile.tahunAngkatan),

    namaDepan: body.upProfile.namaDepan ?? undefined,
    namaBelakang: body.upProfile.namaBelakang ?? undefined,
    alamat: body.upProfile.alamat ?? undefined,
    nomorHp: body.upProfile.nomorHp ?? undefined,
    jenisKelamin: body.upProfile.jenisKelamin ?? undefined,
    tempatLahir: body.upProfile.tempatLahir ?? undefined,
    tanggalLahir: body.upProfile.tanggalLahir ?? undefined,
    jurusan: body.upProfile.jurusan ?? undefined,
  };

  let prof = await prisma.profile.update({
    data,
    where: {
      Id: body.profileId,
    },
  });

  let success = {
    message: "Data Update Berhasil",
    data: {
      usr: usr,
      prof: prof,
      // fotoP: fotoP,
      // fotoK: fotoK
    },
  };

  console.log(body);
  res.status(200).json(success);
  // console.log(fotoP)
  // res.json(body);
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

const UploadFotoProfile = expressAsyncHandler(async (req, res) => {
  let body = req.body;

  // console.log(body)

  let fotoP = await prisma.fotoProfile.create({
    data: {
      profileId: Number(body.profileId),
      gambarProfile: body.gambarProfile
    },

  })

  console.log(fotoP)
  res.json(fotoP)
  // console.log(body)
  // res.json(body)
});

const UpdateUploadFotoProfile = expressAsyncHandler(async (req, res) => {
  let body = req.body

  let user = await prisma.fotoProfile.update({
    data:
    {
      gambarProfile: body.gambarProfile
    },
    where: {
      id: body.fotoprofileid
    }

  })

  console.log(user)
  res.status(200).json(user)

  // console.log(body)
  // res.json(body)
})

module.exports = {
  GetProfile,
  CreateProfile,
  UpdateProfile,
  DeleteProfile,
  //GAMBAR
  UploadFotoProfile,
  UpdateUploadFotoProfile
};
