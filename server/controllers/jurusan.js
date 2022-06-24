const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetJurusan = expressAsyncHandler(async (req, res) => {
    let jrsn = await prisma.jurusan.findMany();

    res.json(jrsn);
})

const CreateJurusan = expressAsyncHandler(async (req, res) =>{
    let {Id, namaJurusan, profileId} = req.body

    let jrsn = await prisma.jurusan.create({
        data: {
            Id: Number(Id),
            namaJurusan: namaJurusan,
            profileId: Number(profileId)
        }
    })

    let success = jrsn !=null
    let result = {
        success: success,
        data: jrsn
    }

    res.json(result)

})

const UpdateJurusan = expressAsyncHandler (async (req, res)=> {
    let {Id, namaJurusan, profileId} = req.body

    let jrsn = await prisma.jurusan.update({
        data: {
            Id: Number(Id),
            namaJurusan: namaJurusan,
            profileId: Number(profileId)
        },
        where: {
            Id: Number(Id)
        }
    })
    res.json(jrsn)
})

const DeleteJurusan = expressAsyncHandler (async (req, res)=> {
    let {Id} = req.body

    let jrsn = await prisma.jurusan.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(jrsn)
})

module.exports = {GetJurusan, CreateJurusan, UpdateJurusan, DeleteJurusan}