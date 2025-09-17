import { useState } from "react";
import styles from "../../styles/Components.module.css";

export default function ExerciseCard({ data, onSuccess }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);

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
    <div className={`${styles.card} ${completed ? styles.completed : ""}`}>
      {/* Lição */}
      <h2>{data.lesson.title}</h2>
      <p>{data.lesson.text}</p>
      <pre className={styles.example}>
        {data.lesson.example}
      </pre>

      {/* Exercício */}
      <h3 style={{ marginTop: "15px" }}>{data.question}</h3>
      {!completed && (
        <>
          <textarea
            className={styles.textarea}
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
        <p className={`${styles.feedback} ${styles[feedback.type]}`}>
          {feedback.message}
        </p>
      )}
    </div>
  );
}
