import { useEffect, useState } from "react";

// image imports
import doodle from "../imgs/doodle.png";
import lorca from "../imgs/lorca.jpeg";
import visitor from "../imgs/visitor.png";

const Intro = () => {
  const imgArr = [doodle, lorca, visitor];
  const [imageIndex, setImageIndex] = useState(0);

  //sets imageIndex every 1.5s to loop through photos
  useEffect(() => {
    setTimeout(() => {
      let newIndex = imageIndex === imgArr.length - 1 ? 0 : imageIndex + 1;
      setImageIndex(newIndex);
    }, 1500);
  }, [imageIndex, imgArr.length]);

  return (
    <div id="masterIntroContainer" className="max-w-7xl mx-auto px-24 flex">
      <section id="left" className="bg-tan-dark">
        {/* <h1 className="font-dom text-4xl">SKR: A NFT Search Engine</h1> */}
      </section>
      <section id="right">
        <div id="imgContainer">
          <img src={imgArr[imageIndex]} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
