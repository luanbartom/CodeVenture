import { useState, useEffect } from "react";
import base from "../styles/Components.module.css";

export default function ExerciseCard({ data, onSuccess, styles }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setInput("");
    setFeedback(null);
    setCompleted(false);
  }, [data]);

  const checkAnswer = () => {
    if (input.trim() === data.answer.trim()) {
      setFeedback({ type: "success", message: "✅ Correto!" });
      setCompleted(true);
      setTimeout(() => {
        setFeedback(null);
        setInput("");
        onSuccess();
      }, 1000);
    } else {
      setFeedback({ type: "error", message: "❌ Tente novamente!" });
    }
  };

  return (
    <div className={`${base.card} ${styles.card} ${completed ? base.completed : ""}`}>
      {/* Lição rápida */}
      <h2 className={styles.title}>{data.lesson.title}</h2>
      <p>{data.lesson.text}</p>
      <pre className={base.example}>{data.lesson.example}</pre>

      {/* Exercício */}
      <h3 style={{ marginTop: "15px" }}>{data.question}</h3>
      {!completed && (
        <>
          <textarea
            className={base.textarea}
            rows="4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite o código aqui..."
          />
          <button className={styles.btn} onClick={checkAnswer}>
            Verificar
          </button>
        </>
      )}

      {feedback && (
        <p className={`${base.feedback} ${feedback.type === "success" ? styles.success : styles.error}`}>
          {feedback.message}
        </p>
      )}

      {/* 🔥 Box extra explicativa */}
      {data.extra && (
        <div className={base.extraBox}>
          <h4>Explicação Didática</h4>
          <p>{data.extra}</p>
        </div>
      )}
    </div>
  );
}
