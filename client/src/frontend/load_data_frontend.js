import axios from "axios";
import { dataProfile } from "../store";

function ProfileData(){
    axios.get("http://localhost:5000/api/v1/profile").then((a) =>{
        dataProfile.val = a.data
    })
}

export {
    ProfileData
}