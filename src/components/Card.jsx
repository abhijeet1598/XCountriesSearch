import React from "react";
import "./Card.css";

const Card = ({ img, name }) => {
  return (
    <div className="card">
      <img src={img} alt={name} width={100} height={100} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
