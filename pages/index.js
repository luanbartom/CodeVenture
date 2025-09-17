import Link from "next/link";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CodeVenture 🚀</h1>
      <p className={styles.subtitle}>
        Aprenda HTML, CSS, JavaScript e React passo a passo, em uma jornada interativa.
      </p>
      <Link href="/game">
        <button className={styles.startButton}>Iniciar Jogo</button>
      </Link>
    </div>
  );
}
