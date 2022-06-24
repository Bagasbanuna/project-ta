const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const expressAsyncHandler = require('express-async-handler');
const req = require('express/lib/request');
const res = require('express/lib/response');
const routeStatusRenja = require('express').Router()


const StatusRenjaGet = expressAsyncHandler(async (req, res) => {
    const status = await prisma.statusRenja.findMany({
        select:{
            id: true,
            name:true
        }
    })

    res.status(200).json(status)
})

const UpdateStatus = expressAsyncHandler (async (req, res) =>{
    let body = req.body
    console.log(body)
    

    // let statusR = await prisma.statusRenja.update({
    //     data: {
    //         id: Number(body.id),
    //         name: body.name,
    //         rencanakerjaId: Number(body.rencanakerjaId)
    //     },
    //     where: {
    //         id: Number(body.id)
    //     }
    // })
    // res.json(statusR) 
})



routeStatusRenja.get('/', StatusRenjaGet)

module.exports = {routeStatusRenja, UpdateStatus}