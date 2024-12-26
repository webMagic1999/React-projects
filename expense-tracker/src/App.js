import { useState } from "react";

const expenses = [
  {
    type: "Food",
    title: "Food Expenses",
    amount: 3997.49,
    date: "2023-05-14",
  },
  {
    type: "Others",
    title: "Gift for Friend",
    amount: 2656.93,
    date: "2023-01-24",
  },
  {
    type: "Food",
    title: "Snacks and Drinks",
    amount: 494.14,
    date: "2023-08-04",
  },
  {
    type: "Others",
    title: "Birthday Gift",
    amount: 4268.79,
    date: "2023-09-23",
  },
  {
    type: "Others",
    title: "General Purchases",
    amount: 7339.12,
    date: "2023-03-23",
  },
  {
    type: "Rent",
    title: "Electricity Bill (March)",
    amount: 7784.52,
    date: "2023-03-30",
  },
  {
    type: "Rent",
    title: "Electricity Bill (January)",
    amount: 7029.14,
    date: "2023-01-09",
  },
  {
    type: "Travel",
    title: "Train Ticket to Delhi",
    amount: 2866.33,
    date: "2023-10-01",
  },
  {
    type: "Rent",
    title: "Grocery Shopping",
    amount: 7455.19,
    date: "2023-11-29",
  },
  { type: "Rent", title: "Home Supplies", amount: 6526.19, date: "2023-08-04" },
  {
    type: "Food",
    title: "Restaurant Bill",
    amount: 1500.0,
    date: "2023-04-22",
  },
  {
    type: "Travel",
    title: "Airfare to New York",
    amount: 12500.0,
    date: "2023-06-15",
  },
  {
    type: "Others",
    title: "Medical Expenses",
    amount: 3500.0,
    date: "2023-02-28",
  },
  { type: "Rent", title: "Water Bill", amount: 450.75, date: "2023-07-10" },
  {
    type: "Food",
    title: "Grocery Shopping",
    amount: 2000.0,
    date: "2023-12-12",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showExpenses, setShowExpenses] = useState(true);
  const [newExpenses, setExpenses] = useState(expenses);

  let totalExpenses = newExpenses
    .reduce((acc, curr) => acc + curr.amount, 0)
    .toFixed(2);

  return (
    <div className="app">
      <Header />
      {showExpenses && (
        <ExpenseList
          newExpenses={newExpenses}
          onSetExpenses={setExpenses}
          totalExpenses={totalExpenses}
        />
      )}
      {isOpen && (
        <AddExpense
          onSetIsOpen={setIsOpen}
          onSetExpenses={setExpenses}
          newExpenses={newExpenses}
        />
      )}
      <Footer
        isOpen={isOpen}
        onSetIsOpen={setIsOpen}
        showExpenses={showExpenses}
        onSetShowExpenses={setShowExpenses}
        onSetExpenses={setExpenses}
        newExpenses={newExpenses}
      />
    </div>
  );
}

