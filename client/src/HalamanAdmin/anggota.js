import axios from "axios";
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Tombol } from "../lib/button";

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
        User: {
          Id: 1,
          username: "user1",
          email: "user1@gmail.com",
          password: "user1",
          createAt: "2022-05-10T15:24:30.177Z",
          updateAt: "2022-05-29T15:48:06.169Z",
        },
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
        files: [
          {
            Id: 1,
            file: "LPJ Semnas",
            createAt: "2022-05-12T07:46:53.652Z",
            rencanakerjaId: 1,
            jenisFileId: null,
            gallery: [
              {
                Id: 1,
                gambar: "rewofkmmfqeofo",
                filesId: 1,
              },
            ],
            jenisFile: null,
          },
        ],
      },
    ],
  },
];

function IsiAgt({ state }) {
  let nav = useNavigate();

  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Anggota</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">{/* Hayo isi apa */}</div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Depan</th>
              {/* <th>Nama Belakang</th> */}
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
            {state.Agt.map((a) => {
              return (
                <tr key={a.Id}>
                  <td>{antiNull(a, "nim")}</td>
                  <td>{antiNull(a, "namaDepan")}</td>
                  {/* <td>{antiNull(a,"namaBelakang")}</td> */}
                  <td>{antiNull(a, "alamat")}</td>
                  <td>{antiNull(a, "tempatLahir")}</td>
                  <td>{antiNull(a, "tanggalLahir")}</td>
                  {/* <td>{antiNull(a,"jenisKelamin")}</td>
                  <td>{antiNull(a,"nomorHp")}</td> */}
                  <td>{antiNull(a, "tahunAngkatan")}</td>
                  <td>{antiNull(a, "fotoKtp")}</td>
                  <td>{antiNull(a, "fotoProfile")}</td>
                  <td>
                    <Tombol
                      title={"Edit"}
                      warna={"success"}
                      onClick={() => {
                        state.updateAgt = a;
                        nav("/halaman-admin/halaman-update-anggota", {
                          state: a.profile,
                        });
                      }}
                    />

                    <Tombol title={"Hapus"} warna={"danger"} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

function antiNull(data, value) {
  try {
    return data.profile[value];
  } catch (error) {
    return "null";
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    /**@type {User} */
    let Agt = [];
    let updateAgt = {};
    this.state = { Agt: Agt, updateAgt };
    this.updateState = this.updateState.bind(this);

    axios.get("http://localhost:5000/api/v1/userInclude").then((a) => {
      console.log(a.data);
      this.updateState(a.data);
    });
  }
  updateState(b) {
    this.setState({
      Agt: b,
    });
  }

  render() {
    return this.state.Agt == null ? (
      <div>data kosong</div>
    ) : (
      <IsiAgt state={this.state} />
    );
  }
}

function Anggota() {
  return <App />;
}
export { Anggota };
