import { useEffect, useState } from "react";

// image imports
import doodle from "../imgs/doodle.png";
import lorca from "../imgs/lorca.jpeg";
import visitor from "../imgs/visitor.png";
import snare from "../imgs/snare.png";
import yuri from "../imgs/yuri-ill.jpg";

const inputStyle = "rounded p-2 w-80 focus:outline-redDot";
const labelStyle = "mb-2 font-dom block text-white";

const Intro = ({ setActive }) => {
  const imgArr = [doodle, lorca, visitor, snare, yuri];
  const [imageIndex, setImageIndex] = useState(0);

  //sets imageIndex every 1.5s to loop through photos
  useEffect(() => {
    setTimeout(() => {
      let newIndex = imageIndex === imgArr.length - 1 ? 0 : imageIndex + 1;
      setImageIndex(newIndex);
    }, 2000);
  }, [imageIndex, imgArr.length]);

  return (
    <div
      id="masterIntroContainer"
      className="max-w-7xl px-24 mx-auto h-almostScreen pt-8"
      onMouseEnter={() => setActive("INTRO")}
    >
      <div id="titleCard" className="h-1/3 relative mb-32">
        <h2 className="font-lobster text-white text-5xl absolute mt-4 ml-4">
          Welcome to
        </h2>
        <h1 className="absolute w-full text-center text-white font-mont top-1/2 text-9xl transform -translate-y-1/2 ml-1">
          SEEKER
        </h1>
        <div className="h-full flex">
          <div className="w-1/3 bg-tan-dark h-full rounded-l-lg"></div>
          <div className="w-1/3 bg-black h-full"></div>
          <div className="w-1/3 bg-gray h-full rounded-r-lg"></div>
        </div>
      </div>

      <div id="actionCard" className="flex">
        <section id="left" className="w-1/2 bg-tan-dark p-5 rounded-l-lg">
          <p className="text-3xl text-white font-mont">
            Search for NFTs using their contract address and token number.
          </p>
          <div className="flex flex-col items-center mt-2">
            <div className="mt-8">
              <label className={labelStyle} htmlFor="contract">
                CONTRACT ADR
              </label>
              <input
                className={inputStyle}
                type="text"
                id="contract"
                name="contract"
                placeholder="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
              />
            </div>
            <div className="mt-8">
              <label className={labelStyle} htmlFor="token">
                TOKEN NUM
              </label>
              <input
                className={inputStyle}
                type="text"
                id="token"
                name="token"
                placeholder="1"
              />
            </div>
            <a className="" href="#seekMasterContainer">
              <button className="mt-16 p-2 border-2 rounded-lg font-dom hover:bg-red-dark hover:border-red-dark text-white bg-black border-black transition-colors w-80">
                Execute Seek
              </button>
            </a>
          </div>
        </section>
        <section id="right" className="w-1/2 rounded-r-lg bg-black">
          <div id="imgContainer" className="">
            <img className="p-5" src={imgArr[imageIndex]} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;
