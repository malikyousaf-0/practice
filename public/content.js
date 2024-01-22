// Listen for messages from the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getCount") {
    // Count the number of h1 tags on the page
    let content = "No keyword found";
    let description = "No description found";
    let links = Array.from(document.querySelectorAll("a")).map(
      (link) => link.href
    );
    links = links.map((val) => val);
    const images = Array.from(document.querySelectorAll("img")).map(
      (img) => img.src
    );

    const h1Tags = Array.from(document.querySelectorAll("h1"));
    const h2Tags = Array.from(document.querySelectorAll("h2"));
    const h3Tags = Array.from(document.querySelectorAll("h3"));
    const h4Tags = Array.from(document.querySelectorAll("h4"));
    const h5Tags = Array.from(document.querySelectorAll("h5"));
    const h6Tags = Array.from(document.querySelectorAll("h6"));
    const lang = document.getElementsByTagName("html");

    const title = document.querySelector("title").innerText;
    const getcontent = document.querySelectorAll("meta[name='Keywords' i]");
    const getDescription = document.querySelectorAll(
      "meta[name='Description' i]"
    );

    const h1 = h1Tags.map((val) => val.innerText);
    const h2 = h2Tags.map((val) => val.innerText);
    const h3 = h3Tags.map((val) => val.innerText);
    const h4 = h4Tags.map((val) => val.innerText);
    const h5 = h5Tags.map((val) => val.innerText);
    const h6 = h6Tags.map((val) => val.innerText);
    if (getcontent.length !== 0) {
      content = getcontent[0].content;
    }
    if (getDescription.length !== 0) {
      description = getDescription[0].content;
    }

    const url = window.location.href;
    // Send the count back to the extension
    const data = {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h1Tags,
      h2Tags,
      h3Tags,
      h4Tags,
      h5Tags,
      h6Tags,
      content,
      title,
      description,
      links,
      images,
      url,
      lang,
    };
    sendResponse({ data });
  }
});
