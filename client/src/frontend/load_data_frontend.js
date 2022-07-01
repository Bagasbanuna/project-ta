import axios from "axios";
import { dataProfile } from "../store";

async function ProfileData(){
    const data = await axios.get("http://localhost:5000/api/v1/profile")
    dataProfile.val = data.data
    console.log(dataProfile)
}

export {
    ProfileData
}