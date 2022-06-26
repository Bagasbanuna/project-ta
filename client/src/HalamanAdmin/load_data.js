import axios from "axios";
import { listRenja, listStatus, renjaOn } from "../store";

function ambilDataRenja() {
  axios.get("http://localhost:5000/api/v1/rencanakerja").then((a) => {
    //orang.val = JSON.stringify(a)
    listRenja.val = a.data;
  });
}

function statusRenja() {
  axios.get("http://localhost:5000/api/v1/status-renja").then((s) =>{
    listStatus.val = s.data
    console.log(s.data)
  })
}

function statusRenjaOn() {
  axios.get("http://localhost:5000/api/v1/rencanakerja/statuson").then((son) =>{
    renjaOn.val = son.data
    console.log(son.data)
  })
}

export {ambilDataRenja ,  statusRenja, statusRenjaOn}


