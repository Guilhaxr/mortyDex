import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import "./css/filter.css";

const Filter = ({ data, onSetFilteredData }) => {
  const filterHandler = (event) => {
    let results = [];
    if (event.target.value.toLowerCase() !== "") {
      results = data?.results?.filter((e) => {
        return e.name.toLowerCase().includes(event.target.value.toLowerCase());
      });
    }

    console.log(results, "results");
    onSetFilteredData(data.info, results);
  };

  return (
    <div className="filter_container">
      <input
        className="filter"
        type="text"
        onChange={filterHandler}
        placeholder="Search..."
      ></input>
      <BiSearchAlt size={50} />
    </div>
  );
};

export default Filter;
