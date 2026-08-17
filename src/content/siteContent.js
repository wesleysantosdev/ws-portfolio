import CV from '../assets/CV.pdf'
import telehelpSaleVideo from '../assets/projetos/agente-telehelp/cadastro-de-venda.mp4'
import telehelpAdminVideo from '../assets/projetos/agente-telehelp/navegacao-do-admin.mp4'
import telehelpAgentVideo from '../assets/projetos/agente-telehelp/visao-do-agente.mp4'
import pagliasFlowVideo from '../assets/projetos/paglias/fluxo-completo-paglias.mp4'
import seniorAdminVideo from '../assets/projetos/senior-academy/administracao-autonoma.mp4'
import seniorLiveVideo from '../assets/projetos/senior-academy/aulas-ao-vivo.mp4'
import seniorSegmentsVideo from '../assets/projetos/senior-academy/experiencia-segmentada.mp4'
import shrtenVideo from '../assets/projetos/shrten/shrten.mp4'

export const navItems = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#contato', label: 'Contato' }
]

export const profile = {
  name: 'Wesley Santos',
  shortName: 'Wes',
  role: 'Full stack developer · frontend-heavy',
  location: 'São Paulo, Brasil',
  availability: 'Disponível para trabalho',
  email: 'wesleysantosdev@outlook.com',
  resumeUrl: CV,
  linkedinUrl: 'https://www.linkedin.com/in/wesleysantosdev/',
  githubUrl: 'https://github.com/wesleysantosdev'
}

export const heroSummary = 'Desenvolvo soluções web eficientes que resolvem problemas reais do seu negócio.'

export const aboutHeading = 'Código é importante. Entender o problema é essencial.'

export const aboutParagraphs = [
  'Sou desenvolvedor full stack com 3+ anos de experiência e uma base forte em frontend. Já construí páginas, sistemas internos, plataformas SaaS e produtos digitais voltados ao cliente.',
  'Gosto de acompanhar o trabalho de ponta a ponta: entender a necessidade do negócio, avaliar caminhos técnicos, cuidar da experiência, integrar APIs e apoiar o que chega à produção.',
  'Hoje busco aprofundar meus estudos em arquitetura de software, system design e fluxos de desenvolvimento assistidos por IA para entregar código ainda mais confiável, escalável e simples de manter.'
]

export const sectionIntroductions = {
  projects: { label: '/ Projetos selecionados', description: 'Interfaces, decisões e resultados' },
  about: { label: '/ Sobre mim', description: 'Percurso, contexto e forma de trabalhar' },
  stack: { label: '/ Tecnologias', description: 'Ferramentas escolhidas conforme o problema' }
}

export const caseStudyStages = [
  { label: '/ Entender', description: 'O ponto de partida e as restrições', heading: 'Contexto', field: 'context' },
  { label: '/ Construir', description: 'As escolhas que orientaram a solução', heading: 'Decisões', field: 'decision' },
  { label: '/ Entregar', description: 'O que mudou após a entrega', heading: 'Resultado', field: 'outcome' }
]

export const stackGroups = [
  { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { label: 'Backend & dados', items: ['Node.js', 'Express.js', 'APIs RESTful', 'Prisma ORM', 'PostgreSQL', 'REDIS', 'JSON Web Token (JWT)'] },
  { label: 'Cloud & entrega', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Microsoft Azure', 'VPS'] },
  { label: 'Práticas & ferramentas', items: ['Test-Driven Development (TDD)', 'Git', 'GitHub', 'Postman', 'Swagger/OpenAPI', 'System Design'] },
  { label: 'IA', items: ['Spec-Driven Development (SDD)', 'Engenharia de Harness', 'Criação de AI Skills/Tools', 'Orquestração de LLMs'] }
]

export const portfolioProjects = [
  {
    slug: 'shrten',
    title: 'Shrten',
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
    stack: ['React', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Prisma', 'Docker', 'Azure'],
    tags: [],
    actions: [
      { label: 'Acessar Shrten', href: 'https://shrten.pro' },
      { label: 'Ver repositório', href: 'https://github.com/wesleysantosdev/url-shortener' }
    ],
    videos: [
      {
        id: 'produto-em-uso',
        title: 'Produto em uso',
        description: 'Criação, consulta e gerenciamento de links curtos em uma experiência completa e pronta para uso.',
        src: shrtenVideo
      }
    ]
  },
  {
    slug: 'paglias',
    title: 'Paglias',
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
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    tags: ['Demonstração', 'Dados fictícios', 'Repositório privado'],
    actions: [],
    videos: [
      {
        id: 'fluxo-completo',
        title: 'Fluxo completo',
        description: 'Da identificação do cliente à seleção de produtos e conclusão do pedido conectado ao ERP.',
        src: pagliasFlowVideo
      }
    ]
  },
  {
    slug: 'senior-academy',
    title: 'Senior Academy',
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
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    tags: ['Demonstração', 'Dados fictícios', 'Repositório privado'],
    actions: [],
    videos: [
      {
        id: 'administracao-autonoma',
        title: 'Administração autônoma',
        description: 'O conteúdo antes era alterado diretamente no código. Criamos um painel para que o cliente administrasse as aulas de forma autônoma.',
        src: seniorAdminVideo
      },
      {
        id: 'experiencia-segmentada',
        title: 'Experiência segmentada',
        description: 'Autenticação, papéis e segmentação por clusters personalizam a experiência para clientes, visitantes e grupos parceiros.',
        src: seniorSegmentsVideo
      },
      {
        id: 'aulas-ao-vivo',
        title: 'Aulas ao vivo',
        description: 'Zoom Server-to-Server OAuth e Meeting SDK conectam a criação da reunião no backend à experiência incorporada no frontend.',
        src: seniorLiveVideo
      }
    ]
  },
  {
    slug: 'agente-telehelp',
    title: 'Agente TeleHelp',
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
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Azure'],
    tags: ['Demonstração', 'Dados fictícios', 'Repositório privado'],
    actions: [],
    videos: [
      {
        id: 'navegacao-do-admin',
        title: 'Visão administrativa',
        description: 'O administrador edita registros e cada atualização de status fica registrada em um histórico.',
        src: telehelpAdminVideo
      },
      {
        id: 'visao-do-agente',
        title: 'Visão do agente',
        description: 'Cada agente registra possíveis vendas e acompanha sua evolução sem depender de consultas manuais.',
        src: telehelpAgentVideo
      },
      {
        id: 'cadastro-de-venda',
        title: 'Cadastro de indicação',
        description: 'Um fluxo guiado reúne as informações necessárias para dar continuidade ao atendimento.',
        src: telehelpSaleVideo
      }
    ]
  }
]

export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug)
}
