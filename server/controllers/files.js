const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetFiles = expressAsyncHandler(async (req, res) =>{
    let fls = await prisma.files.findMany();

    res.json(fls);
})

const CreateFiles = expressAsyncHandler (async (req, res) =>{
    let {Id, file, rencanakerjaId, jenisFileId} = req.body

    let fls = await prisma.files.create({
        data: {
            Id: Number(Id),
            file: file,
            rencanakerjaId: Number(rencanakerjaId),
            jenisFileId: Number(jenisFileId)
        }
    })

    let success = fls !=null
    let result = {
        success: success,
        data: fls
    }

    res.json(result)
})

const UpdateFiles = expressAsyncHandler (async (req, res)=> {
    let {Id, file, rencanakerjaId, jenisFileId} = req.body

    let fls = await prisma.files.update({
        data: {
            Id: Number(Id),
            file: file,
            rencanakerjaId: Number(rencanakerjaId),
            jenisFileId: Number(jenisFileId)
        },
        where: {
            Id: Number(Id)
        }
    })
    res.json(fls)

})

const DeleteFiles = expressAsyncHandler (async (req,res)=> {
    let {Id} = req.body
    
    let fls = await prisma.files.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(fls)
})


module.exports = {GetFiles, CreateFiles, UpdateFiles, DeleteFiles}