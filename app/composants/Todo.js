import React from 'react';
import classnames from 'classnames';

import TodoTextInput from './TodoTextInput';

class Todo extends React.Component {
    state = {
        editionEnCours: false,
    };
    static defaultProps = {
        todo: {
            complete: false,
            text: "Essayer de faire une App"
        }
    };
    static propsTypes = {
        code: React.PropTypes.object
    };
    _gereChangementCheckbox = (e)  =>{
        const complete = e.target.checked;
        console.log("Changement Checkbox")
    };
    _gereClickSupression = ()  =>{
        this._supressionTodo();
    };
    _gereDoubleClickLabel = ()  => {
        this._definirEdition(true);
    };
    _gereAnnulationEditionInput = () => {
        this._definirEdition(false);
    };
    _gereSupressionEditionInput = () => {
        this._definirEdition(false);
        this._supressionTodo();
    };
    _gereSauvegardeEditionInput = (text) => {
        this._definirEdition(false);
        console.log("Modification du Todo envoyée");
    };
    _supressionTodo = ()  =>{
        console.log("Supression du Todo envoyée");
    }
    _definirEdition = (shouldEdit) => {
        this.setState({editionEnCours: shouldEdit});
    };
    renderChampEdition = () => {
        return (
            <TodoTextInput
                className="edit"
                commitOnBlur={true}
                initialValue={this.props.todo.text}
                onCancel={this._gereAnnulationEditionInput}
                onDelete={this._gereSupressionEditionInput}
                onSave={this._gereSauvegardeEditionInput}
            />
        );
    }
    render() {
        return (
            <li className={classnames({completed: this.props.todo.complete,editing: this.state.editionEnCours})}>
                <div className="view">
                    <input
                        checked={this.props.todo.complete}
                        className="toggle"
                        onChange={this._gereChangementCheckbox}
                        type="checkbox"
                    />
                    <label onDoubleClick={this._gereDoubleClickLabel}>
                        {this.props.todo.text}
                    </label>
                    <button className="destroy"onClick={this._gereClickSupression}/>
                </div>
                {this.state.editionEnCours && this.renderChampEdition()}
            </li>
        );
    }
}

export default Todo;
