import axios from "axios";
import { Tombol } from "../lib/button";
import { listStatus, renjaDone } from "../store";
import { statusRenja, statusRenjaDone } from "./load_data";

function antiNull(data) {
  try {
    
    return data.gallery[0].gambar;
  } catch (error) {
    return "kosong.jpg";
  }
}

function Berita() {
  renjaDone.init();
  listStatus.init();

  if (renjaDone.val.length < 1) {
    statusRenjaDone();
  }
  if (listStatus.val.length < 1) {
    statusRenja();
  }
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2"> Berita </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2"></div>
        </div>
      </div>
      <table className="table table-striped">
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
          {renjaDone.val.map((a) => {
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
                        .then(statusRenjaDone);
                      console.log(e.target.value);
                    }}
                  >
                    {listStatus.val.map((a) => {
                      return <option key={Math.random()}>{a.name}</option>;
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
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
export { Berita };
