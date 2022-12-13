import '../styles/globals.css';
import { Questrial } from '@next/font/google';

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={questrial.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
