import Todo from '../Todo/Todo';

function RenderTodoList(props) {
  return (
    <div className='todo-container'>
      <h2>Working</h2>
      <div className='todo-working'>
        {props.todoWorking.map((todo) => {
          return (
            <Todo
              onChangeHandler={props.onChangeHandler}
              deleteTodoHandler={props.deleteTodoHandler}
              todoDone={props.todoWorking}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </div>
      <h2>Done</h2>
      <div className='todo-done'>
        {props.todoDone.map((todo) => {
          return (
            <Todo
              onChangeHandler={props.onChangeHandler}
              deleteTodoHandler={props.deleteTodoHandler}
              todoDone={props.todoDone}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RenderTodoList;
