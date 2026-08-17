# Tasks: Novos cases de projetos

## Current Status

[x] Concluído

## Current Focus

Refinamentos aprovados, implementados e verificados.

## Decisions

- Escopo LIGHT, restrito ao catálogo e à experiência dos estudos de caso.
- Ordem editorial: Shrten, Paglias, Senior Academy, Agente TeleHelp.
- Vídeo é a mídia principal; a troca de cenas atualiza vídeo e descrição em conjunto.
- Tags privadas são contexto operacional; links externos existem apenas no Shrten.
- Direção visual: “mesa de demonstração” editorial, preservando tokens e fontes atuais.
- Refinamento solicitado: sem faixa de destaques; stack da home e labels narrativos alinhados à esquerda; descrição de Resultado sem repetição.

## Task List

[x] Especificar o novo contrato em testes
Acceptance criteria: testes cobrem os quatro projetos, rotas novas, remoção dos antigos, atributos dos vídeos, links exclusivos, tags e troca acessível de cenas.
Verification command: `npm run test -- src/tests/projects.spec.jsx src/tests/routing.spec.jsx`
Expected file scope: `src/tests/projects.spec.jsx`, `src/tests/routing.spec.jsx`

[x] Substituir e estruturar o conteúdo dos projetos
Acceptance criteria: `siteContent.js` importa somente os novos vídeos e expõe narrativa, stack, tags, links e cenas sem duplicação nos componentes.
Verification command: `npm run test -- src/tests/projects.spec.jsx src/tests/routing.spec.jsx`
Expected file scope: `src/content/siteContent.js`

[x] Implementar galeria e case editorial
Acceptance criteria: vídeo ativo reproduz automaticamente em loop, mudo, inline e sem controles; seletor acessível sincroniza cena e descrição; case apresenta narrativa e ações conforme o projeto.
Verification command: `npm run test -- src/tests/routing.spec.jsx`
Expected file scope: `src/components/ui/ProjectVideoGallery/`, `src/pages/ProjectCaseStudyPage/`

[x] Refinar índice da home e responsividade
Acceptance criteria: home lista somente os novos cases com metadados estratégicos e mantém leitura, foco e interação em desktop/mobile.
Verification command: `npm run test -- src/tests/projects.spec.jsx src/tests/portfolio-redesign.spec.jsx`
Expected file scope: `src/components/sections/Projects/`, estilos relacionados

[x] Auditar visual e validar entrega
Acceptance criteria: light/dark e larguras desktop/mobile são revisados; não há resíduos legados introduzidos; suíte, build e diff passam.
Verification command: `npm run test && npm run build && git diff --check`
Expected file scope: projeto completo e documentação desta feature

[x] Refinar hierarquia após revisão do usuário
Acceptance criteria: faixa de destaques e seus dados deixam de existir; stack da home alinha à esquerda; labels de Contexto/Decisões/Resultado não têm padding à esquerda; descrição de Resultado não repete o título.
Verification command: `npm run test -- src/tests/projects.spec.jsx src/tests/routing.spec.jsx src/tests/portfolio-redesign.spec.jsx`
Expected file scope: conteúdo, lista de projetos, página de case, testes e documentação desta feature

## Verification Log

- 2026-08-14: descoberta identificou React 18 + Vite, Vitest/Testing Library, rotas resolvidas no `App` e quatro projetos novos com oito vídeos 1920×1080.
- 2026-08-14: alterações locais do usuário detectadas em `src/assets/projetos/` e na remoção de `referencia-de-animacao.mp4`; serão preservadas.
- 2026-08-14: suíte de base passou com 11 arquivos e 27 testes; apenas warnings preexistentes do plugin React/Vite foram emitidos.
- 2026-08-14: escopo classificado como LIGHT; spec e plano registrados antes da implementação.
- 2026-08-14: testes focados executados em RED com 8 falhas esperadas pelo catálogo legado e pela ausência dos novos comportamentos.
- 2026-08-14: conteúdo estruturado com quatro cases, oito vídeos, narrativa condensada, destaques, tags e ações exclusivas do Shrten.
- 2026-08-14: galeria acessível e case editorial implementados; teste focado passou com 2 arquivos e 8 testes.
- 2026-08-14: contratos legados de cursor, motion e arquitetura de conteúdo foram atualizados; suíte completa passou com 11 arquivos e 31 testes.
- 2026-08-14: revisão headless confirmou hierarquia, vídeo, legenda, seletor de cenas e texto STAR em 1440 px e 390 px, nos temas claro e escuro.
- 2026-08-14: quatro posters órfãos do catálogo anterior foram removidos e o exemplo de rota do README passou a usar Shrten.
- 2026-08-14: build de produção passou com 76 módulos; `git diff --check` não encontrou erros.
- 2026-08-14: revisão do usuário aprovou a direção geral e solicitou três refinamentos de hierarquia e alinhamento.
- 2026-08-14: ciclo RED confirmou quatro contratos ausentes; GREEN focado passou com 3 arquivos e 18 testes após remover destaques/dados, alinhar stack/labels e revisar a descrição de Resultado.
- 2026-08-14: suíte final passou com 11 arquivos e 35 testes; build passou com 76 módulos e `git diff --check` sem erros.
- 2026-08-14: revisão headless em 1440 px e 390 px confirmou a transição direta da introdução para o vídeo e o alinhamento dos labels com Contexto, Decisões e Resultado.

## Next Suggested Step

Publicar a versão atual quando for conveniente e validar os vídeos no ambiente de deploy.
