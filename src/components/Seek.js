import axios from "axios";

const inputStyle = "rounded p-2 w-2/5";
const labelStyle = "mb-2 font-mont";

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
        <p className="font-mont text-9xl text-white">SEEK</p>
        <hr className="text-white border-4 rounded-sm" />
        <div>
          <form action="">
            <div className="flex flex-col my-8">
              <label htmlFor="contract" className={labelStyle}>
                CONTRACT ADDRESS
              </label>
              <input
                placeholder="Ex. 0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
                type="text"
                id="contract"
                name="contract"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="token" className={labelStyle}>
                TOKEN ID
              </label>
              <input
                placeholder="Ex. 1"
                type="text"
                id="token"
                name="token"
                className={inputStyle}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Seek;
