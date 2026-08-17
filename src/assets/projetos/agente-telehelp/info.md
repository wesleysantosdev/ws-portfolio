##STAR

###Contexto

A TeleHelp precisava transformar um processo de indicações comerciais em uma jornada digital rastreável. O objetivo não era vender ou processar pagamentos pela plataforma, mas permitir que parceiros registrassem potenciais clientes, informassem o serviço escolhido e acompanhassem a evolução da indicação enquanto a TeleHelp conduzia o atendimento.

###Decisões

A solução foi estruturada em duas experiências:

Área do agente: para cadastrar e acompanhar suas indicações.
Área administrativa: para ativar agentes, editar registros e atualizar o andamento operacional.

Modelei cada venda com cinco status e histórico de alterações. Também implementei autenticação JWT, permissões por perfil, validações e criptografia dos dados sensíveis armazenados.

###Resultado

A solução centralizou as indicações e criou visibilidade compartilhada sobre seu andamento. O agente registra a oportunidade uma única vez e acompanha o processo, enquanto a equipe administrativa trabalha sobre uma visão consolidada, com filtros, contadores, edição e histórico.


##VÍDEOS

###navegacao-do-admin.mp4

descrição: "O administrador é o responsável por editar registros, e toda atualização de status da venda é registrado em um histórico."

###visao-do-agente.mp4

descrição: "Cada agente registra possíveis vendas e acompanha sua evolução sem depender de consultas manuais."

###cadastro-de-venda.mp4

descrição: "Um fluxo guiado reúne as informações necessárias para dar continuidade ao atendimento."

##TECH STACK

###Vue 3, Typescript, Node.js, PostgresSQL, Prisma, Docker, Azure

##TAG

### Demonstração, Dados Fictícios, Repositório Privado

