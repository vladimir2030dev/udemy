import React, {Component} from 'react';
import './style.scss';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../seacrh-panel/seacrh-panel";
import TodoList from "../todo-list/todo-list";
import AddItem from "../add-item";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Cofee'),
      this.createTodoItem('5.000 $'),
      this.createTodoItem('444'),
      this.createTodoItem('555')
    ],
    term: ''
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newArr
      };
    });
  };

  toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem,
      [propName]: !oldItem[propName] };
   return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData:  this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData:  this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onSearchChange = (term) => {
    this.setState( {term} );
  };

  search(items, term) {

    if (term.length ===0) {
      return items;
    };

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  render() {

    const { todoData,  term } = this.state;
    const visibleItem = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    const importantCount = todoData.filter((el) => el.important).length;

    return (
      <div className="container">
        <AppHeader
          toDo = {todoCount}
          toDone = {doneCount}
          sumImportant = { importantCount }
        />
        <SearchPanel
            onSearchChange = {this.onSearchChange}
        />
        <TodoList
          todos = {todoData}
          onDeleted = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
        />
        <AddItem
          onItemAdded = {this.addItem}
        />
      </div>
    );
  };
};
