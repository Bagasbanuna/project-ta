import axios from "axios";
import { Component } from "react";

class ImageUpload extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      namaImage: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type={"file"}
          name={"myImage"}
          accept={("image/png" , "image/jpg")}
          onChange={(e) => {
            let files = e.target.files;
            let formData = new FormData();
            formData.append("file", files[0]);
            axios
              .post("http://localhost:5000/api/v1/upload", formData)
              .then((e) => {
                this.setState({
                  namaImage: e.data["data"][0]["name"],
                });

                this.props.hasilgambar(e.data["data"][0]["name"]);
              });
          }}
        ></input>
        <div className="p3">{this.state.namaImage}</div>
      </div>
    );
  }
}

export { ImageUpload };
