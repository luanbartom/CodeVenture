import Link from "next/link";
import Head from "next/head";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodeVenture</title>
      </Head>

      {/* Fundo de bolhas de código */}
      <div className={styles.codeArea}>
        <div className={styles.codeBubble} style={{ left: "10%", animationDuration: "12s" }}>{"<h1>"}</div>
        <div className={styles.codeBubble} style={{ left: "25%", animationDuration: "15s" }}>{"const x = 10;"}</div>
        <div className={styles.codeBubble} style={{ left: "40%", animationDuration: "18s" }}>{"<p>Hello</p>"}</div>
        <div className={styles.codeBubble} style={{ left: "60%", animationDuration: "14s" }}>{"if (true) {}"}</div>
        <div className={styles.codeBubble} style={{ left: "75%", animationDuration: "20s" }}>{"<div>"}</div>
        <div className={styles.codeBubble} style={{ left: "90%", animationDuration: "16s" }}>{"function()"}</div>
      </div>

      {/* Conteúdo central */}
      <div className={styles.heroBox}>
        <img src="/logo.png" alt="CodeVenture" className={styles.logo} />
        <p className={styles.subtitle}>
          Aprenda HTML, CSS, JavaScript e React passo a passo, em uma jornada interativa.
        </p>
        <Link href="/game">
          <button className={styles.startButton}>Iniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
