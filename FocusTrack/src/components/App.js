import { useReducer, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  isOpen: false,
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filteredTodos: JSON.parse(localStorage.getItem("todos")) || [],
  filters: {
    priority: "",
    status: "",
    category: "",
  },
  newToDo: {
    title: "",
    priority: "Low",
    status: "Just Added",
    dateAdded: new Date().toISOString().slice(0, 16),
    dueDate: "",
    category: "Others",
    notes: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };

    case "TOGGLE_MODAL":
      return {
        ...state,
        isOpen: !state.isOpen, // Reset form only when closing the modal
        newToDo: !state.isOpen ? initialState.newToDo : state.newToDo,
        editId: !state.isOpen ? null : state.editId, // Reset edit mode when closing
        error: null, // Clear any errors
      };

    case "UPDATE_FIELD":
      return {
        ...state,
        newToDo: { ...state.newToDo, [action.field]: action.value },
      };

    case "EDIT_TODO":
      return {
        ...state,
        newToDo: { ...action.payload },
        editId: action.payload.index,
        isOpen: true,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };

    case "ADD_TODO":
      const { title, notes } = state.newToDo;

      if (!title.trim()) {
        return { ...state, error: "Title cannot be empty!" };
      }
      if (notes.trim().length < 10) {
        return {
          ...state,
          error: "Notes must be at least 10 characters long!",
        };
      }

      if (state.editId !== null) {
        // Editing an existing task
        const updatedTodos = state.todos.map((todo, index) =>
          index === state.editId
            ? { ...state.newToDo, dateAdded: todo.dateAdded }
            : todo
        );

        return {
          ...state,
          todos: updatedTodos,
          newToDo: initialState.newToDo, // Reset form
          isOpen: false,
          editId: null, // Reset edit mode
          error: null,
        };
      } else {
        // Adding a new task
        const newTodoWithDate = {
          ...state.newToDo,
          dateAdded: new Date().toISOString(),
          index: state.todos.length,
        };

        return {
          ...state,
          todos: [...state.todos, newTodoWithDate],
          newToDo: initialState.newToDo, // Reset form
          isOpen: false, // Close modal
          error: null, // Clear error on success
        };
      }

    case "FILTER_TODOS":
      const { filterType, value } = action;
      const filters = {
        priority: filterType === "priority" ? value : "",
        status: filterType === "status" ? value : "",
        category: filterType === "category" ? value : "",
      };

      const filteredTodos = state.todos.filter((todo) => {
        const matchesPriority = filters.priority
          ? todo.priority === filters.priority
          : true;
        const matchesStatus = filters.status
          ? todo.status === filters.status
          : true;
        const matchesCategory = filters.category
          ? todo.category === filters.category
          : true;

        return matchesPriority && matchesStatus && matchesCategory;
      });

      return {
        ...state,
        filters,
        filteredTodos,
      };

    default:
      break;
  }
}

function App() {
  const [{ theme, isOpen, todos, newToDo, filteredTodos, filters }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`app ${theme}`}>
      <Header dispatch={dispatch} theme={theme} todos={todos} />
      <Main
        isOpen={isOpen}
        dispatch={dispatch}
        todos={todos}
        theme={theme}
        newToDo={newToDo}
        filteredTodos={filteredTodos}
        filters={filters}
      />
    </div>
  );
}

export default App;
