const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { data, expr } = require("jquery");
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

  // let status = await prisma.statusRenja.create({
  //   data: {
  //     name: body.name
  //   }
  // })

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
      // StatusRenja: {
      //   connect: {
      //     id: status.id
      //   }
      // }

    },
  });

  let bd = {
    sukes: "iya",
    data: {
      renja: renja,
      gambar: gambar,
      // status: status
    },
  };

  res.status(200).json(bd);
  
   ///////////////////////////////////////////////////////////////////////////////////////////////
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

//Gambar tidak muncul karena tidak di include kann BEGEEEE
const GetRenjaOn = expressAsyncHandler(async (req, res) => {
  let renja = await prisma.rencanakerja.findMany({
    where: {
      statusRenjaId: 1,          
    }, include: {
      gallery: {
        select: {
           gambar: true
        }
      }
    }
  })
  res.json(renja)
})

const GetRenjaAcc = expressAsyncHandler(async (req, res) => {
  let renja = await prisma.rencanakerja.findMany({
    where: {
      statusRenjaId: 2
    },
    include: {
      gallery: {
        select: {
          gambar: true
        }
      }
    }
  })
  res.json(renja)
})

const GetRenjaDone = expressAsyncHandler(async (req, res) =>{
  let renja = await prisma.rencanakerja.findMany({
    where: {
      statusRenjaId: 3
    },
    include: {
      gallery: {
        select: {
          gambar: true
        }
      }
    }
  })
  res.json(renja)
})

const GetRenjaCancel = expressAsyncHandler(async (req, res) => {
  let renja = await prisma.rencanakerja.findMany({
    where: {
      statusRenjaId: 4
    }
  })
  res.json(renja)
})

const UpdateStatusRenja = expressAsyncHandler(async (req, res) => {
  let body = req.body
  console.log(body)

  let status = await prisma.statusRenja.findFirst({
    where: {
      name: body.name
    }

  })
  console.log(status)

  let statusrenja = await prisma.rencanakerja.update({
    data: {
      statusRenjaId: status.id
    }, 
    where: {
      Id: body.rencanakerjaId
      
    }
  })
  res.status(200).json("berhasil")
})


module.exports = {
  GetRencanakerja,
  CreateRencanakerja,
  UpdateRencanakerja,
  DeleteRencanakerja,
  GetRenjaOn,
  GetRenjaAcc,
  GetRenjaDone,
  GetRenjaCancel,
  UpdateStatusRenja
};
