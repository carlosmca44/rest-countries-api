import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGetAllCountries from "../hooks/useGetAllCountries";
import Card from "./Card";
import Filter from "./Filter";
import Searcher from "./Searcher";

const Countries: React.FC = () => {
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

  const { results, loading, error } = useGetAllCountries(search, filters);

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
