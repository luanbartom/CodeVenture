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

const languageLabels = {
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
  react: "React",
};

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
  const [transitionData, setTransitionData] = useState(null);

  const language = languages[langIndex];
  const exercises = exercisesByLang[language];
  const styles = stylesByLang[language];
  const currentLabel = languageLabels[language] ?? language.toUpperCase();

  const handleSuccess = () => {
    if (finished || transitionData) {
      return;
    }

    if (step < exercises.length - 1) {
      const next = step + 1;
      setStep(next);
      setProgress(((next + 1) / exercises.length) * 100);
    } else {
      // Garante que a barra vai a 100% no ultimo exercicio da linguagem atual
      setProgress(100);

      if (langIndex < languages.length - 1) {
        setTransitionData({
          current: language,
          next: languages[langIndex + 1],
        });
      } else {
        setFinished(true);
      }
    }
  };

  const handleTransitionContinue = () => {
    if (!transitionData) {
      return;
    }

    const nextIndex = langIndex + 1;

    setTransitionData(null);
    setLangIndex(nextIndex);
    setStep(0);
    setProgress(0);
  };

  const nextLabel = transitionData
    ? languageLabels[transitionData.next] ?? transitionData.next.toUpperCase()
    : null;

  return (
    <div
      className={styles.container}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <CodeBubbles />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className={styles.title}>
          {finished
            ? "Vocêa concluiu o CodeVenture!"
            : `Exercícios de ${currentLabel}`}
        </h1>
        <ProgressBar value={progress} />
        {finished ? (
          <div className={`${styles.card} ${styles.finalCard}`}>
            <h2 className={styles.finalHeading}>
              Parabéns! Vocêa finalizou todas as linguagens.
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
      {transitionData && (
        <div
          className={styles.transitionOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="transition-title"
        >
          <div className={styles.transitionCard}>
            <h2 id="transition-title" className={styles.transitionHeading}>
              Você concluiu {languageLabels[transitionData.current] ??
                transitionData.current.toUpperCase()}!
            </h2>
            <p className={styles.transitionMessage}>
              Excelente trabalho. Agora vamos colocar em prática o próximo
              desafio em {nextLabel}.
            </p>
            <button
              type="button"
              className={styles.transitionButton}
              onClick={handleTransitionContinue}
            >
              Seguir para {nextLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
