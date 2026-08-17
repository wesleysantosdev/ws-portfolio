##STAR

###Contexto

A solução anterior funcionava como uma página estática: disponibilizava aulas gravadas e um link do Google Meet para encontros ao vivo. A inclusão ou alteração de aulas exigia mudanças diretamente no código, criando dependência da equipe técnica. Também não havia autenticação nem uma experiência diferenciada por perfil ou grupo de usuário.

###Decisão

Transformei essa página em uma plataforma gerenciável. Com autenticação, perfis de usuário e um painel administrativo no qual o próprio cliente pode cadastrar, editar, segmentar e desativar aulas sem precisar alterar o código.
A modelagem passou a contemplar usuários, categorias, aulas gravadas e ao vivo, organizações — chamadas de clusters —, reservas e participações. Isso permitiu apresentar conteúdos diferentes para clientes TeleHelp, visitantes e grupos parceiros.
O principal desafio técnico foi incorporar as aulas ao vivo diretamente na plataforma. Integrei o Zoom Meeting SDK ao frontend e junto ao time de backend formulamos um fluxo de criação de reuniões via API, autenticação e geração das assinaturas necessárias para o SDK. Para permitir que o administrador iniciasse a reunião como host, também tratamos o start_url e o token ZAK retornados pelo Zoom.
A integração exigiu pesquisa na documentação e nos fóruns da Zoom, testes de compatibilidade e adaptações no fluxo entre frontend, backend e SDK até que a experiência funcionasse dentro da própria interface.

###Resultado

O cliente passou a administrar o conteúdo de forma autônoma, reduzindo a dependência de alterações manuais no código. Os usuários ganharam uma plataforma autenticada, com catálogo organizado, reservas, aulas gravadas e encontros ao vivo integrados à experiência.
Além da entrega principal, a plataforma passou a registrar interesses, participações e tempo de atividade, criando uma base para acompanhamento de engajamento e evolução futura do produto.

##VÍDEOS

###administracao-autonoma.mp4

descrição: "O conteúdo antes era alterado diretamente no código. Criamos um painel para que o cliente administrasse as aulas de forma autônoma."

###experiencia-segmentada.mp4

descrição: "Autenticação, papéis e segmentação por clusters permitiram personalizar a experiência para diferentes públicos."

###aulas-ao-vivo.mp4

descrição: "Implementei o fluxo completo de criação e participação em reuniões com Zoom Server-to-Server OAuth e Meeting SDK. O backend criava a reunião e gerava as credenciais temporárias, enquanto o frontend inicializava e renderizava a experiência do Zoom dentro da interface da plataforma."

##TECH STACK

###Vue 3, Typescript, Node.js, PostgresSQL, Prisma, Docker

##TAG

### Demonstração, Dados Fictícios, Repositório Privado

