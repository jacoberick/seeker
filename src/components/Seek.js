import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const infoDivClass = "text-white mt-8";
const labelClass = "text-black uppercase text-gray-800";

const Seek = ({ setActive, apiURL, token }) => {
  const returnNada = () => null;
  const [apiRes, setApiRes] = useState(false);
  let apiToken =
    token.length > 42 ? apiRes.token_id.substr(0, 42) + "..." : apiRes.token_id;

  const copyCat = () => {
    const button = document.getElementById("copyButton");
    let value = document.getElementById("ownerAddy").innerText;
    navigator.clipboard.writeText(value);
    button.classList.remove("hover:bg-red-dark");
    button.classList.add("bg-green-400");
    setTimeout(() => {
      button.classList.add("hover:bg-red-dark");
      button.classList.remove("bg-green-400");
    }, 1000);
  };

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
          setApiRes(false);
          document.getElementById("errorText").innerHTML =
            "Sorry, we couldn't find that NFT. Try again?";
        });
    };
    apiURL ? hitUpAPI() : returnNada();
  }, [apiURL]);

  console.log(apiRes);

  return (
    <div
      id="seekMasterContainer"
      className="bg-tan-dark relative pt-header"
      onMouseEnter={() => setActive("SEEK")}
    >
      <div className="max-w-7xl mx-auto px-24">
        <p className="font-mont text-9xl text-white text-center uppercase font-semibold">
          seek result
        </p>
        <hr className="texst-white border-4 rounded-sm" />
      </div>
      <section className="font-dom max-w-7xl mx-auto px-24 my-24 min-h-seek">
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
                  {apiRes && apiRes.token_id ? apiToken : "Not Available"}
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
                <div className="flex items-center">
                  <p id="ownerAddy" className=" text-white">
                    {apiRes && apiRes.owner.address
                      ? apiRes.owner.address
                      : "Not Available"}
                  </p>
                  <button
                    id="copyButton"
                    onClick={copyCat}
                    className="active:bg-green-400 ml-2 bg-gray-700 w-8 h-8 rounded-full hover:bg-red-dark transition"
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p
            id="errorText"
            className="text-center mx-auto text-white text-lg pt-10"
          >
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
