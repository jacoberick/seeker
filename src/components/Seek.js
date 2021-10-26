import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const infoDivClass = "text-white mt-8";
const labelClass = "text-black uppercase text-gray-800";

const Seek = ({ setActive, apiURL }) => {
  const returnNada = () => null;
  const [apiRes, setApiRes] = useState(false);

  useEffect(() => {
    const hitUpAPI = () => {
      const options = {
        method: "GET",
        url: apiURL,
      };

      axios
        .request(options)
        .then(function (response) {
          setApiRes(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    apiURL ? hitUpAPI() : returnNada();
  }, [apiURL]);

  console.log(apiRes);

  return (
    <div
      id="seekMasterContainer"
      className="h-almostScreen bg-tan-dark relative"
      onMouseEnter={() => setActive("SEEK")}
    >
      <div className="max-w-7xl mx-auto px-24 ">
        <p className="font-mont text-9xl text-white text-center uppercase font-semibold">
          seek result
        </p>
        <hr className="text-white border-4 rounded-sm" />
      </div>
      <section className="font-dom max-w-7xl mx-auto px-24 mt-16 ">
        {apiRes ? (
          <div className="flex items-center">
            <div className="w-3/5 mr-8" id="photo">
              <img className="w-full" src={apiRes.image_url} alt="" />
            </div>
            <div id="info" className="w-2/5 p-5">
              <div>
                <p className={labelClass}>transaction address</p>
                <p className="text-white">
                  {apiRes && apiRes.asset_contract.address
                    ? apiRes.asset_contract.address
                    : "Not Available"}
                </p>
              </div>
              <div className={infoDivClass}>
                <p className={labelClass}>token id</p>
                <p className="text-white">
                  {apiRes && apiRes.token_id
                    ? apiRes.token_id
                    : "Not Available"}
                </p>
              </div>
              <div className={infoDivClass}>
                <p className={labelClass}>artist</p>
                <p className="text-white">
                  {apiRes && apiRes.creator.user
                    ? apiRes.creator.user.username
                    : "Not Available"}
                </p>
              </div>
              <div className={infoDivClass}>
                <p className={labelClass}>title</p>
                <p className="text-4xl text-white">
                  {apiRes && apiRes.name ? apiRes.name : "Not Available"}
                </p>
              </div>
              <div className={infoDivClass}>
                <p className={labelClass}>description</p>
                <p className=" text-white">
                  {apiRes && apiRes.description
                    ? apiRes.description
                    : "Not Available"}
                </p>
              </div>
              <div className={infoDivClass}>
                <p className={labelClass}>owner address</p>
                <p className=" text-white">
                  {apiRes && apiRes.owner.address
                    ? apiRes.owner.address
                    : "Not Available"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center mx-auto text-white">
            Hey friend. You haven't run a Seek yet. Scroll back up to get
            started.
          </p>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Seek;
