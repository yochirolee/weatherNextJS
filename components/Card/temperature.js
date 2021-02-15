import { Fragment } from "react";
import styles from "./temp.module.css";
import Image from "next";

export default function Temperature({ weather }) {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.imageDescription}>
          <img
            alt=""
            src={
              `https://openweathermap.org/img/wn/` +
              weather.weather[0].icon +
              "@2x.png"
            }
          />
          {weather.weather[0].description}
        </div>
        <div className={styles.temp}>
          <h3>{weather.main.temp} °C</h3>
        </div>
      </div>
    </Fragment>
  );
}
