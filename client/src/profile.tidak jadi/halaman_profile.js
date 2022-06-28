import axios from "axios"
import { user } from "../store"



function HalamanProfile() {
    console.log("halaman profile") 

    return (
        <div className="container">
           <button onClick={() => {
               localStorage.removeItem('up');
               localStorage.removeItem('user');
               window.location.href = "/"
           }}>logout</button>
            <div className="row">
                <form className="col-4 card p-4 m-2">
                    <div>
                        <h4 className="">Halaman Profile</h4>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">NIM</label>
                        <input type="nim" className="form-control" id="nim"  ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nama</label>
                        <input type="nama" className="form-control" id="nama"></input>
                    </div>

                    <button type="submit" className="btn btn-primary">Simpan</button>
                </form>

            </div>
        </div>
    )

}

export { HalamanProfile }