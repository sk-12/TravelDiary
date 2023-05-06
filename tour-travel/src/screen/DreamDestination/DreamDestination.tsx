import React from "react";
import "./DreamDestination.css";
import CardComponent from "../../components/CardComponent/CardComponent";
import { dreamData } from "../../utils/Data";
const DreamDestination: React.FC = () => {
  return (
    <div id="dreamDest">
      <h1>Dream Destinations</h1>
      <h2>Waiting to cover these places,hopefully it will be soon</h2>
      <div className="dreamData">
        {dreamData.map((item, index) => (
          <CardComponent
            imageLink={item.imageLink}
            footer={item.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default DreamDestination;
