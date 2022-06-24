const {PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient();

const listStatus = ["On Progress", "Accept", "Done", "Cencel"]

const SeedStatus = async () => {
    let id = 1;
    for(let item of listStatus){
        await prisma.statusRenja.upsert({
            where:{
                id: Number(id)
            },
            create:{
                name: item,
                id: Number(id)
            },
            update:{
                name: item
            }
        })
        id++;
    }

    console.log('seed status berhasil')
}

module.exports = {SeedStatus}

   