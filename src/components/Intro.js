import { useEffect, useState } from "react";

// image imports
import doodle from "../imgs/doodle.png";
import lorca from "../imgs/lorca.jpeg";
import visitor from "../imgs/visitor.png";
import snare from "../imgs/snare.png";

const Intro = () => {
  const imgArr = [doodle, lorca, visitor, snare];
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
      className="max-w-7xl px-24 mx-auto h-almostScreen"
    >
      <div className="h-1/2">
        <h1>Seeker</h1>
      </div>

      <div id="card" className="flex">
        <section
          id="left"
          className="w-1/2 bg-tan-dark p-5 rounded-l-lg flex items-center flex-col justify-center"
        >
          <p className="text-center text-4xl text-white font-mont">
            Search for NFTs using their contract address and token number.
          </p>
          <button className="mt-16 p-4 border-2 rounded-lg font-dom hover:bg-red-dark hover:border-red-dark text-white bg-black border-black transition-colors">
            <a href="#test">Get Started</a>
          </button>
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
