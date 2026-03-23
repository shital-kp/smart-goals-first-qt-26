import styles from "./page.module.scss";
import RoutesSitemaps from "./component/RoutesSitemaps";

export default function Home() {

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>My Next.js App</h1>

      <p className={styles.description}>Following is the sitemap of all the available clickable routes</p>
      <RoutesSitemaps />
    </div>
  );
}
