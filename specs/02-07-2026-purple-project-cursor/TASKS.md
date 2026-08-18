# Tasks: Cursor Roxo de Projetos

## Current Status

[x] Concluido

## Current Focus

Feature concluida e verificada.

## Decisions

- Escopo LIGHT, restrito a uma microinteracao global e ao marcador dos projetos da home.
- Manter a seta nativa e acompanhar com circulo roxo de 10px, expandindo para 112px.
- Usar refs e `requestAnimationFrame` para coordenadas; React controla apenas mudancas discretas de modo.
- Desativar em touch, ponteiro impreciso e `prefers-reduced-motion`.

## Task List

[x] Escrever testes de comportamento em RED
Acceptance criteria: os testes descrevem presenca global, visibilidade, expansao e escopo dos links, falhando pela ausencia da feature.
Verification command: `npm run test -- src/tests/cursor-follower.spec.jsx`
Expected file scope: `src/tests/cursor-follower.spec.jsx`

[x] Implementar e integrar o cursor global
Acceptance criteria: o cursor acompanha o ponteiro, respeita capacidades/preferencias, limpa recursos e permanece dentro da viewport.
Verification command: `npm run test -- src/tests/cursor-follower.spec.jsx`
Expected file scope: `src/components/ui/CursorFollower/`, `src/app/App.jsx`

[x] Ativar o modo "Ver projeto" apenas na lista editorial
Acceptance criteria: somente os links de projeto da home possuem o marcador interno e expandem o cursor.
Verification command: `npm run test -- src/tests/cursor-follower.spec.jsx src/tests/projects.spec.jsx`
Expected file scope: `src/components/sections/Projects/Projects.jsx`

[x] Validar qualidade e producao
Acceptance criteria: suite completa e build passam sem warnings novos; diff nao possui erros de whitespace.
Verification command: `npm run test && npm run build && git diff --check`
Expected file scope: projeto completo

## Verification Log

- 2026-07-02: descoberta concluida; React 18, Vite, Vitest e Testing Library ja atendem a feature sem dependencias.
- 2026-07-02: escopo classificado como LIGHT; alteracoes existentes do sistema de motion serao preservadas.
- 2026-07-02: teste dedicado executado em RED com 4 falhas esperadas pela ausencia do cursor e dos marcadores.
- 2026-07-02: componente global implementado com refs, `requestAnimationFrame`, limites de viewport e fallback de capacidade.
- 2026-07-02: testes focados do cursor e projetos concluidos com 2 arquivos e 6 testes passando.
- 2026-07-02: suite completa concluida com 9 arquivos e 21 testes passando; apenas warnings preexistentes do plugin Vite/React foram emitidos.
- 2026-07-02: build de producao concluido com 67 modulos transformados; `git diff --check` sem erros.
- 2026-07-02: validacao visual automatizada indisponivel por ausencia de navegador headless no ambiente; estados visuais permanecem cobertos pelos contratos e media queries.

## Next Suggested Step

Revisar visualmente em um navegador real como verificacao complementar, sem bloqueio tecnico pendente.
