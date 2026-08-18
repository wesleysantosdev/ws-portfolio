# Spec+Plan: Novos cases de projetos

## Objective

Substituir integralmente os quatro projetos atuais pelos quatro projetos documentados em `src/assets/projetos/`, transformando cada rota em um estudo de caso atraente para recrutadores, com narrativa concisa, mídia em vídeo e contexto técnico confiável.

## Assumptions (confirmed)

- Escopo LIGHT: a mudança está restrita ao domínio de projetos e seus cases, sem nova dependência, backend ou alteração na estratégia de rotas.
- A ordem editorial prioriza profundidade técnica e impacto profissional: Shrten, Paglias, Senior Academy e Agente TeleHelp.
- Os `info.md` são a fonte de conteúdo; a redação STAR pode ser condensada, mas não terá significado técnico inventado.
- Somente Shrten terá links externos: produto em `https://shrten.pro` e repositório em `https://github.com/wesleysantosdev/url-shortener`.
- As marcações “Demonstração”, “Dados fictícios” e “Repositório privado” aparecerão nos três projetos correspondentes como contexto transparente. Shrten não terá tags.
- Cada vídeo será importado como asset Vite e exibido em `autoplay`, `muted`, `loop`, `playsinline`, sem controles nativos. Projetos com múltiplos vídeos terão seletor acessível e uma descrição por cena.
- O design mantém os tokens, as fontes, os trilhos editoriais, os temas e o sistema de reveal atuais.
- Refinamento aprovado após a primeira entrega: remover a faixa de destaques, alinhar a stack da home à esquerda e alinhar os labels narrativos com seus respectivos títulos.

## Success Criteria

- A home lista apenas os quatro novos projetos, com títulos, resumos e stacks coerentes com os materiais fornecidos.
- As quatro URLs novas renderizam cases completos; os slugs antigos passam a cair na página de projeto não encontrado.
- Cada case apresenta Contexto, Decisões e Resultado em texto enxuto e fiel ao `info.md`.
- Todos os vídeos têm loop, reprodução automática, som desligado, reprodução inline e nenhuma UI nativa de play/pause.
- Cases com múltiplos vídeos permitem trocar a cena via botões com estado acessível; o vídeo e a descrição visíveis mudam juntos.
- As tags aparecem próximas à introdução como contexto operacional, sem competir com a hierarquia principal.
- Os cases seguem diretamente da introdução para o vídeo, sem uma faixa intermediária de destaques.
- Na home, a stack é alinhada à esquerda; nos blocos narrativos, label e título compartilham o mesmo eixo.
- A descrição do estágio Resultado evita repetir a palavra do próprio título.
- Apenas Shrten exibe ações de acesso e repositório.
- Layout, foco, semântica, temas e responsividade permanecem legíveis em desktop e mobile.
- Testes focados, suíte completa, build e `git diff --check` passam.

## Implementation Order

1. Especificar em testes o novo catálogo, as rotas, links exclusivos, atributos dos vídeos, tags e troca de cenas.
2. Modelar o conteúdo estático e importar os vídeos em `siteContent.js`, removendo os assets legados do catálogo.
3. Criar uma primitiva de galeria de vídeo acessível e integrá-la ao case.
4. Reestruturar o case e a lista da home com a nova hierarquia editorial.
5. Refinar CSS responsivo, estados de foco, temas e movimento reduzido; revisar visualmente.
6. Remover imports/assets órfãos introduzidos pelo catálogo anterior e executar as verificações finais.

## Testing Strategy

- TDD com Vitest e Testing Library: primeiro atualizar `projects.spec.jsx` e `routing.spec.jsx` para falharem pelo catálogo e comportamentos ausentes.
- Cobrir o seletor de cenas por nome acessível e interação, sem testar classes CSS.
- Cobrir os atributos observáveis dos elementos `video` e a ausência de `controls`.
- Executar testes focados após cada ciclo RED/GREEN, depois `npm run test`, `npm run build` e `git diff --check`.

## Boundaries

- Always: preservar conteúdo técnico, acessibilidade, URLs da SPA, tema claro/escuro e alterações locais do usuário nos assets.
- Ask first: qualquer link externo adicional, mudança fora do domínio de projetos ou alteração substancial da identidade global.
- Never: publicar links dos projetos privados, exibir controles nativos de vídeo, inventar métricas ou apagar assets fornecidos pelo usuário.
