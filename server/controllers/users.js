const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const res = require("express/lib/response");
const prisma = new PrismaClient();


const GetUser = expressAsyncHandler(async (req, res) => {
    let usr = await prisma.user.findMany();
    res.json(usr)
})

const CreateUser = expressAsyncHandler(async (req, res) => {

    let {username, email, password} = req.body

    let usr = await prisma.user.create({
        data: {
            email: email,
            password: password,
            username: username,
        }
    })

    // untuk cek berhasil / gagal 
    let success = usr != null
    let result = {
        success: success,
        data: usr
    } 

    res.json(result)
})

const UpdateUser = expressAsyncHandler (async (req, res) => {
    let {Id, email, username, password} = req.body


    let usr = await prisma.user.update({
        data: {
            email: email,
            password: password,
            username: username,
        },
        where: {
            Id: Number(Id)
        }
    })

    res.json(usr)
})

const DeleteUser = expressAsyncHandler (async (req, res) =>{
    let {Id, email, username, password} = req.body

    let usr = await prisma.user.delete({
        
        where: {
            Id: Number(Id)
        }        
    })

    res.json(usr)
})

module.exports = {GetUser, CreateUser, UpdateUser, DeleteUser}