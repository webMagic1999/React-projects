import { useMediaQuery } from "react-responsive";

export default function Header({ dispatch, theme }) {
  const isDesktop = useMediaQuery({ minWidth: 550 });

  const btnStyle = {
    height: "2rem",
    width: isDesktop ? "6rem" : "2rem",
    borderRadius: !isDesktop ? "50%" : "0",
  };

  const currentTheme = theme !== "light" ? "Light" : "Dark";

  return (
    <header>
      <h1>FocusTrack</h1>
      <div className="btn-container">
        <button
          className={`btn`}
          style={btnStyle}
          onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
        >
          {isDesktop && "Add Todo"} <i className="bi bi-pencil-square"></i>
        </button>
        <button
          style={btnStyle}
          className={`btn`}
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {isDesktop && currentTheme}{" "}
          <i
            className={`bi ${
              theme === "light" ? "bi-moon-stars-fill" : "bi-sun-fill"
            }`}
          ></i>
        </button>
      </div>
    </header>
  );
}
