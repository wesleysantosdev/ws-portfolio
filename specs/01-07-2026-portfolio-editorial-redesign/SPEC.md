# Spec: Redesign Editorial do Portfolio

## Objective

Reposicionar o portfolio de Wesley Santos como uma pagina unica, autoral e facil de escanear por recrutadores tecnicos e tech leads. A narrativa deve apresentar um desenvolvedor full stack com base forte em frontend e mais de tres anos transformando necessidades de negocio em produtos web, sem exagerar a complexidade dos projetos.

## Assumptions

1. A primeira versao sera apenas em portugues.
2. O portfolio sera publicado inicialmente na Vercel; demos existentes permanecem no GitHub Pages.
3. Os quatro projetos atuais serao usados como placeholders e terao case studies internos simples, orientados por contexto, decisao, stack e resultado.
4. O formulario e a dependencia EmailJS serao removidos; contato sera feito por email, LinkedIn e GitHub.
5. O tema inicial respeita a preferencia do sistema e a escolha manual fica persistida no navegador.
6. As midias atuais funcionam como posters estaticos. O modelo de dados ja aceitara video opcional para uma troca futura.

## Tech Stack

- Vite + React 18 + CSS tradicional + Vitest/React Testing Library.
- Sem biblioteca de carrossel ou roteamento: indice editorial com estado local e resolucao pequena por `window.location.pathname` reduzem o bundle.
- `vercel.json` fornece fallback de SPA para URLs limpas de case study.

## Commands

- `npm run test`
- `npm run build`
- `npm run dev`

## Project Structure

- `src/app/`: composicao e resolucao de pagina.
- `src/components/`: secoes, controles e elementos reutilizaveis.
- `src/content/`: copy, stacks, contatos e projetos.
- `src/hooks/`: tema e interacoes reutilizaveis.
- `src/tests/`: testes comportamentais com Vitest.

## Code Style

- Componentes fora de componentes e importacoes diretas.
- Conteudo estatico em nivel de modulo; sem estado derivado em efeitos.
- CSS com tokens semanticos e classes de baixa especificidade.
- Icones em SVG local pequeno quando bastar, evitando importar pacotes inteiros.

## Design System

### Color

- Canvas light `#E7E1DD`; ink light `#1A1A1A`.
- Canvas dark `#1A1A1A`; ink dark `#E7E1DD`.
- Violet signal nos dois temas `#7351A2`.
- Muted light `#68636D`; muted dark `#B8B2C0`.
- Surface light `#F1ECE7`; surface dark `#151318`.

### Type

- Archivo: display, corpo e UI, com variacao de peso e italico como enfase.
- JetBrains Mono: labels tecnicos, tags e microcopy.
- No maximo duas familias.

### Layout

```text
desktop: [nav flutuante]                 [linkedin] [tema]
         [contexto mono]
         [tese grande centralizada]
                   | linha de execucao
         [projeto largo] [proximo projeto parcial ->]
         [sobre: label | texto direto]
         [stack em tres linhas leves]
         [contato + WES outline ao fundo]

mobile:  [nav compacta] [acoes]
         [tese]
           | linha
         [projeto 88vw -> swipe]
         [sobre]
         [stack empilhada]
         [footer]
```

### Signature

O cargo "DESENVOLVEDOR FULL STACK" ocupa a dobra como materia grafica e recebe a assinatura inclinada "Wesley Santos". A continuidade acontece pelo ritmo tipografico e por entradas de texto no scroll; nao ha linha gestual decorativa.

### Design Critique

A primeira ideia dependia demais do conhecido portfolio creme/editorial. Para evitar esse resultado generico, foi removida a serif de display e adotada uma voz de produto digital com Archivo, labels de processo reais e composicao assimetrica. O roxo permanece apenas como sinal funcional. A linha de execucao e o vazamento do primeiro projeto sao o risco estetico concentrado; cards decorativos e animacoes dispersas foram cortados.

## Testing Strategy

- TDD com Vitest e React Testing Library.
- Cobrir composicao e copy principal, tema/persistencia, indice de projetos acessivel, modelo de video e roteamento de case studies.
- Validar manualmente responsividade, foco visivel, reduced motion e temas.

## Boundaries

- Nao implementar ingles nesta feature.
- Nao produzir novos videos, fotos ou cases definitivos.
- Nao criar CMS, backend ou formulario de contato.
- Nao aumentar artificialmente impacto ou responsabilidade nos textos dos projetos.

## Success Criteria

1. A home apresenta navbar flutuante, hero, projetos em scroll horizontal, sobre, stack e footer continuo.
2. Light/dark mode tem paleta propria, respeita preferencia inicial e persiste a escolha.
3. Projetos aparecem em indice editorial acessivel, sem preview visual na home; hover e foco de cada linha expandem a descricao, aplicam o roxo de destaque ao texto e levam ao case study dedicado.
4. Posters carregam sob demanda; videos opcionais nao reproduzem no carregamento e possuem alternativa textual.
5. Cada projeto abre um case study interno simples em URL limpa e mantem a demo externa.
6. Interface e copy sao responsivas, em portugues, acessiveis e respeitam `prefers-reduced-motion`.
7. Swiper, EmailJS e codigo legado nao utilizado saem do bundle.
8. O hero apresenta "DESENVOLVEDOR FULL STACK", inclui o nome de Wesley e nao exibe "Decisoes pequenas. Produtos que funcionam.".
9. Secoes posteriores recebem reveals progressivos no scroll, com fallback imediato para reduced motion.
10. O heading monumental permanece integralmente legivel em desktop, sem corte lateral, e as secoes seguintes repetem sua escala, peso e disciplina editorial.
11. Titulos das secoes usam 5rem em desktop, eyebrows e tecnologias dos projetos usam a cor principal do tema, e todo o texto de sobre compartilha a mesma cor.
12. A secao de projetos combina lista tipografica e preview visual, sem carrossel; as linhas de stack permanecem estaticas e recebem apenas reveal no scroll.
13. A secao de projetos nao exibe titulo principal grande; a lista ocupa a largura util e cada item funciona como entrada clicavel unica.
14. O indicador de disponibilidade pulsa de forma sutil, os controles de header compartilham uma divisoria reta sem cantos arredondados, e os links do footer sinalizam hover em roxo.

## Open Questions

- Nenhuma para esta entrega. Conteudo e videos finais ficam explicitamente para uma feature futura.
