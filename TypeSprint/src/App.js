import { useCallback, useEffect, useState } from "react";
import typingTestParagraphs from "./paragraph";
import Content from "./content";

function App() {
  return (
    <div className="App">
      <Header />
      <Main paragraphs={typingTestParagraphs} />
    </div>
  );
}

function Main({ paragraphs }) {
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  const maxTime = 60;
  const [startTime, setStartTime] = useState(null);
  const [paragraph, setParagraph] = useState(paragraphs[ranIndex]);
  const [word, setWord] = useState("");
  const [time, setTime] = useState(maxTime);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [mistake, setMistake] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  function handleInput(e) {
    if (!isActive) return;
    const { value } = e.target;

    setWord(value);
    setCharIndex(value.length);

    if (!startTime) {
      setStartTime(Date.now());
    }
    const { mistakes, cpm, wpm, accuracy } = calculateResult(paragraph, value);

    setMistake(mistakes);
    setCpm(cpm);
    setWpm(wpm);
    setAccuracy(accuracy);
  }

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        setTime(maxTime - elapsedTime);

        if (elapsedTime >= maxTime) {
          clearInterval(interval);
          setIsActive(false);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime]);

  function calculateResult(originalValue, typedValue) {
    const mistakes = typedValue.split("").reduce((acc, typedChar, index) => {
      return typedChar !== originalValue[index] ? acc + 1 : acc;
    }, 0);

    const elapsedTime = (Date.now() - startTime) / 60000; // Time in minutes
    const cpm = (typedValue.length - mistakes) / elapsedTime;
    const wpm = typedValue.length / 5 / elapsedTime; // 5 char = 1 word

    const accuracy = ((typedValue.length - mistakes) / typedValue.length) * 100;

    return { mistakes, cpm, wpm, accuracy };
  }

  const callBackRef = useCallback((inputEl) => {
    if (inputEl) {
      document.addEventListener("keydown", () => inputEl.focus());
    }
  }, []);

  function handleReset() {
    setParagraph(paragraphs[ranIndex]);
    setWord("");
    setTime(maxTime);
    setWpm(0);
    setCpm(0);
    setMistake(0);
    setAccuracy(0);
    setCharIndex(0);
    setStartTime(null);
    setIsActive(true);
  }

  return (
    <main className="main">
      <input
        type="text"
        value={word}
        onChange={handleInput}
        autoFocus
        ref={callBackRef}
      />
      <Content paragraph={paragraph} word={word} charIndex={charIndex} />
      <div className="stats">
        <div className="timer">
          <p>{time > 0 ? `${time} seconds` : "Try again!"}</p>
        </div>

        <div className="wpm">
          <p>{Math.floor(wpm)} words/minute</p>
        </div>

        <div className="cpm">
          <p>{Math.floor(cpm)} chars/minute</p>
        </div>

        <div className="mistakes">
          <p>{mistake} mistakes</p>
        </div>

        <div className="accuracy">
          <p>{Math.floor(accuracy)} % accuracy</p>
        </div>
      </div>

      <div className="buttons">
        <button onClick={handleReset}>
          Retry <span>&#x27F3;</span>
        </button>
      </div>
    </main>
  );
}

function Header() {
  return (
    <nav>
      <h1>TypeSprint</h1>
      <h2>Test Your Typing Speed</h2>
    </nav>
  );
}

export default App;
