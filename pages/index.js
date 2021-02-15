import Head from "next/head";
import styles from "../styles/Home.module.css";
import Search from "../components/Search/search";
import Card from "../components/Card/card";
import { getCityWeather } from "../lib/open_weather";

export default function Home({ weather }) {
  console.log(weather)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Search />
        </h1>

        <Card weather={weather}></Card>
      </main>

      <footer className={styles.footer}>
        Powered by
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  
  const res = await getCityWeather(context.query.city);
  const weather = await JSON.parse(JSON.stringify(res));
  return { props: { weather } };
}
