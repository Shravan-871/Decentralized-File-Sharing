import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
      return;
    }

    if (dataArray.length > 0) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => {
        const imageUrl = item.startsWith("ipfs://") ? `https://gateway.pinata.cloud/ipfs/${item.substring(7)}` : item;

        return (
          <a href={imageUrl} key={i} target="_blank" rel="noreferrer">
            <img
              src={imageUrl}
              alt="new"
              className="image-item"
              onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url'; }} // Optional fallback image
            />
          </a>
        );
      });

      setData(images);
    } else {
      alert("No image to display");
    }
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <input type="text" placeholder="Enter Address" className="address"></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};

export default Display;