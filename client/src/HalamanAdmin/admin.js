import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { listRenja } from "../store";
import { ambilDataRenja } from "./load_data";
import { MainAdmin } from "./main_admin";
import { Sidebar } from "./sidebar";


function HalamanAdmin() {
  ambilDataRenja();
  let nav = useNavigate();
  listRenja.init()
 
  return (
    <div className="">
      <header className="navbar navbar-dark bg-dark flex-md-nowrap p-0 mb-0 shadow ">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          IMMUKI{" "}
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        /> */}
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => {
                nav("/");
                console.log("logout");
                localStorage.removeItem("user");
                console.log(localStorage.getItem("user"));
                Swal.fire("Logout Berhasil");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="">
        <Sidebar />
        <div style={{ overflow: "auto", width: "100%", height: "550px" }}>
          <Outlet />
        </div>
      </div>

      <script
        src="/docs/5.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"
        integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"
        integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha"
        crossOrigin="anonymous"
      ></script>
      <script src="dashboard.js"></script>
    </div>
  );
}


export { HalamanAdmin };
