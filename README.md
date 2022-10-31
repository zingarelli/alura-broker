# Alura Broker | Learning TypeScript

A simple page to insert and list stock orders.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Alura Broker**
| :label: Tecnologias | typescript
| :rocket: URL         | https://zingarelli.github.io/alura-broker/app/dist/index.html
| :fire: Desafio     | https://www.alura.com.br/formacao-typescript


![](https://user-images.githubusercontent.com/19349339/198724899-1d94a153-2998-47bf-b7cc-a386c61711e7.png#vitrinedev)

## Project Details

This is a simple project developed in order to learn TypeScript, which can be seen a superset of JavaScript, implementing the hability of adding types to variables, functions, etc. 

In this project we have a page with a form to fill in information regarding a stock order: date, stock symbol, amount and price per stock. This page also shows a table with all stock orders created and a total per order (amount * price). There's also a button to import stock orders from an API, which is a server running locally, created using Express.js.

You can view the page online by [clicking here](https://zingarelli.github.io/alura-broker/app/dist/index.html). Please notice that you'll be able to add stock orders and view them, but won't be able to import orders from API, since the server runs locally. In order to fully test this project, please download and install it (see section ["How to run this project"](#how-to-run-this-project) for more information).

The page is in English, but the code and comments are in Portuguese.

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

- Decorators, which can be added to classes, methods and variables, in order to insert additional code to them. This can be used to observe, log information, o even modify the behavior of classes, methods and variables.