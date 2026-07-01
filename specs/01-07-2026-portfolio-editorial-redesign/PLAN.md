# Plan: Redesign Editorial do Portfolio

## Implementation Order

1. Fixar por testes a nova composicao, copy e formato dos dados.
2. Implementar tema persistente e controles globais acessiveis.
3. Construir hero e navbar como uma abertura continua.
4. Construir projetos com scroll-snap, controles e midia progressiva.
5. Construir sobre, stack e footer/contato.
6. Adicionar case study generico e resolucao de rotas na Vercel.
7. Remover dependencias e codigo legado, validar testes, build e interface.

## Major Components

- `SiteHeader` e `ThemeToggle`.
- `Hero`.
- `Projects` e `ProjectMedia`.
- `About` e `Stack`.
- `Footer`.
- `ProjectCaseStudy`.

## Risks And Mitigations

- Fontes remotas podem atrasar renderizacao: usar preconnect e fallbacks metricamente proximos; manter pagina legivel sem rede.
- Midias futuras podem pesar: `preload="none"`, poster, lazy loading e reproducao somente por intencao.
- Rota direta pode retornar 404: rewrite SPA na Vercel e pagina de projeto inexistente tratada localmente.
- Tema pode piscar: aplicar preferencia antes do primeiro paint via script pequeno no documento.
- Carrossel pode esconder conteudo: texto permanece visivel e controles complementam scroll/swipe.

## Parallel Work

Nao necessario. A composicao e pequena e os ciclos TDD sao dependentes.

## Verification Checkpoints

- Testes focados apos cada ciclo red/green.
- Suite completa apos cada bloco de pagina.
- Build de producao e inspecao visual desktop/mobile nos dois temas ao final.
- Conferencia de bundle para confirmar retirada de Swiper e EmailJS.
