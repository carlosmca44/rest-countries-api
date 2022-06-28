import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import Filter from "./Filter";
import Searcher from "./Searcher";

const Countries: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const searcher = (e: any) => {
    setSearch(e.target.value);
  };

  let results = [];
  if (!search) {
    results = countries;
  } else {
    results = countries.filter((data) =>
      data["name"]["common"]
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    setCountries(data);
  }, [data]);

  if (loading) {
    return <p>Loading text</p>;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  return (
    <div className="countries-root-container">
      <div className="filters-container">
        <Searcher value={search} onChange={searcher} />
        <Filter />
      </div>
      <div className="grid-container">
        {results.map((item: any, key: any) => {
          return (
            <Card
              key={key}
              img={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
