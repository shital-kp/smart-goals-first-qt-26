import styles from "./page.module.scss";
import RoutesSitemaps from "./component/RoutesSitemaps";

export default function Home() {

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Learning Paths</h1>

      <p className={styles.description}>Following is the sitemap of all the available clickable routes. Visit this <a href="https://github.com/shital-kp/smart-goals-first-qt-26" target="_blank" rel="noopener noreferrer">repo</a> for the source code.</p>
      <RoutesSitemaps />
    </div>
  );
}
