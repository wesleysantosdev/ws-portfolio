# Spec: React Architecture Refactor

## Objective

Refatorar o portfolio atual preservando o visual existente, mas adotando melhores praticas de React, organizacao por responsabilidades, separacao entre dados e apresentacao, acessibilidade basica e uma estrutura mais escalavel para futuras evolucoes visuais.

## Assumptions

1. O escopo desta etapa e estrutural e educacional, nao visual.
2. O portfolio continuara como uma single-page application em Vite + React.
3. O formulario de contato pode continuar usando EmailJS nesta etapa, mas com encapsulamento melhor e comportamento mais previsivel.
4. Vamos manter CSS tradicional, sem Tailwind.
5. Vamos introduzir testes com Vitest para cobrir a nova arquitetura e comportamentos centrais.

## Tech Stack

- Vite
- React 18
- CSS
- Vitest
- React Testing Library

## Commands

- `npm install`
- `npm run test`
- `npm run build`

## Project Structure

Estrutura alvo de alto nivel:

- `src/app/` para composicao principal
- `src/components/` para UI reutilizavel e secoes
- `src/content/` para dados estaticos do portfolio
- `src/hooks/` para comportamento reutilizavel
- `src/lib/` para integracoes e utilitarios
- `src/tests/` para testes

## Code Style

- Componentes pequenos e focados
- Dados estaticos fora dos componentes
- Hooks para comportamento reutilizavel
- Importacoes diretas, evitando concentrar responsabilidades em arquivos monoliticos
- Sem componentes definidos dentro de outros componentes
- Efeitos apenas quando realmente necessarios

## Testing Strategy

- Escrever testes antes das principais mudancas comportamentais
- Cobrir composicao principal, navegacao e renderizacao orientada a dados
- Validar estados principais do formulario onde for viavel sem depender da rede

## Boundaries

- Nao redesenhar o layout nesta etapa
- Nao migrar para Tailwind
- Nao reescrever o portfolio para framework diferente
- Nao introduzir backend proprio para contato nesta etapa

## Success Criteria

1. A aplicacao permanece com o mesmo visual geral e mesma navegacao.
2. Conteudo textual, links sociais e projetos saem dos componentes e passam a viver em fontes de dados dedicadas.
3. Comportamentos como scroll listener, menu mobile e texto rotativo ficam encapsulados de maneira mais segura e previsivel.
4. O formulario de contato fica mais organizado e acessivel.
5. O projeto ganha cobertura de testes para os fluxos centrais da nova arquitetura.
6. Um documento de estudo explica as principais decisoes tecnicas, com analogias e exemplos.

## Open Questions

- Nenhuma no momento. A decisao principal de preservar o visual ja foi confirmada.
