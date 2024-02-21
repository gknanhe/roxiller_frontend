import React from "react";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import Searchbar from "./SearchBar";
import Table from "./Table";

const TableContainer = () => {
  return (
    <div className="flex justify-between gap-6 items-center flex-col   ">
      <div className="flex justify-between items-center w-full gap-4">
        <Searchbar />
        <Dropdown />
      </div>

      <div>
        <Table />
      </div>
      <div className="flex justify-end w-full">
        <Pagination />
      </div>
    </div>
  );
};

export default TableContainer;
