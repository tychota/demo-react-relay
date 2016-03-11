import Todo from './Todo';
import React from 'react';

class TodoList extends React.Component {
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
    _gereMarquerTout = (e) => {
        const complete = e.target.checked;
        console.log("Marque tous les Todos")
    };
    renderTodos = () => {
        return this.props.viewer.todos.edges.map(edge =>
            <Todo
                key={edge.node.id}
                todo={edge.node}
                viewer={this.props.viewer}
            />
        );
    };
    render() {
        const numTodos = this.props.viewer.totalCount;
        const numCompletedTodos = this.props.viewer.completedCount;
        return (
            <section className="main">
                <input
                    checked={numTodos === numCompletedTodos}
                    className="toggle-all"
                    onChange={this._gereMarquerTout}
                    type="checkbox"
                />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>
                <ul className="todo-list">
                    {this.renderTodos()}
                </ul>
            </section>
        );
    }
}

export default TodoList;
