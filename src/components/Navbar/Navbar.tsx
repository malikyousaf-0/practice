import { NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { FaHeading } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
export default function Navbar() {
  return (
    <div className="navbar p-4 shadow">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active nav" : "nav")}
      >
        <div>
          <FaBookOpen className="me-1" /> Summary
        </div>
      </NavLink>
      <NavLink

        to="/heading"
        className={({ isActive }) => (isActive ? "active nav" : "nav")}
      >
        <div>
          {" "}
          <FaHeading className="me-1" />
          Headings
        </div>
      </NavLink>
      <NavLink
        to="/links"
        className={({ isActive }) => (isActive ? "active nav" : "nav")}
      >
        <div>
          <IoIosLink className="me-1" />
          Links
        </div>
      </NavLink>
      <NavLink
        to="/images"
        className={({ isActive }) => (isActive ? "active nav" : "nav")}
      >
        <div>
          <CiImageOn className="me-1" />
          Images
        </div>
      </NavLink>
    </div>
  );
}
