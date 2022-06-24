const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const prisma = new PrismaClient();



const GetDivisi = expressAsyncHandler(async (req, res) => {
    let dvs = await prisma.divisi.findMany();

    res.json(dvs);
})

const CreateDivisi = expressAsyncHandler(async(req, res) => {
    let {Id, namaDivisi,profileId} = req.body

    let dvs = await prisma.divisi.create({
        data: {
            Id: Number(Id),
            namaDivisi: namaDivisi,
            profileId:Number(profileId)
        }
    })

    let success = dvs !=null
    let result = {
        success: success,
        data: dvs
    }

    res.json(result)
})

//update delete
const UpdateDivisi = expressAsyncHandler (async (req, res)=> {
    let {Id, namaDivisi,profileId} = req.body

    let dvs = await prisma.divisi.update({
        data: {
            Id: Number(Id),
            namaDivisi: namaDivisi,
            profileId:Number(profileId)
        },
        where: {
            Id: Number(Id)
        }
    })
    res.json(dvs)
})

const DeleteDivisi = expressAsyncHandler (async (req, res)=>{
    let {Id} = req.body

    let dvs = await prisma.divisi.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(dvs)
})


module.exports = {GetDivisi, CreateDivisi, UpdateDivisi, DeleteDivisi}