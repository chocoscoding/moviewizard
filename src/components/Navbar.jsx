import React from "react";
import "../styles/Navbar.css";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = ({ changect,sendRequest, currentText, actiontype }) => {

    function submitform(e){
        e.preventDefault();
        sendRequest();
    }
  return (
    <div className="navcont">
      <nav>
          <Link to={`/`}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/MOVIE%20WIZARD.png?alt=media&token=f4c9a7f5-340d-4d2d-8dc9-c33ed96d8dd4"
          alt="logo"
          />
          </Link>

        {actiontype !== "home" ? (
          <form className="searchcont" onSubmit={submitform}>
            <input
              type="text"
              placeholder="Search something"
              value={currentText}
              onChange={(e) => changect(e.target.value)}
              name="searchinput"
              id="searchinput"
            />
            <button type="submit" className="searchsubmit">
              <GoSearch id="search" />
            </button>
          </form>
        ) : (
          <Link className="linke" to="/search">
            <button type="submit" className="searchsubmit2">
              <GoSearch id="search" />
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
