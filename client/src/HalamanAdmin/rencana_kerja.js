import { Component } from "react";
import { Tombol } from "../lib/button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { FileUpload } from "./upload_file";
import { ImageUpload } from "./upload_image";
import {
  listRenja,
  listStatus,
  orang,
  renjaAcc,
  renjaOn,
  store,
} from "../store";
import {
  ambilDataRenja,
  loadKabeh,
  statusRenja,
  statusRenjaAcc,
  statusRenjaOn,
} from "./load_data";

//Ambil data dari load data

var User = [
  {
    Id: 3,
    title: "semnas",
    tanggal: "2020-11-01T00:00:00.000Z",
    keterangan: "user3",
    createAt: "2022-06-11T14:23:05.581Z",
    updateAt: "2022-06-13T15:49:26.964Z",
    status: "user3",
    userId: 3,
    files: [
      {
        Id: 1,
        file: "Seminar",
        createAt: "2022-06-13T15:34:24.768Z",
        rencanakerjaId: 3,
        jenisFileId: 1,
        gallery: [
          {
            Id: 1,
            gambar: "dgdgdghfh",
            filesId: 1,
          },
        ],
        jenisFile: {
          Id: 1,
          jenisFile: "LPJ",
          filesId: 1,
        },
      },
    ],
  },
];

function antiNull(data) {
  try {
    return data.gallery[0].gambar;
  } catch (error) {
    return "kosong.jpg";
  }
}

let berapa = 0;

function Wadah({ component }) {
  // orang.init();

  return (
    <div style={{ marginLeft: 300 }}>
      <h1>kjbhckmslackjsavbhkml {orang.val}</h1>
      <button
        onClick={() => {
          berapa++;
          orang.val = berapa;
        }}
      >
        tekan disini aja{" "}
      </button>
    </div>
  );
}

class RenjaByUser extends Component {
  constructor(props) {
    try {
      let adaUser = window.localStorage.getItem("user");
      let iniUser = JSON.parse(adaUser).Id;

      super(props);

      this.AmbilData();
      /**@type {User} */
      let Renja = [];
      this.state = {
        Renja: Renja,
      };

      this.updateRenja = this.updateRenja.bind(this);
    } catch (error) {}
  }

  render() {
    return <IsiRenja state={this.state} />;
  }
}

