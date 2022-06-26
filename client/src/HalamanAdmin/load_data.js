import axios from "axios";
import { listRenja, listStatus } from "../store";

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

export {ambilDataRenja ,  statusRenja}


