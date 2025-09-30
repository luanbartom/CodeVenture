const htmlExercises = [
  {
    id: 1,
    lesson: {
      title: "📘 Exercício 1 - Título principal <h1>",
      text: "O elemento <h1> cria o título mais importante de uma página HTML.",
      example: "<h1>Meu Primeiro Site</h1>",
    },
    question: "Crie um título h1 com o texto 'Olá Mundo'",
    answer: "<h1>Olá Mundo</h1>",
    validator_pattern: "<\\s*h1\\s*>\\s*ol[aá]\\s+mundo\\s*<\\s*/h1\\s*>",
    extra: "O <h1> é usado para destacar o título principal. Deve existir apenas um por página..."
  },
  {
    id: 2,
    lesson: {
      title: "📘 Exercício 2 - Parágrafo <p>",
      text: "O elemento <p> é usado para organizar o conteúdo em parágrafos.",
      example: "<p>Estou aprendendo HTML!</p>",
    },
    question: "Crie um parágrafo com o texto 'Aprendendo HTML'",
    answer: "<p>Aprendendo HTML</p>",
    validator_pattern: "<\\s*p\\s*>\\s*aprendendo\\s*html\\s*<\\s*/p\\s*>",
    extra: "O <p> é a base da estrutura textual em HTML..."
  },
  {
    id: 3,
    lesson: {
      title: "📘 Exercício 3 - Imagem <img>",
      text: "O elemento <img> insere imagens em uma página. É obrigatório usar src e alt.",
      example: '<img src="logo.png" alt="Logo do site" width=100>',
    },
    question: "Crie uma imagem com src='logo.png' e alt='Logo' width=100",
    answer: '<img src="logo.png" alt="Logo" width="100">',
    validator_pattern: "<\\s*img(?=[^>]*\\bsrc=[\"']logo\\.png[\"'])(?=[^>]*\\balt=[\"']logo[\"'])[^>]*>",
    extra: "O atributo src indica o caminho da imagem, e alt fornece uma descrição para acessibilidade..."
  },
  {
    id: 4,
    lesson: {
      title: "📘 Exercício 4 - Link <a>",
      text: "O elemento <a> cria links para navegação.",
      example: '<a href="https://google.com">Ir para o Google</a>',
    },
    question: "Crie um link para 'https://google.com'",
    answer: '<a href="https://google.com">Google</a>',
    validator_pattern: "<\\s*a[^>]*href=[\"']https://google\\.com[\"'][^>]*>.*?<\\s*/a\\s*>",
    extra: "O <a> pode apontar para sites externos..."
  },
  {
    id: 5,
    lesson: {
      title: "📘 Exercício 5 - Lista não ordenada <ul> e <li>",
      text: "O elemento <ul> cria listas com marcadores, e <li> define os itens.",
      example: "<ul><li>Maçã</li><li>Banana</li><li>Laranja</li></ul>",
    },
    question: "Crie uma lista não ordenada com 3 itens",
    answer: "<ul><li>Item1</li><li>Item2</li><li>Item3</li></ul>",
    validator_pattern: "<\\s*ul\\s*>[\\s\\S]*<li>[\\s\\S]*</li>[\\s\\S]*<li>[\\s\\S]*</li>[\\s\\S]*<li>[\\s\\S]*</li>[\\s\\S]*<\\s*/ul\\s*>",
    extra: "Listas <ul> são usadas quando a ordem não importa..."
  }
];

export default htmlExercises;
