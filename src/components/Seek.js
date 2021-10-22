import axios from "axios";

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
        <p className="font-mont text-9xl text-white">SEEK RESULT</p>
        <hr className="text-white border-4 rounded-sm" />
      </div>
    </div>
  );
};

export default Seek;
