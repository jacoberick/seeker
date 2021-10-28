import { useEffect, useRef, useState } from "react";

// image imports
import doodle from "../imgs/doodle.png";
import lorca from "../imgs/lorca.jpeg";
import visitor from "../imgs/visitor.png";
import snare from "../imgs/snare.png";
import yuri from "../imgs/yuri-ill.jpg";
import train from "../imgs/Waiting_For_the_Train.jpg";

const inputStyle = "rounded p-2 w-full focus:outline-redDot";
const labelStyle =
  "mb-2 font-dom block text-white uppercase bOne:text-sm bThree:text-xs";

const Intro = ({ setActive, nft, setNft, setApiURL }) => {
  const imgArr = [doodle, lorca, visitor, snare, yuri, train];
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
      className="max-w-7xl px-24 pt-header mb-40 bg-tan-light mx-auto bFour:px-12 w-full bEight:px-6"
      onMouseEnter={() => setActive("INTRO")}
    >
      <div id="introInner" className="">
        <section
          id="titleCard"
          className="h-80 relative mb-32 bFour:mb-16 bSix:h-64 bNine:h-48"
        >
          <h2 className="font-lobster text-white text-5xl absolute mt-4 ml-4 bTwo:text-4xl bFive:text-3xl bSeven:text-2xl">
            Welcome to
          </h2>
          <h1 className="uppercase absolute w-full text-center text-white font-extrabold font-mont top-1/2 text-9xl transform -translate-y-1/2 ml-1 bOne:ml-0 bTwo:text-8xl bFive:text-7xl bSeven:text-6xl bNine:text-5xl">
            seeker
          </h1>
          <div className="h-full flex">
            <div className="w-1/3 bg-tan-dark h-full rounded-l-lg"></div>
            <div className="w-1/3 bg-gray-700 h-full"></div>
            <div className="w-1/3 bg-red-dark h-full rounded-r-lg"></div>
          </div>
        </section>

        <section id="actionCard" className="flex bFour:flex-col-reverse">
          <div
            id="left"
            className="w-1/2 bg-tan-dark p-10 bTwo:p-7 rounded-l-lg flex flex-col bFour:w-full bFour:rounded-lg "
          >
            <p className="text-2xl :text-4xl:text-xl bThree:text-base text-white font-mont text-center bFour:mb-6">
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
                className="uppercase w-full p-3 rounded-lg font-dom hover:bg-red-dark hover:border-red-dark text-white bg-gray-700 transition-colors bOne:text-sm bThree:text-xs"
              >
                Execute Seek
              </button>
              <a className="hidden" ref={toSeek} href="#seekMasterContainer">
                beebo
              </a>
            </form>
          </div>
          <div
            id="right"
            className="w-1/2 bFive:w-3/4 bSeven:w-full rounded-r-lg bg-gray-700 bFour:rounded bFour:mb-16 bFour:mx-auto"
          >
            <div id="imgContainer" className="">
              <img className="p-5" src={imgArr[imageIndex]} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;
