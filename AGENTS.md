# Guia de Arquitetura e Desenvolvimento

Este arquivo e a fonte de verdade para qualquer pessoa ou LLM que altere este repositorio. Leia-o antes de planejar ou editar codigo. Em caso de conflito, as instrucoes explicitas do usuario prevalecem; registre qualquer desvio arquitetural intencional na spec da mudanca.

## Visao geral

- Aplicacao SPA em React 18, JavaScript e Vite.
- Estilos locais com CSS Modules.
- Conteudo estatico centralizado em `src/content/`.
- Testes com Vitest, Testing Library e ambiente JSDOM.
- URLs de cases sao resolvidas pelo `App`; `vercel.json` garante o fallback da SPA.

## Comandos obrigatorios

```bash
npm run test
npm run build
```

Antes de concluir uma alteracao, execute tambem `git diff --check`. Nao declare a tarefa concluida se testes ou build falharem.

## Arquitetura de pastas

```text
src/
├── app/                         # Composicao raiz e decisao de rota
│   └── App.jsx
├── assets/                      # Imagens, documentos e fontes importados
├── components/
│   ├── layout/                  # Estrutura compartilhada entre paginas
│   │   └── ComponentName/
│   │       ├── ComponentName.jsx
│   │       └── ComponentName.module.css
│   ├── sections/                # Secoes completas de uma pagina
│   │   └── SectionName/
│   │       ├── SectionName.jsx
│   │       └── SectionName.module.css
│   └── ui/                      # Primitivas reutilizaveis e pequenas
│       └── ComponentName/
│           ├── ComponentName.jsx
│           └── ComponentName.module.css
├── content/                     # Textos, links e dados estaticos
├── hooks/                       # Comportamento React reutilizavel
├── pages/                       # Composicao de paginas e estados de rota
│   └── PageName/
│       ├── PageName.jsx
│       └── PageName.module.css
├── tests/                       # Testes de comportamento e arquitetura
├── main.css                     # Somente tokens, reset e regras globais
└── main.jsx                     # Bootstrap do React
```

Crie `src/lib/` apenas quando existir uma integracao ou utilitario puro realmente usado. Nao mantenha pastas vazias para uma arquitetura hipotetica.

## Responsabilidades

- `main.jsx`: inicializa o React e importa o CSS global. Nao contem regra de negocio.
- `app/App.jsx`: resolve a URL e escolhe uma pagina. Nao implementa secoes visuais.
- `pages/`: compoe layout e secoes; evita detalhes internos de cada secao.
- `components/layout/`: elementos compartilhados entre paginas, como header e footer.
- `components/sections/`: blocos de dominio visual da pagina.
- `components/ui/`: primitivas pequenas que possuem uso real. Nao criar abstracoes para um unico trecho trivial.
- `content/`: dados estaticos substituiveis. Componentes nao devem concentrar listas extensas de conteudo.
- `hooks/`: sincronizacao e estado reutilizavel. Um hook deve ter uma responsabilidade clara.
- `main.css`: tokens de tema, reset, estilos de elementos globais e preferencias globais de acessibilidade.

## Regras para React

1. Componentes usam PascalCase; hooks comecam com `use`; funcoes e variaveis usam camelCase.
2. Um componente por arquivo. Nunca defina componentes dentro de outros componentes.
3. Prefira componentes focados e composicao. Extraia quando houver responsabilidade nomeavel, reutilizacao ou JSX complexo; nao fragmente markup trivial.
4. Derive valores durante o render. Nao use `useEffect` para sincronizar estado que pode ser calculado diretamente.
5. Use efeitos apenas para sistemas externos, sempre com dependencias primitivas e cleanup quando necessario.
6. Atualizacoes que dependem do valor anterior usam a forma funcional de `setState`.
7. Inicializacao custosa de estado usa funcao lazy em `useState`.
8. Nao adicione `memo`, `useMemo` ou `useCallback` por reflexo. Use-os apenas com custo ou rerender comprovado.
9. Estado deve ficar no menor ancestral comum que realmente o consome.
10. Preserve HTML semantico, navegacao por teclado, nomes acessiveis, foco visivel e `prefers-reduced-motion`.
11. Condicionais que podem renderizar valores como `0` usam ternario, nao `&&`.
12. Dados estaticos e JSX invariavel pesado devem ficar fora do corpo do componente quando isso evitar recriacao relevante.

## Imports e bundle

