import { Pengumuman } from "./pengumuman"
import { StrukturOrganisasi } from "./stuktur_organisasi"

function PengertianImmuki() {
  return (
    <div id="home">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">IMMUKI</h1>
          <p className="lead my-6">
            IMMUKI atau Ikatan Mahasiswa Muslim INSTIKI adalah sebuah organisasi yang bergerak dalam bidang agama
            sebagai wadah menuntun ilmu dan pelajaran mengenai agama islam yang memiliki visi dan misi sebagai berikut :
          </p>
          <ul>
            <p className="lead mb-0">VISI:</p>
            <li> Menjadikan Ikatan Mahasiswa Muslim INSTIKI  sebagai penyambung seilhturahmi Mahasiswa/i Muslim INSTIKI dan selalu menjaga tolerans kepercayaan atau agama lain.</li>
          </ul>
          <ul>
            <p className="lead mb-0">MISI</p>
            <li>1. Membangun solidaritas Internal FPK-IMMUKI.</li>
            <li>2. Meningkatkan profesionalitas kerja lembaga.</li>
            <li>3. Meningkatkan fungsi bembinaan, pelayanan, dan Syiar Islam.</li>
            <li>4. Memperkuat dan mengembangkan jaringan dakwah.</li>
          </ul>


        </div>
      </div>
    </div>
  )
}

const listPe = [
  {
    id: "1",
    title: "Kajian",
    tanggal: "2020-01-02",
    keterangan: "Kajian ahad pagi yang berada di ruang 205",
    status: "status 1",
    gambar: ""
    // require('../gambar/gambar1.jpeg')


  },
  {
    id: "2",
    title: "Kajian Akhwat",
    tanggal: "2020-01-02",
    keterangan: "Kajian Muslimah",
    status: "status 2",
    gambar: ""

  },
  
]


function Main() {
  return (
    <div>
      <main className="container">
        <PengertianImmuki />
        <Pengumuman datanya={listPe} />
        <StrukturOrganisasi />
      </main>

    </div>
  )
}
export { Main }