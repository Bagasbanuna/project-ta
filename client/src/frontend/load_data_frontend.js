import axios from "axios";
import { ambilDataStuktur, dataProfile, listJurusan } from "../store";

async function ProfileData() {
  let body = JSON.parse(window.localStorage.getItem("user"));
  // console.log(body)

  const data = await axios
    .get("http://localhost:5000/api/v1/profile/" + body.Id)
    .then((e) => {
      console.log(JSON.stringify(e.data, null, 3), "Data Berhasil di ambil")
      // console.log("Berhasil ambil data profil")
      

    dataProfile.val = e.data
    });

  // dataProfile.val = data.data
  // console.log(dataProfile)
}

async function ListJurusan() {
  const data = await axios
  .get("http://localhost:5000/api/v1/jurusan")
  .then((e) =>{
    console.log(JSON.stringify(e.data, null, 3),"Summon List Jurusan")
    listJurusan.val = e.data
  })
}

function GetDataStuktur(){
  axios.get("http://localhost:5000/api/v1/strukturOrganisasi")
  .then((a) =>
  ambilDataStuktur.val = a.data,
     
  )
}

// async function GetDataStuktur(){
//   const data = await axios.get("http://localhost:5000/api/v1/strukturOrganisasi")
//   ambilDataStuktur.val = data.data
//   console.log(JSON.stringify(data.data))
// }

export { 
  ProfileData,
  ListJurusan,
  GetDataStuktur
};
