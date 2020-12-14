import React, {Component} from 'react';

export default class AddItem extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return(
      <div className="mt-3">
        {this.state.label}
        <form
          className="d-flex item-add-form"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            className="form-control mr-2"
            onChange={this.onLabelChange}
            placeholder="Введите задачу"
            value={this.state.label}
          />
          <button
            className="btn btn-primary"
          >
            Добавить
          </button>
        </form>
      </div>
    )
  };
};
