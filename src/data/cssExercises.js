const cssExercises = [
  {
    id: 1,
    lesson: {
      title: "🎨 Exercício 1 - Cor de Fundo",
      text: "Use a propriedade background-color para definir a cor de fundo de um elemento, o elemento pode ser o body, div, seção, etc.",
      example: "body { background-color: lightblue; }",
    },
    question: "Defina a cor de fundo do body como 'lightblue'.",
    answer: "body { background-color: lightblue; }",
    extra: "A propriedade background-color permite alterar a cor de fundo de qualquer elemento HTML. Quando aplicamos no body, toda a página assume essa cor de fundo. Você pode usar nomes de cores (como lightblue, red, green), valores hexadecimais (#0000ff), RGB (rgb(0,0,255)) ou até HSL. Essa propriedade é muito útil para dar identidade visual ao site. Além disso, é possível aplicar cores diferentes a diferentes elementos, criando contraste e destaque. É recomendável usar cores que mantenham boa legibilidade com o texto."
  },
  {
    id: 2,
    lesson: {
      title: "🎨 Exercício 2 - Cor do Texto",
      text: "Use a propriedade color para definir a cor do texto de um elemento, o elemento pode ser um parágrafo, título, etc.",
      example: "h1 { color: navy; }",
    },
    question: "Defina a cor do texto do h1 como 'navy'.",
    answer: "h1 { color: navy; }",
    extra: "A propriedade color altera apenas a cor do texto do elemento. Por exemplo, definir h1 { color: navy; } fará com que todos os títulos <h1> fiquem azul-marinho. É importante não confundir color (texto) com background-color (fundo). Assim como no background, você pode usar nomes, hexadecimais ou RGB. Uma boa prática é garantir contraste entre a cor do texto e a cor do fundo, para que a leitura seja acessível a todos os usuários, inclusive pessoas com baixa visão."
  },
  {
    id: 3,
    lesson: {
      title: "🎨 Exercício 3 - Tamanho da Fonte",
      text: "Use a propriedade font-size para definir o tamanho da fonte de um elemento, o elemento pode ser um parágrafo, título, etc.",
      example: "p { font-size: 16px; }",
    },
    question: "Defina o tamanho da fonte do parágrafo como '16px'.",
    answer: "p { font-size: 16px; }",
    extra: "A propriedade font-size controla o tamanho do texto. No exemplo p { font-size: 16px; }, todos os parágrafos terão letras de 16 pixels de altura. Além de px, é comum usar unidades relativas como em (relativa ao elemento pai) ou rem (relativa ao elemento raiz). Essas unidades relativas tornam o design mais responsivo e acessível, já que o usuário pode aumentar ou diminuir o zoom do navegador sem quebrar a interface. Por isso, em projetos profissionais, rem é muitas vezes preferido ao px."
  },
  {
    id: 4,
    lesson: {
      title: "🎨 Exercício 4 - Margem",
      text: "Use a propriedade margin para adicionar espaço fora das bordas de um elemento, o elemento pode ser uma div, seção, etc.",
      example: "div { margin: 20px; }",
    },
    question: "Adicione uma margem de '20px' ao redor de uma div.",
    answer: "div { margin: 20px; }",
    extra: "A propriedade margin adiciona espaço externo entre o elemento e o que está ao seu redor. No exemplo div { margin: 20px; }, a div terá 20 pixels de espaço em todos os lados. É possível controlar cada lado separadamente usando margin-top, margin-right, margin-bottom e margin-left. Também é possível usar a forma abreviada margin: 10px 20px (cima/baixo e esquerda/direita). Margens ajudam a organizar o layout e evitar que elementos fiquem colados uns nos outros."
  },
  {
    id: 5,
    lesson: {
      title: "🎨 Exercício 5 - Padding",
      text: "Use a propriedade padding para adicionar espaço dentro das bordas de um elemento, o elemento pode ser uma div, seção, etc.",
      example: "section { padding: 15px; }",
    },
    question: "Adicione um padding de '15px' dentro de uma seção.",
    answer: "section { padding: 15px; }",
    extra: "A propriedade padding adiciona espaço interno entre o conteúdo do elemento e suas bordas. No exemplo section { padding: 15px; }, o texto ou conteúdo dentro da seção terá uma 'folga' de 15 pixels em todas as direções. Assim como margin, você pode definir padding-top, padding-right, padding-bottom e padding-left separadamente, ou usar a forma abreviada (ex: padding: 10px 20px). Padding é essencial para dar respiro ao conteúdo, melhorar a legibilidade e criar layouts mais organizados."
  },
];

export default cssExercises;
