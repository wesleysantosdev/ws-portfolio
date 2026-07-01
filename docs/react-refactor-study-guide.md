# React Refactor Study Guide

## O objetivo desta etapa

Nesta refatoracao, a meta nao foi "deixar mais bonito". A meta foi deixar o portfolio mais organizado por dentro, sem mudar a aparencia por fora.

Uma boa analogia:

- Antes: a casa estava bonita e habitavel, mas com fios passando por varios comodos.
- Depois: a casa continua com a mesma pintura, mas agora a fiacao, o quadro eletrico e a organizacao dos comodos fazem mais sentido.

Isso e importante porque um codigo simples visualmente pode ficar dificil de manter quando ele cresce.

## O que mudou e por que mudou

### 1. Conteudo saiu de dentro dos componentes

Antes, textos, links, skills e projetos estavam espalhados dentro do JSX.

Agora eles ficam em `src/content/siteContent.js`.

Por que isso?

- O componente passa a cuidar mais de "como mostrar" do que de "o que escrever".
- Fica mais facil trocar conteudo sem reabrir toda a estrutura visual.
- Reduz repeticao.

Analogia:

- Antes: cada ator escrevia a propria fala no meio da cena.
- Depois: existe um roteiro central, e os atores apenas interpretam.

### 2. Comportamento repetivel virou hook

Foi criado hook para:

- texto rotativo no header
- reacao ao scroll na navbar
- controle do menu mobile

Por que isso e melhor do que deixar tudo dentro do componente?

- O componente fica menor e mais legivel.
- A regra de negocio fica separada da marcacao visual.
- O comportamento pode ser reaproveitado ou testado com mais clareza.

Analogia:

- Antes: o chef cozinhava, anotava pedidos, limpava a mesa e atendia o caixa.
- Depois: cada funcao foi separada, entao o fluxo fica mais claro.

### 3. Componentes pequenos substituirao trechos longos de JSX

Foram criados componentes de apoio como:

- `BrandMark`
- `SocialLinks`
- `ProjectCard`
- `ContactField`

Por que isso e melhor?

- Cada componente tem uma responsabilidade pequena.
- O arquivo principal de cada secao fica mais facil de ler.
- Evitamos JSX muito comprido e repetitivo.

Regra pratica:

- Se um bloco de interface tem nome proprio e aparece mais de uma vez, ele costuma merecer um componente.

### 4. O formulario ficou mais acessivel

Antes, os labels nao estavam corretamente ligados aos campos.

Agora cada campo tem:

- `id`
- `htmlFor`
- uma estrutura mais previsivel

Por que isso importa?

- Leitores de tela entendem melhor o formulario.
- Ferramentas de teste conseguem encontrar os campos por label.
- O HTML fica semanticamente correto.

Analogia:

- Antes: os nomes das gavetas estavam colados perto delas.
- Depois: cada etiqueta aponta exatamente para a gaveta certa.

### 5. A integracao externa foi isolada

O EmailJS saiu do componente e foi para `src/lib/sendContactEmail.js`.

Por que isso e melhor do que chamar a biblioteca direto no componente?

- O componente nao precisa saber detalhes da integracao.
- Fica mais facil trocar a implementacao no futuro.
- Os testes ficam mais simples, porque podemos mockar uma unica funcao.

Analogia:

- Antes: o balconista precisava conhecer toda a cozinha.
- Depois: ele so entrega o pedido para um ponto central.

### 6. Eventos globais ficaram mais seguros

Antes, a navbar registrava `window.addEventListener('scroll', ...)` diretamente no corpo do componente.

Isso era ruim porque:

- poderia registrar listeners repetidos a cada render
- mistura efeito colateral com renderizacao

Agora isso fica dentro de um hook com `useEffect`, incluindo limpeza.

Regra mental boa para React:

- render deve descrever UI
- efeitos devem cuidar de sincronizacao com o mundo externo

## O que essa refatoracao ensina sobre React

### Pense em 3 camadas

Uma forma simples de estudar React e separar mentalmente em 3 partes:

1. Conteudo
2. Comportamento
3. Apresentacao

No projeto, isso virou:

1. `src/content/`
2. `src/hooks/` e `src/lib/`
3. `src/components/`

Se essas camadas ficam misturadas demais, o codigo fica mais dificil de evoluir.

### Componentes nao precisam saber tudo

Um erro comum e transformar componente em "super componente":

- busca dados
- guarda estado
- trata efeitos
- renderiza tudo
- conhece integracao externa

Isso funciona no comeco, mas piora rapido.

Pense assim:

- um bom componente nao e aquele que faz tudo
- e aquele que deixa claro o que ele faz

### Nem toda logica precisa de `useEffect`

Uma boa parte das complexidades em React aparece quando usamos efeito demais.

Nesta refatoracao, a ideia foi:

- usar efeito quando ha timer ou listener global
- evitar efeito quando o valor pode ser derivado diretamente do estado atual

Isso ajuda a evitar bugs, renders desnecessarios e fluxos mentais confusos.

## Por que nao Tailwind nesta etapa

Porque o foco aqui era arquitetura React e processo de refatoracao, nao trocar a estrategia de estilos.

Se a gente mudasse estrutura React e estilo ao mesmo tempo, ficaria mais dificil estudar:

- o que mudou por organizacao
- o que mudou por design system
- o que mudou por classe utilitaria

Ou seja: menos variaveis, mais clareza.

## Como estudar esse resultado

Uma boa sequencia para voce revisar o projeto:

1. Compare `src/content/siteContent.js` com os componentes que consomem esses dados.
2. Leia `useScrolledPast`, `useMobileMenu` e `useRotatingText`.
3. Veja como `Contact` ficou menor depois de extrair `ContactField` e `sendContactEmail`.
4. Rode os testes e entenda o que eles protegem.

## Regra final para levar com voce

Quando estiver refatorando React, faca sempre esta pergunta:

"Esse arquivo esta tentando ser conteudo, comportamento e interface ao mesmo tempo?"

Se a resposta for sim, geralmente existe uma boa oportunidade de separacao.