function ExpenseList({ newExpenses, totalExpenses, onSetExpenses }) {
  const [sortType, setSortType] = useState("");
  function handleTypeSort() {
    setAmountSortType("");
    setDateSort("");
    let sortedExpenses;
    if (sortType === "") {
      sortedExpenses = [...newExpenses].sort((a, b) =>
        a.type.localeCompare(b.type)
      );
      setSortType("des");
      onSetExpenses(sortedExpenses);
    }
    if (sortType === "des") {
      sortedExpenses = [...newExpenses].sort((a, b) =>
        b.type.localeCompare(a.type)
      );
      setSortType("asc");
      onSetExpenses(sortedExpenses);
    }
    if (sortType === "asc") {
      sortedExpenses = [...expenses];
      setSortType("");
      onSetExpenses(sortedExpenses);
    }
  }

  const [amountSortType, setAmountSortType] = useState("");

  function handleAmountSort() {
    setSortType("");
    setDateSort("");
    let sortedExpenses;
    if (amountSortType === "") {
      sortedExpenses = [...newExpenses].sort((a, b) => a.amount - b.amount);
      setAmountSortType("des");
      onSetExpenses(sortedExpenses);
    }
    if (amountSortType === "des") {
      sortedExpenses = [...newExpenses].sort((a, b) => b.amount - a.amount);
      setAmountSortType("asc");
      onSetExpenses(sortedExpenses);
    }
    if (amountSortType === "asc") {
      sortedExpenses = [...expenses];
      setAmountSortType("");
      onSetExpenses(sortedExpenses);
    }
  }

  const [dateSort, setDateSort] = useState("");
  function handleDateSort() {
    setSortType("");
    setAmountSortType("");
    let sortedExpenses;
    if (dateSort === "") {
      sortedExpenses = [...newExpenses].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setDateSort("des");
      onSetExpenses(sortedExpenses);
    }
    if (dateSort === "des") {
      sortedExpenses = [...newExpenses].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setDateSort("asc");
      onSetExpenses(sortedExpenses);
    }
    if (dateSort === "asc") {
      sortedExpenses = [...expenses];
      setDateSort("");
      onSetExpenses(sortedExpenses);
    }
  }

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th colSpan="2">S. No.</th>
            <th colSpan="3">
              Type{" "}
              <span
                onClick={handleTypeSort}
                style={{
                  color: `${
                    sortType === "asc"
                      ? "#ff4545"
                      : sortType === "des"
                      ? "#72bf78"
                      : ""
                  }`,
                }}
              >
                &uarr;&darr;
              </span>
            </th>
            <th colSpan="8">Title</th>
            <th colSpan="5">
              Amount{" "}
              <span
                onClick={handleAmountSort}
                style={{
                  color: `${
                    amountSortType === "asc"
                      ? "#ff4545"
                      : amountSortType === "des"
                      ? "#72bf78"
                      : ""
                  }`,
                }}
              >
                &uarr;&darr;
              </span>
            </th>
            <th colSpan="5">
              Date{" "}
              <span
                onClick={handleDateSort}
                style={{
                  color: `${
                    dateSort === "asc"
                      ? "#ff4545"
                      : dateSort === "des"
                      ? "#72bf78"
                      : ""
                  }`,
                }}
              >
                &uarr;&darr;
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {newExpenses.map((expense, index) => (
            <tr key={index}>
              <td colSpan="2">{index + 1}</td>
              <td colSpan="3">{expense.type}</td>
              <td colSpan="8">{expense.title}</td>
              <td colSpan="5">{expense.amount}</td>
              <td colSpan="5">{expense.date}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">
              <b>Total Items : {newExpenses.length}</b>
            </td>
            <td colSpan="8"></td>
            <td colSpan="10">
              <b>Total Expenses : {totalExpenses}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

function AddExpense({ onSetIsOpen, onSetExpenses, newExpenses }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("food");

  function handleAddExpenses(event) {
    event.preventDefault();

    if (!expenseName || !amount || !date) return;

    const newExpense = {
      type: category
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" "),
      title: expenseName
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" "),
      amount: amount,
      date: date,
    };

    onSetExpenses([...newExpenses, newExpense]);

    setExpenseName("");
    setAmount("");
    setDate("");
    setCategory("food");
    onSetIsOpen(false);
  }

  function handleClickAddExpense() {
    onSetIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="add-form-container">
      <div className="add-expense">
        <form onSubmit={handleAddExpenses}>
          <h2>Add Expense</h2>
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Math.abs(Number(e.target.value)))}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="travel">Travel</option>
            <option value="others">Others</option>
          </select>
          <Button>Add</Button>
        </form>
        <Button onClick={handleClickAddExpense}>Close</Button>
      </div>
    </div>
  );
}

function Footer({
  isOpen,
  onSetIsOpen,
  showExpenses,
  onSetShowExpenses,
  onSetExpenses,
}) {
  function handleClickAddExpense() {
    onSetIsOpen((isOpen) => !isOpen);
  }

  function handleShowExpenses() {
    onSetShowExpenses((showExpenses) => !showExpenses);
  }

  const [filterValue, setFilterValue] = useState("all");

  function handleFilterChange() {
    let filteredExpenses;
    if (filterValue === "all") {
      filteredExpenses = [...expenses];
    } else {
      filteredExpenses = expenses.filter(
        (expense) => expense.type.toLowerCase() === filterValue
      );
    }
    onSetExpenses(filteredExpenses);
  }

  return (
    <footer>
      <div className="buttons">
        <Button onClick={handleClickAddExpense}>
          {isOpen ? "Close" : "Add Expense"}
        </Button>
        <Button onClick={handleShowExpenses}>
          {showExpenses ? "Hide Expenses" : "View Expenses"}
        </Button>
        <div className="filters">
          <select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="travel">Travel</option>
            <option value="others">Others</option>
          </select>
          <Button onClick={handleFilterChange}>Apply</Button>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header>
      <h1>Expense Tracker</h1>
    </header>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
