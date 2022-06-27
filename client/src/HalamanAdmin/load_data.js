import axios from "axios";
import { listRenja, listStatus, renjaAcc, renjaCancel, renjaDone, renjaOn } from "../store";

function ambilDataRenja() {
  axios.get("http://localhost:5000/api/v1/rencanakerja").then((a) => {
    //orang.val = JSON.stringify(a)
    listRenja.val = a.data;
  });
}

function statusRenja() {
  axios.get("http://localhost:5000/api/v1/status-renja").then((s) =>{
    listStatus.val = s.data
    // console.log(s.data)
  })
}

function statusRenjaOn() {
  axios.get("http://localhost:5000/api/v1/rencanakerja/statuson").then((son) =>{
    renjaOn.val = son.data
    console.log(son.data)
  })
}

function statusRenjaAcc (){
  axios.get("http://localhost:5000/api/v1/rencanakerja/statusacc").then((sacc) =>{
    renjaAcc.val = sacc.data
    console.log(sacc.data, "ini status renja acc")
  })
}

function statusRenjaDone (){
  axios.get("http://localhost:5000/api/v1/rencanakerja/statusdone").then((sdone) =>{
    renjaDone.val = sdone.data
    console.log(sdone.data)
  })
}

function statusRenjaCancel (){
  axios.get("http://localhost:5000/api/v1/rencanakerja/statuscancel").then((sccl) =>{
    renjaCancel.val = sccl.data
    console.log(sccl.data)
  })
}

export {ambilDataRenja ,  statusRenja, statusRenjaOn, statusRenjaAcc, statusRenjaDone, statusRenjaCancel }


