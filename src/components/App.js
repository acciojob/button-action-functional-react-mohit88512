import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [text,setext] = useState("false")


  function action(){
    setext("true")
  }

  return (
    <div id="main">
      <button id="click" onClick={action}>click</button>
      {{text} && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>}
    </div>
  );
}


export default App;
