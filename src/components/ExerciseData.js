const exercises = [
  {
    id: 1,
    lesson: {
      title: "📘 Exercício 1 - Título principal (<h1>)",
      text: "O elemento <h1> serve para criar títulos principais em uma página HTML. Ele indica o assunto mais importante.",
      example: "<h1>Meu Primeiro Site</h1>",
    },
    question: "Crie um título h1 com o texto 'Olá Mundo'",
    answer: "<h1>Olá Mundo</h1>",
  },
  {
    id: 2,
    lesson: {
      title: "📘 Exercício 2 - Parágrafo (<p>)",
      text: "O elemento <p> é usado para criar parágrafos de texto. Ele organiza o conteúdo em blocos, facilitando a leitura.",
      example: "<p>Estou aprendendo HTML!</p>",
    },
    question: "Crie um parágrafo com o texto 'Aprendendo HTML'",
    answer: "<p>Aprendendo HTML</p>",
  },
  {
    id: 3,
    lesson: {
      title: "📘 Exercício 3 - Imagem (<img>)",
      text: "O elemento <img> insere imagens na página. Use src para o caminho e alt para o texto alternativo.",
      example: '<img src="logo.png" alt="Logo do site">',
    },
    question: "Crie uma imagem com src='logo.png' e alt='Logo'",
    answer: '<img src="logo.png" alt="Logo">',
  },
  {
    id: 4,
    lesson: {
      title: "📘 Exercício 4 - Link (<a>)",
      text: "O elemento <a> cria links para outras páginas. Use o atributo href para indicar o destino.",
      example: '<a href="https://google.com">Ir para o Google</a>',
    },
    question: "Crie um link para 'https://google.com'",
    answer: '<a href="https://google.com">Google</a>',
  },
  {
    id: 5,
    lesson: {
      title: "📘 Exercício 5 - Lista não ordenada (<ul> e <li>)",
      text: "Para criar listas usamos <ul>. Cada item vai dentro de <li>.",
      example: "<ul><li>Maçã</li><li>Banana</li><li>Laranja</li></ul>",
    },
    question: "Crie uma lista não ordenada com 3 itens",
    answer: "<ul><li>Item1</li><li>Item2</li><li>Item3</li></ul>",
  },
];

export default exercises;