# Plan: React Architecture Refactor

## Implementation Order

1. Adicionar infraestrutura de testes e registrar comandos do projeto.
2. Escrever testes para a composicao principal e para renderizacao baseada em dados.
3. Extrair conteudo estatico para `src/content/`.
4. Extrair componentes reutilizaveis de interface e secoes.
5. Mover logicas de comportamento para hooks dedicados.
6. Encapsular a integracao com EmailJS em `src/lib/`.
7. Ajustar estilos apenas no necessario para manter o visual apos a reorganizacao.
8. Escrever a documentacao de estudo.

## Major Components

- App shell principal
- Navegacao
- Hero/Header
- Sobre
- Portfolio
- Contato
- Footer
- Hooks de scroll, menu e texto rotativo
- Camada de conteudo estatico

## Risks And Mitigations

- Risco: quebrar o visual ao separar componentes.
  Mitigacao: preservar classes CSS existentes sempre que possivel.

- Risco: testes acoplados demais ao markup.
  Mitigacao: testar comportamento e conteudo significativo, nao detalhes cosmeticos.

- Risco: integracao do formulario ficar dificil de testar.
  Mitigacao: isolar EmailJS em funcao dedicada e mockavel.

## Parallel Work

- Nao necessario neste momento. O tamanho do projeto permite uma refatoracao linear com melhor controle.

## Verification Checkpoints

- `npm run test`
- `npm run build`
