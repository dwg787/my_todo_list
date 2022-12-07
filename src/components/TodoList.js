import Todo from './Todo';

function RenderTodoList(props) {
  return (
    <div className="todo-container">
      <div className="todo-working">
        Working
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
      <div className="todo-done">
        Done
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
