import axios from "axios";
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Tombol } from "../lib/button";

// YANG BISA DI MAP HANYA ARRAY

var User = [
  {
    Id: 1,
    username: "user1",
    email: "user1@gmail.com",
    password: "user1",
    createAt: "2022-05-10T15:24:30.177Z",
    updateAt: "2022-05-29T15:48:06.169Z",
    profile: {
      Id: 1,
      nim: 1,
      namaDepan: "namaDepan1",
      namaBelakang: "namaBelakang1",
      alamat: "alamat1",
      tempatLahir: "tempatLahir1",
      tanggalLahir: "tanggalLahir1",
      jenisKelamin: "jenisKelamin1",
      nomorHp: "nomorHp1",
      tahunAngkatan: 203,
      fotoKtp: "fotoKtp1",
      fotoProfile: "fotoProfile1",
      userId: 1,
      divisi: [
        {
          Id: 1,
          namaDivisi: "kaderisasi",
          profileId: 1,
        },
      ],
      jabatan: [
        {
          Id: 1,
          namaJabatan: "ketua",
          profileId: 1,
        },
      ],
      jurusan: [
        {
          Id: 1,
          namaJurusan: "ti-mdi",
          profileId: 1,
        },
      ],
    },
    kritiksaran: [
      {
        Id: 1,
        subjek: "Kamar mandi",
        komentar: "Jangan lupa bersihkan",
        userId: 1,
      },
    ],
    rencanakerja: [
      {
        Id: 1,
        title: "Kajian Subuh",
        tanggal: "2022-04-01T00:00:00.000Z",
        keterangan: "Kajian diadakan di masjid",
        createAt: "2022-05-11T09:00:01.665Z",
        updateAt: "2022-05-11T09:00:01.666Z",
        status: "Pending",
        userId: 1,
      },
    ],
  },
];

let modelUser = { profileData: User };

function cekPofile(data, key) {
  try {
    return data.profile[key];
  } catch (error) {
    return "nol";
  }
}

function cekNull(data) {
  try {
    return data.profile.jurusan["namaJurusan"];
  } catch (error) {
    return "*kosong";
  }
}

function cekDvs(data) {
  try {
    return data.profile.divisi["namaDivisi"];
  } catch (error) {
    return "*kosong";
  }
}

function cekJbtn(data) {
  try {
    return data.profile.jabatan["namaJabatan"];
  } catch (error) {
    return "*kosong";
  }
}

/**
 * @param {object} param
 * @param {modelUser} param.state
 */
function Wadah({ upd, state }) {
  let nav = useNavigate();
  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          style={{ overflow: "auto", width: "100%", height: "100%" }}
        >
          <h1 className="h2">Pengurus</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2"></div>
          </div>
        </div>
        <div>
          <table className="table table-striped " style={{ width: "3000" }}>
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama Depan</th>
                {/* <th>Nama Belakang</th> */}
                <th>Jurusan</th>
                <th>Jabatan</th>
                <th>Divisi</th>
                <th>Alamat</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                {/* <th>Jenis Kelamin</th>
                <th>Nomor HP</th> */}
                <th>Angkatan</th>
                <th>Foto</th>
                <th>Foto KTP</th>
                <th>Aksi</th> 
              </tr>
            </thead>
            <tbody>
              {state.profileData.map((e) => {
                return e.profile == null ? (
                  <tr key={e.Id} />
                ) : (
                  <tr key={e.Id}>
                    <td>{e.profile.nim}</td>
                    <td>{cekPofile(e, "namaDepan")}</td>
                    {/* <td>{cekPofile(e, "namaBelakang")}</td> */}
                    <td>{cekNull(e)}</td>
                    <td>{cekDvs(e)}</td>
                    <td>{cekJbtn(e)}</td>
                    <td>{cekPofile(e, "alamat")}</td>
                    <td>{cekPofile(e, "tempatLahir")}</td>
                    <td>{cekPofile(e, "tanggalLahir")}</td>
                    {/* <td>{cekPofile(e, "jenisKelamin")}</td>
                    <td>{cekPofile(e, "nomorHp")}</td> */}
                    <td>{cekPofile(e, "tahunAngkatan")}</td>
                    <td>{cekPofile(e, "fotoProfile")}</td>
                    <td>{cekPofile(e, "fotoKtp")}</td>
                    <td>
                      <div className="row">
                        <Tombol
                          title={"Edit"}
                          warna={"success"}
                          className={"btn btn-sm"}
                          onClick={() => {
                            state.updateData = e;
                            nav("/halaman-admin/halaman-update-pengurus", {
                              state: e.profile,
                            });
                          }}
                        ></Tombol>

                        <Tombol
                          title={"Hapus"}
                          warna={"danger"}
                          className={" btn btn-sm"}
                          onClick={() => {
                            axios
                              .delete(
                                "http://localhost:5000/api/v1/profile/delete/" +
                                  e.profile.Id
                              )
                              .then((e) => {
                                axios
                                  .get(
                                    "http://localhost:5000/api/v1/userInclude"
                                  )
                                  .then((e) => {
                                    upd.setState({
                                      profileData: e.data,
                                    });
                                  });
                              });
                            // console.log(e.profile.Id)
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

class App extends Component {
  ambilData() {
    axios.get("http://localhost:5000/api/v1/userInclude").then((e) => {
      // console.log(e.data)
      this.updateData(e.data);
    });
  }

  constructor(props) {
    // axios.get('http://localhost:5000/api/v1/jabatan').then(j=> this.updateState(j.data))

    super(props);
    this.ambilData();

    /**@type {User} */
    let profileData = [];
    let updateData = {};
    this.state = { profileData: profileData, updateData };

    // Binding = Masang data , ngecocokin data this keyword
    this.updateProfile = this.updateData.bind(this);
    // this.updateJabatan = this.updateJabatan.bind(this)
  }

  updateData(a) {
    // Changing state
    this.setState({
      profileData: a,
    });
  }

  render() {
    return (
      <div>
        <Wadah upd={this} state={this.state} />
      </div>
    );
  }
}

function Pengurus() {
  return <App />;
}
export { Pengurus };

var nama = "malik";

// Map / Objek memiliki uniqe key , ex : keluarga.pertama hasilnya "agus"
var keluarga = {
  pertama: "agus",
  kedua: "ita",
  ketiga: "dony",
};

var umur = 36;

var isiKamar1 = "kulkas";
// array = Dipanggil sesuai no index mulai dari 0
var isiKamar = ["kulkas", "lemari", "kipa"];

var sudahMandi = true;

var data = [
  {
    nama: "malik",
    umur: 36,
  },
  {
    nama: "bagas",
    kawin: false,
  },
];

var data = {
  nama: "malik",
  data: [
    {
      asal: "jawa",
      umur: 36,
    },
  ],
};

//Array jika dipanggil harus di looping
// Map atau Obyek langsung dipanggil key nya
