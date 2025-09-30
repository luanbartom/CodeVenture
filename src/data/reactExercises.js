const reactExercises = [
  {
    id: 1,
    lesson: {
      title: "⚛️ Exercício 1 - Componente Funcional",
      text: "Um componente funcional é uma função que retorna JSX.",
      example: "function OlaMundo() { return <h1>Olá, Mundo!</h1>; }",
    },
    question: "Crie um componente funcional que exiba 'Olá, Mundo!'",
    answer: "function OlaMundo() { return <h1>Olá, Mundo!</h1>; }",
    validator_pattern: "function\\s+OlaMundo\\s*\\(\\)\\s*{.*<h1>.*</h1>.*}",
    extra: "Um **componente funcional** é a base de qualquer aplicação em React. Ele nada mais é do que uma função JavaScript que retorna JSX (a sintaxe parecida com HTML). Componentes são **reutilizáveis**, ou seja, podemos criar pequenas peças que juntas formam a interface completa. Exemplo: `function Botao() { return <button>Enviar</button>; }`. Em seguida, basta usar `<Botao />` no app. Essa abordagem torna o código mais organizado e modular."
  },
  {
    id: 2,
    lesson: {
      title: "⚛️ Exercício 2 - JSX",
      text: "JSX é a sintaxe que mistura HTML e JS no React.",
      example: "const elemento = <h1>Aprendendo React!</h1>;",
    },
    question: "Crie um elemento JSX que exiba 'Aprendendo React'.",
    answer: "const elemento = <h1>Aprendendo React</h1>;",
    validator_pattern: "const\\s+.*=.*<h1>.*Aprendendo React.*</h1>",
    extra: "O **JSX** permite escrever código HTML dentro do JavaScript, deixando a interface mais legível. Ele não é HTML puro, mas uma sintaxe que o React transforma em chamadas JavaScript. Podemos usar **expressões JS** dentro de chaves `{}`. Exemplo: `const nome = 'Maria'; const titulo = <h1>Olá, {nome}</h1>;`. Isso facilita misturar lógica e interface de maneira clara."
  },
  {
    id: 3,
    lesson: {
      title: "⚛️ Exercício 3 - Props",
      text: "Props permitem passar dados para componentes.",
      example: "function Ola(props) { return <h1>Olá, {props.nome}</h1>; }",
    },
    question: "Crie um componente que receba uma prop 'nome' e exiba 'Olá, {nome}'.",
    answer: "function Ola(props) { return <h1>Olá, {props.nome}</h1>; }",
    validator_pattern: "props\\.nome",
    extra: "**Props** (propriedades) funcionam como **parâmetros de funções**. São a forma de passar informações de um componente pai para um filho. Por exemplo: `function Titulo(props) { return <h1>{props.texto}</h1>; }`. Ao usar `<Titulo texto='Bem-vindo' />`, o componente exibirá `Bem-vindo`. Isso torna os componentes **dinâmicos e reutilizáveis**, já que podemos mudar apenas as props em vez de reescrever o componente."
  },
  {
    id: 4,
    lesson: {
      title: "⚛️ Exercício 4 - State",
      text: "O Hook `useState` cria variáveis de estado em componentes.",
      example: "const [contador, setContador] = useState(1);",
    },
    question: "Crie um estado `contador` inicializado em 0.",
    answer: "const [contador, setContador] = useState(0);",
    validator_pattern: "useState\\s*\\(0\\)",
    extra: "O **state** é usado para guardar valores que mudam durante a execução do app. Com `useState`, declaramos uma variável reativa e uma função para atualizá-la. Exemplo: `const [contador, setContador] = useState(0);`. Sempre que chamamos `setContador(novoValor)`, o React **re-renderiza** o componente com o valor atualizado. É assim que criamos interfaces interativas (como botões de curtir, carrinhos de compras e inputs controlados)."
  },
  {
    id: 5,
    lesson: {
      title: "⚛️ Exercício 5 - Eventos",
      text: "Eventos tornam os componentes interativos.",
      example: "<button onClick={() => alert('Clicado!')}>Clique</button>",
    },
    question: "Crie um botão que exiba um alerta ao ser clicado.",
    answer: "<button onClick={() => alert('Clicado!')}>Clique</button>",
    validator_pattern: "onClick",
    extra: "Eventos no React funcionam parecido com o JavaScript puro, mas usam **camelCase** (ex.: `onClick` em vez de `onclick`). Dentro do evento, podemos chamar funções ou executar lógica. Exemplo: `<button onClick={() => console.log('Botão clicado!')}>OK</button>`. Eventos são a chave para deixar os componentes interativos: formulários, botões, inputs e muito mais. Além disso, podemos passar funções externas para manter o código limpo."
  },
];

export default reactExercises;
