const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();

const CreateRegistrasi = expressAsyncHandler (async (req, res)=> {
    let body = req.body
    console.log(body)

    let reg  = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            username: body.username,
            profile: {
                create: {
                    namaDepan: body.user
                }
            }
        },
        include: {
            profile: true
        }
    })
    
    console.log(reg)
    res.json(reg)
})

module.exports = {CreateRegistrasi}