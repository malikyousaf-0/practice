import { useEffect, useState } from "react";
import Title from "./Title";

import { BiMessageDots } from "react-icons/bi";
import { MdOutlineTitle } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { BsFillTagsFill } from "react-icons/bs";
export default function Summary() {
  const [url, setUrl]: any = useState();
  const [count, setCount] = useState({
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
  });
  const [meta, setMeta]: any = useState({
    description: "",
    keyWords: "",
    title: "",
    taburl: "",
    links: [],
    images: "",
    html: "",
  });
  //

  // //
  useEffect(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (tabs: any) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "getCount" },
          function (response: any) {
            console.log(response.data);
            setCount({
              h1: response.data.h1Tags.length,
              h2: response.data.h2Tags.length,
              h3: response.data.h3Tags.length,
              h4: response.data.h4Tags.length,
              h5: response.data.h5Tags.length,
              h6: response.data.h6Tags.length,
            });
            setMeta({
              description: response.data.description,
              title: response.data.title,
              keywords: response.data.content,
              taburl: tabs[0].url,
              links: response.data.links,
              images: response.data.images,
              html: response.data.html,
            });
            setUrl(response.data.url);
          }
        );
      }
    );
  }, []);
  return (
    <div className="summary p-2">
      <Title
        name="Title"
        icon={<MdOutlineTitle size="25" className="icon rounded" />}
        value={meta.title}
        color={
          meta.title.length > 30 && meta.title.length < 65
            ? "success"
            : "danger"
        }
      />

      <Title
        name="Description"
        icon={<BiMessageDots size="25" className="icon rounded" />}
        value={meta.description}
        color={
          meta.description.length > 120 && meta.description.length < 320
            ? "success"
            : "danger"
        }
      />

      <Title
        name="URL ID"
        icon={<IoMdLink size="25" className="icon rounded" />}
        value={url}
      />

      <Title
        name="Tags"
        icon={<BsFillTagsFill size="20" className="icon rounded" />}
        value={meta.keywords}
      />

      {/* Heading TAGS */}
      <hr />

      <div className="headings bg-light rounded shadow p-1">
        <h2>Headings</h2>
        <div className="row text-center">
          <div className="col-2">
            <b>H1</b>
          </div>
          <div className="col-2">
            <b>H2</b>
          </div>
          <div className="col-2">
            <b>H3</b>
          </div>
          <div className="col-2">
            <b>H4</b>
          </div>
          <div className="col-2">
            <b>H5</b>
          </div>
          <div className="col-2">
            <b>H6</b>
          </div>
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
      {/* Links */}
      <hr />
      <div className="summaryLinks  bg-light rounded shadow p-1">
        <h2>Links {meta.links.length}</h2>
        <div className="row text-center">
          <div className="col">
            <b>Internal Links</b>
          </div>
          <div className="col">
            <b>External Links</b>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <div className="linkValue">
              {meta.links.filter((link: any) => link.startsWith(url)).length}
            </div>
          </div>
          <div className="col ">
            <div className="linkValue">
              {
                meta.links.filter((link: any) => !link.startsWith(`${url}`))
                  .length
              }
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="summaryimages  bg-light rounded shadow p-1">
        <h2>Images</h2>
        <div className="row">
          <div className="col">
            <b>Total</b>
          </div>
          <div className="col">
            <div className="linkValue text-center">{meta.images.length}</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="others bg-light rounded shadow">
        <h1>{meta.html}</h1>
      </div>
    </div>
  );
}
