const cssExercises = [
  {
    id: 1,
    lesson: {
      title: "🎨 Exercício 1 - Cor de Fundo",
      text: "Use background-color para definir a cor de fundo.",
      example: "body { background-color: red; }",
    },
    question: "Defina a cor de fundo do body como 'lightblue'.",
    answer: "body { background-color: lightblue; }",
    validator_pattern: "body\\s*\\{[^}]*background(-color)?\\s*:\\s*lightblue;?[^}]*\\}",
  },
  {
    id: 2,
    lesson: {
      title: "🎨 Exercício 2 - Cor do Texto",
      text: "Use color para definir a cor do texto.",
      example: "h1 { color: blue; }",
    },
    question: "Defina a cor do texto do h1 como 'navy'.",
    answer: "h1 { color: navy; }",
    validator_pattern: "h1\\s*\\{[^}]*color\\s*:\\s*navy;?[^}]*\\}",
  },
  {
    id: 3,
    lesson: {
      title: "🎨 Exercício 3 - Tamanho da Fonte",
      text: "Use font-size para definir o tamanho da fonte.",
      example: "p { font-size: 50px; }",
    },
    question: "Defina o tamanho da fonte do parágrafo como '16px'.",
    answer: "p { font-size: 20px; }",
    validator_pattern: "p\\s*\\{[^}]*font-size\\s*:\\s*20px;?[^}]*\\}",
  },
  {
    id: 4,
    lesson: {
      title: "🎨 Exercício 4 - Borda",
      text: "Use a propriedade border para adicionar uma borda visível ao elemento. No preview existe uma caixa com a classe .box.",
      example: ".box { border: 4px solid black; }",
    },
    question: "Adicione uma borda vermelha de 2px sólida na caixa (.box).",
    answer: ".box { border: 2px solid red; }",
    // aceita espaços, ordem e pontos-e-vírgula opcionais
    validator_pattern: "(\\.box|div)\\s*\\{[^}]*border\\s*:\\s*2px\\s+solid\\s+red;?[^}]*\\}",
    extra: "Bordas destacam áreas. Você pode variar espessura (px), estilo (solid, dashed, dotted) e cor."
  },
  {
    id: 5,
    lesson: {
      title: "🎨 Exercício 5 - Alinhamento de Texto",
      text: "Use a propriedade text-align para alinhar o texto dentro de um elemento.",
      example: "h1 { text-align: end; }",
    },
    question: "Centralize o texto do título h1 usando text-align.",
    answer: "h1 { text-align: center; }",
    validator_pattern: "h1\\s*\\{[^}]*text-align\\s*:\\s*center;?[^}]*\\}",
    preview_template: `
      <html>
        <head>
          <style>
            h1 {
              border: 1px dashed #555;
              padding: 10px;
            }
          </style>
        </head>
        <body>
          <h1>Título de Exemplo</h1>
        </body>
      </html>
    `,
  }
];

export default cssExercises;
