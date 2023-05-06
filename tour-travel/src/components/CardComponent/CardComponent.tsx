import React from "react";
import "./CardComponent.css";

interface CardProps {
  content?: string;
  imageLink: string;
  footer: string;
}
const CardComponent: React.FC<CardProps> = ({ content, imageLink, footer }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img
          src={imageLink}
          alt={`my favourite destination`}
          className="image"
        />
        <h3>{footer}</h3>
      </div>
      <div className="descPara">
        <p>{content}</p>
      </div>
    </div>
  );
};
export default CardComponent;
