const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const CreateLogin = expressAsyncHandler(async (req, res)=> {
    
    let {username, password} = req.body

    let login = await prisma.user.findFirst({
        where: {
            AND: [
                {
                    username: {
                        equals: username
                    }
                },
                {
                    password: {
                        equals: password
                    }
                }
            ]
        },
        include: {
            profile: {
                include: {
                    divisi: true
                    
                }
            }
        }
    })

    res.status(login==null? 200:201).json({
        success: login != null ,
        data: login,
        message: login == null? "password salah" : "login berhasil"
    })

    console.log(req.body)
})

module.exports = {CreateLogin}