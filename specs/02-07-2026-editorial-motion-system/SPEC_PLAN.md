# Spec+Plan: Sistema de Motion Editorial

## Objective

Adicionar revelacao fluida no scroll, preservando legibilidade, acessibilidade e desempenho na home e nos cases individuais.

## Assumptions (confirmed)

- Revelacoes acompanham a entrada no viewport e podem ocorrer novamente se o elemento sair e retornar.
- A animacao horizontal de letras foi descartada apos avaliacao visual.

## Success Criteria

- Secoes, textos e blocos abaixo da dobra entram com translacao curta, opacidade e blur leve.
- Poster e notas do case tambem recebem revelacao no scroll.
- Textos continuam semanticamente acessiveis e nao mudam de largura durante a animacao.
- Movimento reduzido desliga os efeitos.
- Nao existem listeners de scroll, timers ou aleatoriedade durante renderizacao.
- Testes e build passam.

## Implementation Order

1. Escrever testes de contrato para triggers, quantidade de letras e cobertura de revelacao.
2. Criar estilos compartilhados de revelacao baseados em scroll timeline.
3. Integrar home e case individual.
4. Validar testes, build e diff.

## Testing Strategy

- Vitest e Testing Library para semantica e cobertura dos marcadores de reveal.
- Testes de rotas garantem aplicacao no case.
- Testes existentes protegem navegacao, tema e conteudo.

## Boundaries

- Always: animar apenas `transform`, `opacity` e blur leve; preservar reduced motion.
- Ask first: alterar textos, layout, cores ou adicionar dependencia de animacao.
- Never: usar listener de scroll, timer para efeitos visuais ou animar propriedades que causem reflow continuo.
