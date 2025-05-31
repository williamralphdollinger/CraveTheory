import Head from 'next/head';
import '../styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat:wght@400;600;700&family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-logo: 'Montserrat', sans-serif;
            --font-tagline: 'Lato', sans-serif;
            --font-body: 'Roboto', sans-serif;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
