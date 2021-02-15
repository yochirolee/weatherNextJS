import { Fragment } from "react";

import styles from './search.module.css'

export default function Search(){

    return (
        <Fragment>
            <div>
                <form>
                <input placeholder='Enter a City' className={styles.input} name='city'></input>
                <button className={styles.btn}>Search</button>
                </form>
            </div>
        </Fragment>
    )
}