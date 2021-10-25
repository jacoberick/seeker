import { useEffect, useRef, useState } from "react";

// image imports
import doodle from "../imgs/doodle.png";
import lorca from "../imgs/lorca.jpeg";
import visitor from "../imgs/visitor.png";
import snare from "../imgs/snare.png";
import yuri from "../imgs/yuri-ill.jpg";

const inputStyle = "rounded p-2 w-full focus:outline-redDot";
const labelStyle = "mb-2 font-dom block text-white uppercase";

const Intro = ({ setActive, nft, setNft, setApiURL }) => {
  const imgArr = [doodle, lorca, visitor, snare, yuri];
  const [imageIndex, setImageIndex] = useState(0);
  const toSeek = useRef(null);

  //sets imageIndex every 1.5s to loop through photos
  useEffect(() => {
    setTimeout(() => {
      let newIndex = imageIndex === imgArr.length - 1 ? 0 : imageIndex + 1;
      setImageIndex(newIndex);
    }, 2000);
  }, [imageIndex, imgArr.length]);

  const setNftDetails = (e) => {
    const value = e.target.value;
    setNft({ ...nft, [e.target.name]: value });
  };

  const parseApiURL = (e) => {
    e.preventDefault();
    setApiURL(
      `https://api.opensea.io/api/v1/asset/${nft.contract}/${nft.token}`
    );
    toSeek.current.click();
  };

  return (
    <div
      id="masterIntroContainer"
      className="max-w-7xl px-24 mx-auto h-almostScreen pt-8"
      onMouseEnter={() => setActive("INTRO")}
    >
      <section id="titleCard" className="h-1/3 relative mb-32">
        <h2 className="font-lobster text-white text-5xl absolute mt-4 ml-4">
          Welcome to
        </h2>
        <h1 className="uppercase absolute w-full text-center text-white font-extrabold font-mont top-1/2 text-9xl transform -translate-y-1/2 ml-1">
          seeker
        </h1>
        <div className="h-full flex">
          <div className="w-1/3 bg-tan-dark h-full rounded-l-lg"></div>
          <div className="w-1/3 bg-gray-700 h-full"></div>
          <div className="w-1/3 bg-red-dark h-full rounded-r-lg"></div>
        </div>
      </section>

      <section id="actionCard" className="flex">
        <div
          id="left"
          className="w-1/2 bg-tan-dark p-10 rounded-l-lg flex flex-col"
        >
          <p className="text-2xl text-white font-mont text-center">
            Search for NFTs using their contract address and token number.
          </p>
          <form onSubmit={parseApiURL} className="my-auto">
            <div className="w-full mb-8">
              <label className={labelStyle} htmlFor="contract">
                contact address
              </label>
              <input
                required
                onChange={setNftDetails}
                value={nft.contract}
                className={inputStyle}
                type="text"
                id="contract"
                name="contract"
                placeholder="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
              />
            </div>
            <div className="w-full mb-4">
              <label className={labelStyle} htmlFor="token">
                token number
              </label>
              <input
                required
                onChange={setNftDetails}
                className={inputStyle}
                type="text"
                id="token"
                name="token"
                placeholder="1"
                value={nft.token}
              />
            </div>
            <button
              type="submit"
              className="uppercase w-full p-3 rounded-lg font-dom hover:bg-red-dark hover:border-red-dark text-white bg-gray-700 transition-colors"
            >
              Execute Seek
            </button>
            <a className="hidden" ref={toSeek} href="#seekMasterContainer">
              beebo
            </a>
          </form>
        </div>
        <div id="right" className="w-1/2 rounded-r-lg bg-gray-700">
          <div id="imgContainer" className="">
            <img className="p-5" src={imgArr[imageIndex]} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
