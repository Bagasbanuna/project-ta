const express = require("express");
const { GetDivisi, CreateDivisi, UpdateDivisi, DeleteDivisi } = require("./controllers/divisi");
const { GetFiles, CreateFiles, UpdateFiles, DeleteFiles } = require("./controllers/files");
const { GetGallery, CreateGallery, UpdateGallery, DeleteGallery } = require("./controllers/gallery");
const { GetJabatan, CreateJabatan, UpdateJabatan, DeleteJabatan } = require("./controllers/jabatan");
const { GetnamaFile, CreatenamaFile, UpdatenamaFile, DeletenamaFile } = require("./controllers/namaFile");
const { GetJurusan, CreateJurusan, UpdateJurusan, DeleteJurusan } = require("./controllers/jurusan");
const { GetKritiksaran, CreateKritiksaran, UpdateKritiksaran, DeleteKritiksaran } = require("./controllers/kritiksaran");
const { CreateLogin } = require("./controllers/login");
const { GetProfile, CreateProfile, UpdateProfile, DeleteProfile, UploadFotoProfile, UpdateUploadFotoProfile } = require("./controllers/profile");
const { CreateRegistrasi } = require("./controllers/registrasi");
const { GetRencanakerja, CreateRencanakerja, UpdateRencanakerja, DeleteRencanakerja, GetRenjaOn, GetRenjaAcc, GetRenjaDone, GetRenjaCancel, UpdateStatusRenja } = require("./controllers/rencanakerja");
const { GetRenjaByUser } = require("./controllers/rencanakerja_by_user");
const { routeStatusRenja, UpdateStatus } = require("./controllers/status_renja");
const { GetUser, CreateUser, UpdateUser, DeleteUser } = require("./controllers/users");
const { GetUserInclude } = require("./controllers/user_include");
const { routeUpload } = require("./upload");
const { DashOn, DashAcc, DashDone, DashCcl} = require("./controllers/for_dashboard");
const { GetStatusOrganisasi } = require("./controllers/for_struktur_organisasi");
const api = express.Router()

api.use('/upload', routeUpload);

// User
api.get('/user', GetUser)
api.post('/user', CreateUser)
api.post('/user/update', UpdateUser)
api.post('/user/delete', DeleteUser)

// profile
api.get('/profile/:Id', GetProfile)
api.post('/profile', CreateProfile)
api.post('/profile/update', UpdateProfile)
api.delete('/profile/delete/:Id', DeleteProfile)

api.post('/profile/uploadfoto', UploadFotoProfile)
api.post('/profile/updatefotoprofile', UpdateUploadFotoProfile)

//jabatan
api.get('/jabatan', GetJabatan)
api.post('/jabatan', CreateJabatan)
api.post('/jabatan/update', UpdateJabatan)
api.post('/jabatan/delete', DeleteJabatan)

//divisi
api.get('/divisi', GetDivisi)
api.post('/divisi', CreateDivisi)
api.post('/divisi/update', UpdateDivisi)
api.post('/divisi/delete', DeleteDivisi)

//jurusan
api.get('/jurusan', GetJurusan)
api.post('/jurusan', CreateJurusan)
api.post('/jurusan/update', UpdateJurusan)
api.post('/jurusan/delete', DeleteJurusan)

/////////////////////////////
// status renja
api.use('/status-renja', routeStatusRenja)
api.post('/status-renja/update', UpdateStatus)

api.get('/rencanakerja/statuson' , GetRenjaOn)
api.get('/rencanakerja/statusacc', GetRenjaAcc)
api.get('/rencanakerja/statusdone', GetRenjaDone)
api.get('/rencanakerja/statuscancel', GetRenjaCancel)

api.post('/rencanakerja/updatestatus' , UpdateStatusRenja)

//rencanakerja
api.get('/rencanakerja', GetRencanakerja)
api.post('/rencanakerja', CreateRencanakerja)
api.post('/rencanakerja/update', UpdateRencanakerja)
api.post('/rencanakerja/delete', DeleteRencanakerja)

// rencana kerja by user // : = indikasin id bisa diambil
api.get('/rencanakerja-by-user/:id' , GetRenjaByUser)

//////////////////////////////

//files
api.get('/files', GetFiles)
api.post('/files', CreateFiles)
api.post('/files/update', UpdateFiles)
api.post('/files/delete', DeleteFiles)

//namaFile
api.get('/namaFile', GetnamaFile)
api.post('/namaFile', CreatenamaFile)
api.post('/namaFile/update', UpdatenamaFile)
api.post('/namaFile/delete', DeletenamaFile)

//gallery
api.get('/gallery', GetGallery)
api.post('/gallery', CreateGallery)
api.post('/gallery/update', UpdateGallery)
api.post('/gallery/delete', DeleteGallery)

//kritiksaran
api.get('/kritiksaran', GetKritiksaran)
api.post('/kritiksaran', CreateKritiksaran)
api.post('/kritiksaran/update', UpdateKritiksaran)
api.post('/kritiksaran/delete', DeleteKritiksaran)

// Registrasi
api.post('/registrasi', CreateRegistrasi)

// Login
api.post('/login', CreateLogin)

//
api.get('/userInclude', GetUserInclude)

//Dashboard
api.get('/dashboardOn', DashOn)
api.get('/dashboardAcc', DashAcc)
api.get('/dashboardDone', DashDone)
api.get('/dashboardCcl', DashCcl)

//StrukturOrganisasi
api.get('/strukturOrganisasi', GetStatusOrganisasi)



module.exports = {api}