const { PrismaClient } = require("@prisma/client");
const { date } = require("prompts/dist/prompts");
const prisma = new PrismaClient();


//     {
//         "id": 1,
//         "name": "guess"
//     },
//     {
//         "id": 2,
//         "name": "user"
//     },
//     {
//         "id": 3,
//         "name": "admin"
//     },
//     {
//         "id": 4,
//         "name": "super admin"
//     }
// ]

const listJabatan = [
    {
        "Id": 1,
        "namaJabatan": "ketua"
    },
    {
        "Id": 2,
        "namaJabatan": "wakil ketua"
    },
    {
        "Id": 3,
        "namaJabatan": "sekretaris 1"
    },
    {
        "Id": 4,
        "namaJabatan": "sekretaris 2"
    },
    {
        "Id": 5,
        "namaJabatan": "bendahara"
    },
    {
        "Id": 6,
        "namaJabatan": "kordinator humas"
    },
    {
        "Id": 7,
        "namaJabatan": "kordinator perlengkapan"
    },
    {
        "Id": 8,
        "namaJabatan": "kordinator kaderisasi"
    },
    {
        "Id": 9,
        "namaJabatan": "kordinator kerohanian"
    },
    {
        "Id": 10,
        "namaJabatan": "kordinator kemuslimahan"
    },
    {
        "Id": 11,
        "namaJabatan": "kordinator media"
    },
    {
        "Id": 12,
        "namaJabatan": "pembina"
    },
]

const listJurusan = [
    {
        "Id": 1,
        "namaJurusan": "ti-mdi"
    },
    {
        "Id": 2,
        "namaJurusan": "ti-sgm"
    },
    {
        "Id": 3,
        "namaJurusan": "ti-kab"
    },
    {
        "Id": 4,
        "namaJurusan": "sk"
    }
]

const listDivisi = [
    {
        "Id": 1,
        "namaDivisi": "inti",
    },
    {
        "Id": 2,
        "namaDivisi": "keroanian",
    },
    {
        "Id": 3,
        "namaDivisi": "kemuslimahan",
    },
    {
        "Id": 4,
        "namaDivisi": "media",
    },
    {
        "Id": 5,
        "namaDivisi": "perlengkapan",
    },
    {
        "Id": 6,
        "namaDivisi": "humas",
    },
    {
        "Id": 7,
        "namaDivisi": "kaderisasi",
    }

]


let user = {
    "Id": "",
    "username": "",
    "email": "",
    "password": ""
}

let profile = {
    "Id": "",
    "nim": "",
    "namaDepan": "",
    "namaBelakang": "",
    "alamat": "",
    "tempatLahir": "",
    "tanggalLahir": "",
    "jenisKelamin": "",
    "nomorHp": "",
    "tahunAngkatan": "",
    "fotoKtp": "",
    "fotoProfile": "",
    "userId": "",
}

let jabatan = {
    "Id": "",
    "namaJabatan": "",
    "Profile": "",
    "profileId": ""
}

let jurusan = {
    "Id": "",
    "namaJurusan": "",
    "Profile": "",
    "profileId": ""
}

let rencanakerja = {
    "Id": "",
    "title": "",
    "tanggal": "",
    "keterangan": "",
    "status": "",
    "User": "",
    "userId": "",
    "files": ""
}


async function Coba() {
    for (let jabatan of listJabatan) {
        await prisma.jabatan.upsert({
            where: {
                Id: jabatan.Id
            },
            create: {
                Id: jabatan.Id,
                namaJabatan: jabatan.namaJabatan
            },
            update: {
                namaJabatan: jabatan.namaJabatan
            }
        })
    }

    console.log("Seed Jabatan Berhasil")

    for (let jurusan of listJurusan) {
        await prisma.jurusan.upsert({
            where: {
                Id: jurusan.Id
            },
            create: {
                Id: jurusan.Id,
                namaJurusan: jurusan.namaJurusan
            },
            update: {
                namaJurusan: jurusan.namaJurusan
            }
        })
    }

    console.log("seed jurusan berhasil")

    for (let divisi of listDivisi) {
        await prisma.divisi.upsert({
            where: {
                Id: divisi.Id
            },
            create: {
                Id: divisi.Id,
                namaDivisi: divisi.namaDivisi
            },
            update: {
                namaDivisi: divisi.namaDivisi
            }
        })
    }

    console.log("seed divisi berhasil")

    const roles = ["guess", "user", "admin", "superAdmin"]
    let indexRoles = 1;
    for (let role of roles ){
        await prisma.roles.upsert({
            where:{
                id: indexRoles
            },
            create:{
                id: indexRoles,
                name:role
            },
            update:{
                name: role
            }
        })
    }

    console.log("seed Roles berhasil ")

    // let listRencanaKerja = Array.from(Array(20).keys())
    // let indexRenja = 1;
    // for (let rencanakerja of listRencanaKerja) {
    //     await prisma.rencanakerja.upsert({
    //         where: {
    //             Id: indexRenja
    //         },
    //         create: {
    //             Id: indexRenja,
    //             title: "user" + indexRenja,
    //             tanggal: new Date('2020-11-01'),
    //             keterangan: "user"+ indexRenja,
    //             status: "user"+ indexRenja

    //         },
    //         update: {
    //             title: "user" + indexRenja,
    //             tanggal: new Date('2020-12-12'),
    //             keterangan: "user"+ indexRenja,
    //             status: "user"+ indexRenja
    //         }
    //     })
    //     indexRenja++;
    // }

    // console.log("seed rencana kerja berhasil")


    let listUser = Array.from(Array(20).keys())
    let index = 1;
    for (let user of listUser) {
        await prisma.user.upsert({
            where: {
                Id: index
            },
            create: {
                Id: index,
                username: "user" + index,
                email: "user" + index + "@gmail.com",
                password: "user" + index
            },
            update: {
                username: "user" + index,
                email: "user" + index + "@gmail.com",
                password: "user" + index
            }
        })
        index++;
    }

    console.log("seed user berhasil")

    let listProfile = Array.from(Array(20).keys())
    let indexProfile = 1;
    for (let profile of listProfile) {
        await prisma.profile.upsert({
            where: {
                Id: indexProfile
            },
            create: {
                Id: indexProfile,
                nim: Number(1810100 + indexProfile),
                namaDepan: "namaDepan" + indexProfile,
                namaBelakang: "namaBelakang" + indexProfile,
                alamat: "alamat" + indexProfile,
                tempatLahir: "tempatLahir" + indexProfile,
                tanggalLahir: "tanggalLahir" + indexProfile,
                jenisKelamin: "jenisKelamin" + indexProfile,
                nomorHp: "nomorHp" + indexProfile,
                tahunAngkatan: Number(2015 + indexProfile),
                fotoKtp: "fotoKtp" + indexProfile,
                fotoProfile: "fotoProfile" + indexProfile,
                userId: indexProfile
            },
            update: {
                nim: Number(1810100 + indexProfile),
                namaDepan: "namaDepan" + indexProfile,
                namaBelakang: "namaBelakang" + indexProfile,
                alamat: "alamat" + indexProfile,
                tempatLahir: "tempatLahir" + indexProfile,
                tanggalLahir: "tanggalLahir" + indexProfile,
                jenisKelamin: "jenisKelamin" + indexProfile,
                nomorHp: "nomorHp" + indexProfile,
                tahunAngkatan: Number(2015 + indexProfile),
                fotoKtp: "fotoKtp" + indexProfile,
                fotoProfile: "fotoProfile" + indexProfile,
                userId: indexProfile
            }
        })
        indexProfile++;
    }
    console.log("seed profile berhasil")



}

Coba();