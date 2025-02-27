import { useEffect, useState } from "react";
import { API_KEY } from "../api";
import Loading from "./loading";
import "../css/currentweather.css";

export default function CurrentWeather({ position, query, onSetQuery }) {
  const [currentWeather, setCurrentWeather] = useState();
  const [latLon, setLatLon] = useState(position);
  const FORECAST_DAYS = 7;

  useEffect(() => {
    if (!query) return;

    const runTimer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`
        );

        if (!response.ok) {
          throw new Error(`Something went wrong! Couldn't find ${query}`);
        }

        const data = await response.json();

        if (data.length === 0) {
          throw new Error(`No results found for "${query}"`);
        }

        setLatLon({ lat: data[0].lat, lon: data[0].lon });
      } catch (error) {
        console.error(error.message);
      }
    }, 1000);

    return () => clearTimeout(runTimer);
  }, [query, onSetQuery]);

  // Current Weather //  Hourly forecast // 7 Day Forecast
  useEffect(() => {
    if (!latLon) return;

    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchCurrentDayForecast() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latLon.lat},${latLon.lon}&days=${FORECAST_DAYS}&aqi=yes&alerts=yes`,
          { signal }
        );

        if (!response.ok)
          throw new Error("Something went wrong! Please try again");

        const data = await response.json();
        setCurrentWeather(data);
      } catch (error) {}
    }

    fetchCurrentDayForecast();
    const intervalId = setInterval(fetchCurrentDayForecast, 3600000); // 1 hour in milliseconds

    return function () {
      controller.abort();
      clearInterval(intervalId);
    };
  }, [latLon]);

  function getAQIDescription(index) {
    const levels = [
      "Good",
      "Moderate",
      "Unhealthy for Sensitive Groups",
      "Unhealthy",
      "Very Unhealthy",
      "Hazardous",
    ];
    return levels[index - 1] || "Unknown";
  }

  return (
    <div className="current_weather">
      {currentWeather ? (
        <>
          {/* Location and Temperature */}
          <div className="weather-main">
            <h2>{currentWeather.location.name}</h2>
            <p className="current-temp">
              {currentWeather.current.temp_c}
              <sup>&deg;</sup>
            </p>
            <p>
              Feels Like: {currentWeather.current.feelslike_c.toFixed(2)}
              <sup>&deg;</sup>
            </p>
            <p>
              L:{" "}
              {currentWeather.forecast.forecastday[0].day.mintemp_c.toFixed(2)}
              <sup>&deg;</sup> | H:{" "}
              {currentWeather.forecast.forecastday[0].day.maxtemp_c.toFixed(2)}
              <sup>&deg;</sup>
            </p>
            <p>{currentWeather.forecast.forecastday[0].day.condition.text}</p>
          </div>
          {/* Sun & Moon Information */}
          <div className="astro-info">
            <div className="sun">
              <h3>☀️ Sun</h3>
              <p>
                Sunrise : {currentWeather.forecast.forecastday[0].astro.sunrise}
              </p>
              <p>
                Sunset : {currentWeather.forecast.forecastday[0].astro.sunset}
              </p>
            </div>
            <div className="moon">
              <h3>🌕 Moon</h3>
              <p>
                Phase :{" "}
                {currentWeather.forecast.forecastday[0].astro.moon_phase}
              </p>
              <p>
                Moonrise :{" "}
                {currentWeather.forecast.forecastday[0].astro.moonrise}
              </p>
              <p>
                Moonset : {currentWeather.forecast.forecastday[0].astro.moonset}
              </p>
            </div>
          </div>
          {/* 24Hr forecast */}
          <div className="todays-forecast">
            <h3>🕒 Hourly Forecast</h3>
            <div className="hourly-forecast">
              {currentWeather.forecast.forecastday[0].hour.map(
                (hour, index) => (
                  <div key={index}>
                    <p>
                      {new Date(
                        `2025-02-16T${hour.time.slice(11)}`
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                    <img src={hour.condition.icon} alt="" />
                    <p>
                      {hour.temp_c.toFixed(2)}
                      <sup>&deg;</sup>
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          {/* 3 Day Forecast */}
          <div className="three-day-forecast">
            <h3>🗓️ {FORECAST_DAYS} Day Forecast</h3>
            <div className="forecast-info">
              {currentWeather.forecast.forecastday.map((day, index) => (
                <div className="day" key={index}>
                  <p>
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </p>

                  <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                  />
                  <p>
                    L: {day.day.mintemp_c.toFixed(2)}
                    <sup>&deg;</sup> | H: {day.day.maxtemp_c.toFixed(2)}
                    <sup>&deg;</sup>
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Atmospheric Conditions */}
          <div className="atmosphere">
            <h3>☁️ Atmospheric Conditions</h3>
            <div className="atmospheric-conditions">
              <p>
                Humidity :{" "}
                {currentWeather.forecast.forecastday[0].day.avghumidity}%
              </p>
              <p>
                Visibility :{" "}
                {currentWeather.forecast.forecastday[0].day.avgvis_km} Km
              </p>
              <p>UV Index : {currentWeather.current.uv}</p>
            </div>
          </div>

          <div className="wind">
            <h3>💨 Wind</h3>
            <div className="wind-info">
              <p>Speed : {currentWeather.current.wind_kph} kph</p>
              <p>
                Max Speed :{" "}
                {currentWeather.forecast.forecastday[0].day.maxwind_kph} kmh
              </p>
              <p>
                Direction : {currentWeather.current.wind_degree}
                <sup>&deg;</sup> {currentWeather.current.wind_dir}
              </p>
              <p>Wind Chill : {currentWeather.current.windchill_c}</p>
              <p>Gust Speed : {currentWeather.current.gust_kph} kph</p>
            </div>
          </div>
          <div className="air-quality">
            <h3>Air Quality Index</h3>
            <div className="air-quality-info">
              <p>
                CO:{" "}
                {currentWeather.forecast.forecastday[0].day.air_quality.co.toFixed(
                  2
                )}{" "}
                µg/m³
              </p>
              <p>
                NO₂:{" "}
                {currentWeather.forecast.forecastday[0].day.air_quality.no2.toFixed(
                  2
                )}{" "}
                µg/m³
              </p>
              <p>
                O₃:{" "}
                {currentWeather.forecast.forecastday[0].day.air_quality.o3.toFixed(
                  2
                )}{" "}
                µg/m³
              </p>
              <p>
                SO₂:{" "}
                {currentWeather.forecast.forecastday[0].day.air_quality.so2.toFixed(
                  2
                )}{" "}
                µg/m³
              </p>
              <p>
                PM2.5:{" "}
                {currentWeather.forecast.forecastday[0].day.air_quality.pm2_5.toFixed(
                  2
                )}{" "}
                µg/m³
              </p>
              <p>
                PM10:{" "}
                {currentWeather.forecast.forecastday[0].day.air_quality.pm10.toFixed(
                  2
                )}{" "}
                µg/m³
              </p>
              <p>
                US AQI:{" "}
                {getAQIDescription(
                  currentWeather.forecast.forecastday[0].day.air_quality[
                    "us-epa-index"
                  ]
                )}
              </p>
              <p>
                UK AQI:{" "}
                {getAQIDescription(
                  currentWeather.forecast.forecastday[0].day.air_quality[
                    "gb-defra-index"
                  ]
                )}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
