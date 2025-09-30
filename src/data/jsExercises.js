const jsExercises = [
  {
    id: 1,
    lesson: {
      title: "⚡ Exercício 1 - Variáveis",
      text: "Use `let` ou `const` para declarar variáveis em JavaScript.",
      example: "let idade = 25;\nconst nome = 'João';",
    },
    question: "Crie uma variável chamada `cidade` e atribua 'São Paulo'.",
    answer: "let cidade = 'São Paulo';",
    validator_pattern: "let\\s+cidade\\s*=\\s*['\"]São Paulo['\"]",
    extra: "Uma variável é como uma caixinha onde guardamos informações que podem ser reutilizadas no código. No JavaScript, usamos `let` e `const` para criá-las: `let` permite mudar o valor depois, enquanto `const` cria valores que não podem ser reatribuídos. Por exemplo: `let contador = 1; contador = 2;` funciona, mas `const PI = 3.14; PI = 3.15;` gera erro. Isso ajuda a organizar os dados e deixar o código mais claro."
  },
  {
    id: 2,
    lesson: {
      title: "⚡ Exercício 2 - Funções",
      text: "Funções agrupam instruções reutilizáveis.",
      example: "function soma(a, b) { return a + b; }",
    },
    question: "Crie uma função chamada `soma` que retorne a soma de dois números.",
    answer: "function soma(a, b) { return a + b; }",
    validator_pattern: "function\\s+soma\\s*\\(.*\\).*return",
    extra: "Funções são blocos de código que podemos executar sempre que quisermos. Elas ajudam a evitar repetição e tornam o programa mais organizado. Uma função pode receber **parâmetros** (informações que entram nela) e devolver um **valor** com `return`. Exemplo: `function dobro(x) { return x * 2; }`. Chamando `dobro(5)`, o resultado será `10`. Com funções, escrevemos menos código repetido e mais código reaproveitável."
  },
  {
    id: 3,
    lesson: {
      title: "⚡ Exercício 3 - Condicionais",
      text: "Use `if` para executar código baseado em condições.",
      example: "if (idade >= 18) { console.log('Maior de idade'); }",
    },
    question: "Escreva um condicional que verifique se `numero` é maior que 10.",
    answer: "if (numero > 10) { console.log('Maior que 10'); } else { console.log('10 ou menor'); }",
    validator_pattern: "if\\s*\\(.*numero.*>.*10.*\\)",
    extra: "Condicionais (`if`, `else if`, `else`) permitem que o programa **tome decisões**. O computador testa se a condição é verdadeira (`true`) e executa o bloco correspondente. Exemplo: `if (hora < 12) { console.log('Bom dia!'); } else { console.log('Boa tarde!'); }`. Isso é essencial para lidar com situações diferentes no fluxo do programa."
  },
  {
    id: 4,
    lesson: {
      title: "⚡ Exercício 4 - Laços de Repetição",
      text: "Laços permitem executar código várias vezes.",
      example: "for (let i = 0; i <= 5; i++) { console.log(i); }",
    },
    question: "Crie um laço `for` que imprima números de 1 a 5.",
    answer: "for (let i = 1; i <= 5; i++) { console.log(i); }",
    validator_pattern: "for\\s*\\(.*i.*<=.*5.*\\)",
    extra: "Laços (`for`, `while`) são usados quando queremos repetir uma ação várias vezes. O `for` é útil quando sabemos quantas vezes repetir. Ele tem três partes: inicialização (`let i = 1`), condição (`i <= 5`) e incremento (`i++`). No exemplo, ele imprime 1, 2, 3, 4 e 5. Isso é ótimo para percorrer listas, gerar cálculos ou automatizar tarefas repetitivas."
  },
  {
    id: 5,
    lesson: {
      title: "⚡ Exercício 5 - Arrays",
      text: "Arrays armazenam listas de valores.",
      example: "let frutas = ['Maçã', 'Banana', 'Laranja'];",
    },
    question: "Crie um array chamado `cores` com os valores 'vermelho', 'verde', 'azul'.",
    answer: "let cores = ['vermelho', 'verde', 'azul'];",
    validator_pattern: "let\\s+cores\\s*=\\s*\\[.*vermelho.*verde.*azul.*\\]",
    extra: "Arrays são listas que permitem guardar vários valores em uma única variável. Cada item fica em uma posição chamada **índice** (que começa do 0). Exemplo: `let numeros = [10, 20, 30]; console.log(numeros[0]);` mostra `10`. Com arrays, é possível armazenar coleções, como nomes, números, cores ou qualquer conjunto de dados que faça sentido ser agrupado."
  },
];

export default jsExercises;
