import { useState } from "react";

export default function Images() {
  const [images, setImages]: any = useState([]);

  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs: any) {
      // Send a message to the content script to count h1 tagsc
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getCount" },
        function (response: any) {
          setImages(response.data.images);
        }
      );
    }
  );

  return (
    <>
      <div className="images">
        <h2 className="text-center">
          Total Images <div className="linkValue"> {images.length}</div>
        </h2>

        {/* {images.map((str: any, index: any) => (
          <li key={index}>
            <a href={str}>{str}</a>
          </li>
        ))} */}
      </div>
      <h2>All Images with Links</h2>
      {images.map((str: any, index: any) => (
        <>
          <div className="text-center">
            <h1 className="text-center">{index + 1}</h1>
            <img
              key={index}
              src={str}
              alt={str}
              style={{ width: "200px", height: "200px" }}
            />
            <li style={{ listStyle: "none" }} key={index}>
              {" "}
              <a href={str}>{str}</a>
            </li>
          </div>
        </>
      ))}
    </>
  );
}
