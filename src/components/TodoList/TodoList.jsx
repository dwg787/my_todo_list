import React from 'react';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';
import './Style.css';

function RenderTodoList() {
  const todoState = useSelector((state) => state.todoManager);
  return (
    <div className='todo-container'>
      {/* <h2>{todoState.todo.isDone === true ? 'Done' : 'Working'}</h2> */}
      <div>
        <h2>Working</h2>
        <div className='todo-working'>
          {todoState.todo
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return <Todo todo={todo} key={todo.id} />;
            })}
        </div>
      </div>
      <div>
        <h2>Done</h2>
        <div className='todo-done'>
          {todoState.todo
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return <Todo todo={todo} key={todo.id} />;
              // return <Todo />;
            })}
        </div>
      </div>
    </div>
  );
}

export default RenderTodoList;
