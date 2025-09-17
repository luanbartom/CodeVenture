import { useState } from "react";
import exercises from "../src/components/ExerciseData";
import ExerciseCard from "../src/components/ExerciseCard";
import ProgressBar from "../src/components/ProgressBar";
import styles from "../styles/Game.module.css";

export default function Game() {
  // começa com o primeiro exercício já na lista
  const [visibleExercises, setVisibleExercises] = useState([exercises[0]]);
  const [progress, setProgress] = useState(0);

  const handleSuccess = (currentId) => {
    const nextIndex = currentId; // pois id começa em 1
    if (nextIndex < exercises.length) {
      setVisibleExercises([...visibleExercises, exercises[nextIndex]]);
      setProgress(((nextIndex) / exercises.length) * 100);
    } else {
      alert("🎉 Parabéns! Você concluiu todos os exercícios de HTML!");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Exercícios de HTML</h1>
      <ProgressBar value={progress} />
      
      {/* Renderiza todos os exercícios visíveis em ordem */}
      {visibleExercises.map((ex) => (
        <ExerciseCard 
          key={ex.id} 
          data={ex} 
          onSuccess={() => handleSuccess(ex.id)} 
        />
      ))}
    </div>
  );
}
