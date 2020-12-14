import React, {Component} from 'react';

export default class TodoListItem extends Component {

/*  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
    this.onLabelClick = () => {
      this.setState(({done}) => {
        return {
          done: !done
        }
      });
    };
    this.onImportnant = () => {
      this.setState(({important}) => {
        return {
          important: !important
        }
      });
    };
  }*/

  render() {

    const { label, onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props;

    let className = 'todo-list-item';
    if (done) {
      className += ' done';
    };

    if (important) {
      className += ' important';
    }

    return (
        <div>
          <span
              className={className}
              onClick={onToggleDone}
          >
           {label}
          </span>
          <div className="btn-list">
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={ onDeleted }
            >Удалить</button>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onToggleImportant}
            >Важное
            </button>
          </div>
        </div>
    );
  };
};
