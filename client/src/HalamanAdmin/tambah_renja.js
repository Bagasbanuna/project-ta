import axios from "axios";
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Tombol } from "../lib/button";
import { MyForm } from "../lib/form";
import { FileUpload } from "./upload_file";
import { ImageUpload } from "./upload_image";


class Tmbh extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <TambahRenja />
        )
    }
}


const Isi = {
  title: "",
  tanggal: "",
  keterangan: "",
  gambar: ""
};

function TambahRenja() {
  let nav = useNavigate();
  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Tambah Rencana Kerja</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2"></div>
          </div>
        </div>
        <div className="">
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
          <label>Upload Gambar</label>
          
          <ImageUpload
          hasilgambar = {(g) => {
              Isi["gambar"] = g
              console.log(Isi)
          }}
          />

          <hr/>
          <Tombol
            title={"Simpan"}
            warna={"primary"}
            onClick={() => {
              console.log(Isi);
              axios
                .post("http://localhost:5000/api/v1/rencanakerja", Isi)
                .then((e) => {
                  console.log(e);
                });
              nav("/halaman-admin/halaman-rencana-kerja");
            }}
          />
        </div>
      </main>
    </div>
  );
}
export { TambahRenja };
