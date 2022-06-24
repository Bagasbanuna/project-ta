// import Popup from "reactjs-popup";

import Swal from "sweetalert2";
import { MyForm } from "./form";
import ReactDOMServer from "react-dom/server";
import { Tombol } from "./button";
import { data } from "jquery";

function MyModal() {
  let hasil = {};

  return Swal.fire({
    html: ReactDOMServer.renderToString(
      <button onClick={(e) => {
        console.log(e)
      }}>Tekan </button>
    ),
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Simpan",
    // JSON.parse(<Tombol title={'Simpan'} warna={'primary'} onClick={()=>{
    //   let Tambah = Object.assign()
    // }}/>),
    denyButtonText: `Jangan Simpan`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

export { MyModal };
