import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProfileData } from "../frontend/load_data_frontend";
import { Tombol } from "../lib/button";
import { Formulir, MyForm } from "../lib/form";
import { dataProfile } from "../store";

const body = {
  dataUser: {
    username: "",
    email: " ",
  },
  dataProfile: {
    nim: "",
    namaDepan: "",
    namaBelakang: "",
    alamat: "",
    nomorHp: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    tahunAngkatan: "",
    jurusan: "",
  },
  userId: "",
};

// const body2 = [body];

function UpdateProfile() {
  let user = JSON.parse(window.localStorage.getItem("user"));
  //   console.log(user)
  let nav = useNavigate()

  dataProfile.init();
  if (dataProfile.val.length < 1) {
    ProfileData();
  }

  return user == null ? (
    <div>Data Belum Ada </div>
  ) : (
    <div className="container d-flex justify-content-end">
      <div className="col-sm-12 col-md-6 col-lg-4 card mt-4 p-2">
        <h3>Update Profile</h3>
        <div className="row m-auto">
          <div className="col">
            <Tombol
              title={"Simpan"}
              warna={"primary"}
              onClick={(a) => {
                // cara bacanya :
                // Body kosong yang dideklarasikan diatas , ada userId yang kosong
                // Cara isinya user.Id
                // user diambil dari localStorage
                // Id nya adalah isi dari user
                // Coba di console satu- satu
                body.userId = user.Id;
                console.log(body);
                axios
                  .post("http://localhost:5000/api/v1/profile/update", body)
                  .then((a) => {
                    if(a.status == 200){
                      ProfileData()
                      nav("/profile")
                    }else{
                      console.log(a.data)
                    }
                  })
              }}
            />
          </div>
        </div>

        <div>
          {/* Array */}
          {/* {body2[0].dataProfile.nim } */}

          {/* Body/Map */}
          {/* {body.dataProfile.nim} */}

          <Formulir
            title={"Username"}
            placeholder={dataProfile.val.username}
            onChange={(s) => {
              body.dataUser.username = s.target.value;
              //   console.log(s.target.value);
            
            }}
          />
          <Formulir
            title={"Email"}
            placeholder={dataProfile.val.email}
            onChange={(s) => {
              body.dataUser.email = s.target.value;
              //   console.log(s.target.value);
            }}
          />

          {/* Profile */}
          <Formulir
            title={"NIM"}
            placeholder={antiNim(dataProfile.val)}
            onChange={(s) => {
              body.dataProfile.nim = s.target.value;
              //   console.log(s.target.value);
            }}
          />
          <Formulir
            title={"Nama Depan"}
            placeholder={antiNamaD(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.namaDepan = s.target.value
            }}
          />
          <Formulir
            title={"Nama Belakang"}
            placeholder={antiNamaB(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.namaBelakang = s.target.value
            }}
          />
          <Formulir
            title={"Tempat Lahir"}
            placeholder={antiLahir(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.tempatLahir = s.target.value
            }}
          />
          <Formulir
            title={"Tanggal Lahir"}
            placeholder={antiTanggal(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.tanggalLahir = s.target.value
            }}
            
          />
          <Formulir
            title={"Nomor HandPhone"}
            placeholder={antiNomor(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.nomorHp = s.target.value
            }}
          />
          <Formulir
            title={"Alamat"}
            placeholder={antiAlamat(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.alamat = s.target.value
            }}
          />
          <Formulir
            title={"Jenis Kelamin"}
            placeholder={antiJenisK(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.jenisKelamin = s.target.value
            }}
          />
          <Formulir
            title={"Tahun Angkatan"}
            placeholder={antiAngkatan(dataProfile.val)}
            onChange={(s) =>{
              body.dataProfile.tahunAngkatan = s.target.value
            }}
          />
          <Formulir
            title={"Jurusan"}
            placeholder={antiJurusan(dataProfile.val)}
            // onChange={(s) =>{
            //   body.dataProfile.jurusan = s.target.value
            // }}
          />
          <hr />
          <div className="d-flex justify-content-center">
            {/* <p>Foto Profile</p> */}

            <img
              className="rounded-circle"
              style={{ width: 100, height: 100 }}
              src={"http://localhost:5000/images/" + antiFotoP(dataProfile.val)}
            />
          </div>
          <div>
            <label className="p-2">Foto KTP : </label>
            <img
              className="border border-primary"
              style={{ width: "100%", height: 150 }}
              src={"http://localhost:5000/images/" + antiKtp(dataProfile.val)}
            />
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
}

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
    return data.profile.FotoKtp[0];
  } catch (error) {
    return "kosong.jpg";
  }
}
function antiFotoP(data) {
  try {
    return data.profile.FotoProfile[0];
  } catch (error) {
    return "kosong.jpg";
  }
}

export { UpdateProfile };
