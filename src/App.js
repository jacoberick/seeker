import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Seek from "./components/Seek";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState("INTRO");
  const [nft, setNft] = useState({
    contract: "",
    token: "",
  });
  const [apiURL, setApiURL] = useState("");

  return (
    <div id="masterContainer" className=" bg-tan-light">
      <Header active={active} setActive={setActive} />
      <Intro
        setApiURL={setApiURL}
        nft={nft}
        setNft={setNft}
        setActive={setActive}
      />
      <Seek token={nft.token} apiURL={apiURL} setActive={setActive} />
      <Footer />
    </div>
  );
}

export default App;
