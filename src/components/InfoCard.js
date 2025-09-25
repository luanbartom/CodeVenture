export default function InfoCard({ language, styles }) {
  const info = {
    html: {
      title: "🌐 O que é HTML?",
      text: `HTML (HyperText Markup Language) é a base da web. Ele organiza e estrutura o conteúdo em títulos, parágrafos, listas, links, imagens e muito mais.

👉 Pense no HTML como o esqueleto de uma página.
Ele define a estrutura, mas não o estilo ou comportamento.

📌 Exemplos práticos:
- <h1> serve para títulos principais.
- <p> define parágrafos de texto.
- <a href="..."> cria links para outras páginas.
- <img src="..." alt="..."> insere imagens.

Sem HTML, a web não teria estrutura.`,
    },
    css: {
      title: "🎨 O que é CSS?",
      text: `CSS (Cascading Style Sheets) é responsável pelo estilo e aparência da página.

👉 Ele controla cores, fontes, tamanhos, espaçamentos e até animações.

📌 Exemplos práticos:
- body { background-color: lightblue; }
- h1 { color: red; }
- p { font-size: 18px; }
- div { margin: 20px; padding: 10px; }

Pense no CSS como a "roupa" que veste o esqueleto criado pelo HTML.`,
    },
    js: {
      title: "⚡ O que é JavaScript?",
      text: `JavaScript é a linguagem de programação da web. Ele adiciona interatividade e lógica.

👉 Com JS você pode validar formulários, criar animações, manipular elementos e se comunicar com servidores.

📌 Exemplos práticos:
- let nome = "Luan"; // variável
- function soma(a, b) { return a + b; } // função
- if (idade >= 18) { console.log("Maior de idade"); } // condicional
- for (let i=0; i<5; i++) { console.log(i); } // laço

Sem JS, a web seria estática.`,
    },
    react: {
      title: "⚛️ O que é React?",
      text: `React é uma biblioteca JavaScript para criar interfaces modernas.

👉 Ele organiza a interface em componentes reutilizáveis e torna a construção de apps mais rápida e escalável.

📌 Exemplos práticos:
- function Ola() { return <h1>Olá, Mundo!</h1>; }
- const elemento = <p>Aprendendo React</p>;
- props permitem passar dados entre componentes.
- useState gerencia estados dinâmicos.

React é hoje uma das ferramentas mais usadas no desenvolvimento web.`,
    },
  };

  const data = info[language];

  return (
    <div className={styles.infoCard}>
      <h3>{data.title}</h3>
      {/* 👇 aqui trocamos pre por div */}
      <div className={styles.infoText}>{data.text}</div>
    </div>
  );
}