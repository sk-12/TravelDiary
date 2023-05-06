import React from "react";
import { Data } from "../../utils/Data";
import CardComponent from "../../components/CardComponent/CardComponent";
import "./TravelHistory.css";

interface Props {}

const TravelHistory: React.FC<Props> = () => {
  return (
    <div id="travelHistory">
      <h1>Travel History</h1>
      <h2>Some of the destinations where I had the pleasure of staying</h2>
      <div id="imageContainer">
        {Data.map((item, index) => {
          return (
            <CardComponent
              key={index}
              footer={item.name}
              imageLink={item.imageLink}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TravelHistory;
