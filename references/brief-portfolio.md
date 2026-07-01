# Brief — Portfolio Pessoal (Wes)

### Objetivo
Portfolio pessoal para dev fullstack (junior), com foco em conversão para recrutadores técnicos e tech leads. Prioridade: clareza de escaneio + design autoral que comunique maturidade técnica, sem parecer template genérico. Quero também uma versão em inglês com um botão para efetuar a troca, mas por enquanto vamos focar apenas no português e pensamos nisso em uma proxima feature.

### Direção de design
Estética editorial-fluida combinada com acentos interativos pontuais (referências na pasta references/). Scroll contínuo, sem cortes duros entre seções — cada bloco deve parecer uma continuação visual do anterior, não um "card" isolado.

sobre as referencias: elas precisam seguir apenas de inspiração para as seções, mas quero ao maximo criar algo com personalidade e que se encaixe com a minha proposta de ser moderno, performatico, acessivel e coeso.

a referencia "full-page-ref" é só para indicar que meu objetivo é ter uma página que "conversa" entre si com seus padrões, então mesmo que eu tenha anexado referencias de sites diferentes para cada seção, o objetivo é deixar tudo "conversando" como nessa ref full page, mas pegando individualidades dessas referencias que usei, deu para entender?

### Tipografia
Testar e escolher **no máximo 2 famílias**, não 4:
- Uma sans-serif para corpo/UI: candidatas **Archivo** ou **Overused Grotesk**
- Uma mono para acentos técnicos (labels, tags de stack, microcopy tipo "/Quick links"): **JetBrains Mono**
- Avaliar se **Halyard/Halfre** entra como terceira opção só para display (títulos grandes) — se sim, mono fica só para detalhes pontuais, não para títulos.
- Técnica de ênfase mista: dentro de uma mesma frase de destaque, alternar peso/estilo (ex. sans bold + itálico ou mono) numa palavra-chave, nunca mais que isso por frase.

### Paleta
| Uso | Light | Dark |
|---|---|---|
| Fundo base | `#FAF7F3` | `#0A0A0A` |
| Texto primário | `#1A1A1A` | `#F5F5F5` |
| Acento (links, hover, CTA, toggle) | `#6B5B95` (dessaturado, uso geral) | mesma base, testar `#8B5CF6` só em hover/CTA para dar "pop" no dark |
| Gradiente do hero | mesh sutil misturando o roxo de acento com o pastel base, baixa saturação, sem tons vibrantes | equivalente em versão escura, roxo sobre preto, ainda sutil — evitar neon |

Regra fixa: roxo é **acento**, nunca fundo de seção inteira. Contraste texto/fundo deve atender WCAG AA em ambos os modos (checar com ferramenta de contraste antes de fechar os hex finais).

### Estrutura geral (scroll único, sem hard dividers)

**1. Navbar**
- Flutuante, centralizada no topo, cantos arredondados, fundo levemente translúcido (blur) sobre o gradiente do hero.
- Fora da navbar, canto superior direito: ícone LinkedIn (link externo) + toggle sol/lua para dark mode (com transição de ícone animada, não troca abrupta).

**2. Hero**
- Fundo gradiente mesh (paleta acima), com fade suave para a cor sólida da seção seguinte via scroll (interpolação de cor, não corte).
- Texto centralizado, tipografia mista para dar ênfase numa palavra-chave.
- Sem CTA tipo botão tradicional — se usar algo interativo, manter minimalista (evitar replicar 1:1 o padrão chatbot da Leah Kim; usar no máximo como inspiração de leveza).
- Hero não fecha em bloco: elementos da seção seguinte (ex. topo do primeiro card de projeto) devem "vazar" visualmente para reforçar continuidade.
- Animação de entrada suave (fade + leve translate Y) nos elementos do hero ao carregar a página.

