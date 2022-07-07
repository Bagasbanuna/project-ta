import axios from "axios";
import { data } from "jquery";
import { useNavigate } from "react-router-dom";
import { ProfileData } from "../frontend/load_data_frontend";
import { Tombol } from "../lib/button";
import { Formulir, MyForm, NewForm } from "../lib/form";
import { MyRouter } from "../my_router";
import { dataProfile } from "../store";

/// TAMPILAN ///
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
  // axios post ngirim data ke server dan + id nya
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
      <div className="col-sm-12 col-md-6 col-lg-4 card mt-2 mb-2 p-2">
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

        <div>
          <hr />
          {/* <div>
            <label>NIM :</label>
            <div>{antiNim(dataProfile.val)}</div>
          </div>
          <div>
            <label>Nama Depan:</label>
            <div>{antiNamaD(dataProfile.val)}</div>
          </div>
          <div>
            <label>Nama Belakang :</label>
            <div>{antiNamaB(dataProfile.val)}</div>
          </div> */}

          <div className="d-flex justify-content-center">
            
            <img
              className="rounded-circle"
              style={{ width: 100, height: 100 }}
              src={"http://localhost:5000/images/" + antiFotoP(dataProfile.val)}
            />
          </div>
          <Formulir title={"Username"} placeholder={dataProfile.val.username} />
          <Formulir title={"Email"} placeholder={dataProfile.val.email} />
          <Formulir title={"NIM"} placeholder={antiNim(dataProfile.val)} />
          <Formulir
            title={"Nama Depan"}
            placeholder={antiNamaD(dataProfile.val)}
          />
          <Formulir
            title={"Nama Belakang"}
            placeholder={antiNamaB(dataProfile.val)}
          />
          <Formulir
            title={"Tempat Lahir"}
            placeholder={antiLahir(dataProfile.val)}
          />
          <Formulir
            title={"Tanggal Lahir"}
            placeholder={antiTanggal(dataProfile.val)}
          />
          <Formulir
            title={"Nomor HandPhone"}
            placeholder={antiNomor(dataProfile.val)}
          />
          <Formulir
            title={"Alamat"}
            placeholder={antiAlamat(dataProfile.val)}
          />
          <Formulir
            title={"Jenis Kelamin"}
            placeholder={antiJenisK(dataProfile.val)}
          />
          <Formulir
            title={"Tahun Angkatan"}
            placeholder={antiAngkatan(dataProfile.val)}
          />
          <Formulir
            title={"Jurusan"}
            placeholder={antiJurusan(dataProfile.val)}
          />
          <hr />
          <div>
            <label className="p-2">Foto KTP : </label>
            <img
              className="border border-primary"
              style={{ width: "100%", height: 150 }}
              src={"http://localhost:5000/images/" + antiKtp(dataProfile.val)}
            />
            {/* {dataProfile.val.} */}
          </div>





          <hr />
        </div>
 
        {/* TOMBOL */}
        <div className="row m-auto">
          <div className="col">
            <Tombol title={"Edit"} warna={"success"}
             onClick={(a)=> {
               nav("/update-profile")
             }}
             />
          </div>
          <div className="col">
            <Tombol title={"Simpan"} warna={"primary"}
            onClick={(a)=>{
              nav("/")
            }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// try {
//   return data.profile.jurusan
// } catch (error) {
//   return "Data Kosong"
// }

function antiNim(data) {
  try {
    return data.profile.nim;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiNamaD(data) {
  try {
    return data.profile.namaDepan;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiNamaB(data) {
  try {
    return data.profile.namaBelakang;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiAlamat(data) {
  try {
    return data.profile.alamat;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiLahir(data) {
  try {
    return data.profile.tempatLahir;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiTanggal(data) {
  try {
    return data.profile.tanggalLahir;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiJenisK(data) {
  try {
    return data.profile.jenisKelamin;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiNomor(data) {
  try {
    return data.profile.nomorHp;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiAngkatan(data) {
  try {
    return data.profile.tahunAngkatan;
  } catch (error) {
    return "Data Kosong";
  }
}
function antiJurusan(data) {
  try {
    return data.profile.jurusan[0];
  } catch (error) {
    return "Data Kosong";
  }
}
function antiKtp(data) {
  try {
    console.log(data.profile.FotoKtp[0].gambarKtp)
    return data.profile.FotoKtp[0].gambarKtp;
  } catch (error) {
    return "kosong.jpg";
  }
}
function antiFotoP(data) {
  try {
    console.log(data.profile.FotoProfile[0].gambarProfile)
    return data.profile.FotoProfile[0].gambarProfile;
  } catch (error) {
    return "kosong.jpg";
  }
}

export { TampilanProfile };
