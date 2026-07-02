# Spec+Plan: Componentizacao e CSS Modules

## Objective

Refatorar o portfolio editorial sem alterar seu comportamento ou identidade visual, separando composicao, secoes, paginas e estilos por responsabilidade e aplicando praticas de React adequadas ao tamanho atual da aplicacao.

## Assumptions (confirmed)

- O visual, o conteudo e as URLs atuais devem ser preservados.
- CSS Modules sera usado para estilos de componentes; `main.css` ficara restrito a tokens, reset e regras globais.
- A aplicacao continuara em React 18 + Vite, sem novas dependencias ou migracao de roteador.
- Os testes existentes representam o contrato comportamental e podem receber seletores menos acoplados a classes globais.

## Success Criteria

- `App` apenas resolve a rota e compoe paginas.
- Header, secoes da home, footer e estados de rota vivem em modulos focados.
- Cada area visual possui um CSS Module proximo ao componente.
- Dados estaticos continuam fora dos componentes.
- Nao surgem memoizacoes, efeitos ou abstracoes sem beneficio mensuravel.
- Testes e build de producao passam sem regressao.

## Implementation Order

1. Registrar um teste arquitetural que falhe com a estrutura monolitica atual.
2. Extrair primitivas compartilhadas e componentes de layout.
3. Extrair secoes e paginas com seus CSS Modules.
4. Reduzir `App` a composicao e roteamento.
5. Ajustar os testes para contratos acessiveis ou marcadores estaveis quando necessario.
6. Executar suite completa e build.

## Testing Strategy

- Vitest e React Testing Library.
- Um teste estrutural cobre os limites de modularizacao.
- Os testes existentes protegem narrativa, interacoes, tema e rotas durante a refatoracao.
- Ciclo RED-GREEN-REFACTOR antes das mudancas de producao.

## Boundaries

- Always: preservar comportamento, acessibilidade e aparencia atual.
- Ask first: adicionar dependencias, mudar URLs ou redesenhar secoes.
- Never: introduzir componentes genericos sem uso real ou usar `memo`/`useMemo` por padrao.
