import cvEnglish from '../assets/cv-en.pdf'
import cvPortuguese from '../assets/cv-ptbr.pdf'
import telehelpSaleVideo from '../assets/projetos/agente-telehelp/cadastro-de-venda.mp4'
import telehelpAdminVideo from '../assets/projetos/agente-telehelp/navegacao-do-admin.mp4'
import telehelpAgentVideo from '../assets/projetos/agente-telehelp/visao-do-agente.mp4'
import pagliasFlowVideo from '../assets/projetos/paglias/fluxo-completo-paglias.mp4'
import seniorAdminVideo from '../assets/projetos/senior-academy/administracao-autonoma.mp4'
import seniorLiveVideo from '../assets/projetos/senior-academy/aulas-ao-vivo.mp4'
import seniorSegmentsVideo from '../assets/projetos/senior-academy/experiencia-segmentada.mp4'
import shrtenVideo from '../assets/projetos/shrten/shrten.mp4'

export const PORTUGUESE_LOCALE = 'pt-BR'
export const ENGLISH_LOCALE = 'en'

const sharedProfile = {
  name: 'Wesley Santos',
  shortName: 'Wes',
  email: 'wesleysantosdev@outlook.com',
  linkedinUrl: 'https://www.linkedin.com/in/wesleysantosdev/',
  githubUrl: 'https://github.com/wesleysantosdev'
}

