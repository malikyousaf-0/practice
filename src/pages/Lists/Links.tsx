import { useState } from "react";
import { Badge } from "antd";
export default function Links() {
  const [links, setLinks]: any = useState([]);
  const [url, setUrl]: any = useState();
  const [linkvalue, setlinkValue]: any = useState();

  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs: any) {
      // Send a message to the content script to count h1 tagsc
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getCount" },
        function (response: any) {
          // console.log(tabs[0]
          setLinks(response.data.links);
          setUrl(response.data.url);
        }
      );
    }
  );
  return (
    <div className="links p-3">
      <h2 className="text-center">
        All Links <div className="linkValue"> {links.length}</div>
      </h2>
      <div className="d-flex justify-content-around w-100">
        <Badge
          count={links.filter((link: any) => link.startsWith(`${url}`)).length}
          overflowCount={
            links.filter((link: any) => link.startsWith(`${url}`)).length
          }
        >
          <button
            className="btn btn-primary"
            onClick={() => setlinkValue(true)}
          >
            Internal links
          </button>
        </Badge>
        <Badge
          count={links.filter((link: any) => !link.startsWith(`${url}`)).length}
          overflowCount={
            links.filter((link: any) => !link.startsWith(`${url}`)).length
          }
        >
          <button
            className="btn btn-primary"
            onClick={() => setlinkValue(false)}
          >
            External links
          </button>
        </Badge>
      </div>
      <h1>
        {linkvalue
          ? `Internal Links (${
              links.filter((link: any) => link.startsWith(`${url}`)).length
            })`
          : `External Links (${
              links.filter((link: any) => !link.startsWith(`${url}`)).length
            })`}
      </h1>
      <ol>
        {linkvalue
          ? links
              .filter((link: any) => link.startsWith(url))
              .map((str: any, index: any) => (
                <li key={index}>
                  <a href={str}>{str}</a>
                </li>
              ))
          : links
              .filter((link: any) => !link.startsWith(url))
              .map((str: any, index: any) => (
                <li key={index}>
                  <a href={str}>{str}</a>
                </li>
              ))}
      </ol>
    </div>
  );
}