**3. Projetos**
- Formato: carrossel horizontal (slide atual + metade do próximo visível, sugerindo continuidade).
- Cada item: preview em vídeo/gif que só reproduz no hover (poster estático fora do hover, para performance e para não distrair no load inicial) + título + descrição breve (1-2 linhas, formato problema→decisão, não lista de features) + link para case study dedicado.
- Fallback de acessibilidade: vídeo/gif deve ter alt text ou descrição textual equivalente, e o hover-only não pode ser a única forma de acessar o conteúdo (touch/mobile precisa de alternativa, ex. tap para play ou preview estático + texto sempre visível).
- Considerar: performance de carregar múltiplos vídeos — usar lazy load, e formato leve (webm/mp4 curto, não gif pesado).
- importante: eu ainda não possuo os videos e nem os projetos atualizados que vou usar nessa versão nova, portanto pode usar os existentes e de forma estatica mesmo (mas eles vao mudar, e o objetivo de serem "videos" ainda existe, entao deixe isso ja pre-configurado).
- não possuo design para a pagina dedicada ao projeto, portanto apenas crie algo "generico" para implementarmos melhor mais tarde

**4. Sobre mim**
- Texto direto: trajetória resumida, foco em frontend-heavy fullstack, sem enrolação.
- Foto opcional, tratamento simples (b&w ou tom único, consistente com paleta).
- Sem elementos decorativos extras aqui — esse bloco é o mais "quieto" da página de propósito.

Caso precise de informaçoes sobre mim atualizadas, essa é minha bio do linkedin:

I'm a Full Stack Developer with a strong frontend background and over 3 years of experience building web applications, SaaS platforms, internal systems, and customer-facing digital products.
 
Throughout my career, I've worked across the entire software development lifecycle, from gathering business requirements and validating technical feasibility to designing user experiences, building APIs, managing databases, deploying applications, and supporting production environments.
 
My experience spans modern frontend technologies such as React, Vue.js, TypeScript, and JavaScript, as well as backend development with Node.js, Prisma ORM, PostgreSQL, Docker, and cloud platforms including Azure.
 
I've collaborated directly with stakeholders to transform business processes into software solutions, contributing not only as a developer but also as a technical problem solver capable of balancing user needs, business goals, and technical constraints.
 
More recently, I've been focusing on software architecture, testing practices, AI-assisted development workflows, and Spec-Driven Development (SDD) to build more reliable, maintainable, and scalable systems.
 
Core Technologies:
 
• React
• Vue.js
• TypeScript
• JavaScript
• Node.js
• Prisma ORM
• PostgreSQL
• Docker
• Azure
 
I'm always interested in connecting with developers, engineering teams, and companies building meaningful digital products.

**5. Stack**
- Decisão: manter como seção própria, curta e visualmente leve (lista agrupada por papel: Frontend / Backend / Infra), posicionada como transição entre "Sobre mim" e "Projetos" ou logo após "Sobre mim" — não misturar com o texto corrido de "Sobre mim" para não pesar o bloco de leitura.

**6. Encerramento/Rodapé**
- Nome ou palavra-chave em tipografia grande outline/translúcida como elemento gráfico de fundo (referência enviada).
- Blocos de "Quick links" e "Contato" em mono, estilo label técnico (`/Quick links`, `/Contact`).
- Manter paleta e dark mode coerentes aqui também — esse costuma ser o ponto onde templates "quebram" a identidade visual por ser copiado de outro site.

### Requisitos técnicos e não-funcionais
- Totalmente responsivo (mobile-first ou pelo menos breakpoints bem testados — carrossel de projetos precisa de comportamento mobile definido, provavelmente swipe nativo).
- Dark mode com paleta própria coerente (não apenas inverter cores automaticamente).
- Acessibilidade: contraste AA, navegação por teclado funcional (incluindo o toggle de tema e o carrossel), textos alternativos em mídia.
- Animações de scroll/transição devem respeitar `prefers-reduced-motion`.
- Performance: lazy loading de vídeos/imagens, evitar bibliotecas pesadas desnecessárias.
- Sem excesso visual: cada seção tem uma ideia central clara, sem empilhar efeitos por empilhar.
