# Tasks: Redesign Editorial do Portfolio

## Current Status

[x] Concluido

## Current Focus

Ajustes editoriais aplicados; restou apenas revisao manual opcional no navegador.

## Decisions

- Escopo STANDARD; brief e respostas fecharam as decisoes de produto.
- Archivo + JetBrains Mono, paleta semantica light/dark e linha de execucao como assinatura.
- Remover formulario/EmailJS e Swiper.
- Usar indice editorial sem biblioteca de carrossel e roteamento local leve com fallback Vercel.
- Case studies simples e honestos, prontos para troca de conteudo.
- Paleta solicitada: `#E7E1DD` / `#1A1A1A`, invertida no dark, com `#7351A2` como sinal.
- Hero monumental com "DESENVOLVEDOR FULL STACK" e assinatura "Wesley Santos"; sem o titulo "Decisoes pequenas. Produtos que funcionam.".
- A continuidade deve vir do ritmo tipografico e das entradas no scroll, sem linha/rabisco roxo decorativo.
- Container geral ampliado para aproveitar telas desktop sem cortar a palavra principal.
- Eyebrows e stacks dos projetos usam a cor principal do tema; o roxo fica concentrado na assinatura do hero.
- Titulos de secao usam 5rem em desktop e compartilham alinhamento; labels das linhas de stack usam 1rem.
- Linhas de stack permanecem estaticas no hover; movimento fica concentrado na entrada por scroll.
- Projetos usam indice editorial em duas colunas: lista tipografica e preview sticky; sem controles de carrossel.
- Revisao atual remove o titulo grande de projetos, elimina o preview visual da home e faz cada linha ocupar toda a largura clicavel.
- Hover/foco dos projetos expande a descricao e aplica o roxo de destaque ao texto principal.
- Indicador de disponibilidade recebe pulso sutil; links do footer usam roxo no hover.
- LinkedIn e toggle perdem o container circular e passam a compartilhar uma barra com divisoria clara e alinhamento vertical preciso.
- Revisao atual remove o link "Ver projetos", elimina qualquer container visivel em volta das acoes do header e preserva a descricao dos projetos em cor neutra durante o hover.

## Task List

[x] Ajustar composicao editorial e interacoes finas da home
Acceptance criteria: secao de projetos nao exibe heading grande nem preview com imagem; linhas ocupam a largura util e direcionam ao case; hover/foco revela descricao e aplica roxo; ponto de disponibilidade pulsa; acoes do header usam divisoria reta sem cantos arredondados; links do footer usam roxo no hover.
Verification command: `npm run test -- src/tests/portfolio-redesign.spec.jsx src/tests/projects.spec.jsx && npm run build`
Expected file scope: `src/app/App.jsx`, `src/main.css`, `src/tests/portfolio-redesign.spec.jsx`, `src/tests/projects.spec.jsx`, specs desta feature

[x] Substituir carrossel por indice editorial
Acceptance criteria: todos os projetos aparecem como linhas acessiveis; hover e foco atualizam o preview; controles e scroll horizontal deixam de existir; mobile permanece navegavel.
Verification command: `npm run test && npm run build`
Expected file scope: `src/tests/projects.spec.jsx`, `src/app/App.jsx`, `src/main.css`, specs desta feature

[x] Uniformizar hierarquia e ampliar interacoes
Acceptance criteria: projetos possui h2 no mesmo padrao das demais secoes; titulos chegam a 5rem; textos auxiliares usam ink; sobre tem cor uniforme; slide principal cresce; stacks respondem ao hover sem prejudicar reduced motion.
Verification command: `npm run test && npm run build`
Expected file scope: `src/tests/portfolio-redesign.spec.jsx`, `src/app/App.jsx`, `src/main.css`, specs desta feature

[x] Refinar escala, container e linguagem das secoes
Acceptance criteria: hero cabe na viewport desktop, rabisco roxo nao existe e projetos/sobre/stack usam a mesma escala editorial.
Verification command: `npm run test -- src/tests/portfolio-redesign.spec.jsx`
Expected file scope: `src/tests/portfolio-redesign.spec.jsx`, `src/app/App.jsx`, `src/main.css`, specs desta feature

[x] Repaginar hero e continuidade editorial
Acceptance criteria: cargo domina a dobra, nome aparece como assinatura, hero invade visualmente projetos e o titulo removido nao aparece.
Verification command: `npm run test -- src/tests/portfolio-redesign.spec.jsx`
Expected file scope: `src/tests/portfolio-redesign.spec.jsx`, `src/app/App.jsx`, `src/main.css`, specs desta feature

