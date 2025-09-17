import Link from "next/link";
import styles from "../styles/Home.module.css"; // mesma lógica


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CodeVenture 🚀</h1>
      <p className={styles.subtitle}>
        Aprenda HTML, CSS e JavaScript jogando!
      </p>
      <Link href="/game">
        <button className={styles.startButton}>Iniciar Jogo</button>
      </Link>
    </div>
  );
}