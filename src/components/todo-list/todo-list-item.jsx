import React, {Component} from 'react';

export default class TodoListItem extends Component {

  constructor() {
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
  }

  render() {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
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
              onClick={this.onLabelClick}
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
                onClick={this.onImportnant}
            >Важное
            </button>
          </div>
        </div>
    );
  };
};
