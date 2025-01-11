import { useState } from "react";

export default function FilterSortPanel({ onHandleFilterSort }) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("relevance");

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    onHandleFilterSort({ filter: newFilter, sort });
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    onHandleFilterSort({ filter, sort: newSort });
  };
  return (
    <div className="filter_and_sort">
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <Sort sort={sort} onSortChange={handleSortChange} />
    </div>
  );
}

function Filter({ filter, onFilterChange }) {
  return (
    <div className="filter">
      <label>Filter</label>{" "}
      <select value={filter} onChange={onFilterChange}>
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>
    </div>
  );
}

function Sort({ sort, onSortChange }) {
  return (
    <div className="sort">
      <label>Sort</label>{" "}
      <select value={sort} onChange={onSortChange}>
        <option value="relevance">Relevance</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
}
