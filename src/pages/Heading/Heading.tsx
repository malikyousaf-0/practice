import { useState } from "react";
export default function Heading() {
  const [count, setCount]: any = useState({
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
    allh1: [],
    allh2: [],
    allh3: [],
    allh4: [],
    allh5: [],
    allh6: [],
  });
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs: any) {
      // Send a message to the content script to count h1 tagsc
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getCount" },
        function (response: any) {
          setCount({
            h1: response.data.h1Tags.length,
            h2: response.data.h2Tags.length,
            h3: response.data.h3Tags.length,
            h4: response.data.h4Tags.length,
            h5: response.data.h5Tags.length,
            h6: response.data.h6Tags.length,
            allh1: response.data.h1,
            allh2: response.data.h1,
            allh3: response.data.h3,
            allh4: response.data.h4,
            allh5: response.data.h5,
            allh6: response.data.h6,
          });
        }
      );
    }
  );
  
  return (
    <div className="heading p-3">
      <h2>All Headings</h2>

      <div className="allheading">
        <div className="row text-center">
          <div className="col-2">H1</div>
          <div className="col-2">H2</div>
          <div className="col-2">H3</div>
          <div className="col-2">H4</div>
          <div className="col-2">H5</div>
          <div className="col-2">H6</div>
        </div>
        <div className="row text-center ">
          <div className="col-2">
            <div className="linkValue">{count.h1}</div>
          </div>
          <div className="col-2">
            <div className="linkValue">{count.h2}</div>
          </div>
          <div className="col-2">
            <div className="linkValue">{count.h3}</div>
          </div>
          <div className="col-2">
            <div className="linkValue">{count.h4}</div>
          </div>
          <div className="col-2">
            <div className="linkValue">{count.h5}</div>
          </div>
          <div className="col-2">
            <div className="linkValue">{count.h6}</div>
          </div>
        </div>
      </div>
      <hr />
      <h2>All H1 Tags Values</h2>
      <ul>
        {count.allh1.map((str: any, index: any) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <h2>All H2 Tags Values</h2>
      <ul>
        {count.allh2.map((str: any, index: any) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <h2>All H3 Tags Values</h2>
      <ul>
        {count.allh3.map((str: any, index: any) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <h2>All H4 Tags Values</h2>
      <ul>
        {count.allh4.map((str: any, index: any) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <h2>All H5 Tags Values</h2>
      <ul>
        {count.allh5.map((str: any, index: any) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <h2>All H6 Tags Values</h2>
      <ul>
        {count.allh6.map((str: any, index: any) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  );
}
