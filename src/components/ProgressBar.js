import styles from "../../styles/Components.module.css";


export default function ProgressBar({ value }) {
  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
