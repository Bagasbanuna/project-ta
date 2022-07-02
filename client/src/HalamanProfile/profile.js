import axios from "axios";
import { data } from "jquery";
import { useNavigate } from "react-router-dom";
import { ProfileData } from "../frontend/load_data_frontend";
import { Tombol } from "../lib/button";
import { Formulir, MyForm, NewForm } from "../lib/form";
import { MyRouter } from "../my_router";
import { dataProfile } from "../store";

// async function AmbilData() {

//   let body = JSON.parse(window.localStorage.getItem("user"));
//   console.log(body);
//   //Let Body untuk ambil data user dari localStorage
//   //axios get ngirim data ke server dan + id nya
//   //dari axios di kirim ke  route
//   //route harus sesuai dengan apa yang dikirim , jika ada id maka di tambah Id
//   //Then(e) adalah pengembalian dari server yang di dapat dari / res.json()

//   await axios
//     .get("http://localhost:5000/api/v1/profile/" + body.Id)
//     .then((e) => {
//       console.log(JSON.stringify(e.data, null, 4), "Data Berhasil di ambil");
//     });
// }

function antiNull(data) {
  try {
    return data.profile.nim;
  } catch (error) {
    return "Data kosong";
  }
}

function TampilanProfile() {
  dataProfile.init();
  if (dataProfile.val.length < 1) {
    ProfileData();
  }

  let hasil = {};
  MyRouter.Init(useNavigate);
  let nav = useNavigate();
  let user = JSON.parse(window.localStorage.getItem("user"));
  if (!user)
    setTimeout(() => {
      nav("/login");
    }, 500);
  // delete console.log(window.localStorage.getItem("user"));

  //**INI CATATAN */
  // Let Body untuk ambil data user dari localStorage
  // axios get ngirim data ke server dan + id nya
  // dari axios di kirim ke  route
  // route harus sesuai dengan apa yang dikirim , jika ada id maka di tambah Id
  // Then(e) adalah pengembalian dari server yang di dapat dari / res.json()

  // let body = JSON.parse(window.localStorage.getItem("user"));
  // console.log(body);
  // axios
  //   .get("http://localhost:5000/api/v1/profile/" + body.Id)
  //   .then((e) => {
  //     console.log(JSON.stringify(e.data, null, 4), "Data Berhasil di ambil");
  //   });

  return user == null ? (
    <div>data kosong</div>
  ) : (
    <div className="container d-flex justify-content-end">
      <div className="col-sm-12 col-md-6 col-lg-4 card mt-4 p-2">
        <h3>Profile</h3>
        <button
          className="btn btn-danger"
          onClick={() => {
            nav("/");
            // console.log("logout");
            localStorage.removeItem("user");
            // console.log(localStorage.getItem("user"));
          }}
        >
          LOGOUT
        </button>

        {/* Jika bentuknya Map atau body cukup di panggil aja */}
        {/* {JSON.stringify(dataProfile.val.profile + antiNull(dataProfile.val))} */}

        
          <Formulir title={"Nama Depan"} placeholder={antiNull(dataProfile.val)}/>
          <Formulir title={"Nim"} placeholder={antiNull(dataProfile)}/>
          <label>NIM</label>
          <input
            className="form-control"
            placeholder={antiNull(dataProfile.val)}
          ></input>
        

        {/* <div>
          <NewForm title={["nama","nim"]}/>
        </div> */}
       

        <div className="row m-auto">
          <div
            className="col"
            onClick={() => {
              MyRouter.UpdateProfile().Go();
            }}
          >
            <Tombol title={"Edit"} warna={"success"} />
          </div>
          <div className="col">
            <Tombol title={"Simpan"} warna={"primary"} />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <Formulir title={"email"} placeholder={"masukkan email"} onChange={(e) => console.log(e.target.value)}/>
<Formulir title={"password"} placeholder={"masukkan password"} onChange={(e) => console.log(e.target.value)}/> */
}
{
  /* <button onClick={() => console.log(hasil)}>LIHAT</button> */
}

export { TampilanProfile };
