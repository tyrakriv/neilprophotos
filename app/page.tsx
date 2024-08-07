import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photographer's Portfolio</title>
        <meta name="description" content="Showcase of photography work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Photography Portfolio
        </h1>
        <p className={styles.description}>
          Discover my latest articles and photo collections.
        </p>

        <div className={styles.grid}>
          {/* Add sections for articles and photo collections */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Your Name
        </a>
      </footer>
    </div>
  );
}
