import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Tombol } from "../lib/button";
import { MyRouter } from "../my_router";

// axios.get('http://localhost:5000/api/v1/user').then(e => console.log(e.data))

async function masuk(body, nav) {
  if (Object.values(body).includes("")) {
    Swal.fire({
      title: "Warning!",
      text: "isi semua dengan lengkap",
      timer: 2000,
    });
    return;
  }

  let res = await axios.post("http://localhost:5000/api/v1/login", body);

  if (res.status == 200) {
    Swal.fire({
      title: "Success!",
      text: res.data.message,
      timer: 2000,
    });

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(res.data.data));
      nav("/tampilan-profile");
    }, 1000);
  } else if (res.status == 204) {
    Swal.fire({
      title: "Warning!",
      text: "username atau password salah",
      timer: 2000,
    });
  }
}

const body = {
  username: "",
  password: "",
};

function Login() {
  return (
    <div className="container">
      <div className="row">
        <FormLogin />
      </div>
    </div>
  );
}

function FormLogin() {
  MyRouter.Init(useNavigate);
  let nav = useNavigate();
  let user = localStorage.getItem("user");


  if (window.localStorage.getItem("AdaDivisi") == "true") {
    console.log("Ada divisi");
  } else {
    console.log("Belum ada divisi");
  }

  return (
    <div className="d-flex justify-content-center mt-5 p-5">
      <div className="col-sm-12 col-md-6 col-lg-4 card p-4 m-2">
        <div className="d-flex justify-content-center ">
          <h4 className="">FORM LOGIN</h4>
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            onChange={(e) => {
              body["username"] = e.target.value;
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => {
              body["password"] = e.target.value;
            }}
          ></input>
        </div>
        <a
          className=" "
          onClick={() => {
            MyRouter.Regis().Go();
          }}
        >
          Belum punya akun? Yuk daftar
        </a>
        <br />

        <Tombol
          title={"LOGIN"}
          warna={"primary"}
          onClick={() =>
            axios.post("http://localhost:5000/api/v1/login", body).then((e) => {
              let apa = e.status == 201;
              if (apa) {
                try {
                  let AdaDivisi =
                    e["data"]["data"] && e["data"]["data"]["profile"] && e["data"]["data"]["profile"]["divisi"];
                    
                  Swal.fire("Login Berhasil");
                  console.log(AdaDivisi);
                  if (AdaDivisi) {
                    window.localStorage.setItem(
                      "user",
                      JSON.stringify(e.data.data)
                    );
                    window.localStorage.setItem("AdaDivisi", `${AdaDivisi}`);
                    nav("/halaman-admin/halaman-dashboard");
                  } else {
                    window.localStorage.setItem(
                      "user",
                      JSON.stringify(e.data.data)
                    );
                    nav("/");
                  }
                } catch (error) {
                  console.log(error)
                  console.log("Tidak Ada Divisi");
                  Swal.fire("codingan error");
                }
              } else {
                Swal.fire("Login Gagal ,email atau password salah");
              }
            })
          }
        />
      </div>
    </div>
  );
}

export { Login };
