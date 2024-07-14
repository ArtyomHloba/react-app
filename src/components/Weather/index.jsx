import { useState, useEffect } from "react";
import { FaRegSun } from "react-icons/fa";
import styles from "./Weather.module.css";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&daily=temperature_2m_max,temperature_2m_min,precipitation_sum";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [forecastDaysCount, setForecastDaysCount] = useState("7");

  useEffect(() => {
    fetch(
      `${WEATHER_API}${forecastDaysCount === "3" ? "&forecast_days=3" : ""}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log("error :>> ", error));
  }, [forecastDaysCount]);

  return (
    <>
      <button onClick={() => setForecastDaysCount("3")}>3</button>
      <button onClick={() => setForecastDaysCount("7")}>7</button>
      <FaRegSun />
      <table className={styles.tableWeather}>
        <caption>Прогноз на {forecastDaysCount} днів</caption>
        <thead>
          <tr>
            {weather?.daily?.time.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weather?.daily?.temperature_2m_max.map((temMax) => (
              <td key={temMax}>{temMax}</td>
            ))}
          </tr>
          <tr>
            {weather?.daily?.temperature_2m_min.map((temMin) => (
              <td key={temMin}>{temMin}</td>
            ))}
          </tr>
          <tr>
            {weather?.daily?.precipitation_sum.map((precSum) => (
              <td key={precSum}>{precSum}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Weather;
