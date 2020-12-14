import React from 'react';

const AppHeader = (props) => {
  return (
    <div className="row align-items-center">
      <h1
        className="mr-5"
      >
        План работ
      </h1>
      <p className="tasker-item">
        Задачи: <span> { props.toDo } </span>
      </p>
      <p className="tasker-item tasker-item-done">
        Завершено: <span> { props.toDone } </span>
      </p>
      <p className="tasker-item">
        Важные: <span> {props.sumImportant} </span>
      </p>
    </div>
  );
};

export default AppHeader;
