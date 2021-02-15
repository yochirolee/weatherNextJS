import { Fragment } from "react";
import styles from "./main.module.css";

export default function MainInfo({ main }) {
  return (
    <Fragment>
      <div className={styles.main}>
        <div className={styles.mainInfo}>
          <span>Feels Like</span>
          <p>
            {main.feels_like} <span>°C</span>
          </p>
        </div>
        <div className={styles.mainInfo}>
          <span>Humidity </span>
          <p>
            {main.humidity} <span>%</span>
          </p>
        </div>
        <div className={styles.mainInfo}>
          <span>Pressure</span>
          <p>
            {main.pressure} <span>hPa</span>
          </p>
        </div>
        <div className={styles.mainInfo}>
          <span>Max Temp</span>
          <p>
            {main.temp_max} <span>°C</span>
          </p>
        </div>
        <div className={styles.mainInfo}>
          <span>Min Temp</span>
          <p>
            {main.temp_min}
            <span>°C</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
