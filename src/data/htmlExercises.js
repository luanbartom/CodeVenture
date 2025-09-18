const htmlExercises = [
  {
    id: 1,
    lesson: {
      title: "📘 Exercício 1 - Título principal (<h1>)",
      text: "O elemento <h1> serve para criar títulos principais em uma página HTML. Ele indica o assunto mais importante.",
      example: "<h1>Meu Primeiro Site</h1>",
    },
    question: "Crie um título h1 com o texto 'Olá Mundo'",
    answer: "<h1>Olá Mundo</h1>",
    extra: "O elemento <h1> é considerado o título de maior importância dentro de uma página HTML. Pense nele como o 'nome do capítulo principal' do seu conteúdo. Em boas práticas de desenvolvimento web, recomenda-se usar apenas um <h1> por página, pois isso ajuda na organização semântica e na hierarquia de informação. Além disso, motores de busca como o Google dão muito peso ao <h1> para entender do que a página se trata, influenciando diretamente em SEO. Em termos de acessibilidade, leitores de tela utilizam o <h1> para guiar usuários com deficiência visual no entendimento da estrutura do site."
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
    extra: "O elemento <p> é fundamental para estruturar qualquer texto em HTML, pois cada parágrafo forma um bloco separado de informação. Navegadores automaticamente aplicam espaçamento antes e depois de cada parágrafo, o que melhora a legibilidade. Em vez de usar várias quebras de linha (<br>) para separar frases, o recomendado é sempre usar <p> para cada ideia ou tópico. Isso não só deixa o código mais limpo e semântico, mas também ajuda no SEO e na acessibilidade, já que ferramentas de leitura de tela identificam os parágrafos como unidades de sentido."
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
    extra: "O elemento <img> é utilizado para exibir imagens em uma página HTML. Ele é um elemento vazio (não possui fechamento) e precisa obrigatoriamente do atributo src, que indica o caminho da imagem, podendo ser relativo (na mesma pasta) ou absoluto (URL completa). Outro atributo essencial é o alt, que fornece uma descrição textual da imagem. O alt é crucial para acessibilidade, pois leitores de tela o utilizam para descrever a imagem a pessoas com deficiência visual, além de ser exibido caso a imagem não carregue. Para SEO, o alt também ajuda os mecanismos de busca a entender o conteúdo visual da página."
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
    extra: "O elemento <a> (âncora) é um dos pilares da web, já que permite a navegação entre páginas. O atributo href define o destino do link, que pode ser uma URL externa, uma página interna do mesmo site ou até mesmo um trecho da própria página (usando âncoras #). O texto entre a abertura e o fechamento da tag é o que o usuário vê e clica. Boas práticas incluem sempre usar textos descritivos, como 'Acesse o Google', em vez de 'Clique aqui', porque isso melhora a acessibilidade e o SEO. Além disso, é possível adicionar atributos como target='_blank' para abrir em nova aba."
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
    extra: "As listas não ordenadas (<ul>) são usadas quando a ordem dos itens não importa, e cada item é representado por uma bolinha (marcador) por padrão. Cada elemento da lista deve estar dentro de um <li>, que significa 'list item'. As listas ajudam a organizar informações de forma clara e estruturada, como menus de navegação, listas de ingredientes ou tópicos. Do ponto de vista semântico, elas deixam o HTML mais compreensível para navegadores, motores de busca e tecnologias assistivas. Além disso, é possível estilizar listas com CSS para alterar marcadores, cores, espaçamento e até transformá-las em menus horizontais."
  },
];

export default htmlExercises;
