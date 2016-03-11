Etapes 05 : babel
------

Jusqu'à maintenant nous avions dévollopé en ES5 plus 
les features ES6 supportés par chrome et node (comme const).

Mais des bouts de code comme :

```jsx
React.createElement('div', { }, "Hello, world.");
```

ou 

```jsx
ReactDOM.render(React.createElement(App), ...
```

sont très verbeux. Et si on pouvais les remplacer par 

```html
<div>Hello, World</div>
```

et 

```jsx
ReactDOM.render(<App/>, ...
```

Cette syntaxe s'appelle JSX, ce n'est pas du javascript pur 
donc il doit être transformé en JS avant execution.
Babel est là pour ça :)

Cependant, idem que webpack, Babel est un monstre on va installer le strict minimum.

------------------------------------------

On execute :

```
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
```

On modifie le fichier de configuration webpack pour que les fichier javascript soient envoyés par Webpack à babel.
On peut enfin écrire nos fichiers en JSX.

Notre composant s'écrit ainsi :

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        Hello, world.
      </div>
    );
  }
};
```
