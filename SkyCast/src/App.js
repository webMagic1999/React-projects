import { useState } from "react";
import Header from "./components/header";
import Error from "./components/error";
import CurrentWeather from "./components/currentweather";
import { useGeoLocation } from "./useGeoLocation";
import Loading from "./components/loading";

function App() {
  const [query, setQuery] = useState("");

  const { position, error, isLoading } = useGeoLocation();

  return (
    <div className="App">
      <Header query={query} onSetQuery={setQuery} />
      <main>
        {error ? (
          <Error error={error} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <CurrentWeather
            position={position}
            query={query}
            onSetQuery={setQuery}
          />
        )}
      </main>
    </div>
  );
}

export default App;
