import TaskList from "./TaskList";
import Filters from "./Filters";

function TODOs({ todos, theme, dispatch, filteredTodos = [], filters }) {
  const displayTodos = filteredTodos.length ? filteredTodos : todos;

  return (
    <div className="todo-container">
      <h2>Your ToDos</h2>
      <Filters dispatch={dispatch} filters={filters} />
      <div className="todo-list-container">
        {displayTodos.map((toDo, index) => (
          <TaskList toDo={toDo} key={index} theme={theme} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default TODOs;
