import Head from "next/head";
import "../src/styles/globals.css";
import CodeBubbles from "../src/components/CodeBubbles";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head><title>CodeVenture</title></Head>
      <CodeBubbles />
      <div style={{ position: "relative", zIndex: 10 }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}