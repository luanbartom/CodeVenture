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

const credits = [
  {
    name: "Luan Bartom Silva e Silva",
    github: "https://github.com/luanbartom",
  },
  {
    name: "Ivan Lucas Miorandi",
    github: "https://github.com/ivanlucasmiorandi",
  },
];

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
  const [finished, setFinished] = useState(false);

  const language = languages[langIndex];
  const exercises = exercisesByLang[language];
  const styles = stylesByLang[language];

  const handleSuccess = () => {
    if (finished) {
      return;
    }

    if (step < exercises.length - 1) {
      const next = step + 1;
      setStep(next);
      setProgress(((next + 1) / exercises.length) * 100);
    } else {
      // Garante que a barra vá a 100% no último exercício da linguagem atual
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
        setFinished(true);
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
          {finished
            ? "Você concluiu o CodeVenture!"
            : `Exercícios de ${language.toUpperCase()}`}
        </h1>
        <ProgressBar value={progress} />
        {finished ? (
          <div className={`${styles.card} ${styles.finalCard}`}>
            <h2 className={styles.finalHeading}>
              Parabéns! Você finalizou todas as linguagens.
            </h2>
            <p className={styles.finalSubtitle}>Projeto desenvolvido por:</p>
            <div className={styles.finalLinks}>
              {credits.map((person) => (
                <a
                  key={person.github}
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {person.name}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.cardWrapper}>
              <ExerciseCard
                data={exercises[step]}
                onSuccess={handleSuccess}
                styles={styles}
                language={language}
              />
            </div>
            <div className={styles.infoSlot}>
              <InfoCard language={language} styles={styles} />
            </div>
            <div className={styles.spacer} aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}
