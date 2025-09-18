import Head from "next/head";
import "../src/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CodeVenture</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
