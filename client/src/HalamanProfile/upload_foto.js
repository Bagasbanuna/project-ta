import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProfileData } from "../frontend/load_data_frontend";
import { ImageUpload } from "../HalamanAdmin/upload_image";
import { Tombol } from "../lib/button";
import { dataProfile } from "../store";

const body = {
  gambarProfile: "",
  gambarKtp: "",
//   userId: "",
  profileId: ""
};

function UploadFoto() {
    let user = JSON.parse(window.localStorage.getItem("user"))
    // console.log(user)
  let nav = useNavigate();

  dataProfile.init()
  if(dataProfile.val.length < 1){
      ProfileData()
  }
  console.log(dataProfile.val.profile)

  return (
    <div className="d-flex justify-content-center mt-5 p-5">
      <div className="col-sm-12 col-md-6 col-lg-4 card p-4 m-2">
        <div className="d-flex justify-content-center ">
          <h4 className="">Tambah Foto</h4>
          {/* <h5>Profile danKTP</h5> */}
        </div>
        <div>
          <label>Tambah Foto Profile</label>
          <ImageUpload
            hasilgambar={(a) => {
              body.gambarProfile = a;
              console.log(body, "Foto Profile");
            }}
          />
          <br />

          {/* <label>Upload Foto KTP</label>
          <ImageUpload
            hasilgambar={(a) => {
              body.gambarKtp = a
              console.log(body, "Foto KTP");
            }}
          /> */}
        </div>
        <br />

        <Tombol
          title={"Simpan"}
          warna={"primary"}
          onClick={() => {

            body.profileId = dataProfile.val.profile.Id
            // console.log(body)

              axios.post("http://localhost:5000/api/v1/profile/uploadfoto", body).
              then((a) =>{
                  console.log(body)
                  ProfileData()
                  nav("/profile");
              })
          }}
        />
      </div>
    </div>
  );
}

export { UploadFoto };