const projectDefinitions = [
  {
    slug: 'shrten',
    title: 'Shrten',
    stack: ['React', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Prisma', 'Docker', 'Azure'],
    actionHrefs: ['https://shrten.pro', 'https://github.com/wesleysantosdev/url-shortener'],
    videoAssets: [{ id: 'produto-em-uso', src: shrtenVideo }]
  },
  {
    slug: 'paglias',
    title: 'Paglias',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    actionHrefs: [],
    videoAssets: [{ id: 'fluxo-completo', src: pagliasFlowVideo }]
  },
  {
    slug: 'senior-academy',
    title: 'Senior Academy',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    actionHrefs: [],
    videoAssets: [
      { id: 'administracao-autonoma', src: seniorAdminVideo },
      { id: 'experiencia-segmentada', src: seniorSegmentsVideo },
      { id: 'aulas-ao-vivo', src: seniorLiveVideo }
    ]
  },
  {
    slug: 'agente-telehelp',
    title: 'Agente TeleHelp',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Azure'],
    actionHrefs: [],
    videoAssets: [
      { id: 'navegacao-do-admin', src: telehelpAdminVideo },
      { id: 'visao-do-agente', src: telehelpAgentVideo },
      { id: 'cadastro-de-venda', src: telehelpSaleVideo }
    ]
  }
]

const copyByLocale = {
  [PORTUGUESE_LOCALE]: {
    meta: {
      title: 'Wesley Santos — Desenvolvedor Full Stack',
      description: 'Portfólio de Wesley Santos, desenvolvedor full stack com base forte em frontend.'
    },
    navItems: [
      { href: '#projetos', label: 'Projetos' },
      { href: '#sobre', label: 'Sobre' },
      { href: '#stack', label: 'Stack' },
      { href: '#contato', label: 'Contato' }
    ],
    profile: {
      role: 'Full stack developer · frontend-heavy',
      location: 'São Paulo, Brasil',
      availability: 'Disponível para trabalho',
      resumeUrl: cvPortuguese
    },
    hero: {
      kicker: 'Portfólio · 2026',
      headingLabel: 'Desenvolvedor full stack Wesley Santos',
      titleTop: 'Desenvolvedor',
      titleBottom: 'Full stack',
      summary: 'Desenvolvo soluções web eficientes que resolvem problemas reais do seu negócio.'
    },
    about: {
      heading: 'Código é importante. Entender o problema é essencial.',
      paragraphs: [
        'Sou desenvolvedor full stack com 3+ anos de experiência e uma base forte em frontend. Já construí páginas, sistemas internos, plataformas SaaS e produtos digitais voltados ao cliente.',
        'Gosto de acompanhar o trabalho de ponta a ponta: entender a necessidade do negócio, avaliar caminhos técnicos, cuidar da experiência, integrar APIs e apoiar o que chega à produção.',
        'Hoje busco aprofundar meus estudos em arquitetura de software, system design e fluxos de desenvolvimento assistidos por IA para entregar código ainda mais confiável, escalável e simples de manter.'
      ],
      ariaLabel: 'Sobre mim'
    },
    sectionIntroductions: {
      projects: { label: '/ Projetos selecionados', description: 'Interfaces, decisões e resultados' },
      about: { label: '/ Sobre mim', description: 'Percurso, contexto e forma de trabalhar' },
      stack: { label: '/ Tecnologias', description: 'Ferramentas escolhidas conforme o problema' }
    },
    projectsUi: {
      ariaLabel: 'Projetos selecionados',
      listLabel: 'Lista de projetos',
      viewCaseLabel: 'Ver case',
      cursorLabel: 'Ver projeto',
      contextLabel: 'Contexto de'
    },
    stack: {
      ariaLabel: 'Tecnologias',
      heading: 'Ferramentas que uso para tirar ideias do papel.',
      groups: [
        { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { label: 'Backend & dados', items: ['Node.js', 'Express.js', 'APIs RESTful', 'Prisma ORM', 'PostgreSQL', 'REDIS', 'JSON Web Token (JWT)'] },
        { label: 'Cloud & entrega', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Microsoft Azure', 'VPS'] },
        { label: 'Práticas & ferramentas', items: ['Test-Driven Development (TDD)', 'Git', 'GitHub', 'Postman', 'Swagger/OpenAPI', 'System Design'] },
        { label: 'IA', items: ['Spec-Driven Development (SDD)', 'Engenharia de Harness', 'Criação de AI Skills/Tools', 'Orquestração de LLMs'] }
      ]
    },
    header: {
      navigationLabel: 'Navegação principal',
      linkedinLabel: 'LinkedIn de Wesley Santos',
      lightThemeLabel: 'Ativar tema claro',
      darkThemeLabel: 'Ativar tema escuro',
      switchLocaleLabel: 'Switch to English',
      targetLocaleShort: 'EN'
    },
    footer: {
      invitationLabel: '/Vamos conversar',
      heading: 'Tem um produto para construir ou melhorar?',
      quickLinksLabel: '/Links Rápidos',
      quickLinksAriaLabel: 'Links rápidos',
      resumeLabel: 'Baixar CV',
      contactLabel: '/Contato',
      contactAriaLabel: 'Redes e contato',
      credit: 'Feito com atenção aos detalhes.'
    },
    caseStudy: {
      backLabel: 'Voltar ao portfólio',
      sectionLabel: '/ Estudo de caso',
      actionsLabel: 'Ações de',
      tagsLabel: 'Contexto da demonstração',
      stages: [
        { label: '/ Entender', description: 'O ponto de partida e as restrições', heading: 'Contexto', field: 'context' },
        { label: '/ Construir', description: 'As escolhas que orientaram a solução', heading: 'Decisões', field: 'decision' },
        { label: '/ Entregar', description: 'O que mudou após a entrega', heading: 'Resultado', field: 'outcome' }
      ]
    },
    gallery: {
      demoLabel: 'Demo',
      runningLabel: 'Em execução',
      scenesLabel: 'Cenas da demonstração'
    },
    notFound: {
      heading: 'Projeto não encontrado.',
      description: 'Este case pode ter mudado de endereço ou ainda não foi publicado.',
      backLabel: 'Voltar ao portfólio'
    },
    projects: {
      shrten: {
        category: 'Projeto pessoal · System design',
        summary: 'Encurtamento de URLs como exercício de System Design, confiabilidade e operação real.',
        context: [
          'Criei o Shrten para aprofundar desenvolvimento full stack e estudar System Design a partir de um problema aparentemente simples: encurtar URLs.',
          'O desafio real era projetar códigos sem colisões, reduzir leituras repetidas, manter redirecionamentos disponíveis durante falhas e controlar o crescimento dos dados.'
        ],
        decision: [
          'Usei IDs sequenciais BIGINT do PostgreSQL, submetidos a uma permutação reversível antes da conversão para Base62. Assim, os códigos têm de quatro a seis caracteres sem armazenar outra chave ou consultar colisões.',
          'No redirecionamento, Redis opera como cache-aside com entradas positivas e negativas. O PostgreSQL permanece como fonte da verdade e atende a leitura caso o cache fique indisponível.',
          'A criação de links recebe rate limiting por IP anonimizado com HMAC-SHA-256, duas janelas móveis e operações atômicas em Lua. Links sem atividade por 180 dias são removidos em lotes e invalidados no cache.'
        ],
        outcome: [
          'O resultado é uma aplicação full stack testada e preparada para operar em infraestrutura enxuta, com Docker, proxy reverso, HTTPS, CI/CD e deploy em VPS.',
          'O projeto tornou concretos os trade-offs entre fonte da verdade e otimização, degradação aberta ou fechada e complexidade proporcional à escala atual.'
        ],
        tags: [],
        actionLabels: ['Acessar Shrten', 'Ver repositório'],
        videos: {
          'produto-em-uso': {
            title: 'Produto em uso',
            description: 'Criação, consulta e gerenciamento de links curtos em uma experiência completa e pronta para uso.'
          }
        }
      },
      paglias: {
        category: 'E-commerce B2B · Integração ERP',
        summary: 'Um canal de autosserviço conectado ao ERP para eliminar a redigitação manual de pedidos.',
        context: [
          'Clientes, produtos e condições comerciais já viviam no Sige Cloud, mas os pedidos chegavam por WhatsApp e eram transcritos manualmente para o ERP.',
          'A plataforma precisava liberar autosserviço sem duplicar regras do Sige e sem abrir indiscriminadamente catálogo, preços ou condições comerciais.'
        ],
        decision: [
          'Mantive o ERP como fonte única da verdade. CPF ou CNPJ valida o cadastro; após o login, o pedido recente do cliente define tabela de preço, depósito, vendedor, pagamento e demais parâmetros comerciais.',
          'O catálogo respeita a tabela vinculada ao cliente, remove itens indisponíveis e complementa categorias e imagens por chamadas ao ERP. O Cloudinary e o PostgreSQL evitam transferências repetidas de mídia.',
          'Tratei instabilidades 503 com novas tentativas e espera progressiva. Antes de chegar ao Sige, o pedido é reconstruído com as condições do ERP e validado no backend.'
        ],
        outcome: [
          'Clientes conhecidos pela operação podem criar uma conta, acessar preços próprios, pesquisar produtos, selecionar quantidades e confirmar o pedido no mesmo fluxo.',
          'A jornada elimina a redigitação no canal digital, preserva o Sige como sistema central e reduz divergências nas condições comerciais.'
        ],
        tags: ['Demonstração', 'Dados fictícios', 'Repositório privado'],
        actionLabels: [],
        videos: {
          'fluxo-completo': {
            title: 'Fluxo completo',
            description: 'Da identificação do cliente à seleção de produtos e conclusão do pedido conectado ao ERP.'
          }
        }
      },
      'senior-academy': {
        category: 'Plataforma educacional · Zoom SDK',
        summary: 'Uma página estática transformada em plataforma segmentada, gerenciável e com aulas ao vivo integradas.',
        context: [
          'Na solução anterior, as aulas ao vivo eram através de um link do Google Meet. Toda mudança de aula exigia editar o código, e não havia autenticação ou experiências por perfil.',
          'A evolução precisava dar autonomia ao cliente sem perder a organização do catálogo nem separar os encontros ao vivo da jornada principal.'
        ],
        decision: [
          'Modelei usuários, categorias, aulas gravadas e ao vivo, organizações, reservas e participações. Autenticação, papéis e clusters passaram a definir o conteúdo visto por cada público.',
          'Criei um painel em que o cliente cadastra, edita, segmenta e desativa aulas. Para encontros ao vivo, integrei o Zoom Meeting SDK e colaborei no fluxo de criação de reuniões, assinaturas, start_url e token ZAK.',
          'A integração exigiu pesquisa de documentação, testes de compatibilidade e ajustes no contrato entre frontend, backend e SDK até a reunião funcionar dentro da plataforma.'
        ],
        outcome: [
          'O cliente passou a administrar o conteúdo sem depender de alterações no código. Usuários ganharam catálogo autenticado, reservas, aulas gravadas e encontros ao vivo na mesma experiência.',
          'Interesses, participações e tempo de atividade também passaram a formar uma base para acompanhar o engajamento e orientar a evolução do produto.'
        ],
        tags: ['Demonstração', 'Dados fictícios', 'Repositório privado'],
        actionLabels: [],
        videos: {
          'administracao-autonoma': {
            title: 'Administração autônoma',
            description: 'O conteúdo antes era alterado diretamente no código. Criamos um painel para que o cliente administrasse as aulas de forma autônoma.'
          },
          'experiencia-segmentada': {
            title: 'Experiência segmentada',
            description: 'Autenticação, papéis e segmentação por clusters personalizam a experiência para clientes, visitantes e grupos parceiros.'
          },
          'aulas-ao-vivo': {
            title: 'Aulas ao vivo',
            description: 'Zoom Server-to-Server OAuth e Meeting SDK conectam a criação da reunião no backend à experiência incorporada no frontend.'
          }
        }
      },
      'agente-telehelp': {
        category: 'Operação comercial · Perfis e permissões',
        summary: 'Uma jornada rastreável para registrar indicações e acompanhar cada avanço comercial.',
        context: [
          'A TeleHelp precisava digitalizar o processo de indicações comerciais. A plataforma não venderia nem processaria pagamentos: parceiros registrariam potenciais clientes e acompanhariam o atendimento conduzido pela empresa.',
          'O principal requisito era criar visibilidade compartilhada sem misturar as responsabilidades do agente e da operação administrativa.'
        ],
        decision: [
          'Separei a solução em uma área do agente, dedicada ao cadastro e acompanhamento, e uma área administrativa para ativação de agentes, edição de registros e avanço operacional.',
          'Modelei cada indicação com cinco status e histórico de alterações. Autenticação JWT, permissões por perfil, validações e criptografia dos dados sensíveis sustentam o fluxo.'
        ],
        outcome: [
          'A indicação passou a ser registrada uma única vez e acompanhada pelo parceiro sem consultas manuais.',
          'A equipe administrativa trabalha em uma visão consolidada, com filtros, contadores, edição e histórico de cada mudança.'
        ],
        tags: ['Demonstração', 'Dados fictícios', 'Repositório privado'],
        actionLabels: [],
        videos: {
          'navegacao-do-admin': {
            title: 'Visão administrativa',
            description: 'O administrador edita registros e cada atualização de status fica registrada em um histórico.'
          },
          'visao-do-agente': {
            title: 'Visão do agente',
            description: 'Cada agente registra possíveis vendas e acompanha sua evolução sem depender de consultas manuais.'
          },
          'cadastro-de-venda': {
            title: 'Cadastro de indicação',
            description: 'Um fluxo guiado reúne as informações necessárias para dar continuidade ao atendimento.'
          }
        }
      }
    }
  },
  [ENGLISH_LOCALE]: {
    meta: {
      title: 'Wesley Santos — Full Stack Developer',
      description: 'Portfolio of Wesley Santos, a full stack developer with a strong frontend foundation.'
    },
    navItems: [
      { href: '#projetos', label: 'Projects' },
      { href: '#sobre', label: 'About' },
      { href: '#stack', label: 'Stack' },
      { href: '#contato', label: 'Contact' }
    ],
    profile: {
      role: 'Full stack developer · frontend-heavy',
      location: 'São Paulo, Brazil',
      availability: 'Available for work',
      resumeUrl: cvEnglish
    },
    hero: {
      kicker: 'Portfolio · 2026',
      headingLabel: 'Full stack developer Wesley Santos',
      titleTop: 'Full stack',
      titleBottom: 'Developer',
      summary: 'I build efficient web solutions that solve real business problems.'
    },
    about: {
      heading: 'Code matters. Understanding the problem is essential.',
      paragraphs: [
        'I’m a full stack developer with 3+ years of experience and a strong frontend foundation. I’ve built websites, internal systems, SaaS platforms, and customer-facing digital products.',
        'I like to work end to end: understanding the business need, evaluating technical paths, shaping the experience, integrating APIs, and supporting what reaches production.',
        'I’m currently deepening my knowledge of software architecture, system design, and AI-assisted development workflows to deliver code that is even more reliable, scalable, and easy to maintain.'
      ],
      ariaLabel: 'About me'
    },
    sectionIntroductions: {
      projects: { label: '/ Selected projects', description: 'Interfaces, decisions, and outcomes' },
      about: { label: '/ About me', description: 'Journey, context, and how I work' },
      stack: { label: '/ Technologies', description: 'Tools selected for each problem' }
    },
    projectsUi: {
      ariaLabel: 'Selected projects',
      listLabel: 'Project list',
      viewCaseLabel: 'View case',
      cursorLabel: 'View project',
      contextLabel: 'Context for'
    },
    stack: {
      ariaLabel: 'Technologies',
      heading: 'Tools I use to turn ideas into working products.',
      groups: [
        { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { label: 'Backend & data', items: ['Node.js', 'Express.js', 'RESTful APIs', 'Prisma ORM', 'PostgreSQL', 'REDIS', 'JSON Web Token (JWT)'] },
        { label: 'Cloud & delivery', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Microsoft Azure', 'VPS'] },
        { label: 'Practices & tools', items: ['Test-Driven Development (TDD)', 'Git', 'GitHub', 'Postman', 'Swagger/OpenAPI', 'System Design'] },
        { label: 'AI', items: ['Spec-Driven Development (SDD)', 'Harness Engineering', 'AI Skills/Tools Development', 'LLM Orchestration'] }
      ]
    },
    header: {
      navigationLabel: 'Main navigation',
      linkedinLabel: 'Wesley Santos on LinkedIn',
      lightThemeLabel: 'Use light theme',
      darkThemeLabel: 'Use dark theme',
      switchLocaleLabel: 'Mudar para português',
      targetLocaleShort: 'PT'
    },
    footer: {
      invitationLabel: '/Let’s talk',
      heading: 'Have a product to build or improve?',
      quickLinksLabel: '/Quick links',
      quickLinksAriaLabel: 'Quick links',
      resumeLabel: 'Download CV',
      contactLabel: '/Contact',
      contactAriaLabel: 'Social and contact links',
      credit: 'Made with attention to detail.'
    },
    caseStudy: {
      backLabel: 'Back to portfolio',
      sectionLabel: '/ Case study',
      actionsLabel: 'Actions for',
      tagsLabel: 'Demo context',
      stages: [
        { label: '/ Understand', description: 'The starting point and constraints', heading: 'Context', field: 'context' },
        { label: '/ Build', description: 'The choices that shaped the solution', heading: 'Decisions', field: 'decision' },
        { label: '/ Deliver', description: 'What changed after delivery', heading: 'Outcome', field: 'outcome' }
      ]
    },
    gallery: {
      demoLabel: 'Demo',
      runningLabel: 'Running',
      scenesLabel: 'Demo scenes'
    },
    notFound: {
      heading: 'Project not found.',
      description: 'This case study may have moved or may not have been published yet.',
      backLabel: 'Back to portfolio'
    },
    projects: {
      shrten: {
        category: 'Personal project · System design',
        summary: 'URL shortening as a hands-on study of system design, reliability, and real-world operations.',
        context: [
          'I built Shrten to deepen my full stack development skills and study System Design through a seemingly simple problem: shortening URLs.',
          'The real challenge was designing collision-free codes, reducing repeated reads, keeping redirects available during failures, and controlling data growth.'
        ],
        decision: [
          'I used sequential PostgreSQL BIGINT IDs, passed through a reversible permutation before Base62 conversion. This produces four-to-six-character codes without storing a second key or querying for collisions.',
          'On the redirect path, Redis operates as a cache-aside layer with positive and negative entries. PostgreSQL remains the source of truth and serves reads if the cache becomes unavailable.',
          'Link creation is protected by rate limiting on HMAC-SHA-256 anonymized IPs, with two rolling windows and atomic Lua operations. Links inactive for 180 days are removed in batches and invalidated in the cache.'
        ],
        outcome: [
          'The result is a tested full stack application prepared to run on lean infrastructure, with Docker, a reverse proxy, HTTPS, CI/CD, and VPS deployment.',
          'The project made the trade-offs between source of truth and optimization, fail-open or fail-closed behavior, and complexity proportional to the current scale concrete.'
        ],
        tags: [],
        actionLabels: ['Open Shrten', 'View repository'],
        videos: {
          'produto-em-uso': {
            title: 'Product in use',
            description: 'Creating, looking up, and managing short links in a complete, production-ready experience.'
          }
        }
      },
      paglias: {
        category: 'B2B e-commerce · ERP integration',
        summary: 'A self-service channel connected to the ERP to eliminate manual order re-entry.',
        context: [
          'Customers, products, and commercial terms already lived in Sige Cloud, but orders arrived through WhatsApp and were manually entered into the ERP.',
          'The platform needed to enable self-service without duplicating Sige rules or broadly exposing the catalog, prices, or commercial terms.'
        ],
        decision: [
          'I kept the ERP as the single source of truth. A CPF or CNPJ validates the customer record; after login, the customer’s latest order defines the price table, warehouse, salesperson, payment terms, and other commercial parameters.',
          'The catalog follows the customer’s assigned price table, removes unavailable items, and enriches categories and images through ERP calls. Cloudinary and PostgreSQL prevent repeated media transfers.',
          'I handled 503 instability with retries and progressive delays. Before reaching Sige, each order is rebuilt with the ERP terms and validated in the backend.'
        ],
        outcome: [
          'Customers already known by the operation can create an account, access their own prices, search products, select quantities, and confirm an order in the same flow.',
          'The journey eliminates manual re-entry in the digital channel, preserves Sige as the central system, and reduces discrepancies in commercial terms.'
        ],
        tags: ['Demo', 'Fictional data', 'Private repository'],
        actionLabels: [],
        videos: {
          'fluxo-completo': {
            title: 'Complete flow',
            description: 'From customer identification to product selection and completing an order connected to the ERP.'
          }
        }
      },
      'senior-academy': {
        category: 'Learning platform · Zoom SDK',
        summary: 'A static page evolved into a segmented, manageable platform with integrated live classes.',
        context: [
          'In the previous solution, live classes were held through a Google Meet link. Every schedule change required a code edit, and there was no authentication or profile-specific experience.',
          'The platform needed to give the client autonomy without losing catalog organization or separating live meetings from the main journey.'
        ],
        decision: [
          'I modeled users, categories, recorded and live classes, organizations, bookings, and attendance. Authentication, roles, and clusters began defining the content available to each audience.',
          'I built an admin panel where the client can create, edit, segment, and deactivate classes. For live sessions, I integrated the Zoom Meeting SDK and collaborated on the flow for creating meetings, signatures, start_url, and ZAK tokens.',
          'The integration required documentation research, compatibility tests, and adjustments to the contract between frontend, backend, and SDK until meetings ran inside the platform.'
        ],
        outcome: [
          'The client can now manage content without depending on code changes. Users gained an authenticated catalog, bookings, recorded classes, and live meetings in the same experience.',
          'Interests, attendance, and activity time also became a foundation for tracking engagement and guiding the product’s evolution.'
        ],
        tags: ['Demo', 'Fictional data', 'Private repository'],
        actionLabels: [],
        videos: {
          'administracao-autonoma': {
            title: 'Independent administration',
            description: 'Content was previously changed directly in code. We built a panel so the client could manage classes independently.'
          },
          'experiencia-segmentada': {
            title: 'Segmented experience',
            description: 'Authentication, roles, and cluster segmentation tailor the experience for customers, visitors, and partner groups.'
          },
          'aulas-ao-vivo': {
            title: 'Live classes',
            description: 'Zoom Server-to-Server OAuth and the Meeting SDK connect backend meeting creation to the embedded frontend experience.'
          }
        }
      },
      'agente-telehelp': {
        category: 'Sales operations · Roles and permissions',
        summary: 'A traceable journey for registering referrals and tracking each sales-stage update.',
        context: [
          'TeleHelp needed to digitize its sales referral process. The platform would neither sell nor process payments: partners would register potential customers and follow the service handled by the company.',
          'The main requirement was to create shared visibility without mixing the responsibilities of agents and administrative operations.'
        ],
        decision: [
          'I separated the solution into an agent area for registration and tracking, and an administrative area for activating agents, editing records, and advancing the operational flow.',
          'I modeled each referral with five statuses and a change history. JWT authentication, role-based permissions, validation, and encryption of sensitive data support the flow.'
        ],
        outcome: [
          'Each referral is now registered once and tracked by the partner without manual status requests.',
          'The administrative team works from a consolidated view with filters, counters, editing, and a history of every change.'
        ],
        tags: ['Demo', 'Fictional data', 'Private repository'],
        actionLabels: [],
        videos: {
          'navegacao-do-admin': {
            title: 'Administrative view',
            description: 'Administrators edit records, and every status update is recorded in a history.'
          },
          'visao-do-agente': {
            title: 'Agent view',
            description: 'Each agent registers potential sales and follows their progress without relying on manual status requests.'
          },
          'cadastro-de-venda': {
            title: 'Referral registration',
            description: 'A guided flow gathers the information required to continue the customer service process.'
          }
        }
      }
    }
  }
}

function buildProjects(locale) {
  const localizedProjects = copyByLocale[locale].projects

  return projectDefinitions.map((definition) => {
    const localizedProject = localizedProjects[definition.slug]

    return {
      slug: definition.slug,
      title: definition.title,
      category: localizedProject.category,
      summary: localizedProject.summary,
      context: localizedProject.context,
      decision: localizedProject.decision,
      outcome: localizedProject.outcome,
      stack: definition.stack,
      tags: localizedProject.tags,
      actions: definition.actionHrefs.map((href, index) => ({
        label: localizedProject.actionLabels[index],
        href
      })),
      videos: definition.videoAssets.map((video) => ({
        ...video,
        ...localizedProject.videos[video.id]
      }))
    }
  })
}

const contentByLocale = Object.fromEntries(
  Object.entries(copyByLocale).map(([locale, copy]) => [locale, {
    ...copy,
    profile: { ...sharedProfile, ...copy.profile },
    portfolioProjects: buildProjects(locale)
  }])
)

export function getSiteContent(locale = PORTUGUESE_LOCALE) {
  return contentByLocale[locale] || contentByLocale[ENGLISH_LOCALE]
}

export const siteContent = getSiteContent(PORTUGUESE_LOCALE)
export const navItems = siteContent.navItems
export const profile = siteContent.profile
export const heroSummary = siteContent.hero.summary
export const aboutHeading = siteContent.about.heading
export const aboutParagraphs = siteContent.about.paragraphs
export const sectionIntroductions = siteContent.sectionIntroductions
export const caseStudyStages = siteContent.caseStudy.stages
export const stackGroups = siteContent.stack.groups
export const portfolioProjects = siteContent.portfolioProjects

export function getProjectBySlug(slug, locale = PORTUGUESE_LOCALE) {
  return getSiteContent(locale).portfolioProjects.find((project) => project.slug === slug)
}
