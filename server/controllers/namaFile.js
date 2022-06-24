const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetnamaFile = expressAsyncHandler (async (req,res) =>{
    let jenf = await prisma.namaFile.findMany();

    res.json(jenf);
})

const CreatenamaFile = expressAsyncHandler (async (req, res) =>{
    let {Id, namaFile, filesId} = req.body

    let jenf = await prisma.namaFile.create({
        data: {
            Id: Number(Id),
            namaFile: namaFile,
            filesId: Number(filesId)
        }
    })

    let success = jenf !=null
    let result = {
        success: success,
        data: jenf
    }

    res.json(result)
})

const UpdatenamaFile = expressAsyncHandler (async (req, res)=> {
    let {Id, namaFile, filesId} = req.body

    let jenf = await prisma.namaFile.update({
        data: {
            Id: Number(Id),
            namaFile: namaFile,
            filesId: Number(filesId)
        },
        where: {
            Id: Number(Id)
        }
    })
    res.json(jenf)
})

const DeletenamaFile = expressAsyncHandler (async (req, res)=> {
    let {Id} =req.body

    let jenf = await prisma.namaFile.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(jenf)
})




module.exports = {GetnamaFile, CreatenamaFile, UpdatenamaFile, DeletenamaFile}