# Tasks: Redesign Editorial do Portfolio

## Current Status

[x] Concluido

## Current Focus

Redesign implementado, testado e preparado para deploy na Vercel.

## Decisions

- Escopo STANDARD; brief e respostas fecharam as decisoes de produto.
- Archivo + JetBrains Mono, paleta semantica light/dark e linha de execucao como assinatura.
- Remover formulario/EmailJS e Swiper.
- Usar scroll-snap nativo e roteamento local leve com fallback Vercel.
- Case studies simples e honestos, prontos para troca de conteudo.

## Task List

[x] Especificar por testes a composicao, copy e modelo de projetos
Acceptance criteria: testes descrevem secoes, narrativa em portugues, stacks agrupadas e campos de case/video.
Verification command: `npm run test -- src/tests/portfolio-redesign.spec.jsx`
Expected file scope: `src/tests/portfolio-redesign.spec.jsx`, `src/content/siteContent.js`, `src/app/App.jsx`

[x] Implementar tema e navegacao global acessiveis
Acceptance criteria: preferencia de sistema e persistencia funcionam; toggle tem nome e estado acessiveis; navbar aponta para secoes validas.
Verification command: `npm run test -- src/tests/theme.spec.jsx`
Expected file scope: `src/hooks/useTheme.js`, `src/components/SiteHeader/`, `src/tests/theme.spec.jsx`, `index.html`

[x] Implementar hero e fluxo visual base
Acceptance criteria: tese, disponibilidade e links principais aparecem; entrada e scroll respeitam reduced motion.
Verification command: `npm run test -- src/tests/portfolio-redesign.spec.jsx`
Expected file scope: `src/components/Hero/`, `src/main.css`

[x] Implementar projetos e midia progressiva
Acceptance criteria: scroll-snap mostra continuidade; controles acessiveis navegam; poster e video opcional seguem politica de carregamento/reproducao.
Verification command: `npm run test -- src/tests/projects.spec.jsx`
Expected file scope: `src/components/Projects/`, `src/components/ui/ProjectMedia.jsx`, `src/tests/projects.spec.jsx`

[x] Implementar sobre, stack e footer
Acceptance criteria: bio direta, stack agrupada e contatos sem formulario compoem o restante da home.
Verification command: `npm run test -- src/tests/portfolio-redesign.spec.jsx`
Expected file scope: `src/components/About/`, `src/components/Stack/`, `src/components/Footer/`

[x] Implementar case studies e rotas
Acceptance criteria: cada slug valido renderiza um case simples, slug invalido tem recuperacao e URLs diretas funcionam na Vercel.
Verification command: `npm run test -- src/tests/routing.spec.jsx`
Expected file scope: `src/app/`, `src/components/ProjectCaseStudy/`, `src/tests/routing.spec.jsx`, `vercel.json`

[x] Remover legado e validar entrega
Acceptance criteria: dependencias/codigo mortos removidos; suite e build passam; interface revisada em mobile/desktop e light/dark.
Verification command: `npm run test && npm run build`
Expected file scope: `package.json`, `package-lock.json`, `src/`, specs desta feature

## Verification Log

- 2026-07-01: brief, seis referencias visuais, arquitetura atual e spec anterior revisados.
- 2026-07-01: escopo classificado como STANDARD; formulario removido e hospedagem Vercel confirmados com o usuario.
- 2026-07-01: plano visual criticado e revisado antes da implementacao.
- 2026-07-01: ciclo RED confirmou ausencia da nova composicao; GREEN passou com 2 testes de narrativa e modelo de dados.
- 2026-07-01: tema passou em ciclo RED/GREEN; suite focada com 3 testes verdes.
- 2026-07-01: hero e fluxo base incluidos na composicao coberta pelo teste de narrativa; acabamento visual segue no checkpoint final.
- 2026-07-01: carrossel e midia progressiva passaram em ciclo RED/GREEN com 2 testes.
- 2026-07-01: sobre, stack e footer sem formulario incluidos e cobertos pelo teste de composicao.
- 2026-07-01: rotas validas e fallback 404 passaram em ciclo RED/GREEN com 2 testes.
- 2026-07-01: CSS legado substituido por tokens responsivos light/dark; componentes e testes obsoletos removidos.
- 2026-07-01: `npm run test` concluido com 4 arquivos e 7 testes passando.
- 2026-07-01: `npm run build` concluido; JS principal com 154,50 kB (50,03 kB gzip) e CSS com 11,68 kB (3,46 kB gzip).
- 2026-07-01: EmailJS, Swiper e react-icons removidos do manifesto e lockfile.

## Next Suggested Step

Substituir posters, videos e textos em `src/content/siteContent.js` quando os novos projetos estiverem definidos.
