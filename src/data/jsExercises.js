const jsExercises = [
  {
    id: 1,
    lesson: {
      title: "📘 Exercício 1 - Variáveis",
      text: "Em JavaScript, usamos 'let' ou 'const' para declarar variáveis. 'let' permite reatribuição, enquanto 'const' não permite.",
      example: "let idade = 25; const nome = 'João';",
    },
    question: "Declare uma variável chamada 'cidade' e atribua a ela o valor 'São Paulo'.",
    answer: "let cidade = 'São Paulo';",
    extra: "Variáveis são como 'caixas' onde guardamos valores para usar no programa. Em JavaScript moderno, evitamos 'var' e usamos 'let' ou 'const'. Use 'let' quando precisar mudar o valor depois, e 'const' quando for algo fixo. Exemplo: const PI = 3.14 nunca deve mudar, mas let contador = 0 pode ser incrementado. Escolher bem entre let e const ajuda a evitar erros e deixa o código mais claro."
  },
  {
    id: 2,
    lesson: {
      title: "📘 Exercício 2 - Funções",
      text: "Funções são blocos de código que executam uma tarefa específica. Declaramos funções usando a palavra-chave 'function'.",
      example: "function saudacao() { console.log('Olá!'); }",
    },
    question: "Crie uma função chamada 'soma' que receba dois números e retorne a soma deles.",
    answer: "function soma(a, b) { return a + b; }",
    extra: "Funções permitem reaproveitar código e evitar repetição. Elas podem receber parâmetros (informações de entrada) e retornar valores. No exemplo function soma(a, b) { return a + b; }, a função soma dois números e devolve o resultado. Isso permite chamar soma(2,3) e obter 5. Em JavaScript também existem funções anônimas e arrow functions, que são formas mais curtas de escrever funções modernas."
  },
  {
    id: 3,
    lesson: {
      title: "📘 Exercício 3 - Condicionais",
      text: "Condicionais permitem executar código baseado em condições. Usamos 'if', 'else if' e 'else' para isso.",
      example: "if (idade >= 18) { console.log('Maior de idade'); } else { console.log('Menor de idade'); }",
    },
    question: "Escreva um condicional que verifique se uma variável 'numero' é maior que 10 e imprima 'Maior que 10' ou '10 ou menor'.",
    answer: "if (numero > 10) { console.log('Maior que 10'); } else { console.log('10 ou menor'); }",
    extra: "Estruturas condicionais são a base da lógica em programação. Com elas, o código 'toma decisões'. O if avalia uma condição: se for verdadeira, executa um bloco, senão, segue para o else. Também podemos encadear com else if para múltiplas condições. Exemplo: if (nota >= 7) { aprovado } else if (nota >= 5) { recuperação } else { reprovado }. Isso ajuda a controlar fluxos diferentes no programa."
  },
  {
    id: 4,
    lesson: {
      title: "📘 Exercício 4 - Laços de Repetição",
      text: "Laços de repetição permitem executar um bloco de código várias vezes. O 'for' é usado para iterar sobre um intervalo ou coleção.",
      example: "for (let i = 0; i < 5; i++) { console.log(i); }",
    },
    question: "Crie um laço 'for' que imprima os números de 1 a 5 no console.",
    answer: "for (let i = 1; i <= 5; i++) { console.log(i); }",
    extra: "Os laços são úteis para repetir tarefas sem precisar escrever o mesmo código várias vezes. O for tem três partes: inicialização (let i = 1), condição (i <= 5) e incremento (i++). O laço executa enquanto a condição for verdadeira. Além do for, existem outros laços como while e for...of. Dominar loops é essencial para percorrer arrays, listas de objetos e manipular dados em escala."
  },
  {
    id: 5,
    lesson: {
      title: "📘 Exercício 5 - Arrays",
      text: "Arrays são listas ordenadas de valores. Podemos acessar elementos pelo índice, começando do zero.",
      example: "let frutas = ['Maçã', 'Banana', 'Laranja'];",
    },
    question: "Crie um array chamado 'cores' com os valores 'vermelho', 'verde' e 'azul'.",
    answer: "let cores = ['vermelho', 'verde', 'azul'];",
    extra: "Arrays permitem guardar vários valores em uma única variável. Cada item da lista tem uma posição (índice), que começa em 0. Exemplo: frutas[0] é 'Maçã'. Arrays são muito usados para coleções de dados: listas de usuários, produtos, etc. Eles vêm com métodos poderosos como push (adicionar), pop (remover), length (tamanho) e forEach (percorrer). Dominar arrays é essencial para manipular dados em JavaScript."
  },
];

export default jsExercises;
