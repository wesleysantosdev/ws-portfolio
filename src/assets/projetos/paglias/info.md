##STAR

###Contexto

A Paglias já utilizava o Sige Cloud como ERP para centralizar clientes, produtos, condições comerciais e pedidos. Entretanto, os pedidos ainda chegavam por WhatsApp e precisavam ser transcritos manualmente para o ERP.
O desafio era criar um canal de autosserviço sem duplicar no novo sistema, as regras comerciais já existentes no Sige e sem permitir acesso indiscriminado ao catálogo.

###Decisões

Adotei o ERP como fonte única da verdade:

O CPF/CNPJ informado no cadastro é consultado na API do Sige.
Após o login, o sistema consulta o pedido mais recente do cliente nos últimos 210 dias.
Esse pedido fornece tabela de preço, depósito, vendedor, forma de pagamento, plano de contas e outros parâmetros comerciais.
O catálogo é carregado a partir da tabela de preços associada ao cliente.
Produtos ocultos ou não habilitados para venda são removidos.
Categorias e imagens são recuperadas por chamadas complementares ao ERP.
Imagens são armazenadas no Cloudinary, com seus identificadores persistidos no PostgreSQL para evitar downloads e uploads repetidos.
Uma rotina semanal verifica imagens indisponíveis e tenta recuperá-las novamente no Sige.
Instabilidades 503 da API externa são tratadas com até 15 tentativas e espera progressiva.
O pedido final combina os itens escolhidos com os dados comerciais e de endereço provenientes do ERP, é validado no backend e enviado ao endpoint de pedidos do Sige.

###Resultado

Foi criado um fluxo digital de pedidos no qual clientes já conhecidos pela operação podem:

validar sua identidade;
criar uma conta;
acessar seu catálogo e preços;
pesquisar produtos;
selecionar quantidades e acompanhar o total;
confirmar um pedido diretamente na plataforma.
Isso elimina a redigitação manual no fluxo digital, mantém o Sige como sistema central e reduz a possibilidade de divergências entre a plataforma e as condições comerciais do ERP.

##VÍDEOS

###fluxo-completo-paglias.mp4

descrição: "Fluxo completo de seleção e conclusão do pedido."

##TECH STACK

###Vue 3, Typescript, Node.js, PostgresSQL, Prisma, Docker

##TAG

### Demonstração, Dados Fictícios, Repositório Privado
