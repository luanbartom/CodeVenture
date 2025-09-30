# CodeVenture

CodeVenture é uma aplicação Next.js que guia estudantes pelos fundamentos de HTML, CSS, JavaScript e React por meio de desafios interativos. Cada exercíco apresenta uma explicação, um editor baseado no Monaco e um feedback imediato, ajudando a fixar conceitos com prática direta.

## Funcionalidades
- Sequência de exercícios por linguagem com barra de progresso dinâmica.
- Editor de código em tempo real com pré-visualização para HTML e CSS.
- Cartões informativos com dicas e curiosidades de cada tecnologia.
- Mensagens de sucesso/erro e bloqueio de avanço até a resposta correta.
- Card de conclusão exibindo os créditos do projeto.

## Tecnologias
- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react)
- CSS Modules para estilização temática (HTML, CSS, JS, React)

## Como executar
```bash
# instale as dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build
npm start
```
A aplicação roda por padrão em `http://localhost:3000`.

## Estrutura principal
```
pages/
  game.js           # fluxo principal dos exercícios
src/
  components/       # ExerciseCard, InfoCard, ProgressBar, etc.
  data/             # listas de exercícios por linguagem
  styles/           # CSS Modules personalizados por linguagem
```

## Agradecimentos
- Professor Matheus Pedro, pelo incentivo, orientação e feedbacks durante o desenvolvimento.

## Créditos
- [Luan Bartom Silva e Silva](https://github.com/luanbartom)
- [Ivan Lucas Miorandi](https://github.com/ivanlucasmiorandi)

Qualquer sugestão ou contribuição é muito bem-vinda!
