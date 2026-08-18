# Tasks: React Architecture Refactor

## Current Status

[x] Concluido

## Current Focus

Refatoracao concluida com testes e documentacao de estudo registrados.

## Decisions

- Preservar o visual nesta etapa.
- Usar CSS tradicional.
- Introduzir Vitest e React Testing Library.
- Refatorar priorizando separacao entre dados, UI e comportamento.

## Task List

[x] Configurar Vitest e ambiente de testes
Acceptance criteria: comandos de teste funcionam localmente e existe setup basico para React Testing Library.
Verification command: `npm run test`
Expected file scope: `package.json`, `vite.config.js`, `src/tests/`, possiveis arquivos de setup

[x] Escrever testes para composicao principal e comportamento de navegacao
Acceptance criteria: App renderiza secoes principais e navegacao baseada em dados pode ser validada por testes.
Verification command: `npm run test`
Expected file scope: `src/tests/`, `src/App.jsx`, `src/components/`

[x] Extrair conteudo estatico para modulos dedicados
Acceptance criteria: textos, links sociais, itens de navegacao, skills e projetos nao ficam hardcoded dentro dos componentes principais.
Verification command: `npm run test`
Expected file scope: `src/content/`, `src/components/`

[x] Extrair hooks e componentes reutilizaveis
Acceptance criteria: logicas de scroll, menu e texto rotativo ficam desacopladas e reaproveitaveis.
Verification command: `npm run test`
Expected file scope: `src/hooks/`, `src/components/`

[x] Encapsular integracao do formulario e melhorar acessibilidade basica
Acceptance criteria: formulario usa ids/labels corretos, sem atributos invalidos, e a integracao externa fica isolada.
Verification command: `npm run test`
Expected file scope: `src/components/Contact/`, `src/lib/`

[x] Documentar as decisoes principais da refatoracao
Acceptance criteria: existe documento didatico explicando o que mudou, porque mudou e analogias praticas.
Verification command: revisao manual
Expected file scope: `docs/` ou `specs/`

[x] Validar build final
Acceptance criteria: o projeto gera build de producao sem erros.
Verification command: `npm run build`
Expected file scope: projeto completo

## Verification Log

- 2026-06-30: descoberta inicial concluida; projeto identificado como Vite + React com componentes por secao e sem infraestrutura de testes.
- 2026-06-30: `npm run test` executado com 2 arquivos de teste e 3 testes passando.
- 2026-06-30: `npm run build` executado com sucesso; bundle de producao gerado em `dist/`.

## Next Suggested Step

Iniciar uma spec futura focada em redesign visual, aproveitando a base mais modular criada nesta etapa.
