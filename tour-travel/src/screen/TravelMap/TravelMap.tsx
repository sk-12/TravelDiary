import React from "react";
import Map from "../../assets/images/map.png";
import "./TravelMap.css";
const TravelMap: React.FC = () => {
  return (
    <div id="travelMap">
      <h1>My Travel Map</h1>
      <div className="mapAndList">
        <img className="travelImage" src={Map} alt="my travel map" />
        <div>
          <ol>
            <li>Udaipur</li>
            <li>Chennai</li>
            <li>Vizag</li>
            <li>Tirupati</li>
            <li>Bhubaneshwar</li>
            <li>Agra</li>
            <li>New Delhi</li>
            <li>Kolkata</li>
            <li>Amritsar</li>
            <li>Shimla</li>
            <li>Hyderabad</li>
            <li>Ranchi</li>
            <li>Nainital</li>
            <li>Pune</li>
            <li>Manali</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default TravelMap;
