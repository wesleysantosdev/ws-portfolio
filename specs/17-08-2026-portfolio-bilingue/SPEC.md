# Spec: Portfólio bilíngue

## Objective

Disponibilizar todo o portfólio de Wesley Santos em português brasileiro e inglês, com um seletor compacto no header, detecção inicial sem rastreamento e persistência da escolha manual. A experiência deve servir recrutadores e lideranças técnicas no Brasil e no exterior sem alterar as URLs públicas atuais nem descaracterizar a composição editorial do site.

## Assumptions

1. O idioma inicial será `pt-BR` somente quando o primeiro idioma preferido do navegador for exatamente português brasileiro; qualquer outro valor inicia em inglês.
2. Uma escolha manual salva em `localStorage` sempre prevalece sobre o idioma do navegador.
3. A preferência de idioma não será codificada na URL; `/` e `/projetos/:slug` permanecem canônicas nos dois idiomas.
4. Não haverá consulta de IP, geolocalização, cookie ou serviço externo para decidir o idioma.
5. O usuário forneceu `src/assets/cv-en.pdf`; o atual `CV.pdf` será renomeado para `cv-ptbr.pdf`, e cada versão do site apontará para o arquivo correspondente.
6. Nomes próprios, marcas, URLs, slugs, mídias e termos técnicos reconhecidos permanecem invariantes; a narrativa, labels visuais, nomes acessíveis e metadados serão localizados.
7. Traduções em inglês usarão registro profissional, direto e natural para contratação técnica, preservando o sentido e os limites factuais do conteúdo em português.

## Tech Stack

- React 18, JavaScript e Vite.
- CSS Modules e tokens globais existentes.
- Vitest, Testing Library e JSDOM.
- Estado local no menor ancestral comum (`App`) e um hook dedicado à preferência persistida.
- Conteúdo estático localizado em `src/content/`, sem biblioteca de i18n ou dependência adicional.

## Commands

- `npm run test`
- `npm run build`
- `git diff --check`

## Project Structure

- `src/content/siteContent.js`: catálogo localizado e dados compartilhados.
- `src/hooks/useLocale.js`: detecção, persistência e sincronização de `html[lang]` e metadados.
- `src/app/App.jsx`: seleciona o catálogo ativo e resolve a rota atual.
- `src/components/layout/Header/`: seletor de idioma e ações globais.
- `src/components/`, `src/pages/`: recebem o conteúdo ativo por props e mantêm defaults em português para usos isolados existentes.
- `src/tests/language.spec.jsx`: contratos de detecção, troca, persistência, conteúdo, cases e currículos.

## Code Style

- Não criar contexto global ou dependência de i18n para uma árvore pequena que pode receber o catálogo por props.
- Manter dados longos fora dos componentes e preservar imports diretos.
- Atualizações de preferência usam estado funcional quando dependem do valor anterior.
- Efeitos existem apenas para sincronizar o documento com a preferência persistida.
- Controles mantêm nome acessível, foco visível e alvo legível em desktop e mobile.

## Testing Strategy

- RED: cobrir `pt-BR`, idioma externo, preferência salva, troca manual, `html[lang]`, metadados, currículos, home, case e 404.
- GREEN: implementar a menor infraestrutura de locale e adaptar cada consumidor sem mudar rotas ou identidade.
- REFACTOR: consolidar dados invariantes, remover strings de interface residuais e preservar os contratos portugueses existentes.
- Executar testes focados a cada tarefa e, ao final, suíte completa, build e `git diff --check`.

## Boundaries

- Não usar geolocalização por IP nem solicitar permissão de localização.
- Não criar `/en`, `/pt-br`, query string de idioma ou URLs traduzidas.
- Não traduzir nomes de produto, tecnologias, marcas ou slugs.
- Não alterar tema, motion, trilhas editoriais, conteúdo factual ou links externos como efeito colateral.
- Não adicionar biblioteca de internacionalização enquanto dois catálogos estáticos resolvem o problema com clareza.

## Success Criteria

1. O site inicia em português para navegador `pt-BR` e em inglês para qualquer outro idioma principal quando não há preferência salva.
2. O seletor do header alterna os idiomas sem recarregar e persiste a escolha em `localStorage`.
3. A escolha salva prevalece sobre a detecção do navegador em visitas seguintes.
4. Todo texto observável da home, cases, galeria, 404, footer e nomes acessíveis acompanha o idioma selecionado.
5. `document.documentElement.lang`, título e meta description acompanham o idioma ativo.
6. As URLs e âncoras atuais permanecem inalteradas nos dois idiomas.
7. Português baixa `cv-ptbr.pdf`; inglês baixa `cv-en.pdf`.
8. O seletor é compreensível por leitores de tela, teclado e visão, cabe no header mobile e respeita reduced motion.
9. O conteúdo técnico em inglês preserva significado, tom e limites factuais do original.
10. Testes, build e verificação de whitespace passam sem warnings novos introduzidos pela feature.

## Open Questions

- Nenhuma. Detecção, URLs e currículos foram confirmados pelo usuário.
