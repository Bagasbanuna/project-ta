const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();


// (async () => {
//     const data1 = await prisma.statusRenja.aggregate({
//         _count: {
//             id: true
//         },
//         where: {
//             name: {
//                 equals: 'On Progress'
//             }
//         }
//     })

//     const data2 = await prisma.statusRenja.aggregate({
//         _count: {
//             name: true
//         },

//         where: {
//             id: {
//                 equals: 1
//             }
//         }
//     })

//     let data3 = await prisma.user.count()

//     let hasil = {
//         totalUser: data3
//     }

//     const dashOn = await prisma.rencanakerja.aggregate({
//         _count: {
//             statusRenjaId: true
//         },
//         where: {
//             statusRenjaId: {
//                 equals: 1
//             }
//         }
//     })

//     const dashCcl = await prisma.rencanakerja.aggregate({
//         _count: {
//             statusRenjaId: true
//         },
//         where: {
//             statusRenjaId: {
//                 equals: 4
//             }
//         }
//     })

//     const dashAcc = await prisma.rencanakerja.aggregate({
//         _count: {
//             statusRenjaId: true
//         },
//         where: {
//             statusRenjaId: {
//                 equals: 2
//             }
//         }
//     })

    

//     console.log({dashOn,dashCcl, dashAcc})
// })()

async function coba2(){
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
}

coba2()