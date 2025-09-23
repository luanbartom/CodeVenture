import { useEffect, useState } from "react";

import htmlStyles from "../src/styles/Html.module.css";
import cssStyles from "../src/styles/Css.module.css";
import jsStyles from "../src/styles/Js.module.css";
import reactStyles from "../src/styles/React.module.css";

import ExerciseCard from "../src/components/ExerciseCard";
import ProgressBar from "../src/components/ProgressBar";
import CodeBubbles from "../src/components/CodeBubbles";

export default function Game() {
  const languages = ["html", "css", "js", "react"];

  const stylesByLang = {
    html: htmlStyles,
    css: cssStyles,
    js: jsStyles,
    react: reactStyles,
  };

  const [langIndex, setLangIndex] = useState(0);
  const [exercises, setExercises] = useState([]);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const language = languages[langIndex];
  const styles = stylesByLang[language];

  // Buscar exercícios do banco
  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/exercises/${language}`);
      const data = await res.json();
      setExercises(data);
      setStep(0);
      setProgress(0);
    }
    load();
  }, [language]);

  const handleSuccess = () => {
    if (step < exercises.length - 1) {
      const next = step + 1;
      setStep(next);
      setProgress(((next + 1) / exercises.length) * 100);
    } else {
      if (langIndex < languages.length - 1) {
        setLangIndex(langIndex + 1);
        alert(`✅ Você concluiu ${language.toUpperCase()}! Vamos para ${languages[langIndex + 1].toUpperCase()} 🚀`);
      } else {
        alert("🎉 Parabéns! Você concluiu TODAS as linguagens!");
      }
    }
  };

  if (!exercises.length) {
    return <p style={{ textAlign: "center" }}>Carregando exercícios...</p>;
  }

  return (
    <div className={styles.container} style={{ position: "relative", overflow: "hidden" }}>
      <CodeBubbles />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className={styles.title}>Exercícios de {language.toUpperCase()}</h1>
        <ProgressBar value={progress} />
        <ExerciseCard data={exercises[step]} onSuccess={handleSuccess} styles={styles} />
      </div>
    </div>
  );
}
