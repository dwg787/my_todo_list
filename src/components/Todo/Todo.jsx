// import CustomButton from '../CustomButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Style.css';
import {
  // deleteTodo,
  updateTodo,
  toggleStatusTodo,
} from '../../redux/modules/todoManager';
import EditModalBasic from '../Modal/EditModalBasic';
import CustomButton from '../Buttons/CustomButton';
import AskDeleteModal from '../Modal/AskDeleteModal';

function Todo(props) {
  const dispatch = useDispatch();
  const [appendElement, setAppendElement] = useState(false);
  const [title, setTitle] = useState(props.todo.title);
  const [content, setContent] = useState(props.todo.content);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [delModalOpen, setDelModalOpen] = useState(false);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  // const deleteTodoHandler = (event) => {
  //   event.preventDefault();
  //   dispatch(deleteTodo(props.todo.id));
  // };

  const updateTodoHandler = (event) => {
    event.preventDefault();
    props.todo.title = title;
    props.todo.content = content;
    if (title.length !== 0 && content.length !== 0) {
      setAppendElement(!appendElement);
      dispatch(updateTodo(props.todo));
    } else {
      setEditModalOpen(true);
    }
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

      {/* 수정 구현부 */}
      {appendElement ? (
        <form id='editInput' onSubmit={updateTodoHandler}>
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
          <button form='editInput' onClick={updateTodoHandler}>
            수정완료
          </button>
          {editModalOpen && (
            <div className='modal-background'>
              <EditModalBasic setEditModalOpen={setEditModalOpen} />
            </div>
          )}
        </form>
      ) : (
        <div>
          <div className='card-title'>{props.todo.title}</div>
          <p>{props.todo.content}</p>
        </div>
      )}

      <div className='button-layout'>
        <button
          onClick={() => {
            if (title && content) {
              setAppendElement(!appendElement);
            } else {
              setEditModalOpen(true);
            }
          }}
        >
          {appendElement ? '수정취소' : '수정'}
        </button>

        {/* 진행 상태 변경부 */}
        {!appendElement && (
          <CustomButton onClick={toggleTodoHandler}>
            {props.todo.isDone ? '취소' : '완료'}
          </CustomButton>
        )}

        {/* 삭제 구현부 */}
        {/* <button onClick={deleteTodoHandler}>삭제</button> */}
        <button
          onClick={() => {
            setDelModalOpen(!delModalOpen);
          }}
        >
          삭제
        </button>
        {delModalOpen && (
          <div className='modal-background'>
            <AskDeleteModal
              setDelModalOpen={setDelModalOpen}
              targetId={props.todo.id}
            ></AskDeleteModal>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
