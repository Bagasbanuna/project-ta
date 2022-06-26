import axios from "axios";
import { listRenja } from "../store";

function ambilDataRenja() {
  axios.get("http://localhost:5000/api/v1/rencanakerja").then((a) => {
    //orang.val = JSON.stringify(a)
    listRenja.val = a.data;
  });
}

export {ambilDataRenja}


