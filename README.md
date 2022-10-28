# Alura Broker | Learning TypeScript

A simple page to insert and list stock orders.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Alura Broker**
| :label: Tecnologias | typescript
| :rocket: URL         | Install and run locally
| :fire: Desafio     | https://www.alura.com.br/formacao-typescript


![](https://user-images.githubusercontent.com/19349339/198724899-1d94a153-2998-47bf-b7cc-a386c61711e7.png#vitrinedev)

## Project Details

This is a simple project developed in order to learn TypeScript, which can be seen a superset of JavaScript, implementing the hability of adding types to variables, functions, etc. 

In this project we have a page with a form to fill in information regarding a stock order: date, amount and price per stock. This page also lists all stock orders created and has a button to import stock orders from an API.

The page is in English, but the code and comments are in Portuguese.

## Credits

This project was developed in the TypeScript courses from [Alura](https://www.alura.com.br).

**Instructor**: 
- **[Flavio Henrique de Souza Almeida](https://github.com/flaviohenriquealmeida)**

# How to run this project
This project was created using Bootstrap, Node.js version v10.21.0 and TypeScript version 4.2.2.

After cloning it, type in the terminal the following command to install all necessary dependencies:

`npm install`

TypeScript is already listed in `package.json` file. If it somehow doesn't work, install it using the following command:

`npm install typescript@4.2.2 --save-dev`

In order to run the project and keep watching for changes in the files (compiling them whenever a change has been made), you can type in the terminal the following command:

`npm start`

The application will open in the browser and will use port 3000 (http://localhost:3000/dist/index.html)

In order to import stock orders from an API, you need to run the server locally. Open a new terminal, navigate to the directory `/servidor-api` and run the following commands:

```
npm install

npm start
```

The server will use port 8080 to run.

## What I've learned

During the development of this project, I've learned several concepts regarding TypeScript and its features.

Continue...