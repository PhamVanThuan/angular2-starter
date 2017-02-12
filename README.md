# angular2-starter
Angular 2 starter kit

A simple Angular 2 starter project based on NPM, Typescript, Webpack.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).
* Run `npm run build` to bundle everything into the `dist` folder for deployment.
* Run `npm run build:prod` to do the same as above but enabling optimisations for production.

#Features
* Typescript
* Webpack
* Sass
* Live load

# Done
* Compiled sass, ts
* Created bundle file using Webpack
* live-reload

# ToDos
* Integrate Bootstrap, angular libraries...
* Separate project to multiple app
* Create Contact App

# Project structure
```bash
.
├── 01.Documents
├── 02.SourceCode
│   ├── package.json
│   ├── src
│   │   ├── app
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.ts
│   │   │   └── app.module.ts
│   │   ├── index.html
│   │   └── main.ts
│   ├── tsconfig.json
│   ├── typings.json
│   └── webpack.config.js
└── README.md
```bash