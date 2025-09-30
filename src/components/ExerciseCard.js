import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function ExerciseCard({ data, onSuccess, styles, language }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);

  // 🔄 reseta estado quando troca exercício
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

  // 🔥 Monta preview dependendo da linguagem
  let previewContent = "";

  if (language === "html") {
    previewContent = input;
  } else if (language === "css") {
    previewContent = `
      <html>
        <head>
          <style>${input}</style>
        </head>
        <body>
          <div class="box">.box</div>
          <h1>Título H1</h1>
          <p>Parágrafo de exemplo</p>
        </body>
      </html>
    `;
  }

  return (
    <div className={`${styles.card} ${completed ? styles.completed : ""}`}>
      <h2>{data.lesson?.title || data.title}</h2>
      <p>{data.lesson?.text || data.description}</p>
      <pre className={styles.example}>{data.lesson?.example || data.answer}</pre>

      <h3 style={{ marginTop: "15px" }}>{data.question}</h3>

      {!completed && (
        <>
          <div className={styles.editorWrapper}>
            <Editor
              height="200px"
              defaultLanguage={language === "js" ? "javascript" : language}
              value={input}
              onChange={(value) => setInput(value || "")}
              theme="vs-light"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                wordWrap: "on",
                scrollBeyondLastLine: false,
              }}
            />
          </div>

          {/* Preview somente para HTML e CSS */}
          {(language === "html" || language === "css") && (
            <iframe
              sandbox="allow-scripts allow-same-origin"
              style={{
                marginTop: "1rem",
                width: "100%",
                height: "200px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "white",
              }}
              srcDoc={previewContent}
              title="preview"
            />
          )}

          {/* Extra explicativo para JS e React */}
          {(language === "js" || language === "react") && data.extra && (
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#f9f9f9",
                lineHeight: "1.5",
              }}
            >
              <h4>📘 Saiba mais</h4>
              <p>{data.extra}</p>
            </div>
          )}

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
