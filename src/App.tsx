import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Summary from "./pages/Summary/Summary";
import Heading from "./pages/Heading/Heading";
import Links from "./pages/Lists/Links";
import Images from "./pages/images/Images";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // background.js
  // const clic = () => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //     const activeTab = tabs[0];
  //     if (activeTab) {
  //       chrome.tabs.sendMessage(activeTab.id!, { action: "countH1Tags" });
  //     }
  //   });
  // };
  return (
    <div className="App shadow rounded">
      <Navbar />
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/heading" element={<Heading />} />
        <Route path="/links" element={<Links />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </div>
  );
}

export default App;
