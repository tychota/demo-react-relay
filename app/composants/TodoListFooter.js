import {IndexLink, Link} from 'react-router';

import React from 'react';

class TodoListFooter extends React.Component {
    _gereClickSupressionTodosTermine = () => {
        console.log("Supprime tous les Todos Termine")
    };
    render() {
        const numCompletedTodos = this.props.viewer.completedCount;
        const numRemainingTodos = this.props.viewer.totalCount - numCompletedTodos;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>Il reste {numRemainingTodos}</strong> Todo{numRemainingTodos === 1 ? '' : 's'}
                </span>
                <ul className="filters">
                    <li>
                        <IndexLink to="/" activeClassName="selected">Tout</IndexLink>
                    </li>
                    <li>
                        <Link to="/active" activeClassName="selected">Actif</Link>
                    </li>
                    <li>
                        <Link to="/completed" activeClassName="selected">Terminé</Link>
                    </li>
                </ul>
                {numCompletedTodos > 0 &&
                    <button
                        className="clear-completed"
                        onClick={this._gereClickSupressionTodosTermine}>
                        Clear completed
                    </button>
                }
            </footer>
        );
    }
}

export default TodoListFooter;
