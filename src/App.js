import "./App.css";
import React from "react";
import { SeqViz } from "@phantomas1234/seqviz";

function App() {
  const [file, setFile] = React.useState("");
  const [zoom, setZoom] = React.useState(50);

  React.useEffect(() => {
    fetch("/sequence.gb")
      .then((r) => r.text())
      .then((text) => {
        console.log("text decoded:", text);
        setFile(text);
      });
  }, []);

  return (
    <div className="App">
      <div className="container w-max h-max">
        <div className="bg-slate-50">
          <form>
            <input
              type="text"
              onChange={(e) => {
                setZoom(parseInt(e.target.value));
              }}
            ></input>
          </form>
        </div>
        <SeqViz
          file={file}
          style={{ height: "100vh", width: "100vw" }}
          zoom={{ linear: zoom, circular: 50 }}
        />
      </div>
    </div>
  );
}

export default App;
