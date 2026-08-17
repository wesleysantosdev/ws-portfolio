# Tasks: Portfólio bilíngue

## Current Status

[x] Concluído

## Current Focus

Refinamento do seletor concluído e verificado.

## Decisions

- Escopo STANDARD: a mudança atravessa conteúdo, estado global, documento, páginas, header e assets.
- O idioma inicial usa apenas o primeiro idioma preferido do navegador: `pt-BR` escolhe português; os demais escolhem inglês.
- Preferência manual persistida em `portfolio-locale` sempre prevalece.
- URLs permanecem inalteradas e não haverá geolocalização por IP.
- `CV.pdf` será renomeado para `cv-ptbr.pdf`; `cv-en.pdf` já foi fornecido pelo usuário.
- O seletor compacto mostra o idioma de destino e usa microtipografia editorial, sem bandeiras ou novo pill.
- Refinamento solicitado: o seletor passa para o fim da cápsula de navegação; as ações à direita voltam a conter somente LinkedIn e tema.
- Suite de base em 2026-08-17: 11 arquivos e 36 testes passando; warnings de migração do plugin React/Vite já eram preexistentes.

## Task List

[x] Especificar os contratos de idioma em testes
Acceptance criteria: testes falham pela ausência da detecção `pt-BR`/externa, persistência, troca global, sincronização do documento e seleção de currículo.
Verification command: `npm run test -- src/tests/language.spec.jsx`
Expected file scope: `src/tests/language.spec.jsx`, `src/tests/setup.js`

[x] Implementar catálogo e preferência de locale
Acceptance criteria: conteúdo dos dois idiomas possui a mesma estrutura; locale inicial e persistido são resolvidos sem serviço externo; `html[lang]` e metadados são sincronizados.
Verification command: `npm run test -- src/tests/language.spec.jsx`
Expected file scope: `src/content/siteContent.js`, `src/hooks/useLocale.js`, `src/app/App.jsx`, `index.html`, assets de currículo

[x] Localizar páginas e componentes
Acceptance criteria: home, header, footer, projetos, cases, galeria e 404 não mantêm microcopy fixa em português e respondem à troca sem recarregar.
Verification command: `npm run test -- src/tests/language.spec.jsx src/tests/projects.spec.jsx src/tests/routing.spec.jsx src/tests/portfolio-redesign.spec.jsx`
Expected file scope: `src/pages/`, `src/components/`, `src/content/siteContent.js`

[x] Integrar e revisar o seletor editorial
Acceptance criteria: controle é acessível, cabe em 320 px, possui foco visível e usa somente tokens/motion existentes; light/dark e reduced motion permanecem legíveis.
Verification command: inspeção visual headless e `npm run test -- src/tests/language.spec.jsx src/tests/header-theme-icons.spec.js`
Expected file scope: `src/components/layout/Header/`

[x] Auditar e validar a entrega
Acceptance criteria: não há strings portuguesas indevidas no catálogo inglês nem imports/assets órfãos; suite, build e diff passam.
Verification command: `npm run test && npm run build && git diff --check`
Expected file scope: projeto completo e documentação desta feature

[x] Reposicionar e uniformizar a interação do seletor
Acceptance criteria: `EN/PT` fica dentro da navegação textual, fora do grupo de ícones, usa `RollingText` em hover/foco e continua cabendo em 320 px.
Verification command: `npm run test -- src/tests/language.spec.jsx src/tests/header-theme-icons.spec.js && npm run test && npm run build && git diff --check`
Expected file scope: `src/components/layout/Header/`, `src/components/ui/RollingText/`, testes e documentação desta feature

## Verification Log

- 2026-08-17: descoberta confirmou React 18 + Vite, conteúdo centralizado, rotas resolvidas no `App`, CSS Modules e specs no padrão esperado.
- 2026-08-17: `npm run test` de base passou com 11 arquivos e 36 testes.
- 2026-08-17: escopo classificado como STANDARD; `grill-me` fechou detecção por navegador, URLs estáveis e currículos específicos por idioma.
- 2026-08-17: plano visual preserva paleta e tipografia; o único gesto novo será a marca editorial compacta de idioma no grupo de ações.
- 2026-08-17: `language.spec.jsx` executado em RED com cinco falhas esperadas pela ausência do seletor, catálogo inglês, sincronização do documento e currículos localizados.
- 2026-08-17: catálogo compartilhado, hook de locale, detecção sem rede, persistência, metadados e currículos foram implementados; `language.spec.jsx` passou com cinco testes.
- 2026-08-17: home, cases, galeria, 404, header, footer e cursor recebem o catálogo ativo; seis arquivos de regressão passaram com 28 testes.
- 2026-08-17: revisão headless confirmou home em 1440 px, 390 px e 320 px e case em 390 px; navegação, `PT`, LinkedIn e tema permanecem legíveis sem colisão. Testes de idioma/header passaram com sete casos.
- 2026-08-17: teste de paridade confirmou os mesmos slugs, links, stacks e IDs/assets de vídeo nos catálogos `pt-BR` e `en`; arquitetura passou a registrar `useLocale.js`.
- 2026-08-17: `npm run test` passou com 12 arquivos e 42 testes; permaneceram apenas warnings preexistentes de migração do plugin React/Vite.
- 2026-08-17: `npm run build` passou com 78 módulos e gerou ambos os currículos; `git diff --check` não encontrou erros.
- 2026-08-17: usuário aprovou a feature e solicitou separar o seletor dos ícones, tratando-o como item textual com o mesmo rolling hover da navbar.
- 2026-08-17: novos contratos executados em RED com duas falhas esperadas: seletor fora da navbar e ausência de rolling em botões; GREEN focado passou com dez testes.
- 2026-08-17: revisão headless em 1440 px e 320 px confirmou a nova composição sem colisões; a primeira suíte completa identificou somente a contagem legada de quatro textos animados no header, atualizada para incluir o seletor como quinto item.
- 2026-08-17: suíte final passou com 12 arquivos e 44 testes; build passou com 78 módulos e ambos os currículos.

## Next Suggested Step

Publicar a versão quando desejar; não há pendência técnica nesta feature.
