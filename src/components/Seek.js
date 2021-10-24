import axios from "axios";
import { useEffect, useState } from "react";
import yuri from "../imgs/yuri-ill.jpg";

const infoDivClass = "text-white mt-8";
const labelClass = "text-black";

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
      className="h-almostScreen bg-tan-dark"
      onMouseEnter={() => setActive("SEEK")}
    >
      <div id="Inner" className="max-w-7xl mx-auto px-24">
        <p className="font-mont text-9xl text-white text-center">SEEK RESULT</p>
        <hr className="text-white border-4 rounded-sm" />
      </div>
      <section className="font-dom max-w-7xl mx-auto px-24 mt-16 flex items-end">
        <div className="w-3/5 mr-8" id="photo">
          <img className="w-full" src={apiRes.image_url} alt="" />
        </div>
        <div id="info" className="w-2/5 p-5">
          <div>
            <p className={labelClass}>TRANSACTION ADDRESS</p>
            <p className="text-white">
              {apiRes && apiRes.asset_contract.address
                ? apiRes.asset_contract.address
                : "Not Available"}
            </p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>TOKEN ID</p>
            <p className="text-white">
              {apiRes && apiRes.token_id ? apiRes.token_id : "Not Available"}
            </p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>ARTIST</p>
            <p className="text-white">
              {apiRes && apiRes.asset_contract.name
                ? apiRes.asset_contract.name
                : "Not Available"}
            </p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>TITLE</p>
            <p className="text-4xl text-white">
              {apiRes && apiRes.name ? apiRes.name : "Not Available"}
            </p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>DESCRIPTION</p>
            <p className=" text-white">
              {apiRes && apiRes.description
                ? apiRes.description
                : "Not Available"}
            </p>
          </div>
          <div className={infoDivClass}>
            <p className={labelClass}>OWNER ADDRESS</p>
            <p className=" text-white">
              {apiRes && apiRes.owner.address
                ? apiRes.owner.address
                : "Not Available"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seek;
