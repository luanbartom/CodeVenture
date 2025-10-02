import styles from "../styles/CodeBubbles.module.css";

export default function CodeBubbles() {
  return (
    <div className={styles.codeArea}>
      <div className={styles.codeBubble} style={{ left: "10%", animationDuration: "12s" }}>{"<h1>"}</div>
      <div className={styles.codeBubble} style={{ left: "25%", animationDuration: "15s" }}>{"const x = 10;"}</div>
      <div className={styles.codeBubble} style={{ left: "40%", animationDuration: "18s" }}>{"<p>Hello</p>"}</div>
      <div className={styles.codeBubble} style={{ left: "60%", animationDuration: "14s" }}>{"if (true) {}"}</div>
      <div className={styles.codeBubble} style={{ left: "75%", animationDuration: "20s" }}>{"<div>"}</div>
      <div className={styles.codeBubble} style={{ left: "90%", animationDuration: "16s" }}>{"function()"}</div>
      <div className={styles.codeBubble} style={{ left: "30%", animationDuration: "16s" }}>{"<Desenvolvedores: LUAN BARTOM e IVAN LUCAS>"}</div>
      <div className={styles.codeBubble} style={{ left: "20%", animationDuration: "8s" }}>{"<Desenvolvedores: LUAN BARTOM e IVAN LUCAS>"}</div>
      <div className={styles.codeBubble} style={{ left: "50%", animationDuration: "10s" }}>{"<Desenvolvedores: LUAN BARTOM e IVAN LUCAS>"}</div>
    </div>
  );
}