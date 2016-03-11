Etapes 04 : ajout de webpack
------

Avant de commencer l'explication : 

> Saul: “How’s it going?”

> Me: “Fatigued.”

> Saul: “Family?”

> Me: “No, Javascript.”

(extrait de https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4)

A raison, l'envionnement JS est reputé pour sa complexité. 
50 tools, 300 projets examples/boilerplates ect.

Alors, restez simple. Webpack vous permet beaucoup de trucs (optimisation, ect) mais au début
n'installez que ce dont vous avez besoin. Ca serait ridicule que vous passiez un mois à configurer 
webpack et qu'au final vous perdiez tout interet pour le projet sur lequel vous êtes.

___________________________

On va executer :

```
npm install --save react react-dom
npm install --save-dev webpack webpack-dev-server
```

le première ligne va installer les dépendances utile en production,
la deuxième les outils de developpement.

Et comme on a spécifié de sauver, le fichier `package.json` va se voir ajouter
les lignes :

```
"devDependencies": {
  "webpack": "^1.12.14",
  "webpack-dev-server": "^1.14.1"
},
"dependencies": {
  "react": "^15.0.0-rc.1",
  "react-dom": "^15.0.0-rc.1"
}
```

on va en profiter pour modifier dans le fichier `package.json` 

```
"scripts": {
  "start": "./node_modules/.bin/webpack-dev-server --content-base app",
  "test": "echo \"Pas de test (encore)\" && exit 1"
}
```

On crée ensuite un fichier `webpack.config.js` et on modifie le fichier `./public/html`,
qu'on split en deux : le script react va dans `app/app.js` et le fichier html dans
`app/index.html`.

Et voilà, "Hello World".
