import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Tombol } from "../lib/button";
import { MyForm } from "../lib/form";

function UpdatePengurus({ route }) {
  let state = useLocation();
  let data = state.state;
  let perubahanData = {};
  let hasil = {};
  delete data.jabatan;
  delete data.divisi;
  delete data.jurusan;

  let nav = useNavigate();

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Update Pengurus</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            {/* {Object.keys(state.state).map(e => {
                            return (
                                <div key={Math.random()}>
                                    <li>{e}</li>
                                </div>
                            )
                        }) } */}
          </div>
        </div>
      </div>

      <MyForm
        values={data}
        ketikaBerubah={(e) => {
          hasil = e;
        }}
      />
      {/* assign =  */}
      <Tombol
        title={"Simpan"}
        warna={"primary"}
        onClick={() => {
          let hasilAkhir = Object.assign(data, hasil);
          axios
            .post("http://localhost:5000/api/v1/profile/update", hasilAkhir)
            .then((e) => {
              console.log(e.data);
              nav("/halaman-admin/halaman-pengurus");
            });
        }}
      />
    </main>
  );
}
export { UpdatePengurus };
