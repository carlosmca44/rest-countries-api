import React from "react";

type CardProps = {
  img: string;
  name: string;
  population: string;
  region: string;
  capital: string;
};

const Card: React.FC<CardProps> = ({
  img,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <div className="card-root">
      <img src={img} alt="flag" />
      <div className="card-text">
        <p className="card-country-name"><b>{name}</b></p>
        <p><span className="sub-header">Population: </span>{population}</p>
        <p><span className="sub-header">Region: </span>{region}</p>
        <p><span className="sub-header">Capital: </span>{capital}</p>
      </div>
    </div>
  );
};

export default Card;
