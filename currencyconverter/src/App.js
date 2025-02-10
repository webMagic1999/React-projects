import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const API_URL = "https://api.frankfurter.app/latest?amount=";

export default function App() {
  const [currValue, setCurrValue] = useState(1);
  const [finalValue, setFinalValue] = useState(1);
  const [fromCountry, setFromCountry] = useState("USD");
  const [toCountry, setToCountry] = useState("EUR");
  const [convertedValue, setConvertedValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleCurrValue(e) {
    if (e.target.value === "" || isNaN(e.target.value)) return setCurrValue(1);
    setCurrValue(Number(e.target.value));
  }

  function handleSelectedFromValue(e) {
    setFromCountry(e.target.value);
  }
  function handleSelectedToValue(e) {
    setToCountry(e.target.value);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFinalValue(currValue);
    }, 500);

    return function () {
      clearTimeout(timeOut);
    };
  }, [currValue]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (fromCountry === toCountry) return setConvertedValue(finalValue);

    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${API_URL}${finalValue}&from=${fromCountry}&to=${toCountry}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setConvertedValue(data.rates[toCountry]);
      } catch (error) {
        if (error.name !== "AbortError") console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return function () {
      controller.abort();
    };
  }, [finalValue, fromCountry, toCountry]);

  return (
    <>
      <Header />
      <Main
        currValue={currValue}
        onHandleCurrValue={handleCurrValue}
        fromCountry={fromCountry}
        onSelectFromCountry={handleSelectedFromValue}
        toCountry={toCountry}
        onSelectToCountry={handleSelectedToValue}
        convertedValue={convertedValue}
        isLoading={isLoading}
        onSetLoading={setIsLoading}
      />
    </>
  );
}

function Main({
  currValue,
  onHandleCurrValue,
  fromCountry,
  onSelectFromCountry,
  toCountry,
  onSelectToCountry,
  convertedValue,
  isLoading,
  onSetLoading,
}) {
  const [currenciesList, setCurrenciesList] = useState([]);

  useEffect(() => {
    async function fetchCurrenciesList() {
      try {
        onSetLoading(true);
        const response = await fetch(
          "https://api.frankfurter.dev/v1/currencies"
        );

        if (!response.ok) throw new Error("Failed to fetch currencies list");

        const data = await response.json();
        setCurrenciesList(data);
      } catch (error) {
        console.error(error);
      } finally {
        onSetLoading(false);
      }
    }

    fetchCurrenciesList();
  }, [onSetLoading]);

  function handleCurrencyList() {
    return Object.entries(currenciesList).map(([currency, country]) => (
      <option key={currency} value={currency}>
        {currency} ({country})
      </option>
    ));
  }

  function handleCurrSwap() {
    onSelectFromCountry({ target: { value: toCountry } });
    onSelectToCountry({ target: { value: fromCountry } });
  }

  return (
    <main>
      <p>
        Effortlessly convert currencies with real-time exchange rates. Simply
        enter an amount, select your currencies, and get instant results. Stay
        updated with accurate conversions for seamless transactions.
      </p>

      <div className="converter">
        <input
          type="text"
          value={currValue}
          onChange={(e) => onHandleCurrValue(e)}
          placeholder="Enter amount"
          disabled={isLoading}
        />
        <div className="select-currency">
          <select
            value={fromCountry}
            onChange={(e) => onSelectFromCountry(e)}
            disabled={isLoading}
          >
            {handleCurrencyList()}
          </select>
          <button onClick={handleCurrSwap} disabled={isLoading}>
            <p>&rarr;</p>
            <p>&larr;</p>
          </button>
          <select
            value={toCountry}
            onChange={(e) => onSelectToCountry(e)}
            disabled={isLoading}
          >
            {handleCurrencyList()}
          </select>
        </div>
        <p>
          {currValue} {fromCountry} is equal to {convertedValue} {toCountry}
        </p>
      </div>
      <div className="trend-chart">
        <TrendChart
          fromCountry={fromCountry}
          toCountry={toCountry}
          isLoading={isLoading}
          onSetLoading={onSetLoading}
        />
      </div>
    </main>
  );
}

function TrendChart({ fromCountry, toCountry, isLoading, onSetLoading }) {
  const [fromDate, setFromDate] = useState("2024-12-31");
  const [toDate, setToDate] = useState("2025-01-31");
  const [trendData, setTrendData] = useState({});

  function handleFromDate(e) {
    setFromDate(e.target.value);
  }

  function handleToDate(e) {
    setToDate(e.target.value);
  }

  useEffect(() => {
    async function fetchTrends() {
      try {
        onSetLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/${fromDate}..${toDate}?from=${fromCountry}&to=${toCountry}`
        );

        if (!response.ok)
          throw new Error("Failed to fetch currency trend chart");

        const data = await response.json();
        setTrendData(data.rates);
      } catch (error) {
        console.error(error);
      } finally {
        onSetLoading(false);
      }
    }

    fetchTrends();
  }, [fromCountry, toCountry, fromDate, toDate, onSetLoading]);

  const formattedTrendData = Object.entries(trendData).map(([date, rates]) => ({
    date,
    rate: rates[toCountry],
  }));

  return (
    <>
      <div className="select-dates">
        <div className="date-from">
          <label htmlFor="from">From : </label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => handleFromDate(e)}
            disabled={isLoading}
            id="from"
          />
        </div>
        <div className="date-to">
          <label htmlFor="to">To : </label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => handleToDate(e)}
            id="to"
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="rate-trend-chart">
        {formattedTrendData.length > 0 && (
          <CurrencyTrendChart data={formattedTrendData} />
        )}
      </div>
      <div className="other-info">
        <OtherInfo />
      </div>
    </>
  );
}

function CurrencyTrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="rate"
          stroke="#8884d8"
          strokeWidth={1}
          dot={false}
          activeDot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function OtherInfo() {
  return (
    <>
      <h4>1. Currency Insights</h4>
      <p>
        Stay informed with real-time exchange rates and historical trends. Make
        confident financial decisions with accurate currency conversions at your
        fingertips.
      </p>

      <h4>2. Why Use This Converter?</h4>
      <p>
        Our currency converter provides up-to-date exchange rates with a
        seamless user experience. Whether you're traveling, investing, or
        shopping internationally, convert currencies effortlessly.
      </p>

      <h4>3. How Exchange Rates Work</h4>
      <p>
        Exchange rates fluctuate due to economic factors like inflation,
        interest rates, and market demand. Check our trend chart to analyze past
        performance before making a transaction.
      </p>

      <h4>4. Tips for Currency Conversion</h4>
      <p>Double-check exchange rates before transactions.</p>
      <p>Consider fees from banks or exchange platforms.</p>
      <p>Monitor trends for better conversion opportunities.</p>
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Currency Converter 💱</h1>
    </header>
  );
}
