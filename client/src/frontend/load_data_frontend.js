import axios from "axios";
import { dataProfile } from "../store";

async function ProfileData() {
  let body = JSON.parse(window.localStorage.getItem("user"));
  // console.log(body)

  const data = await axios
    .get("http://localhost:5000/api/v1/profile/" + body.Id)
    .then((e) => {
    console.log(JSON.stringify(e.data, null, 3), "Data Berhasil di ambil")

    dataProfile.val = e.data
    });

  // dataProfile.val = data.data
  // console.log(dataProfile)
}

async function UpdateProfile() {
  const data = await axios
  .post 
}

export { ProfileData };
