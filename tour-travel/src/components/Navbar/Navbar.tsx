import "./NavbarStyle.css";
import React from "react";
const handleClick = (id: string) => {
  window.location.href = "#" + id;
};
class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <h1 onClick={() => handleClick("componentOne")}>Travel Diaries </h1>
        <div id="navItemContainer">
          <h4 className="navItem" onClick={() => handleClick("about")}>
            About
          </h4>
          <h4 className="navItem" onClick={() => handleClick("travelHistory")}>
            Travel History
          </h4>
          <h4 className="navItem" onClick={() => handleClick("travelMap")}>
            My Travel Map
          </h4>
          <h4 className="navItem" onClick={() => handleClick("dreamDest")}>
            Dream Destinations
          </h4>
          <h4 className="navItem" onClick={() => handleClick("contactForm")}>
            Contact me
          </h4>
        </div>
      </div>
    );
  }
}
export default NavBar;
