import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import Filter from "./Filter";
import Searcher from "./Searcher";

const Countries: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  // Searcher filter
  const [search, setSearch] = useState("");

  const handleChangeSarcher = (e: any) => {
    setSearch(e.target.value);
  };

  // Select filter
  const [filters, setFilter] = useState("");

  const handleChangeFilter = (e: any) => {
    setFilter(e.target.value);
  };

  let results = [];
  if (!search && filters === "All") {
    results = data;
  } else if (search && filters === "All") {
    results = data.filter((data: any) =>
      data["name"]["common"]
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
  } else {
    results = data.filter(
      (data: any) =>
        data["name"]["common"]
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) &&
        data["region"].toLocaleLowerCase().includes(filters.toLocaleLowerCase())
    );
  }

  let cc: any = {};
  useEffect(() => {
    data.map((item: any, _key: any) => {
      return (cc[item.cca3] = item.name.common);
    });

    localStorage.setItem("cca3", JSON.stringify(cc));
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
        <Searcher value={search} onChange={handleChangeSarcher} />
        <Filter values={filters} onChange={handleChangeFilter} />
      </div>
      <div className="grid-container">
        {results.map((item: any, key: any) => {
          return (
            <Link
              key={key}
              className="link-to"
              to={`/description/${item.name.official}`}
            >
              <Card
                img={item.flags.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
