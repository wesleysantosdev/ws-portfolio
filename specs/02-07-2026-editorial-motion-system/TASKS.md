# Tasks: Sistema de Motion Editorial

## Current Status

[x] Concluido

## Current Focus

Scroll reveal preservado; animacao horizontal de letras integralmente descartada.

## Decisions

- Escopo LIGHT: um unico dominio visual, sem mudanca de API, rota ou dados.
- Selecionar letras com algoritmo deterministico baseado no texto.
- Compartilhar uma unica instancia de `IntersectionObserver`.
- Usar CSS scroll-driven quando suportado, com fallback visual estatico.
- Usar um unico timer de 640ms por titulo ativo, sem repeticao imediata e com cleanup ao desativar.

## Task List

[x] Criar testes RED do sistema de motion
Acceptance criteria: testes descrevem triggers hover/visible, sete ou oito letras e cobertura da home/case, falhando pela ausencia das primitivas.
Verification command: `npm run test -- src/tests/motion.spec.jsx`
Expected file scope: `src/tests/motion.spec.jsx`

[x] Implementar primitivas performaticas de motion (historico; kinetic text removido)
Acceptance criteria: `KineticText`, observer compartilhado e estilos de revelacao existem, sao acessiveis e respeitam reduced motion.
Verification command: `npm run test -- src/tests/motion.spec.jsx`
Expected file scope: `src/components/ui/KineticText/`, `src/hooks/useInView.js`, `src/styles/`

[x] Integrar motion na home e nos cases
Acceptance criteria: projetos, Sobre, Tecnologias, footer e case usam os triggers corretos sem regressao visual estrutural.
Verification command: `npm run test`
Expected file scope: `src/components/sections/`, `src/components/layout/Footer/`, `src/pages/ProjectCaseStudyPage/`

[x] Validar producao
Acceptance criteria: suite, build e verificacao de diff passam.
Verification command: `npm run test && npm run build && git diff --check`
Expected file scope: projeto completo

[x] Ajustar rolling horizontal para sequencia infinita individual
Acceptance criteria: enquanto ativo, exatamente uma letra gira por vez, a posicao muda continuamente sem repeticao imediata e todo timer e removido ao desativar.
Verification command: `npm run test -- src/tests/motion.spec.jsx`
Expected file scope: `src/components/ui/KineticText/`, `src/components/sections/Projects/Projects.jsx`, `src/tests/motion.spec.jsx`

[x] Revalidar sistema apos ajuste de motion
Acceptance criteria: reveal permanece inalterado; suite, build e diff passam.
Verification command: `npm run test && npm run build && git diff --check`
Expected file scope: projeto completo

[x] Descartar animacao horizontal de letras
Acceptance criteria: `KineticText`, observer e timers sao removidos; titulos voltam a markup simples; scroll reveal permanece coberto.
Verification command: `npm run test -- src/tests/motion.spec.jsx`
Expected file scope: `src/components/ui/KineticText/`, `src/hooks/useInView.js`, componentes consumidores e `src/tests/motion.spec.jsx`

[x] Revalidar scroll reveal isolado
Acceptance criteria: suite, build e diff passam sem referencias orfas ao sistema descartado.
Verification command: `npm run test && npm run build && git diff --check`
Expected file scope: projeto completo

## Verification Log

- 2026-07-02: escopo classificado como LIGHT; requisitos e limites de performance definidos.
- 2026-07-02: `motion.spec.jsx` executado em RED com tres falhas esperadas pela ausencia de kinetic text e marcadores de reveal.
- 2026-07-02: primitivas `KineticText`, `useInView` compartilhado e `ScrollReveal` implementadas; teste focado com 3 casos passando.
- 2026-07-02: home e case individual integrados com triggers hover/visible e entre 7-8 letras selecionadas por titulo.
- 2026-07-02: `npm run test` concluido com 6 arquivos e 14 testes passando.
- 2026-07-02: `npm run build` e `git diff --check` concluidos com sucesso.
- 2026-07-02: convencoes do sistema de motion registradas em `AGENTS.md`.
- 2026-07-02: requisito refinado pelo usuario: rolling horizontal deve ser infinito, pseudoaleatorio e estritamente uma letra por vez.
- 2026-07-02: teste RED confirmou ausencia da marcacao individual `data-spinning`; sequenciador implementado com intervalo de 640ms e animacao de 560ms.
- 2026-07-02: teste cobre uma unica letra ativa, troca sem repeticao imediata e cleanup do timer de hover.
- 2026-07-02: suite final com 6 arquivos e 15 testes passando; build e `git diff --check` concluidos com sucesso.
- 2026-07-02: usuario decidiu descartar integralmente a animacao horizontal de letras e manter somente o scroll reveal.
- 2026-07-02: `KineticText`, `useInView`, timers, estilos e imports consumidores removidos; titulos restaurados para JSX simples.
- 2026-07-02: teste focado confirma ausencia de kinetic text e permanencia de pelo menos 12 reveals na home e 6 no case.
- 2026-07-02: suite final com 6 arquivos e 13 testes passando; build e `git diff --check` concluidos com sucesso.

## Next Suggested Step

Manter o scroll reveal atual e avaliar novas ideias de animacao separadamente antes de integra-las.
