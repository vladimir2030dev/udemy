import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/seacrh-panel";
import TodoList from "./components/todo-list";

const App = () => {

  const todoData = [
    { label: 'Drink Coffee!!!', important: false, id:1 },
    { label: '5 000.00 $ !!!!', important: true, id:2 },
    { label: 'Go to Home', important: false, id:3 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData } />
    </div>
  );
};

ReactDOM.render(<App/>,
  document.getElementById('root'));
