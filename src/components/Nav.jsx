import { useState } from "react";
import "../styles/nav.css";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logo/logo.png";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 d-none d-sm-block">
            <div className="h-100 d-flex align-items-center">
              <SocialMedia />
            </div>
          </div>
          <div className="col-6 col-sm-4">
            <div className="d-flex justify-content-start justify-content-sm-center align-items-center logo">
              <Link to="/#home">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4">
            <div className="h-100 d-flex justify-content-end align-items-center">
              <div
                onClick={() => setOpen(!open)}
                className={`hamburger-lines ${open ? "hamburger-open" : ""}`}
              >
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu open={open} setOpen={() => setOpen(!open)} />
    </nav>
  );
};

export default Nav;
