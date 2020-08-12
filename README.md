# Boilerplate Node.js

A boilerplate with Node.js 12, Typescript, Babel, Jest, Stryker, ESLint, Dotenv...

&nbsp;
### Setup Instructions

##### Requirements
- Node.js v12 LTS

&nbsp;
##### Instaling Node.js

You can get it from the [official website](https://nodejs.org/en/), or using [Node Version Manager](https://github.com/nvm-sh/nvm) (recommended).


&nbsp;
##### Getting dependencies

Run the command line below at the root of the project

```bash
$ npm install
```

&nbsp;
##### Configuration

The configuration is made through environment variables.
[Dotenv](https://www.npmjs.com/package/dotenv) is used for managing those variables, which are loaded from the `.env` at the root of the project.

Example:
You can add a variable in your `.env` file:
> BASE_URL=value

And access it in your code using [process env](https://nodejs.org/api/process.html#process_process_env):
```typescript
const baseUrl = process.env.BASE_URL; 
```


&nbsp;
### Running the app
```bash
$ npm start
```

&nbsp;
### Running tests
```bash
$ npm test
```

By running the tests, a report with coverage information is generated and can be found at:
> reports/coverage/index.html


&nbsp;
### Running mutation tests
```bash
$ npm run test:mutation
```

The mutation tests also generate a report. You can check it in the folder:
> reports/mutation/html/index.html

&nbsp;
### Building the app
```bash
$ npm run build
```
The output is located at `dist` folder
