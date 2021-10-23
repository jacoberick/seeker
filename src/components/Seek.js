import axios from "axios";
import yuri from "../imgs/yuri-ill.jpg";

const infoDivClass = "text-white mt-8";
const labelClass = "text-black";

const options = {
  method: "GET",
  url: "https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/",
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const Seek = ({ setActive }) => {
  return (
    <div
      id="seekMasterContainer"
      className="h-almostScreen bg-tan-dark"
      onMouseEnter={() => setActive("SEEK")}
    >
      <div id="Inner" className="max-w-7xl mx-auto px-24">
        <p className="font-mont text-9xl text-white text-center">SEEK RESULT</p>
        <hr className="text-white border-4 rounded-sm" />
      </div>
      <section className="font-dom max-w-7xl mx-auto px-24 mt-16 flex items-end">
        <div className="w-3/5 mr-8" id="photo">
          <img src={yuri} alt="" />
        </div>
        <div id="info" className="w-2/5 p-5">
          <div>
            <p className={labelClass}>ARTIST</p>
            <p className="text-white">GULAG ANTHEM</p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>TITLE</p>
            <p className="text-4xl text-white">YURI SAYS HELLO WORLD</p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>DESCRIPTION</p>
            <p className=" text-white">
              Neon District is a free-to-play cyberpunk role-playing game.
              Collect characters and gear, craft and level up teams, and battle
              against other players through competitive multiplayer and in
              turn-based combat.
            </p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>OWNER ADDRESS</p>
            <p className=" text-white">123454567987654345678</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seek;
