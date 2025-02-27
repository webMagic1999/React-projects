function NoTODOs({ dispatch }) {
  const btnStyle = {
    height: "2rem",
    width: "6rem",
  };
  return (
    <div className="no-todos-container">
      <div className="no-todo">
        <div className="animation-container">
          <iframe
            src="https://lottie.host/embed/810ae952-0e95-43d0-8c7b-de76e83d04b2/cDMIc0E1H9.lottie"
            title="No tasks animation"
            className="lottie-frame"
          ></iframe>
        </div>
        <h2>No tasks yet!</h2>
        <p>Stay organized by adding your first task.</p>
        <button
          className="btn"
          style={btnStyle}
          onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
        >
          Add ToDo <i className="bi bi-pencil-square"></i>
        </button>
      </div>
    </div>
  );
}

export default NoTODOs;
