import { HalamanRegis } from "./login/halaman_registrasi";
import { Login } from "./login/login";
import { Route } from "react-router-dom";
import { App } from "./app";
import { Pengumuman } from "./frontend/pengumuman";
import { TampilanProfile } from "./HalamanProfile/profile";
import { UpdateProfile } from "./HalamanProfile/update_profile";
import { HalamanAdmin } from "./HalamanAdmin/admin";
import { Dashboard } from "./HalamanAdmin/dashboard";
import { UploadFoto } from "./HalamanProfile/upload_foto";
import { UpdateFoto } from "./HalamanProfile/update_fotoprofile";

/**
 * **jangan lupa panggil init nya**
 * ![malik](https://avatars.githubusercontent.com/u/12760538?v=4)
 */
const MyRouter = {
  path: "",
  element: undefined,
  n: undefined,
  Init(n) {
    this.n = n();
    return this;
  },
  App() {
    this.path = "/";
    this.element = <App />;
    return this;
  },
  /**
   *
   * @returns Jangan lupa diisi INIT
   */
  Login() {
    this.path = "/login";
    this.element = <Login />;
    return this;
  },
  /**
   *
   * @returns ok
   */
  Regis() {
    this.path = "/regis";
    this.element = <HalamanRegis />;
    return this;
  },
  Pengumuman() {
    this.path = "/pengumuman";
    this.element = <Pengumuman />;
    return this;
  },
  Profile() {
    this.path = "/profile";
    this.element = <TampilanProfile />;
    return this;
  },
  UpdateProfile() {
    this.path = "/update-profile";
    this.element = <UpdateProfile />;
    return this;
  },
  UploadFoto() {
    this.path = "/tambahfoto";
    this.element = <UploadFoto />;
    return this;
  },
  UpdateUploadFoto() {
    this.path = "/updatefoto";
    this.element = <UpdateFoto/>;
    return this
  },

  // ADMIN
  HalamanAdmin() {
    this.path = "/halaman-admin/halaman-dashboard";
    this.element = <HalamanAdmin />;
    return this;
  },
  HalamanDashboard() {
    this.path = "/halaman-dashboard";
    this.element = <Dashboard />;
    return this;
  },

  // jangan lupa koma nya !!!!
  Go() {
    this.n(this.path);
  },
  Router() {
    return <Route path={this.path} element={this.element} />;
  },
};

export { MyRouter };
