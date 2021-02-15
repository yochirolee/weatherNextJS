import { Fragment } from "react";
import styles from "./card.module.css";
import MainInfo from "./mainInfo";
import Temperature from "./temperature";

export default function Card({weather}) {
    
  return (
    <Fragment>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>
            <a href="">{weather.name} , {weather.sys.country}</a>
          </div>
        </div>
        <div>
          <Temperature weather={weather}/>
          <MainInfo main={weather.main}/>
        </div>
      </div>
    </Fragment>
  );
}
