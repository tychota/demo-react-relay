import React from 'react';
import ReactDOM from 'react-dom';

const {PropTypes} = React;

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

class TodoTextInput extends React.Component {
    static defaultProps = {
        commitOnBlur: false
    };
    static propTypes = {
        className: PropTypes.string,
        commitOnBlur: PropTypes.bool.isRequired,
        initialValue: PropTypes.string,
        onCancel: PropTypes.func,
        onDelete: PropTypes.func,
        onSave: PropTypes.func.isRequired,
        placeholder: PropTypes.string
    };
    state = {
        isEditing: false,
        text: this.props.initialValue || ''
    };
    componentDidMount() {
        ReactDOM.findDOMNode(this).focus();
    }
    _sauvegardeChangements = () => {
        const newText = this.state.text.trim();
        if (this.props.onDelete && newText === '') {
            this.props.onDelete();
        } else if (this.props.onCancel && newText === this.props.initialValue) {
            this.props.onCancel();
        } else if (newText !== '') {
            this.props.onSave(newText);
            this.setState({text: ''});
        }
    };
    _gerePerteFocus = () => {
        if (this.props.commitOnBlur) {
            this._sauvegardeChangements();
        }
    };
    _gereChangement = (e) => {
        this.setState({text: e.target.value});
    };
    _gereRelachementTouche = (e) => {
        if (this.props.onCancel && e.keyCode === ESC_KEY_CODE) {
            this.props.onCancel();
        } else if (e.keyCode === ENTER_KEY_CODE) {
            this._sauvegardeChangements();
        }
    };
    render() {
        return (
            <input
                className={this.props.className}
                onBlur={this._gerePerteFocus}
                onChange={this._gereChangement}
                onKeyDown={this._gereRelachementTouche}
                placeholder={this.props.placeholder}
                value={this.state.text}
            />
        );
    }
}

export default TodoTextInput;
