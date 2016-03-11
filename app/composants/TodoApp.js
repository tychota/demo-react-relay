import TodoListFooter from './TodoListFooter';
import TodoTextInput from './TodoTextInput';

import React from 'react';

class TodoApp extends React.Component {
    static defaultProps = {
        viewer: {
            totalCount: 2,
            completedCount: 1,
            todos: {
                edges: [
                    {
                        node : {
                            id: 1
                        }
                    }
                ]
            }
        }
    };
    _gereSauvegardeInput = (text) => {
        console.log("Ajout d'un Todo")
    };
    render() {
        const hasTodos = this.props.viewer.totalCount > 0;
        return (
            <div>
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <TodoTextInput
                            autoFocus={true}
                            className="new-todo"
                            onSave={this._gereSauvegardeInput}
                            placeholder="Que reste il à faire ?"
                        />
                    </header>
                    {this.props.children}
                    {hasTodos && <TodoListFooter todos={this.props.viewer.todos} viewer={this.props.viewer}/>}
                </section>
                <footer className="info">
                    <p>
                        Double cliquer pour éditer un Todo
                    </p>
                    <p>
                        Crée par la team de
                        <a href="https://facebook.github.io/relay/">
                            Relay
                        </a>

                        Adapté par Tycho Tatitscheff.
                    </p>
                    <p>
                        Fait partie de <a href="http://todomvc.com">TodoMVC</a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default TodoApp;
