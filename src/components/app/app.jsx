import React, {Component} from 'react';
import './style.scss';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../seacrh-panel/seacrh-panel";
import TodoList from "../todo-list/todo-list";

export default class App extends Component{
    state = {
        todoData: [
            { label: 'Drink Coffee!!!', important: false, id:1 },
            { label: '5 000.00 $ !!!!', important: true, id:2 },
            { label: 'Go to Home', important: false, id:3 },
            { label: 'Go to Learn!', important: false, id:4 }
        ]
    };

    deleteItem = (id) => {
      this.setState(({todoData}) => {
          const idx = todoData.findIndex((el) => el.id === id);
          const newArray = [
              ...todoData.slice(0, idx),
              ...todoData.slice(idx +1)
              ]
          return {
              todoData: newArray
          };
      });
    };

    render() {
        return (
            <div className="container">
                <AppHeader />
                <SearchPanel />
                <TodoList
                    todos={ this.state.todoData }
                    onDeleted = { this.deleteItem }
                />
            </div>
        );
    };
};
