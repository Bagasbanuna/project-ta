import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Tombol } from "../lib/button";
import { MyRouter } from "../my_router";
import { Login } from "./login";

// axios.get('http://localhost:5000/api/v1/user').then(e=>console.log(e.data))
// axios.post('http://localhost:5000/api/v1/registrasi').then(e=>console.log(e.data))

async function kirim(body) {
  if (Object.values(body).includes("")) {
    Swal.fire("Isi semua dulu ya");
    return;
  }

  // untuk atur lokasi button
  window.location.href = "/login";

  // let data= await axios.post('http://localhost:5000/api/v1/registrasi', body)
  // console.log(data.data)
}

function HalamanRegis() {
  console.log("halaman regis");
  MyRouter.Init(useNavigate);

  let body = {
    email: "",
    username: "",
    password: "",
  };

  return (
    <div className="d-flex justify-content-center mt-5 p-5">
      <div className="col-sm-12 col-md-6 col-lg-4 card p-4 m-2">
        <div className="d-flex justify-content-center ">
          <h4 className="">Halaman Regis</h4>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => (body.email = e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            onChange={(e) => (body.username = e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => (body.password = e.target.value)}
          ></input>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            kirim(body);
            console.log(body)

            axios.post("http://localhost:5000/api/v1/registrasi", body).then((e) => {
              console.log(e.data)
            })
            
          }}
        >
          Daftar
        </button>
        <br />
        <a
          className="d-flex justify-content-center "
          onClick={() => {
            MyRouter.Login().Go();
          }}
        >
          Saya lupa sudah punya Akun :D
        </a>
      </div>
    </div>
  );
}

export { HalamanRegis };
