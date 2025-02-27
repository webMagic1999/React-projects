function Filters({ dispatch, filters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "FILTER_TODOS", filterType: name, value });
  };

  return (
    <div className="filter-group">
      <div className="filter">
        <label>
          Priority:
          <select
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Top">Top</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Status:
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Just Added">Just Added</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Category:
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Filters;
