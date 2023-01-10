import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className="title">
         <p>Expand the boundaries of your collection.</p>
         <p>Design your BTS photocard binder virtually.</p>
        </h1>

        <div className={styles.grid}>
          <Link href="/posts/masterlist" className={styles.card}>
            <h3>Masterlist &rarr;</h3>
            <p>View a masterlist of all BTS photocards released as of 12/23/22.</p>
            </Link>

          <a href="/posts/create" className={styles.card}>
            <h3>Sign Up / Log In &rarr;</h3>
            <p>Create an account or log in to track and organize your collection.</p>
          </a>

          <a
            href="/posts/virtualbinder"
            className={styles.card}>
            <h3>Virtual Binder &rarr;</h3>
            <p>Demo a virtual binder layout or log in to design your own personal project.</p>
          </a>

          <a
            href=""
            className={styles.card}>
            <h3>Discord &rarr;</h3>
            <p>
              Join our Discord to chat with other photocard collectors and site admins.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}