# Plan: Portfólio bilíngue

## Implementation Order

1. Escrever testes RED para detecção, persistência, troca, documento e arquivos de currículo.
2. Criar o catálogo bilíngue e o hook de locale, preservando exports portugueses usados pelos contratos existentes.
3. Passar o catálogo ativo da composição raiz para home, cases, 404, header e primitivas com microcopy.
4. Integrar e refinar o seletor no header em desktop e mobile.
5. Auditar strings residuais, revisar visualmente os dois idiomas e executar todas as verificações obrigatórias.

## Major Components

- `useLocale`: inicialização lazy, preferência persistida e sincronização do documento.
- `siteContent`: conteúdo `pt-BR`/`en` e estrutura compartilhada de assets, links e projetos.
- `Header`: controle binário de idioma junto aos controles globais.
- Home/cases/404: consumidores do catálogo selecionado por props.

## Design Direction

### Subject, audience and job

O produto é o portfólio editorial de um desenvolvedor full stack com ênfase em frontend; o público são recrutadores e lideranças técnicas brasileiros e internacionais; a página deve tornar experiência, decisões e profundidade técnica escaneáveis antes do contato.

### Tokens

- Canvas `#E7E1DD` / dark `#1A1A1A`.
- Ink `#1A1A1A` / dark `#E7E1DD`.
- Muted `#68636D` / dark `#B8B2C0`.
- Violet signal `#7351A2`.
- Line `rgba(26,26,26,.14)` / dark `rgba(245,245,245,.15)`.
- Geist para display/corpo, JetBrains Mono para o seletor e microcopy, famílias manuscritas existentes apenas na assinatura do hero.

### Layout

```text
desktop  [espaço de equilíbrio]  [nav editorial]  [LinkedIn | EN  tema]
mobile   [nav compacta]                         [LinkedIn | EN  tema]
```

O seletor mostra o idioma de destino (`EN` no conteúdo português, `PT` no inglês), mantém um nome acessível explícito e ocupa o mesmo plano tipográfico das ações, sem bandeiras ou outro pill concorrendo com a navegação.

### Signature

O idioma funciona como uma pequena marca de revisão editorial: duas letras em JetBrains Mono e um sublinhado violeta curto aparecem entre o divisor social e o tema. É o único gesto novo; o restante do header permanece quieto.

### Design critique

Um segmented control `PT / EN`, bandeiras ou dropdown seriam reconhecíveis, mas acrescentariam largura e uma segunda cápsula genérica ao header já compacto. A direção foi revista para um único controle de destino com texto de ação inequívoco para tecnologia assistiva. O risco deliberado é confiar em duas letras visíveis; ele é mitigado pelo posicionamento estável, pelo estado alternante e pelo nome acessível completo.

## Risks And Mitigations

- Conteúdo português e inglês pode perder paridade: manter estrutura compartilhada e testar os quatro slugs nos dois catálogos.
- Navegadores ou ambientes bloqueiam storage: capturar falhas e continuar com a detecção de idioma.
- Mudança de idioma pode deixar estado interno da galeria ativo: IDs de vídeo são invariantes e o catálogo conserva a mesma estrutura.
- Inglês pode ampliar labels no mobile: o novo controle é curto e haverá inspeção em 320/390 px.
- Documento pode iniciar com `lang` incorreto antes do React: alinhar o script inicial do `index.html` à mesma regra do hook.

## Parallel Work

Não será usado. Os ciclos TDD dependem da mesma composição, e a tradução precisa de revisão consistente de voz.

## Verification Checkpoints

- Teste focado RED e GREEN para idioma.
- Testes existentes em português após adaptação dos consumidores.
- Inspeção visual de home e case em português/inglês, desktop/mobile e temas claro/escuro.
- `npm run test`, `npm run build` e `git diff --check` ao final.
