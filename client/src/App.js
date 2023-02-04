import "./App.css";
import React from "react";
import FileUpload from "./components/file-upload-component";

function App() {
  return (
    <div className="App">
      <div className="title">
        <p>Hello Scanta</p>
        <p>Please upload the text file to process</p>
      </div>
      <FileUpload />
    </div>
  );
}

export default App;
