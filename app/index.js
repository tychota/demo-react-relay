
import 'todomvc-common';

import {createHashHistory} from 'history';
import {IndexRoute, Route, Router} from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';


import TodoApp from './composants/TodoApp';
import TodoList from './composants/TodoList';

ReactDOM.render(
    <Router history={createHashHistory({queryKey: false})}>
        <Route path="/" component={TodoApp}>
            <IndexRoute
                component={TodoList}
                prepareParams={() => ({status: 'any'})}
            />
            <Route path=":status" component={TodoList}/>
        </Route>
    </Router>,
    document.getElementById('example')
);