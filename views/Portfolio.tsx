import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../components/Logo';
import { LinkedinLogo } from 'phosphor-react';

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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            gap: 24,
          }}
        >
          <div>
            <Logo />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
            }}
          >
            <img
              alt="Great Oaks Venture Capital Wordmark"
              src={'/assets/images/go-wordmark.png'}
              style={{ width: '250px', aspectRatio: '3.5/1' }}
            />
            <h3
              style={{
                flex: 1,
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              New Website Coming Soon
            </h3>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, paddingBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
            }}
          >
            <a
              href="https://www.linkedin.com/company/great-oaks-venture-capital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size="32px" />
            </a>
            <a
              href="https://www.google.com/maps/place/667+Madison+Ave+%2317th,+New+York,+NY+10065/@40.7645418,-73.9725191,17z/data=!4m5!3m4!1s0x89c258efc257b949:0x3a27aad09f355b9e!8m2!3d40.7645378!4d-73.9703304"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              667 Madison Avenue, 17th Floor, New York, New York 10065
            </a>
            <a
              href="mailto:info@greatoaksvc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              info@greatoaksvc.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
