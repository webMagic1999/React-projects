import Modal from "./Modal";
import TODOs from "./TODOs";
import NoTODOs from "./NoTODOs";

function Main({
  isOpen,
  dispatch,
  todos,
  theme,
  newToDo,
  filteredTodos,
  filters,
}) {
  return (
    <main>
      {isOpen && <Modal dispatch={dispatch} newToDo={newToDo} />}
      {todos.length === 0 && <NoTODOs dispatch={dispatch} />}
      {todos.length !== 0 && (
        <TODOs
          todos={todos}
          theme={theme}
          dispatch={dispatch}
          filteredTodos={filteredTodos}
          filters={filters}
        />
      )}
    </main>
  );
}

export default Main;
