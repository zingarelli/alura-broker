# Alura Broker | Learning TypeScript

[Veja esta página em português](#detalhes-do-projeto)

A simple page to insert and list stock orders.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Gerenciador de compra de Ações**
| :label: Tecnologias | typescript
| :rocket: URL         | https://zingarelli.github.io/alura-broker/app/dist/index.html
| :fire: Desafio     | https://www.alura.com.br/formacao-typescript

![](https://user-images.githubusercontent.com/19349339/198724899-1d94a153-2998-47bf-b7cc-a386c61711e7.png#vitrinedev)

## Project Details

This is a simple project developed in order to learn TypeScript, which can be seen a superset of JavaScript, implementing the hability of adding types to variables, functions, etc. 

In this project we have a page with a form to fill in information regarding a stock order: date, stock symbol, amount and price per stock. This page also shows a table with all stock orders created and a total per order (amount * price). There's also a button to import stock orders from an API, which is a server running locally, created using Express.js.

You can view the page online by [clicking here](https://zingarelli.github.io/alura-broker/app/dist/index.html). Please notice that you'll be able to add stock orders and view them, but won't be able to import orders from API, since the server runs locally. In order to fully test this project, please download and install it (see section ["How to run this project"](#how-to-run-this-project) for more information).

The page is in English, but the code and comments are in Portuguese.

### Importing data from API

![gif showing data being importer from API by clicking in the button "Import orders from API"](https://user-images.githubusercontent.com/19349339/209138236-32286682-fdd0-4392-b42f-a1310c791de3.gif)

### Adding a new stock order

![gif showing a new order being added to the list](https://user-images.githubusercontent.com/19349339/209138231-b16fb017-60e8-406f-8d87-bc555da1acf1.gif)

## Credits

This project was developed in the TypeScript courses from [Alura](https://www.alura.com.br).

**Instructor**: 
- **[Flavio Henrique de Souza Almeida](https://github.com/flaviohenriquealmeida)**

# How to run this project
This project was created using Bootstrap, Node.js version v10.21.0 and TypeScript version 4.2.2. The local server was created using Express.js version 4.17.1.

After cloning/downloading the code, type in the terminal the following command to install all necessary dependencies:

`npm install`

TypeScript is already listed in `package.json` file and should be installed with all the other libraries during `npm install`. If it somehow doesn't work, install it using the following command:

`npm install typescript@4.2.2 --save-dev`

In order to run the project and keep watching for changes in the TypeScript files (compiling them whenever a change has been made), you can type in the terminal the following command:

`npm start`

The application will open in the browser and will use port 3000 (http://localhost:3000/dist/index.html).

Next, you need to install the server, which will run locally to handle requests and send a JSON response to the application. Open a new terminal, navigate to the directory `/servidor-api` and run the following commands:

```
npm install

npm start
```

The server will use port 8080 to run.

# What I've learned

TypeScript has a compiler that creates JavaScript files (which I'll call JS files) from TypeScript files (which I'll call TS files), so we only code in TypeScript and let the compiler handle all the necessary steps to generate appropriated JavaScript codes to run in the application.

During the development of this project, I've learned several concepts regarding TypeScript and its features:

- how to configure TypeScript by modifying `tsconfig.json` file. In this file, we indicate to the compiler where the TS files are and where the JS files should be created. We can also add many settings to the compiler, like which version of ECMASCRIPT should be used when generating the JS files, or if implicit `any` type should be accepted;

- how to actually compile TS files, by running the command `tsc <someTSfile.ts>`;

- how to keep watching for TS file changes and automatically compile to JS files, by adding a script to the `package.json` file;

- how to add types to variables and functions and how TypeScript helps us not to commit mistakes while handling these variables and methods, by reporting us errors during compile time;

- the `any` type, which indicates that the type value can be literally anything;

- how to use Generics to apply a `Type` to a function, which is better than using `any`;

- keywords `private` and `readonly` to be added to variables in order to prevent them from being accessed or modified;

- how to apply Inheritance concepts in TypeScript;

- the `enum`, which works like a set of constants;

- Decorators, which can be added to classes, methods and variables, in order to insert additional code to them. This can be used to observe, log information, or even modify the behavior of classes, methods and variables.

---

## Detalhes do projeto

Este é um projeto simples, desenvolvido para aprender TypeScript. O TypeScript pode ser visto como um "superset" do JavaScript, dando à linguagem a possibilidade de tipar variáveis, funções, etc.

Nesta aplicação, a pessoa pode adicionar e listar pedidos de compra de ações (ações no caso são referentes à bolsa de valores). Temos uma página com um formulário para se preencher dados da compra: data, símbolo da ação (código que a identifica na bolsa de valores), quantidade de ações e preço individual. Esta página também mostra uma tabela listando todos os pedidos de compra inseridos e também o valor total por pedido (quantidade * preço individual). Há também um botão para importar pedidos de compra vindos de uma API (que no caso é um servidor rodando localmente, criado com o Express.js).

Você pode visitar uma demo da página (em inglês) [clicando aqui](https://zingarelli.github.io/alura-broker/app/dist/index.html). Nesta demo é possível adicionar pedidos de compra e visualizá-los, mas não será possível importar dados da API, já que o servidor roda localmente. Caso queira testar o projeto por completo, por favor, faça o download dele no GitHub e prossiga com os passos para instalação (veja a seção ["Como rodar este projeto"](#como-rodar-este-projeto) para mais informação).

A página está em inglês, mas o código e os comentários estão em português.

### GIF importando dados da API

![gif mostrando dados sendo importados da API ao clicar no botão de importação"](https://user-images.githubusercontent.com/19349339/209138236-32286682-fdd0-4392-b42f-a1310c791de3.gif)

### Gif adicionando um novo pedido de compra

![gif mostrando um novo pedido de compra sendo adicionado à lista](https://user-images.githubusercontent.com/19349339/209138231-b16fb017-60e8-406f-8d87-bc555da1acf1.gif)

## Créditos

Este projeto foi desenvolvido nos cursos da Formação TypeScript da [Alura](https://www.alura.com.br).

**Instrutor**: [Flavio Henrique de Souza Almeida](https://github.com/flaviohenriquealmeida).

# Como rodar este projeto

O projeto foi criado com o Bootstrap, o Node.js versão v10.21.0 e o TypeScript versão 4.2.2. O servidor rodando localmente foi criado com o Express.js versão 4.17.1.

Após baixar ou clonar o código no GitHub, digite no terminal o seguinte comando para instalar todas as dependências necessárias:

    npm install

O TypeScript já está listado no arquivo `package.json` e irá ser instalado com todas as outras bibliotecas durante o `npm install`. Caso isso não funcione, você pode instalar o TypeScript manualmente com o seguinte comando:

    npm install typescript@4.2.2 --save-dev

É possível rodar o projeto e ao mesmo tempo ficar monitorando mudanças nos arquivos TypeScript (compilando estes arquivos a cada mudança salva). Para isso, digite no terminal o seguinte comando:

    npm start

A aplicação irá abrir no navegador e utilizar a porta 3000 (http://localhost:3000/dist/index.html).

A seguir, é necessário fazer a instalação do servidor, que irá rodar localmente para lidar com requisições e enviar uma resposta em JSON para a aplicação. Abra um novo terminal, navegue até a pasta `/servidor-api` e rode os comandos abaixo:

    npm install
    npm start

O servidor irá utilizar a porta 8080.

# O que eu aprendi

O TypeScript (TS) possui um compilador que cria arquivos JavaScript (JS) a partir do código TS. Dessa maneira, nós fazemos nosso código em TS e deixamos ao compilador a tarefa de seguir todos os passos necessários para gerar um código JS apropriado para rodar a aplicação. 

Durante o desenvolvimento deste projeto, eu aprendi diversos conceitos relacionados ao TS e suas funcionalidades:

- como alterar as configurações do TS ao modificar o arquivo `tsconfig.json`. Neste arquivo, nós indicamos ao compilador onde ficarão os arquivos TS e onde os arquivos JS devem ser criados. Nós também podemos adicionar várias outras configurações ao compilador, como a versão que deve ser utilizada do ECMASCRIPT para gerar os arquivos JS, ou se o tipo implícito `any` pode ser aceito nos arquivos TS;

- como de fato compilar arquivos TS, rodando o comando `tsc <algumArquivoTS.ts>`;

- como monitorar mudanças nos arquivos TS e automaticamente compilar para arquivos JS, adicionando um script para esta tarefa no arquivo `package.json`;

- como adicionar tipos ("tipar") variáveis e funções e como o TS nos ajuda a não cometer erros durante o uso de tais variáveis e chamadas de função (o TS nos reporta os erros em tempo de *compilação*);

- introdução ao tipo `any` ("qualquer" em inglês), que indica que o tipo do valor associado a uma variável ou retornado por uma função pode ser, literamente, qualquer coisa;

- como usar "Generics" para aplicar um "Type" a uma função, que é uma abordagem melhor do que utilizar o `any`;

- introdução às palavras-chave `private` (privado) e `readonly` (somente leitura), que podem ser adicionadas à declaração de variáveis, de modo a impedir que elas sejam acessadas (fora do código em que foram implementadas) ou modificadas;

- como o TS aplica conceitos de Herança;

- introdução ao `enum`, que funciona como um conjunto (set) de constantes;

- introdução a "Decorators", os quais podem ser adicionados a classes, métodos e variáveis, para que seja possível inserir código adicional nelas. Isso pode ser utilizado para observar e logar informação, ou até modificar o comportamento dessas classes, métodos e variáveis. Seria uma forma de "injeção" de código.