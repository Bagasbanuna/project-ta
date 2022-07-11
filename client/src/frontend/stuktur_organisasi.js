// import { GetStatusOrganisasi } from "../../../server/controllers/for_struktur_organisasi";
import { ambilDataStuktur, dataProfile } from "../store";
import { Berita } from "./berita";
import { GetDataStuktur, ProfileData } from "./load_data_frontend";

// function AlbumSO() {

//     dataProfile.init()
//     console.log(dataProfile.val)
//     // if(dataProfile.val.length < 1){
//     //     ProfileData()
//     //     console.log(dataProfile.val)
//     // }

//     return (

//     )
// }


// a adalah kiriman dari gambar yang sudah di pecah dari bawah
function antiNull(a) {
  // console.log("ini dmna")
  try {

    //  console.log(a.FotoProfile, "liat ini dsonon")
    return a.FotoProfile[0].gambarProfile;
  } catch (error) {
    return "kosong.jpg";
  }
}
// console.log(antiNull(data))

function StrukturOrganisasi() {
  ambilDataStuktur.init();
  if (ambilDataStuktur.val.length < 1) {
    GetDataStuktur();
  }

  // console.log(JSON.stringify(GetDataStuktur), null, 3);

  return (
    <div id="struktur_os">
      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Struktur Organisasi
          </h3>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {ambilDataStuktur.val.map((a) => {
              // console.log(ambilDataStuktur.val);
              return (
                <div key={Math.random()} className="container">
                  {/* <p className="">{JSON.stringify(a, null, 6)}</p> */}
                  <div className="col">
                    {/* <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg> */}

                    <img
                      style={{ height: 200}}
                      src={
                        "http://localhost:5000/images/" +
                        antiNull(a)
                      }
                    />

                    {/* {console.log(ambilDataStuktur.val)} */}
                    {/* KSONG */}
                    <div className="card-body text-center">
                      <p className="card-text">{a.namaDepan}</p>
                      <p className="card-text">
                        Jabatan : {a.jabatan.namaJabatan}
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BERITA */}
        <Berita />
      </div>
    </div>
  );
}

export { StrukturOrganisasi };
