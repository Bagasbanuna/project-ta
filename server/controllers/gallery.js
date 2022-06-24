const { PrismaClient } = require("@prisma/client");
const { json } = require("express");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const prisma = new PrismaClient();



const GetGallery = expressAsyncHandler (async (req,res) =>{
    let glry = await prisma.gallery.findMany();

    res.json(glry);
})

const CreateGallery = expressAsyncHandler (async (req, res)=>{
    let {Id, gambar, filesId} = req.body

    let glry = await prisma.gallery.create({
        data: {
            Id: Number(Id),
            gambar: gambar,
            
        }
    })

    let success = glry !=null
    let result = {
        success: success,
        data: glry
    }

    res.json(result)

})

const UpdateGallery = expressAsyncHandler (async (req,res)=> {
    let {Id, gambar, filesId} = req.body

    let glry = await prisma.gallery.update({
        data: {
            Id: Number(Id),
            gambar: gambar,
            filesId: Number(filesId)
        },
        where: {
            Id: Number(Id)
        }
    })
    res.json(glry)
})

const DeleteGallery = expressAsyncHandler (async (req, res) =>{
    let {Id} =req.body

    let glry = await prisma.gallery.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(glry)
})



module.exports = {GetGallery, CreateGallery, UpdateGallery, DeleteGallery}