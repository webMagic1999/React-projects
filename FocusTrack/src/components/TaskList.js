import useCountdown from "./useCountdown";

const getTaskStyles = (priority, theme) => {
  const themes = {
    light: {
      top: { background: "#FFEBEE", color: "#B71C1C", border: "#E57373" },
      high: { background: "#FFF3CD", color: "#795548", border: "#FFC107" },
      medium: { background: "#E3F2FD", color: "#0D47A1", border: "#42A5F5" },
      low: { background: "#E8F5E9", color: "#1B5E20", border: "#81C784" },
    },
    dark: {
      top: { background: "#B71C1C", color: "#FFCDD2", border: "#E57373" }, // **Deep Red + Soft Coral**
      high: { background: "#D81B60", color: "#F8BBD0", border: "#F06292" }, // **Muted Berry-Red + Soft Pink**
      medium: { background: "#00695C", color: "#B2DFDB", border: "#26A69A" }, // **Rich Teal + Fresh Mint**
      low: { background: "#37474F", color: "#ECEFF1", border: "#90A4AE" }, // **Cool Gray-Blue + Gentle Silver**
    },
  };

  return themes[theme][priority.toLowerCase()] || themes[theme]["medium"];
};

const formatDate = (isoString) => {
  if (!isoString) return "No due date"; // Handle null case

  const date = new Date(isoString);

  return date
    .toLocaleString("en-IN", {
      day: "2-digit",
      month: "short", // "FEB"
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // 12-hour format with AM/PM
    })
    .replace(",", "")
    .toUpperCase(); // Remove comma & capitalize
};

function TaskList({ toDo, theme, dispatch }) {
  const priority = toDo.priority.toLowerCase();

  const { background, color, border } = getTaskStyles(priority, theme);

  const progressIcon =
    toDo.status === "Just Added"
      ? "bi bi-clipboard-plus"
      : toDo.status === "In Progress"
      ? "bi bi-clipboard-check"
      : "bi bi-clipboard-check-fill";

  const timeRemaining = useCountdown(toDo.dueDate);

  return (
    <div
      className="task-list"
      style={{
        background,
        color,
        border: `2px solid ${border}`,
        borderRadius: "20px",
      }}
    >
      <div className="tag" style={{ background, color }}>
        <p>{toDo.category}</p>
      </div>
      <div className="task-details">
        <h4>{toDo.title}</h4>
        <p>{toDo.notes}</p>
      </div>
      <div className="other-details">
        <div className="status_n_priority">
          <p>
            Status : {toDo.status} <i className={progressIcon}></i>
          </p>
          <p>Priority : {toDo.priority}</p>
        </div>
        <div className="due_n_added_date">
          <p>Date Added : {formatDate(toDo.dateAdded)}</p>
          <p>Due Date : {formatDate(toDo.dueDate)}</p>
          <p>Time Remaining : {timeRemaining}</p>
        </div>
      </div>
      <div className="btn-container action-buttons">
        <button
          className=""
          onClick={() => dispatch({ type: "EDIT_TODO", payload: toDo })}
        >
          Edit
        </button>
        <button
          className=""
          onClick={() => dispatch({ type: "DELETE_TODO", payload: toDo.index })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskList;
