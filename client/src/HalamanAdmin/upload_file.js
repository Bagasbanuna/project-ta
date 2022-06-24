import axios from "axios";
import { Component } from "react";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaFile: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type={"file"}
          onChange={(e) => {
            let files = e.target.files;
            let formData = new FormData();
            formData.append("file", files[0]);
            axios
              .post("http://localhost:5000/api/v1/upload", formData)
              .then((e) => {
                this.setState({
                  namaFile: e.data["data"][0]["name"],
                });

                this.props.hasil(e.data["data"][0]["name"]);
              });
          }}
        />
        <div className="p3">{this.state.namaFile}</div>
      </div>
    );
  }
}

export { FileUpload };
