# Spec+Plan: Cursor Roxo de Projetos

## Objective

Adicionar um circulo roxo que acompanha o cursor nativo e se transforma em "Ver projeto" sobre as linhas de projetos da home.

## Assumptions (confirmed)

- A seta nativa permanece visivel; o circulo a acompanha com suavidade e pequeno deslocamento.
- A expansao ocorre somente nos links da lista editorial de projetos da home.
- O efeito e desativado para touch, ponteiros imprecisos e preferencia por movimento reduzido.

## Success Criteria

- O circulo global inicia oculto, aparece apos movimento do ponteiro e desaparece ao sair da janela.
- O movimento usa `requestAnimationFrame` e valores transientes em refs, sem rerender por coordenada.
- Links marcados com `data-cursor-label` expandem o circulo e exibem "Ver projeto".
- O elemento visual nao captura eventos, nao duplica semantica acessivel e permanece dentro da viewport.
- Nenhum conteudo, rota, dependencia ou hover editorial existente e alterado.

## Implementation Order

1. Escrever e executar testes de comportamento em RED.
2. Criar `CursorFollower` e integra-lo globalmente no `App`.
3. Marcar apenas os links editoriais de projetos e concluir o estado expandido.
4. Refatorar, validar visualmente quando possivel e executar a verificacao completa.

## Testing Strategy

- Vitest e Testing Library para presenca global, estados compacto/expandido e escopo dos marcadores.
- Mock minimo das APIs de ambiente ausentes no JSDOM (`matchMedia` e `requestAnimationFrame`).
- Suite completa, build de producao e verificacao de whitespace ao final.

## Boundaries

- Always: preservar o cursor nativo, usar CSS Module, cleanup de listeners/frame e `pointer-events: none`.
- Ask first: ampliar o efeito para outros links ou alterar a paleta/tipografia existentes.
- Never: adicionar dependencia, usar estado React para cada coordenada ou ativar o efeito em touch/reduced motion.
