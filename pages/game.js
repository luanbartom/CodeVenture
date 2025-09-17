import { useState } from "react";

// importa exercícios
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

export default function Game() {
  // 🔗 sequencia de linguagens
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

  const [langIndex, setLangIndex] = useState(0); // começa pelo HTML
  const [step, setStep] = useState(0);
  const language = languages[langIndex];
  const exercises = exercisesByLang[language];
  const styles = stylesByLang[language];

  const [progress, setProgress] = useState(0);

  const handleSuccess = () => {
    if (step < exercises.length - 1) {
      setStep(step + 1);
      setProgress(((step + 1) / exercises.length) * 100);
    } else {
      if (langIndex < languages.length - 1) {
        // passa para a próxima linguagem
        setLangIndex(langIndex + 1);
        setStep(0);
        setProgress(0);
        alert(`✅ Você concluiu ${language.toUpperCase()}! Vamos para ${languages[langIndex + 1].toUpperCase()} 🚀`);
      } else {
        alert("🎉 Parabéns! Você concluiu TODAS as linguagens!");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Exercícios de {language.toUpperCase()}
      </h1>
      <ProgressBar value={progress} />
      <ExerciseCard data={exercises[step]} onSuccess={handleSuccess} styles={styles} />
    </div>
  );
}
