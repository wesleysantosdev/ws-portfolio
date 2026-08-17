##STAR

### Contexto

Criei o Shrten como um projeto pessoal para aprofundar meus conhecimentos em desenvolvimento fullstack e estudar conceitos de System Design em um problema aparentemente simples: o encurtamento de URLs.

O objetivo não era apenas transformar uma URL longa em outra menor, mas entender as decisões necessárias para construir um serviço completo: como gerar códigos sem colisões, reduzir consultas repetidas ao banco, lidar com falhas de infraestrutura e controlar o crescimento dos dados ao longo do tempo.

### Decisões

Para gerar os links, utilizei IDs sequenciais `BIGINT` do PostgreSQL. Antes da conversão para Base62, o ID passa por uma permutação reversível derivada de uma chave secreta. Essa abordagem gera códigos de quatro a seis caracteres sem armazenar o código no banco e sem realizar consultas adicionais para verificar colisões.

No fluxo de redirecionamento, implementei Redis com a estratégia cache-aside, incluindo cache positivo para URLs existentes e cache negativo para códigos inexistentes. O PostgreSQL continua sendo a fonte da verdade: caso o Redis fique indisponível, o redirecionamento ainda pode consultar o banco.

Para proteger a criação de links, implementei rate limiting por IP anonimizado com HMAC-SHA-256. Duas janelas móveis controlam tentativas por minuto e criações em 24 horas, com operações atômicas executadas no Redis por meio de Lua scripts.

Também implementei o ciclo de vida dos links, registrando quantidade de acessos e última atividade. URLs inativas por 180 dias são removidas em lotes, com invalidação das respectivas entradas no cache.

### Resultado

O resultado foi uma aplicação fullstack funcional, testada e preparada para operação em uma infraestrutura enxuta. Com containers Docker, proxy reverso e HTTPS com Caddy, CI/CD com GitHub Actions e deploy em VPS.

Mais importante do que a aplicação em si, o projeto me permitiu exercitar System Design como um conjunto de trade-offs: distinguir fonte da verdade de otimizações, decidir quando degradar de forma aberta ou fechada e evitar complexidade que ainda não se justificava para a escala atual.

##TECH STACK

###React, Typescript, Node.js, Redis, PostgresSQL, Prisma, Docker, Azure

## TAG

### Não tem, o repo desse é publico e os dados reais, portanto não colocar nada


