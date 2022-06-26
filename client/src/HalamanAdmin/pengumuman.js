import { kesana, listRenja, muncul } from "../store";

function IniDimana() {
  muncul.init();
  kesana.init();
  return (
    <div
      className="p6 bg-primary position-absolute"
      style={{ right: kesana.val ?? 100 }}
    >
      <h1>Menu</h1>
    </div>
  );
}

function antiNull(data) {
  try {
    return data.gallery[0].gambar;
  } catch (error) {
    return "kosong.jpg";
  }
}

function Pengumuman() {
  listRenja.init();
  muncul.init();
  kesana.init();
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Pengumuman </h1>
        {/* {JSON.stringify(listRenja.val, null, 2)} */}
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2"></div>
        </div>
      </div>
      {/* <IniDimana/>
      <button onClick={() => {
          kesana.val -= 10
      }}> muncul </button> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Tanggal Kegiatan</th>
            <th>Keterangan</th>
            <th>Foto</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {listRenja.val.map((a) => {
            return (
              <tr key={a.Id}>
                <td>{a.title}</td>
                <td>{new Date(a.tanggal).toDateString()}</td>
                <td>{a.keterangan}</td>
                <td>
                  <img
                    style={{ height: 50 }}
                    src={"http://localhost:5000/images/" + antiNull(a)}
                  />
                </td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export { Pengumuman };
