const jsExercises = [
  {
    id: 1,
    lesson: {
      title: "\u26a1 Exerc\u00edcio 1 - Vari\u00e1veis",
      text: "Use `let` ou `const` para declarar vari\u00e1veis em JavaScript.",
      example: "let idade = 25;\nconst nome = 'Jo\u00e3o';",
    },
    question: "Crie uma vari\u00e1vel chamada `cidade` e atribua 'S\u00e3o Paulo'.",
    answer: "let cidade = 'S\u00e3o Paulo';",
    validator_pattern: "let\\s+cidade\\s*=\\s*['\"]S\u00e3o Paulo['\"]",
    extra:
      "Uma vari\u00e1vel \u00e9 como uma caixinha onde guardamos informa\u00e7\u00f5es que podem ser reutilizadas no c\u00f3digo. No JavaScript, usamos `let` e `const` para cri\u00e1-las: `let` permite mudar o valor depois, enquanto `const` cria valores que n\u00e3o podem ser reatribu\u00eddos. Por exemplo: `let contador = 1; contador = 2;` funciona, mas `const PI = 3.14; PI = 3.15;` gera erro. Isso ajuda a organizar os dados e deixar o c\u00f3digo mais claro.",
  },
  {
    id: 2,
    lesson: {
      title: "\u26a1 Exerc\u00edcio 2 - Fun\u00e7\u00f5es",
      text: "Fun\u00e7\u00f5es agrupam instru\u00e7\u00f5es reutiliz\u00e1veis.",
      example: "function soma(a, b) { return a + b; }",
    },
    question: "Crie uma fun\u00e7\u00e3o chamada `soma` que retorne a soma de dois n\u00fameros.",
    answer: "function soma(a, b) { return a + b; }",
    validator_pattern: "function\\s+soma\\s*\\(.*\\).*return",
    extra:
      "Fun\u00e7\u00f5es s\u00e3o blocos de c\u00f3digo que podemos executar sempre que quisermos. Elas ajudam a evitar repeti\u00e7\u00e3o e tornam o programa mais organizado. Uma fun\u00e7\u00e3o pode receber **par\u00e2metros** (informa\u00e7\u00f5es que entram nela) e devolver um **valor** com `return`. Exemplo: `function dobro(x) { return x * 2; }`. Chamando `dobro(5)`, o resultado ser\u00e1 `10`. Com fun\u00e7\u00f5es, escrevemos menos c\u00f3digo repetido e mais c\u00f3digo reaproveit\u00e1vel.",
  },
  {
    id: 3,
    lesson: {
      title: "\u26a1 Exerc\u00edcio 3 - Condicionais",
      text: "Use `if` para executar c\u00f3digo baseado em condi\u00e7\u00f5es.",
      example: "if (idade >= 18) { console.log('Maior de idade'); }",
    },
    question: "Escreva um condicional que verifique se `numero` \u00e9 maior que 10.",
    answer:
      "if (numero > 10) { console.log('Maior que 10'); } else { console.log('10 ou menor'); }",
    validator_pattern: "if\\s*\\(.*numero.*>.*10.*\\)",
    validator_tests: [
      { numero: 5, expectedRegex: "(menor|nao|n\u00e3o)" },
      { numero: 15, expectedRegex: "maior" },
    ],
    extra:
      "Condicionais (`if`, `else if`, `else`) permitem que o programa **tome decis\u00f5es**. O computador testa se a condi\u00e7\u00e3o \u00e9 verdadeira (`true`) e executa o bloco correspondente. Exemplo: `if (hora < 12) { console.log('Bom dia!'); } else { console.log('Boa tarde!'); }`. Isso \u00e9 essencial para lidar com situa\u00e7\u00f5es diferentes no fluxo do programa.",
  },
  {
    id: 4,
    lesson: {
      title: "\u26a1 Exerc\u00edcio 4 - La\u00e7os de Repeti\u00e7\u00e3o",
      text: "La\u00e7os permitem executar c\u00f3digo v\u00e1rias vezes.",
      example: "for (let i = 0; i <= 5; i++) { console.log(i); }",
    },
    question: "Crie um la\u00e7o `for` que imprima n\u00fameros de 1 a 5.",
    answer: "for (let i = 1; i <= 5; i++) { console.log(i); }",
    validator_pattern: "for\\s*\\(.*i.*<=.*5.*\\)",
    extra:
      "La\u00e7os (`for`, `while`) s\u00e3o usados quando queremos repetir uma a\u00e7\u00e3o v\u00e1rias vezes. O `for` \u00e9 \u00fatil quando sabemos quantas vezes repetir. Ele tem tr\u00eas partes: inicializa\u00e7\u00e3o (`let i = 1`), condi\u00e7\u00e3o (`i <= 5`) e incremento (`i++`). No exemplo, ele imprime 1, 2, 3, 4 e 5. Isso \u00e9 \u00f3timo para percorrer listas, gerar c\u00e1lculos ou automatizar tarefas repetitivas.",
  },
  {
    id: 5,
    lesson: {
      title: "\u26a1 Exerc\u00edcio 5 - Arrays",
      text: "Arrays armazenam listas de valores.",
      example: "let frutas = ['Ma\u00e7\u00e3', 'Banana', 'Laranja'];",
    },
    question:
      "Crie um array chamado `cores` com os valores 'vermelho', 'verde', 'azul'.",
    answer: "let cores = ['vermelho', 'verde', 'azul'];",
    validator_pattern: "let\\s+cores\\s*=\\s*\\[.*vermelho.*verde.*azul.*\\]",
    extra:
      "Arrays s\u00e3o listas que permitem guardar v\u00e1rios valores em uma \u00fanica vari\u00e1vel. Cada item fica em uma posi\u00e7\u00e3o chamada **\u00edndice** (que come\u00e7a do 0). Exemplo: `let numeros = [10, 20, 30]; console.log(numeros[0]);` mostra `10`. Com arrays, \u00e9 poss\u00edvel armazenar cole\u00e7\u00f5es, como nomes, n\u00fameros, cores ou qualquer conjunto de dados que fa\u00e7a sentido ser agrupado.",
  },
];

export default jsExercises;
