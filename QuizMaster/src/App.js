import { useState } from "react";

// Main App component
function App({ data, definitions }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const quizLength = data[selectedCategoryKey]?.length;

  function handleCategorySelect(key) {
    setSelectedCategoryKey(key);
    setCurrentPage("category");
  }

  function handleBackToHome() {
    setCurrentPage("home");
    setCorrectAnswersCount(0);
  }

  function handleStartQuiz() {
    setCurrentPage("quiz");
  }

  function handleBackToCategorys() {
    setCurrentPage("category");
  }

  function handleFinishQuiz() {
    setCurrentPage("finish");
  }

  function handleSetIsCorrect(isCorrect) {
    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  }

  return (
    <div className="App">
      <Header />

      {currentPage === "home" && (
        <Categories data={data} onCategorySelect={handleCategorySelect} />
      )}

      {currentPage === "category" && (
        <QuizCategory
          category={data[selectedCategoryKey]}
          selectedCategoryKey={selectedCategoryKey}
          onHandleBack={handleBackToHome}
          onHandleStartQuiz={handleStartQuiz}
          definitions={definitions[selectedCategoryKey]}
        />
      )}

      {currentPage === "quiz" && (
        <Questions
          category={data[selectedCategoryKey]}
          onHandleBack={handleBackToCategorys}
          onHandleFinishQuiz={handleFinishQuiz}
          onSetIsCorrect={handleSetIsCorrect}
        />
      )}

      {currentPage === "finish" && (
        <Finish
          onHandleBack={handleBackToHome}
          correctAnswersCount={correctAnswersCount}
          length={quizLength}
        />
      )}

      <Footer />
    </div>
  );
}

// Finish component
function Finish({ onHandleBack, correctAnswersCount, length }) {
  return (
    <main>
      <div className="finish">
        <h2>Congratulations!</h2>
        <p>You have successfully completed the quiz.</p>
        <p>
          You have answered {correctAnswersCount}/{length} questions correctly.
        </p>
        <div className="buttons-quiz">
          <Button className="back__to__home" onClick={onHandleBack}>
            Home
          </Button>
        </div>
      </div>
    </main>
  );
}

// QuizCategory component
function QuizCategory({
  selectedCategoryKey,
  onHandleBack,
  onHandleStartQuiz,
  definitions,
}) {
  return (
    <main>
      <div className="play-quiz">
        <h2>{selectedCategoryKey}</h2>
        {definitions.map((definition, index) => (
          <p key={index}>
            <strong>{definition.title} : </strong>
            {definition.definition}
          </p>
        ))}
      </div>
      <div className="buttons-quiz">
        <Button className="back__to__home" onClick={onHandleBack}>
          &larr; Home{" "}
        </Button>
        <Button className="start__quiz" onClick={onHandleStartQuiz}>
          Start Quiz &rarr;
        </Button>
      </div>
    </main>
  );
}

// Questions component
function Questions({
  category,
  onHandleBack,
  onHandleFinishQuiz,
  onSetIsCorrect,
}) {
  return (
    <main>
      <div className="quiz-container">
        <div className="buttons-quiz">
          <Button className="back__to__home" onClick={onHandleBack}>
            &larr; Back{" "}
          </Button>
          <Button className="start__quiz" onClick={onHandleFinishQuiz}>
            Finish &rarr;
          </Button>
        </div>

        {category.map((question, index) => (
          <Question
            key={index}
            question={question}
            index={index}
            onSetIsCorrect={onSetIsCorrect}
          />
        ))}

        <div className="buttons-quiz">
          <Button className="back__to__home" onClick={onHandleBack}>
            &larr; Back{" "}
          </Button>
          <Button className="start__quiz" onClick={onHandleFinishQuiz}>
            Finish &rarr;
          </Button>
        </div>
      </div>
    </main>
  );
}

// Question component
function Question({ question, index, onSetIsCorrect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionChange(event) {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    onSetIsCorrect(question.isCorrect(selectedOption));
  }

  return (
    <div className="question">
      <h5>
        Q{`${index + 1 < 10 ? `0${index + 1}` : index + 1}`} {question.question}
      </h5>
      <ul>
        {question.options.map((option, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />{" "}
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Categories component
function Categories({ data, onCategorySelect }) {
  return (
    <main>
      {Object.entries(data).map(([key, category]) => (
        <Category
          key={key}
          categoryName={key}
          onClick={() => onCategorySelect(key)}
        />
      ))}
    </main>
  );
}

// Category component
function Category({ categoryName, onClick }) {
  return (
    <div className="category">
      <h5>{categoryName.toUpperCase()}</h5>
      <Button className="category__button" onClick={onClick}>
        Click to start <span>&rarr;</span>
      </Button>
    </div>
  );
}

// Button component
function Button({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// Header component
function Header() {
  return (
    <header>
      <h1>QuizMaster</h1>
    </header>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>
        Created by{" "}
        <a href="https://www.linkedin.com/in/gourav-mishra-622657255/">
          Gourav Mishra
        </a>
      </p>
    </footer>
  );
}

export default App;
