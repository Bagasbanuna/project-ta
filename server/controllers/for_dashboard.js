const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient()

const DashOn = expressAsyncHandler(async (req, res) => {

    let aggregations = await prisma.rencanakerja.aggregate({
        _count: {
            statusRenjaId: true
        },
        where: {
            statusRenjaId: {
                equals: 1
            }
        }
    })

    // console.log(aggregations)
    res.json([aggregations._count.statusRenjaId])
})

const DashAcc = expressAsyncHandler(async (req, res) => {

    let aggregations = await prisma.rencanakerja.aggregate({
        _count: {
            statusRenjaId: true
        },
        where: {
            statusRenjaId: {
                equals: 2
            }
        }
    })

    // console.log(aggregations)
    res.json([aggregations._count.statusRenjaId])
})

const DashDone = expressAsyncHandler(async (req, res) => {

    let aggregations = await prisma.rencanakerja.aggregate({
        _count: {
            statusRenjaId: true
        },
        where: {
            statusRenjaId: {
                equals: 3
            }
        }
    })

    // console.log(aggregations)
    res.json([aggregations._count.statusRenjaId])
})

const DashCcl = expressAsyncHandler(async (req, res) => {

    let aggregations = await prisma.rencanakerja.aggregate({
        _count: {
            statusRenjaId: true
        },
        where: {
            statusRenjaId: {
                equals: 4
            }
        }
    })

    // console.log(aggregations)
    res.json([aggregations._count.statusRenjaId])
})

module.exports = {DashOn, DashAcc, DashDone, DashCcl}
// Buat router dlu