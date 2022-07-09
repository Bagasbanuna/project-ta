import { PrismaClient } from "@prisma/client";
import expressAsyncHandler from "express-async-handler";
const prisma = new PrismaClient()

const DashOn = expressAsyncHandler(async (req, res) => {

    let aggregations = await prisma.statusRenja.aggregate({
        _avg: 
        {
            id: true
        },
        where: {
            name: 'On Progres'
        }, 
        take: 10
    })

    console.log(aggregations)
    res.json(aggregations)
})

export {DashOn}
// Buat router dlu