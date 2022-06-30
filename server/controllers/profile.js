// ingat ganti prisma jadi PrismaClient
const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const prisma = new PrismaClient();




const GetProfile = expressAsyncHandler(async (req, res) =>{

    let prof = await prisma.profile.findMany({
        select: {
            nim: true,
            namaDepan: true,
            FotoProfile: {
                select: {
                    id:true
                }
            },
            
            User: {
                select: {
                    username: true,
                    email: true
                }
            }
              

        }
    }); 
    res.json(prof)
})

const CreateProfile = expressAsyncHandler(async (req, res) =>{
    let body = req.body

    let FotoKtp = await prisma.fotoKtp.create({
        data: {
            id: body.id
        }
    })

    let FotoProfile = await prisma.fotoProfile.create({
        data: {
            id: body.id
        }
    }) 

    let prof = await prisma.profile.create({
        data: {

            nim: Number(body.nim),
            namaDepan: body.namaDepan,

            userId: Number(body.userId),
            FotoProfile: {
                connect: {
                    id: body.id
                }
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
        }
        
        })
    
        // let success = prof !=null
        // let result = {
        //     success: success,
        //     data: prof
        // }
    
    
        let success = {
    
            data: {
                prof: prof,
                // FotoKtp: FotoKtp,
                // FotoProfile: FotoProfile
            }
        }
    
    res.status(200).json(success)   
}
)

const UpdateProfile = expressAsyncHandler (async (req, res) => {
    let {Id, nim, namaDepan, namaBelakang, alamat, tempatLahir, tanggalLahir,
    jenisKelamin, nomorHp, tahunAngkatan, fotoKtp, fotoProfile , userId} = req.body

    let prof  = await prisma.profile.update({
        data : {
            nim: Number(nim),
            namaDepan: namaDepan,
            namaBelakang: namaBelakang,
            alamat: alamat,
            tempatLahir: tempatLahir,
            tanggalLahir: tanggalLahir,
            jenisKelamin: jenisKelamin,
            nomorHp: nomorHp,
            tahunAngkatan: Number(tahunAngkatan),
            fotoKtp: fotoKtp,
            fotoProfile: fotoProfile,
            userId: userId,
        },
        where: {
            Id: Number(Id)
        }
    })

    res.json(prof)

})

const DeleteProfile = expressAsyncHandler (async (req, res) =>{
    let Id =req.params.Id

    let prof = await prisma.profile.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.status(201).json(prof)
})


module.exports = {GetProfile, CreateProfile , UpdateProfile, DeleteProfile}