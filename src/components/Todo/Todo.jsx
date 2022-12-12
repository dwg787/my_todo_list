// import CustomButton from '../CustomButton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import { toggleStatusTodo, deleteTodo } from '../../redux/modules/todoManager';

function Todo(props) {
  // console.log('todolist에서 던져준 props:', props);
  const dispatch = useDispatch();

  const deleteTodoHandler = (event) => {
    event.preventDefault();
    dispatch(deleteTodo(props.todo.id));
  };

  const changeTodoHandler = (event) => {
    event.preventDefault();
    dispatch(toggleStatusTodo(props.todo.id));
  };

  return (
    <div className='square-style'>
      <div key={props.todo.id}>
        <Link to={`/${props.todo.id}`}>
          <span style={{ cursor: 'pointer' }}>상세보기</span>
        </Link>
      </div>
      <div className='card-title'>{props.todo.title}</div>
      <p>{props.todo.content}</p>
      <button onClick={deleteTodoHandler}>삭제</button>
      <button onClick={changeTodoHandler}>
        {props.todo.isDone ? '취소' : '완료'}
      </button>
      {/* <CustomButton
        color='red'
        onClick={dispatch(deleteTodo(todoState.todo.id))}
      >
        삭제하기
      </CustomButton> */}
      {/* <CustomButton onClick={dispatch(changeTodo(todoState.todo.id))}>
        {todoState.todo.isDone ? '취소' : '완료'}
      </CustomButton> */}
    </div>
  );
}

export default Todo;
