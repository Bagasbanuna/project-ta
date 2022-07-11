import axios from "axios";
import {
  DashboardAcc,
  DashboardCcl,
  DashboardDone,
  DashboardOn,
  listRenja,
  listStatus,
  renjaAcc,
  renjaCancel,
  renjaDone,
  renjaOn,
} from "../store";

async function DashStatusOn() {
  const data = await axios.get("http://localhost:5000/api/v1/dashboardOn");
  DashboardOn.val = data.data;
  console.log(data.data);
}

async  function DashStatusAcc(){
  const data = await axios.get("http://localhost:5000/api/v1/dashboardAcc")
  DashboardAcc.val = data.data
  console.log(data.data, "Status ACC")
}

async function DashStatusDone(){
  const data = await axios.get("http://localhost:5000/api/v1/dashboardDone")
  DashboardDone.val = data.data
  console.log(data.data, "Status Done")
}

async function DashStatusCcl(){
  const data = await axios.get("http://localhost:5000/api/v1/dashboardCcl")
  DashboardCcl.val = data.data
  console.log(data.data, "Status Cencel")
}

async function ambilDataRenja() {
  const data = await axios.get("http://localhost:5000/api/v1/rencanakerja");
  listRenja.val = data.data;
}

function statusRenja() {
  axios.get("http://localhost:5000/api/v1/status-renja").then((s) => {
    listStatus.val = s.data;
    console.log(s.data, "yess data Status");
  });
}

function statusRenjaOn() {
  axios
    .get("http://localhost:5000/api/v1/rencanakerja/statuson")
    .then((son) => {
      renjaOn.val = son.data;
      console.log(son.data, "ini ON Progres");
    });
}

async function statusRenjaAcc() {
  let data = await axios.get(
    "http://localhost:5000/api/v1/rencanakerja/statusacc"
  );
  renjaAcc.val = data.data;
}

async function statusRenjaDone() {
  let data = await axios.get(
    "http://localhost:5000/api/v1/rencanakerja/statusdone"
  );
  renjaDone.val = data.data;
  // console.log(data.data);
}

function statusRenjaCancel() {
  axios
    .get("http://localhost:5000/api/v1/rencanakerja/statuscancel")
    .then((sccl) => {
      renjaCancel.val = sccl.data;
      console.log(sccl.data);
    });
}

function loadKabeh() {
  listRenja.init();
  listStatus.init();
  renjaOn.init();
  renjaAcc.init();
}



export {
  ambilDataRenja,
  statusRenja,
  statusRenjaOn,
  statusRenjaAcc,
  statusRenjaDone,
  statusRenjaCancel,
  loadKabeh,
  //Dashboard
  DashStatusOn,
  DashStatusAcc,
  DashStatusDone,
  DashStatusCcl
};
