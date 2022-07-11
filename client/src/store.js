//store untuk daftar stage managemen
import { configureStore } from "@reduxjs/toolkit";
import { Rx } from "./rx";

const orang = new Rx("orang", []);
const user = new Rx("user", {});
const muncul = new Rx("muncul", Boolean);
const kesana = new Rx("kesana", Number);
//ADMIN
const listRenja = new Rx("listRenja", []);
const listStatus = new Rx("listStatus", []);
const renjaOn = new Rx("renjaOn", []);
const renjaAcc = new Rx("renjaAcc", []);
const renjaDone = new Rx("renjaDone", []);
const renjaCancel = new Rx("renjaCancel", []);

//CLIENT
const dataProfile = new Rx("dataProfile", []);
const listJurusan = new Rx("listJurusan", [])
const ambilDataStuktur = new Rx("ambilDataStuktur", [])

//Dashboard
const DashboardOn = new Rx("DashboardOn", [])
const DashboardAcc = new Rx("DashboardAcc", [])
const DashboardDone = new Rx("DashboardDone", [])
const DashboardCcl = new Rx("DashboardCcl", [])

const store = configureStore({
  reducer: {
    orang: orang.reducer,
    user: user.reducer,
    listRenja: listRenja.reducer,
    listStatus: listStatus.reducer,
    muncul: muncul.reducer,
    kesana: kesana.reducer,

    //Server
    renjaOn: renjaOn.reducer,
    renjaAcc: renjaAcc.reducer,
    renjaDone: renjaDone.reducer,
    renjaCancel: renjaCancel.reducer,

    //Client
    dataProfile: dataProfile.reducer,
    listJurusan: listJurusan.reducer,
    ambilDataStuktur: ambilDataStuktur.reducer,

    //Dashboard
    DashboardOn: DashboardOn.reducer,
    DashboardAcc: DashboardAcc.reducer,
    DashboardDone: DashboardDone.reducer,
    DashboardCcl: DashboardCcl.reducer
  },
});

export {
  orang,
  store,
  user,
  //Server
  listRenja,
  listStatus,
  muncul,
  kesana,
  renjaOn,
  renjaAcc,
  renjaDone,
  renjaCancel,
  //Client
  dataProfile,
  listJurusan,
  ambilDataStuktur,

  //Dashboard
  DashboardOn,
  DashboardAcc,
  DashboardDone,
  DashboardCcl

};
