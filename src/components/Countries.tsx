import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const Countries: React.FC = () => {
  const { data, loading, error } = useFetch('https://restcountries.com/v3.1/all')

  //console.log(data[2])

  if (loading) {
    return (
      <p>Loading text</p>
    )
  }

  if (error) {
    return (
      <p>ERROR</p>
    )
  }

  return (
    <div className="countries-root-container">
      <div className="grid-container">
        {data.map((item: any, key: any) => {
          return (
              <Card 
                key={key}
                img={item.flags.png}
                name={item.name.official}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
          )
        })}
      </div>
    </div>
  );
};

export default Countries;
