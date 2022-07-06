const { PrismaClient } = require("@prisma/client");
const { date } = require("prompts/dist/prompts");
const prisma = new PrismaClient();

const MyStatus = [
    {
      "id": 1,
      "name": "On Progress",
    },
    {
      "id": 2,
      "name": "Accept",
    },
    {
      "id": 3,
      "name": "Done",
    },
    {
      "id": 4,
      "name": "Cencel",
    },
  ];

const listJabatan = [
    {
        "Id": 1,
        "namaJabatan": "Ketua"
    },
    {
        "Id": 2,
        "namaJabatan": "Kakil Ketua"
    },
    {
        "Id": 3,
        "namaJabatan": "Sekretaris 1"
    },
    {
        "Id": 4,
        "namaJabatan": "Sekretaris 2"
    },
    {
        "Id": 5,
        "namaJabatan": "Bendahara"
    },
    {
        "Id": 6,
        "namaJabatan": "Koordinator Humas"
    },
    {
        "Id": 7,
        "namaJabatan": "Koordinator Perlengkapan"
    },
    {
        "Id": 8,
        "namaJabatan": "Koordinator Kaderisasi"
    },
    {
        "Id": 9,
        "namaJabatan": "Koordinator Kerohanian"
    },
    {
        "Id": 10,
        "namaJabatan": "Koordinator Kemuslimahan"
    },
    {
        "Id": 11,
        "namaJabatan": "Koordinator Media"
    },
    {
        "Id": 12,
        "namaJabatan": "Pembina"
    },
]

const listJurusan = [
    {
        "Id": 1,
        "namaJurusan": "TI-MDI"
    },
    {
        "Id": 2,
        "namaJurusan": "TI-DGM"
    },
    {
        "Id": 3,
        "namaJurusan": "TI-KAB"
    },
    {
        "Id": 4,
        "namaJurusan": "Sistem Komputer (SK)"
    }
]

const listDivisi = [
    {
        "Id": 1,
        "namaDivisi": "Inti",
    },
    {
        "Id": 2,
        "namaDivisi": "Keroanian",
    },
    {
        "Id": 3,
        "namaDivisi": "Kemuslimahan",
    },
    {
        "Id": 4,
        "namaDivisi": "Media",
    },
    {
        "Id": 5,
        "namaDivisi": "Perlengkapan",
    },
    {
        "Id": 6,
        "namaDivisi": "Humas",
    },
    {
        "Id": 7,
        "namaDivisi": "Kaderisasi",
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
    "FotoKtp": "",
    "FotoProfile": "",
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

let status = {
    "id": "",
    "name": ""
}




async function Coba() {

    for (let status of MyStatus){
        await prisma.statusRenja.upsert({
            where: {
                id: status.id
            },
            create: {
                id: status.id,
                name: status.name
            },
            update: {
                name: status.name
            }
        })
    }
    console.log("Status seed berhasil")

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


    let listUser = Array.from(Array(5).keys())
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

    let listProfile = Array.from(Array(5).keys())
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
                FotoKtp: "FotoKtp" + indexProfile,
                FotoProfile: "FotoProfile" + indexProfile,
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
                FotoKtp: "FotoKtp" + indexProfile,
                FotoProfile: "FotoProfile" + indexProfile,
                userId: indexProfile
            }
        })
        indexProfile++;
    }
    console.log("seed profile berhasil")
}

Coba();