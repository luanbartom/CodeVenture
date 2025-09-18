const reactExercises = [
  {
    id: 1,
    lesson: {
      title: "📘 Exercício 1 - Componente Funcional",
      text: "Um componente funcional em React é uma função JavaScript que retorna um elemento React. Eles são simples e fáceis de entender.",
      example: `function HelloWorld() {return <h1>Hello, World!</h1>;}`,
    },
    question: "Crie um componente funcional que exiba 'Olá, Mundo!'",
    answer: `function OlaMundo() { return <h1>Olá, Mundo!</h1>; }`,
    extra: "Os componentes funcionais são a base do React moderno. Eles nada mais são do que funções JavaScript que retornam JSX (a sintaxe parecida com HTML). Cada componente representa uma parte da interface, e você pode combiná-los para formar páginas completas. Antes, o React utilizava muito os componentes de classe, mas hoje em dia os funcionais, junto com hooks (como useState e useEffect), se tornaram o padrão. Um detalhe importante: o nome do componente deve sempre começar com letra maiúscula para que o React o reconheça como um componente e não como uma tag HTML comum."
  },
  {
    id: 2,
    lesson: {
      title: "📘 Exercício 2 - JSX",
      text: "JSX é uma sintaxe que permite escrever HTML dentro do JavaScript. Ele torna a criação de componentes mais intuitiva.",
      example: `const element = <h1>Hello, JSX!</h1>;`,
    },
    question: "Crie um elemento JSX que exiba 'Aprendendo React'",
    answer: `const elemento = <h1>Aprendendo React</h1>;`,
    extra: "JSX é uma extensão da linguagem JavaScript que o React utiliza. Ele permite escrever algo parecido com HTML dentro do código JS, mas no fundo é convertido em chamadas de funções JavaScript. Por exemplo, <h1>Oi</h1> vira React.createElement('h1', null, 'Oi'). Com JSX podemos inserir variáveis e expressões usando chaves { }, como <p>{nome}</p>. Isso deixa o código mais legível e muito mais prático. Vale lembrar que JSX não aceita atributos com palavras reservadas do JS, por isso usamos className em vez de class, e htmlFor em vez de for."
  },
  {
    id: 3,
    lesson: {
      title: "📘 Exercício 3 - Props",
      text: "Props são propriedades que você pode passar para componentes React. Elas permitem que você torne seus componentes reutilizáveis e dinâmicos.",
      example: `function Welcome(props) { return <h1>Hello, {props.name}</h1>; }`,
    },
    question: "Crie um componente que receba uma prop 'nome' e exiba 'Olá, {nome}'",
    answer: `function Ola(props) { return <h1>Olá, {props.nome}</h1>; }`,
    extra: "Props (propriedades) são como parâmetros que você envia para um componente. Isso torna os componentes reutilizáveis. Por exemplo, um botão pode receber como props a cor, o texto e a ação ao clicar. Assim, você não precisa criar vários botões diferentes, apenas reutiliza o mesmo componente mudando as props. É importante lembrar que props são **imutáveis**: o componente que recebe não pode alterar seu valor, apenas utilizá-lo. Essa característica ajuda a manter a previsibilidade da aplicação."
  },
  {
    id: 4,
    lesson: {
      title: "📘 Exercício 4 - State",
      text: "State é um objeto que armazena dados que podem mudar ao longo do tempo. Ele é usado para criar componentes interativos.",
      example: `const [count, setCount] = useState(0);`,
    },
    question: "Crie um estado 'contador' inicializado em 0",
    answer: `const [contador, setContador] = useState(0);`,
    extra: "O state é como a 'memória' de um componente. Com o hook useState, você consegue criar variáveis reativas que, quando alteradas, fazem o componente se re-renderizar automaticamente. Por exemplo, const [contador, setContador] = useState(0) cria um contador que começa em 0 e que pode ser atualizado com setContador(novoValor). Isso permite criar interfaces dinâmicas, como carrinhos de compras, contadores de likes ou formulários interativos. Diferente das props, o state é controlado internamente pelo componente."
  },
  {
    id: 5,
    lesson: {
      title: "📘 Exercício 5 - Eventos",
      text: "Eventos em React são manipulados usando camelCase. Você pode adicionar eventos como onClick, onChange, etc., para tornar seus componentes interativos.",
      example: `<button onClick={handleClick}>Clique aqui</button>`,
    },
    question: "Crie um botão que exiba um alerta ao ser clicado",
    answer: `<button onClick={handleClick}>Clique aqui</button>`,
    extra: "Eventos em React funcionam de forma muito parecida com os do JavaScript puro, mas têm algumas diferenças importantes. Primeiro, os nomes dos eventos seguem camelCase (onClick, onChange) em vez de letras minúsculas. Segundo, ao invés de strings, passamos uma função como valor do evento: <button onClick={meuClique}>Ok</button>. Essa função pode estar definida no mesmo componente ou vir via props. Eventos são a base para criar interatividade: desde um simples botão até formulários complexos ou interações em tempo real."
  },
];

export default reactExercises;
