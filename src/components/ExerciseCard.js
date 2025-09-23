import { useState, useEffect } from "react";

export default function ExerciseCard({ data, onSuccess, styles }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);

  // 🔥 Sempre que mudar de exercício, reseta o estado
  useEffect(() => {
    setInput("");
    setFeedback(null);
    setCompleted(false);
  }, [data.id]);

  const checkAnswer = () => {
    let isValid = false;

    if (data.validator_pattern) {
      try {
        const regex = new RegExp(data.validator_pattern, "i");
        isValid = regex.test(input.trim());
      } catch (err) {
        console.error("Erro regex:", err);
      }
    } else {
      isValid = input.trim() === data.answer.trim();
    }

    if (isValid) {
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
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <pre className={styles.example}>{data.answer}</pre>

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
