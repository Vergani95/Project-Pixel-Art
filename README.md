## Pixels Art

Neste repositório se encontra um dos meus primeiros projetos juntando teoria lógica e prática

---

## Boas vindas ao repositório do projeto Arte com Pixels!

Esse projeto foi realizado quando ainda estava engatinhando na programação, ainda tinha certas dificuldades em assimilar certas coisas, mas ao final foi recompensador ver ele pronto e funcionando corretamente. 🚀

O objetivo desse projeto era criar uma grade

---

## Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Adicione à página o título "Paleta de Cores".](#1---adicione-à-página-o-título-paleta-de-cores)
    - [2 - Adicione à página uma paleta de quatro cores distintas.](#2---adicione-à-página-uma-paleta-de-quatro-cores-distintas)
    - [3 - Adicione na página a cor preta ela deve ser a primeira na paleta de cores.](#3---adicione-na-página-a-cor-preta-ela-deve-ser-a-primeira-na-paleta-de-cores)
    - [4 - Adicione à página um quadro de pixels, com 25 pixels.](#4---adicione-à-página-um-quadro-de-pixels-com-25-pixels)
    - [5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.](#5---aplique-a-cada-elemento-do-quadro-de-pixels-deve-possuir-40-pixels-de-largura-e-40-pixels-de-altura-e-ser-delimitado-por-uma-borda-preta-de-1-pixel)
    - [6 - Definia a cor preta como cor inicial. Ao carregar a página a cor preta já deve estar selecionada para pintar os pixels](#6---executar-o-carregamento-da-página-a-cor-preta-da-paleta-já-deve-estar-selecionada-para-pintar-os-pixels)
    - [7 - Selecione uma das cores da paleta, ao clicar, a cor selecionada é a que será utilizada para preencher os pixels no quadro.](#7---clicar-em-uma-das-cores-da-paleta-a-cor-selecionada-é-que-vai-ser-usada-para-preencher-os-pixels-no-quadro)
    - [8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta, faz com que o pixel seja preenchido com a cor selecionada.](#8---clicar-em-um-pixel-dentro-do-quadro-após-selecionar-uma-cor-na-paleta-o-pixel-deve-ser-preenchido-com-esta-cor)
    - [9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.](#9---crie-um-botão-que-ao-ser-clicado-limpa-o-quadro-preenchendo-a-cor-de-todos-seus-pixels-com-branco)

    `Requisitos bônus:`
    - [10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.](#10---faça-o-quadro-de-pixels-ter-seu-tamanho-definido-pelo-usuário)
    - [11 - Limite o tamanho do mínimo e máximo do board.](#11---limite-o-tamanho-do-mínimo-e-máximo-do-board)
    - [12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.](#12---faça-com-que-as-cores-da-paleta-sejam-geradas-aleatoriamente-ao-carregar-a-página)
---

## Habilidades

- Manipular o DOM

- Manipular o Javascript

---

## O que deverá ser desenvolvido

- Você irá implementar uma página web que contém uma paleta de cores funcional que poderá ser utilizada para criar desenhos em pixels. Para isto você irá utilizar `javascript`, `css` e `html`.

---

## Desenvolvimento

- Implemente uma paleta de cores usando `javascript`, `css` e `html`.

---

## Instruções para entregar seu projeto:

### 🗒 ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-014-a-project-pixels-art.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-014-a-project-pixels-art`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b mariazinha-project-pixels-art`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/mariazinha/code/**sd-014-a-project-pixels-art**_
  * Crie os arquivos `index.html`, `style.css` e `script.js`
    * Exemplo: `touch index.html style.css script.js`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin mariazinha-project-pixels-art`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-014-a-project-pixels-art/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[JOAOZINHO] Projeto Pixels Art`
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-014-a-project-pixels-art/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

---

### Dicas

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/pixels-art`.

---

### Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```
---

### Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```
---

## 👀 Observações importantes:
  
  * [Javascript.com](http://javascript.com/)

  * [W3Schools](https://www.w3schools.com/js/default.asp)

  * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  * [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

---

## Requisitos Obrigatórios:

Neste projeto, você implementará um editor de arte com pixels.

**Ou seja, dada uma paleta de cores e um quadro composto por pixels, você vai permitir que quem usa consiga pintar o que quiser no quadro!** 👩‍🎨

### 1 - Adicione à página o título "Paleta de Cores".

- O título deverá ficar dentro de uma tag `h1` com o `id` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

**O que será verificado:**

- Verifica se contém um elemento `h1` com o id `title` com o título correto

### 2 - Adicione à página uma paleta de quatro cores distintas.

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`, ao passo que cada cor individual da paleta de cores deve possuir a `classe` `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca.**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

- A paleta de cores não deve conter cores repetidas.

**O que será verificado:**

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`

- Verifica se cada cor individual da paleta de cores possui a `classe` chamada `color`.

- Verifica se a cor de fundo de cada elemento da paleta é a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca.**

- Verifica se cada elemento da paleta de cores tem uma borda preta, sólida e com 1 pixel de largura;

- Verifica se a paleta lista todas as cores disponíveis para utilização, lado a lado.

- Verifica se a paleta de cores está posicionada abaixo do título \'Paleta de Cores\'

- Verifica se a paleta de cores não contém cores repetidas.

### 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

**O que será verificado:**

- Verifica se a primeira cor da paleta é preta

- Verifica se as demais cores podem ser escolhidas livremente.

### 4 - Adicione à página um quadro de pixels, com 25 pixels.

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

-  O quadro de "pixels" deve aparecer abaixo da paleta de cores.

**O que será verificado:**

- Verifica se o quadro de pixels possui o `id` denominado `pixel-board`

- Verifica se cada pixel individual dentro do quadro possui a `classe` denominada `pixel`.

- Verifica se a cor inicial dos pixels dentro do quadro, ao abrir a página, é branca.

- Verifica se o quadro de pixels aparece abaixo da paleta de cores

### 5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.

**O que será verificado:**

- Verifica se o quadro de pixels tem altura e comprimento de 5 elementos

- Verifica se 40 pixels é o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

### 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

- O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;

- Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado:**

- Verifica se o elemento da cor preta possui, inicialmente, a `classe` `selected`

- Verifica se nenhuma outra cor da paleta tem a `classe` `selected`

### 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

- A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

- Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

- Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado:**

- Verifica se somente uma cor da paleta de cores tem a classe `selected` de cada vez

- Verifica se os pixels dentro do quadro não têm a classe `selected` quando são clicados

### 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

**O que será verificado:**

- Verifica se ao carregar a página deve ser possível pintar os pixels de preto

- Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

- Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

### 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

**O que será verificado:**

- Verifica se o botão tem o `id` denominado `clear-board`

- Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

- Verifica se o texto do botão é \'Limpar\'

- Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco

---

