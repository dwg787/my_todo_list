// import CustomButton from '../CustomButton';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Style.css';
import {
  deleteTodo,
  updateTodo,
  toggleStatusTodo,
} from '../../redux/modules/todoManager';

function Todo(props) {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todoManager);
  const [appendElement, setAppendElement] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const deleteTodoHandler = (event) => {
    event.preventDefault();
    dispatch(deleteTodo(props.todo.id));
  };

  const updateTodoHandler = (event) => {
    event.preventDefault();
    props.todo.title = title;
    props.todo.content = content;
    dispatch(updateTodo(props.todo));
    setAppendElement(!appendElement);
  };

  const toggleTodoHandler = (event) => {
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
      {appendElement ? (
        <form onSubmit={updateTodoHandler}>
          <input
            id='title-input2'
            value={title}
            placeholder='제목을 입력해주세요'
            onChange={changeTitle}
          />
          <input
            id='content-input2'
            value={content}
            placeholder='내용을 입력해주세요'
            onChange={changeContent}
          />
          <button>수정완료</button>
        </form>
      ) : (
        <>
          <div className='card-title'>{props.todo.title}</div>
          <p>{props.todo.content}</p>
        </>
      )}

      <div className='button-layout'>
        <button onClick={deleteTodoHandler}>삭제</button>
        <button
          onClick={() => {
            setAppendElement(!appendElement);
          }}
        >
          수정
        </button>
        <button onClick={toggleTodoHandler}>
          {props.todo.isDone ? '취소' : '완료'}
        </button>
      </div>
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
