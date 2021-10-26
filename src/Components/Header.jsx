import React from "react";
import { Link } from "react-router-dom";
import GoogleOuth from "./GoogleOuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleOuth />
      </div>
    </div>
  );
};

export default Header;
