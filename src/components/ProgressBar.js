import base from "../styles/Components.module.css";

export default function ProgressBar({ value }) {
  return (
    <div className={base.progressContainer}>
      <div
        className={base.progressBar}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}