const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();




const GetJabatan = expressAsyncHandler(async (req, res) => {
    let jbtn = await prisma.jabatan.findMany();
    
    res.json(jbtn)
})

const CreateJabatan = expressAsyncHandler(async (req, res) => {
    
    let {Id, namaJabatan, profileId} = req.body

    let jbtn = await prisma.jabatan.create({
        data: {
            Id: Number(Id),
            namaJabatan: namaJabatan,
            profileId: Number(profileId)
        }
    })

    let success = jbtn !=null
    let result = {
        success: success,
        data: jbtn
    }

    res.json(result)
})

const UpdateJabatan = expressAsyncHandler (async (req, res) => {
    let {Id, namaJabatan, profileId} = req.body
    

    let jbtn = await prisma.jabatan.update({
        data : {
            Id: Number(1),
            namaJabatan: namaJabatan,
            profileId: Number(profileId)
        },
        where: {
            Id: Number(Id)
        }
    })

    res.json(jbtn)
})

const DeleteJabatan = expressAsyncHandler (async (req, res) =>{
    let {Id} = req.body

    let jbtn = await prisma.jabatan.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(jbtn)
})

module.exports = {GetJabatan, CreateJabatan, UpdateJabatan, DeleteJabatan}