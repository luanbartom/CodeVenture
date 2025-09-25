import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function ExerciseCard({ data, onSuccess, styles, language }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);

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

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme("codeventure", {
      base: "vs",
      inherit: true,
      rules: [
        { token: "comment", foreground: "7c7c7c", fontStyle: "italic" },
        { token: "keyword", foreground: "e67e22", fontStyle: "bold" },
        { token: "string", foreground: "16a34a" },
        { token: "tag", foreground: "2563eb" },
      ],
      colors: {
        "editor.background": "#fffaf3",
        "editor.lineHighlightBackground": "#fff2e6",
        "editorCursor.foreground": "#e67e22",
        "editorLineNumber.foreground": "#bdbdbd",
        "editorLineNumber.activeForeground": "#e67e22",
      },
    });
  }

  // 🔥 Monta o preview dinâmico
  const buildPreview = () => {
    if (language === "html") {
      return input;
    }
    if (language === "css") {
      return `<style>${input}</style><div><h1>Exemplo com CSS</h1><p>Seu estilo foi aplicado!</p></div>`;
    }
    if (language === "js") {
      return `<script>${input}</script><div><p>Abra o console (F12) para ver o resultado do seu código JS.</p></div>`;
    }
    if (language === "react") {
      return `
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8" />
            <title>Preview React</title>
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              ${input}

              const root = ReactDOM.createRoot(document.getElementById("root"));
              try {
                root.render(<App />); // 🚀 espera que o user defina App ou outro componente
              } catch (e) {
                console.error("Erro ao renderizar React:", e);
              }
            </script>
          </body>
        </html>
      `;
    }
    return "";
  };

  return (
    <div className={`${styles.card} ${completed ? styles.completed : ""}`}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <pre className={styles.example}>{data.answer}</pre>

      <h3 style={{ marginTop: "15px" }}>{data.question}</h3>

      {!completed && (
        <>
          <div className={styles.editorWrapper}>
            <Editor
              height="200px"
              defaultLanguage={language === "js" ? "javascript" : language}
              value={input}
              onChange={(value) => setInput(value || "")}
              theme="codeventure"
              beforeMount={handleEditorWillMount}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
                autoClosingBrackets: "always",
                autoClosingQuotes: "always",
                tabSize: 2,
                padding: { top: 10, bottom: 10 },
                roundedSelection: true,
                cursorSmoothCaretAnimation: "on",
              }}
            />
          </div>


          {/* 🔥 Preview dinâmico */}
          {(language === "html" ||
            language === "css" ||
            language === "js" ||
            language === "react") && (
              <iframe
                sandbox="allow-scripts"
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  height: "180px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "white",
                }}
                srcDoc={buildPreview()}
                title="preview"
              />
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
