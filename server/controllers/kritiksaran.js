const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const prisma = new PrismaClient();



const GetKritiksaran = expressAsyncHandler (async (req, res)=> {
    let krisa = await prisma.kritiksaran.findMany();

    res.json(krisa);
})

const CreateKritiksaran = expressAsyncHandler (async (req, res)=> {
    let {Id, subjek, komentar, userId} = req.body

    let krisa = await prisma.kritiksaran.create({
        data: {
            Id: Number(Id),
            subjek: subjek,
            komentar: komentar,
            userId: Number(userId)
        }
    })

    let success = krisa !=null
    let result = {
        success: success,
        data: krisa
    }

    res.json(result)
})

const UpdateKritiksaran = expressAsyncHandler (async (req,res)=> {
    let {Id, subjek, komentar, userId} = req.body

    let krisa = await prisma.kritiksaran.update({
        data: {
            Id: Number(Id),
            subjek: subjek,
            komentar: komentar,
            userId: Number(userId)
        },
        where: {
            Id: Number(Id)
        }
    })
    res.json(krisa)
})

const DeleteKritiksaran = expressAsyncHandler (async (req, res) =>{
    let {Id} =req.body

    let krisa = await prisma.kritiksaran.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(krisa)
})


module.exports = {GetKritiksaran, CreateKritiksaran, UpdateKritiksaran, DeleteKritiksaran}