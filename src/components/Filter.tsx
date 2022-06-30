import React, { ChangeEventHandler } from "react";

type FilterProps = {
  values?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const Filter: React.FC<FilterProps> = ({ values, onChange }) => {
  return (
    <div className="select-filter">
      <select value={values} onChange={onChange}>
        <option>All</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
