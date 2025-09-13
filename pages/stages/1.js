import { useState } from "react";
import "../styles/Stage.css";

export default function Stage1() {
  const [code, setCode] = useState(""); // guarda o código do jogador
  const [feedback, setFeedback] = useState(""); // mensagem de validação

  // Resposta esperada (simples para validar HTML)
  const requiredTags = ["<h1>", "</h1>"];

  const validateCode = () => {
    const isValid = requiredTags.every(tag => code.includes(tag));
    if (isValid) {
      setFeedback("✅ Parabéns! HTML concluído. Próximo nível desbloqueado!");
    } else {
      setFeedback("❌ Código incorreto. Tente novamente!");
    }
  };

  return (
    <div className="stage-container">
      <h2 className="stage-title">Nível 1: HTML</h2>
      <p className="stage-description">
        Crie um título usando a tag <strong>&lt;h1&gt;</strong> com o texto: <em>"Bem-vindo ao CodeVenture"</em>
      </p>

      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Digite seu código aqui..."
      ></textarea>

      <button className="validate-button" onClick={validateCode}>
        Validar Código
      </button>

      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
}