[x] Adicionar reveals no scroll com acessibilidade
Acceptance criteria: secoes abaixo do hero revelam conteudo no viewport e reduced motion elimina o deslocamento.
Verification command: `npm run test && npm run build`
Expected file scope: `src/app/App.jsx`, `src/main.css`, `src/tests/portfolio-redesign.spec.jsx`

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
- 2026-07-01: nova solicitacao reabriu a feature; plano visual revisado para hero tipografico continuo e paleta exata da referencia.
- 2026-07-01: ciclo RED confirmou ausencia do novo heading e presenca do titulo removido.
- 2026-07-01: ciclo GREEN passou com hero "Desenvolvedor Full Stack", assinatura Wesley Santos, quatro regioes de reveal e copy antiga removida.
- 2026-07-01: `npm run test` concluido com 4 arquivos e 7 testes passando; `npm run build` concluido com CSS de 12,72 kB (3,79 kB gzip) e JS de 155,12 kB (50,27 kB gzip).
- 2026-07-01: revisao visual identificou corte horizontal no heading, rabisco violeta desconectado e secoes com linguagem menos editorial que o hero.
- 2026-07-01: RED confirmou a linha gestual ainda presente; GREEN confirmou sua remocao e preservou a composicao acessivel.
- 2026-07-01: container ampliado de 1180px para 1480px; escala maxima do hero recalibrada para caber no espaco util.
- 2026-07-01: projetos, sobre e stack receberam escala tipografica mais pesada, assimetria editorial, cantos contidos e reveals internos no scroll.
- 2026-07-01: `npm run test` passou com 4 arquivos e 7 testes; `npm run build` passou com CSS de 12,80 kB (3,72 kB gzip) e JS de 154,87 kB (50,10 kB gzip); `git diff --check` sem erros.
- 2026-07-01: nova revisao solicitou escala fixa de 5rem, cores auxiliares neutras, slide maior e interacoes mais enfaticas.
- 2026-07-01: ciclo RED confirmou que projetos ainda nao possuia h2; GREEN passou com heading semantico no mesmo padrao das demais secoes.
- 2026-07-01: eyebrows e tecnologias dos projetos passaram a `var(--ink)`; textos de sobre foram uniformizados na mesma cor.
- 2026-07-01: titulos de projetos, sobre e stack fixados em 5rem no desktop; `stack-row h3` fixado em 1rem.
- 2026-07-01: slide principal ampliado de 880px para 1280px; reveals ganharam blur/escala/deslocamento e hovers de stack/projetos receberam resposta mais enfatica.
- 2026-07-01: `npm run test` passou com 4 arquivos e 7 testes; `npm run build` passou com CSS de 13,64 kB (3,85 kB gzip) e JS de 154,89 kB (50,10 kB gzip); `git diff --check` sem erros.
- 2026-07-01: hover com inversao e deslocamento das stacks removido apos revisao visual; reveal de entrada foi preservado.
- 2026-07-01: referencia de projetos revisada; adotado indice editorial com imagem grande inspirado na escala, sem copiar o grid de cards.
- 2026-07-01: ciclo RED confirmou controles do carrossel antigo; GREEN passou com troca de preview por hover e foco e ausencia dos controles.
- 2026-07-01: lista editorial implementada com indices reais, titulos monumentais, descricao expansiva, preview sticky e composicao mobile em uma coluna.
- 2026-07-01: `npm run test` passou com 4 arquivos e 7 testes; `npm run build` passou com CSS de 13,42 kB (3,81 kB gzip) e JS de 154,83 kB (50,10 kB gzip); `git diff --check` sem erros.
- 2026-07-01: nova rodada solicitou remover o heading grande e o preview visual dos projetos, destacar hover em roxo e refinar ponto de disponibilidade, header e footer.
- 2026-07-01: ciclo RED confirmou a presenca do heading grande e do preview de projetos na home; GREEN substituiu a area por uma lista clicavel em largura total com descricao por hover/foco.
- 2026-07-01: header recebeu acoes retas com divisoria clara, indicador de disponibilidade passou a pulsar e links do footer agora sinalizam hover em roxo.
- 2026-07-01: `npm run test` passou com 4 arquivos e 9 testes; `npm run build` passou com CSS de 13,94 kB (3,82 kB gzip) e JS de 153,92 kB (49,80 kB gzip); `git diff --check` sem erros.
- 2026-07-01: nova revisao removeu o CTA "Ver projetos", substituiu a barra do header por icones sem container com divisor simples e manteve a descricao dos projetos em cor neutra no hover.
- 2026-07-01: `npm run test -- src/tests/portfolio-redesign.spec.jsx src/tests/theme.spec.jsx src/tests/projects.spec.jsx` passou com 3 arquivos e 7 testes.

## Next Suggested Step

Revisar visualmente no navegador a respiracao dos hovers e o alinhamento fino dos controles do header em desktop e mobile.
