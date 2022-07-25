import React, { ChangeEventHandler } from "react";
import SearchIcon from "./svg/SearchIcon";

type SearcherProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Searcher: React.FC<SearcherProps> = ({ value, onChange }) => {
  return (
    <div className="searcher-container">
      <SearchIcon />
      <input
        value={value}
        onChange={onChange}
        placeholder="Search for a country..."
        type="text"
      />
    </div>
  );
};

export default Searcher;
