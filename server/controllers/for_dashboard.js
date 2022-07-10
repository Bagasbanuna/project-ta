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

module.exports = {DashOn}
// Buat router dlu