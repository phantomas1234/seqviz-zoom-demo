import "./App.css";
import React from "react";
import { SeqViz } from "seqviz";

function App() {
  const [file, setFile] = React.useState("");

  React.useEffect(() => {
    fetch("/sequence.gb")
      .then((r) => r.text())
      .then((text) => {
        console.log("text decoded:", text);
        setFile(text);
      });
  });

  return (
    <div className="App">
      <div className="container w-max h-max">
        <SeqViz file={file} style={{ height: "100vh", width: "100vw" }} />
      </div>
    </div>
  );
}

export default App;
