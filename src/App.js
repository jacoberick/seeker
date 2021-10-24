import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Seek from "./components/Seek";

function App() {
  const [active, setActive] = useState("INTRO");
  const [nft, setNft] = useState({});

  return (
    <div id="masterContainer" className="h-screen bg-tan-light">
      <Header active={active} setActive={setActive} />
      <Intro nft={nft} setActive={setActive} />
      <Seek setActive={setActive} />
      <div id="test"></div>
    </div>
  );
}

export default App;
