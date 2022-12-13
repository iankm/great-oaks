import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../components/Logo';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Great Oaks Venture Capital</title>
        <meta
          name="description"
          content="Great Oaks is an early-stage venture investment firm that invests in seed and series a investments in tech-based startups."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            flexDirection: 'column',
            gap: 42,
          }}
        >
          <div style={{ position: 'relative' }}>
            <Logo />
          </div>
          <h1
            style={{
              flex: 1,
              margin: '0 auto',
              whiteSpace: 'nowrap',
            }}
          >
            New Website Coming Soon
          </h1>
        </div>
      </main>
    </div>
  );
}
