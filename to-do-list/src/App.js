import { useState } from "react";

const todos = [
  { id: 1, text: "Learn React basics", completed: true },
  { id: 2, text: "Build a Todo List App", completed: false },
  { id: 3, text: "Study state lifting in React", completed: false },
  { id: 4, text: "Practice reusable components", completed: true },
  { id: 5, text: "Implement filtering in Todo App", completed: false },
];

function App() {
  const [toDoList, setToDoList] = useState(todos);
  const [filteredToDoList, setFilteredToDoList] = useState(todos);

  function handleClearAll() {
    setToDoList([]);
    setFilteredToDoList([]);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <div className="add-to-dos">
          <AddToDo
            onSetToDoList={setToDoList}
            onSetFilteredToDoList={setFilteredToDoList}
          />
        </div>
        <div className="display-to-dos">
          <DisplayToDo
            toDoList={filteredToDoList}
            onSetToDoList={setToDoList}
            onSetFilteredToDoList={setFilteredToDoList}
          />
        </div>
        <div className="other-options">
          <div className="sorting">
            <SortList
              toDoList={toDoList}
              onSetFilteredToDoList={setFilteredToDoList}
            />
          </div>
          <Button
            bgColor="#001524"
            width="10rem"
            height="2rem"
            onClick={handleClearAll}
          >
            Clear All
          </Button>
        </div>
      </main>
    </div>
  );
}

function SortList({ toDoList, onSetFilteredToDoList }) {
  const [sort, setSort] = useState("all");

  function handleSortList(sortType) {
    switch (sortType) {
      case "completed":
        onSetFilteredToDoList(toDoList.filter((todo) => todo.completed));
        break;
      case "incomplete":
        onSetFilteredToDoList(toDoList.filter((todo) => !todo.completed));
        break;
      default:
        onSetFilteredToDoList(toDoList);
    }
  }

  return (
    <div>
      <label htmlFor="sort-todos">Sort Todos : </label>
      <select
        id="sort-todos"
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
          handleSortList(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

function DisplayToDo({ toDoList, onSetToDoList, onSetFilteredToDoList }) {
  return (
    <ul>
      {toDoList.map((toDo) => (
        <ToDo
          toDo={toDo}
          key={toDo.id}
          onSetToDoList={onSetToDoList}
          onSetFilteredToDoList={onSetFilteredToDoList}
        />
      ))}
    </ul>
  );
}

function ToDo({ toDo, onSetToDoList, onSetFilteredToDoList }) {
  function handleToggleItem(id) {
    onSetToDoList((prevToDoList) =>
      prevToDoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    onSetFilteredToDoList((prevToDoList) =>
      prevToDoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteToDo(id) {
    onSetToDoList((prevToDoList) =>
      prevToDoList.filter((todo) => todo.id !== id)
    );
    onSetFilteredToDoList((prevToDoList) =>
      prevToDoList.filter((todo) => todo.id !== id)
    );
  }

  return (
    <li>
      <div className="to-do">
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => handleToggleItem(toDo.id)}
        />
        <span
          style={{
            textDecoration: `${toDo.completed ? "line-through" : "none"}`,
          }}
        >
          {toDo.text}
        </span>
      </div>
      <Button
        bgColor="#ae2012"
        width="5rem"
        height="2rem"
        onClick={() => handleDeleteToDo(toDo.id)}
      >
        Delete
      </Button>
    </li>
  );
}

function AddToDo({ onSetToDoList, onSetFilteredToDoList }) {
  const [todo, setToDo] = useState("");

  function handleToDo() {
    if (!todo) return;

    const newToDo = {
      id: crypto.randomUUID(),
      text: todo,
      completed: false,
    };
    onSetToDoList((prevToDoList) => [...prevToDoList, newToDo]);
    onSetFilteredToDoList((prevToDoList) => [...prevToDoList, newToDo]);

    setToDo("");
  }
  return (
    <div className="to-do-input">
      <input
        type="text"
        placeholder="Add your to do"
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <Button bgColor="#3d5a80" width="8rem" onClick={handleToDo}>
        Add
      </Button>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>To Do List</h1>
      <img
        src="/images/Yellow-Sticky-Note-PNG-File.png"
        alt="Yellow sticky note"
      />
    </header>
  );
}

function Button({ children, onClick, bgColor, width, height, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        color: color,
      }}
    >
      {children}
    </button>
  );
}

export default App;
