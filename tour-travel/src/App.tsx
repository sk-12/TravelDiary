import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Button } from "./components/Button/Button";
import CardComponent from "./components/CardComponent/CardComponent";
import {
  Nainital,
  Pune,
  Vizag,
  Udaipur,
  Hyderabad,
  Manali,
} from "./assets/images/places/index";
import { Data } from "./utils/Data";
import TravelHistory from "./screen/TravelHistory/TravelHistory";
import About from "./screen/About/About";
import DreamDestination from "./screen/DreamDestination/DreamDestination";
import ContactMe from "./screen/ContactMe/ContactMe";
import TravelMap from "./screen/TravelMap/TravelMap";
type data = {
  item: any;
  index: number;
};

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div id="componentOne">
          <h1 id="componentOneIntro">Come Have a look at my travel diaries</h1>
          <Button type="primary" onClick={() => {}}>
            Start Here
          </Button>
        </div>
        <About />
        <TravelHistory />
        <TravelMap />
        <DreamDestination />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
