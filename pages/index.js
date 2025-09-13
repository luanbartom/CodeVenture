import Link from "next/link";
import "../styles/Home.css"; // Importa o CSS separado

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🚀 CodeVenture</h1>
      
      <p className="home-description">
        Bem-vindo ao mini game de programação! <br />
        Complete os desafios de código para desbloquear novos níveis, 
        começando por <span className="highlight-html">HTML</span>, depois 
        <span className="highlight-css">CSS</span>, 
        <span className="highlight-js">JavaScript</span> e muito mais.
      </p>

      <Link href="/stages/1">
        <button className="start-button">🎮 Iniciar Jogo</button>
      </Link>
    </div>
  );
}