- Use imports diretos e caminhos estaticamente analisaveis.
- Nao crie arquivos `index.js` apenas para reexportar modulos (barrel files).
- Nao mantenha wrappers que apenas reexportam outro componente.
- Carregue componentes realmente pesados de forma dinamica quando nao forem necessarios na primeira renderizacao.
- Bibliotecas de terceiros nao criticas devem ser adiadas ate depois da hidratacao/interacao.
- Nao adicione uma dependencia quando a plataforma ou o codigo existente resolve o problema com clareza.
- Assets devem ser importados por um modulo ou referenciados pelo HTML; remova arquivos orfaos.

## Dados assincronos

- Operacoes independentes devem iniciar juntas e ser aguardadas com `Promise.all`.
- Adie `await` ate o ponto em que o resultado for necessario.
- Verifique condicoes sincronas baratas antes de iniciar operacoes remotas.
- Evite waterfalls entre pai e filho; inicie buscas no nivel em que as dependencias sao conhecidas.
- Se houver busca client-side recorrente, escolha uma estrategia de cache/deduplicacao antes de espalhar `fetch` em efeitos.

## CSS Modules

- Todo componente visual possui `ComponentName.module.css` ao lado do JSX.
- Use `styles.nomeDaClasse`; nao escreva classes globais de componentes.
- `:global` so e permitido para estado global inevitavel, como `[data-theme]`, e deve permanecer localizado.
- Tokens de cor, espacamento global e largura de pagina vivem em `:root` no `main.css`.
- Prefira classes a alteracoes imperativas de estilos no DOM.
- Preserve responsividade no modulo responsavel pelo componente.
- Animacoes longas ou repetidas devem respeitar a regra global de movimento reduzido.
- Nao use `!important`, exceto em overrides globais de acessibilidade documentados.

## Conteudo e assets

- Textos, links sociais, stack e projetos vivem em `src/content/siteContent.js` ou em modulos de conteudo equivalentes.
- Componentes recebem dados por props ou importam a fonte estatica apropriada; nao duplique conteudo.
- Nomeie assets pelo seu papel, use texto alternativo descritivo e informe dimensoes quando isso evitar layout shift.
- Imagens fora da primeira dobra usam carregamento lazy quando apropriado.

## Testes

- Toda feature, correcao ou refatoracao comportamental segue RED-GREEN-REFACTOR.
- Teste comportamento observavel com roles, labels, texto e interacoes.
- Evite selecionar classes CSS. Para um marcador semantico inexistente, use `data-testid` com moderacao.
- Mocks sao o ultimo recurso; prefira componentes e funcoes reais.
- Testes novos ficam em `src/tests/` com nome `*.spec.js` ou `*.spec.jsx`.
- Atualize `src/tests/architecture.spec.js` quando a arquitetura intencional mudar.
- Uma refatoracao deve manter os testes de comportamento verdes durante todo o processo.

## Fluxo de trabalho para mudancas

1. Leia este arquivo, `package.json`, a spec ativa e os arquivos diretamente afetados.
2. Confirme o contrato existente com testes; escreva primeiro um teste que falhe quando houver comportamento ou limite novo.
3. Implemente a menor mudanca coerente.
4. Refatore mantendo a suite verde.
5. Remova imports, arquivos e pastas que se tornaram orfaos.
6. Execute testes, build e `git diff --check`.
7. Resuma arquivos alterados, decisoes e verificacoes no handoff.

Para mudancas significativas, crie uma pasta em `specs/DD-MM-YYYY-feature-slug/` com spec/plano e `TASKS.md`, mantendo o status atualizado.

## Proibicoes

- Nao alterar visual, conteudo, URL ou contrato publico como efeito colateral de uma refatoracao.
- Nao misturar dados extensos, comportamento e apresentacao em um componente monolitico.
- Nao adicionar estado derivado, efeitos redundantes ou otimizacoes especulativas.
- Nao usar barrel files ou imports dinamicos construidos por string.
- Nao deixar codigo comentado, arquivos orfaos, pastas vazias ou testes de componentes que nao existem na aplicacao.
- Nao editar ou apagar mudancas do usuario fora do escopo atual.
- Nao ignorar falhas, warnings novos ou problemas de acessibilidade para concluir mais rapido.

## Criterio de conclusao

Uma mudanca esta concluida somente quando a responsabilidade dos arquivos continua clara, nao ha residuos introduzidos, os contratos acessiveis foram preservados e os comandos obrigatorios passam.