function IsiRenja() {
  let nav = useNavigate();

  renjaOn.init();
  listStatus.init();

  if (renjaOn.val.length < 1) {
    statusRenjaOn();
    console.log(JSON.stringify(renjaOn.val, null, 2));
  }

  if (listStatus.val.length < 1) {
    statusRenja();
    console.log(JSON.stringify(listStatus.val, null, 2));
  }

  // if (listRenja.val.length < 1) {
  //   listRenja();
  // }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Rencana Kerja </h1>
        {/* {JSON.stringify(listStatus.val)} */}
        {/* {JSON.stringify(renjaAcc.val)} */}

        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            {/* <img src="http://localhost:5000/images/b09e-7b6f9468c305IMG_20200507_180659.jpg"></img> */}
          </div>
        </div>
      </div>
      <div>
        {/* <TambahRenja /> */}
        <Tombol
          title={"Tambah"}
          warna={"primary"}
          onClick={() => {
            nav("/halaman-admin/halaman-tambah-renja");
          }}
        />

        <table className="table table-striped " style={{ width: "3000" }}>
          <thead className="text-center">
            <tr>
              <th>Judul</th>
              <th>Tanggal</th>
              <th>Keterangan</th>
              <th>Gambar</th>
              <th>Status</th>
              <th>Aksi</th> 
            </tr>
          </thead>
          <tbody>
            {renjaOn.val.map((a) => {
              // console.log(a)
              return (
                <tr key={Math.random()}>
                  <td>{a.title}</td>
                  <td>{new Date(a.tanggal).toDateString()}</td>
                  <td>{a.keterangan}</td>
                  <td>
                    <img
                      style={{ height: 100 }}
                      src={"http://localhost:5000/images/" + antiNull(a)}
                    />
                  </td>

                  <td>
                    <select
                      onChange={(e) => {
                        axios
                          .post(
                            "http://localhost:5000/api/v1/rencanakerja/updatestatus",
                            { name: e.target.value, rencanakerjaId: a.Id }
                          )
                          .then(statusRenjaOn);
                        console.log(e.target.value);
                      }}
                    >
                      {listStatus.val.map((s) => {
                        return <option key={Math.random()}>{s.name}</option>;
                      })}
                    </select>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col-sm">
                        <Tombol title={"Edit"} warna={"success"} />
                      </div>
                      <div className="col">
                        <Tombol
                          title={"Hapus"}
                          warna={"danger"}
                          onClick={() => {
                            axios
                              .delete(
                                "http://localhost:5000/api/v1/rencanakerja/delete" +
                                  a.rencanakerja.Id
                              )
                              .then((a) => {
                                console.log(a);
                              });
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                //   <td>
                // <select
                //   onChange={(e) => {
                //     axios
                // .post(
                //   "http://localhost:5000/api/v1/rencanakerja/updatestatus",
                //   { name: e.target.value, rencanakerjaId: a.Id }
                // )
                //       .then(statusRenjaOn);

                //     console.log(e.target.value);
                //   }}
                // >
                //   {listStatus.val.map((s) => {
                //     return <option key={s.id}>{s.name}</option>;
                //   })}
                // </select>
                //   </td>
                // <td>
                //   <div className="row">
                //     <div className="col-sm">
                //       <Tombol title={"Edit"} warna={"success"} />
                //     </div>
                //     <div className="col">
                //       <Tombol
                //         title={"Hapus"}
                //         warna={"danger"}
                //         onClick={() => {
                //           axios
                //             .delete(
                //               "http://localhost:5000/api/v1/rencanakerja/delete" +
                //                 a.rencanakerja.Id
                //             )
                //             .then((a) => {
                //               console.log(a);
                //             });
                //         }}
                //       />
                //     </div>
                //   </div>
                // </td>
                // </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

///// GAK DI PAKEK Woooiiiiii
const Isi = {
  title: "",
  tanggal: "",
  keterangan: "",
  status: "",
  file: "",
  gambar: "",

  userId: "",
};

function TambahRenja() {
  // getItem ganya untuk ambil data user saja
  let adaData = window.localStorage.getItem("user");
  let iniData = JSON.parse(adaData);

  return (
    <div>
      <details>
        <summary className="btn btn-primary">Tambah</summary>
        <div>
          <div>
            <label className="form-lebel">Judul</label>
            <input
              type={"text"}
              className="form-control"
              id="title"
              onChange={(e) => {
                Isi["title"] = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label className="form-lebel">Tanggal</label>
            <input
              type={"date"}
              className="form-control"
              id="tanggal"
              onChange={(e) => {
                Isi["tanggal"] = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label className="form-lebel">Keterangan</label>
            <input
              type={"text"}
              className="form-control"
              id="keterangan"
              onChange={(e) => {
                Isi["keterangan"] = e.target.value;
              }}
            ></input>
          </div>
          <hr />
          <FileUpload
            hasil={(e) => {
              Isi["file"] = e;
            }}
          />
          <hr />
          <ImageUpload
            hasilgambar={(e) => {
              Isi["gambar"] = e;
            }}
          />

          <Tombol
            title={"Simpan"}
            warna={"info"}
            onClick={() => {
              Isi.userId = iniData["userId"];
              console.log(Isi);

              axios
                .post("http://localhost:5000/api/v1/rencanakerja", Isi)
                .then((e) => {
                  console.log(JSON.stringify(e.data, null, 2));
                });
            }}
          />
        </div>
      </details>
    </div>
  );
}

{
  /* <td>
                    <select
                    onChange={(c) =>{
                      newStatus["MyStatus"] = c.target.value
                      console.log(newStatus)

                    }}            
  
                    >
                      {/* {listRenja.val.map((e) => {
                        return console.log(e);
                      })} */
}
{
  /* </select>
                    <hr /> */
}
{
  /* <Tombol
                      title={"Ganti"}
                      warna={"success"}
                      onClick={() => {
                        console.log(newStatus.MyStatus);

                        axios
                          .post("/status-renja/update", newStatus)
                          .then((e) => {
                            console.log(e);
                          });
                      }}
                    /> */
}
{
  /* </td> */
}
{
  /* <MyForm
            items={["title", "tanggal", "keterangan"]}
            ketikaBerubah={() => {
              axios.post('http://localhost:5000/api/v1/rencanakerja', Isi).then((r) =>{
                console.log(r)
              })
            }}
          /> */
}

function RencanaKerja() {
  return <RenjaByUser />;
}

export { RencanaKerja };
