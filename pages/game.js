import { useState } from "react";

import htmlExercises from "../src/data/htmlExercises";
import cssExercises from "../src/data/cssExercises";
import jsExercises from "../src/data/jsExercises";
import reactExercises from "../src/data/reactExercises";

// importa estilos
import htmlStyles from "../src/styles/Html.module.css";
import cssStyles from "../src/styles/Css.module.css";
import jsStyles from "../src/styles/Js.module.css";
import reactStyles from "../src/styles/React.module.css";

import ExerciseCard from "../src/components/ExerciseCard";
import ProgressBar from "../src/components/ProgressBar";
import CodeBubbles from "../src/components/CodeBubbles";
import InfoCard from "../src/components/InfoCard";

export default function Game() {
  const languages = ["html", "css", "js", "react"];

  const exercisesByLang = {
    html: htmlExercises,
    css: cssExercises,
    js: jsExercises,
    react: reactExercises,
  };

  const stylesByLang = {
    html: htmlStyles,
    css: cssStyles,
    js: jsStyles,
    react: reactStyles,
  };

  const [langIndex, setLangIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const language = languages[langIndex];
  const exercises = exercisesByLang[language];
  const styles = stylesByLang[language];

  const handleSuccess = () => {
    if (step < exercises.length - 1) {
      const next = step + 1;
      setStep(next);
      setProgress(((next + 1) / exercises.length) * 100);
    } else {
      // 👉 Garante que a barra vá a 100% no último exercício
      setProgress(100);

      if (langIndex < languages.length - 1) {
        setTimeout(() => {
          setLangIndex(langIndex + 1);
          setStep(0);
          setProgress(0);
          alert(
            `✅ Você concluiu ${language.toUpperCase()}! Vamos para ${languages[
              langIndex + 1
            ].toUpperCase()} 🚀`
          );
        }, 500);
      } else {
        alert("🎉 Parabéns! Você concluiu TODAS as linguagens!");
      }
    }
  };

  return (
    <div
      className={styles.container}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <CodeBubbles />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className={styles.title}>
          Exercícios de {language.toUpperCase()}
        </h1>
        <ProgressBar value={progress} />
        <ExerciseCard
          data={exercises[step]}
          onSuccess={handleSuccess}
          styles={styles}
          language={language}
        />
        <InfoCard language={language} styles={styles} />
      </div>
    </div>
  );
}
