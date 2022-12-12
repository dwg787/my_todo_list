import './style.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todoManager';

function CreateNewTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(), //todo.length + 1를 대신하는 방법
      title: title,
      content: content,
      isDone: false,
    };
    if (newTodo.title.length !== 0 && newTodo.content.length !== 0) {
      dispatch(addTodo(newTodo));
    } else {
      alert('글제목과 내용을 입력하세요!');
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div className='input-section'>
        <label htmlFor='title-input'>제목</label>
        <input
          id='title-input'
          value={title}
          placeholder='제목을 입력해주세요'
          onChange={handleTitleChange}
        />
        <label htmlFor='content-input'>내용</label>
        <input
          id='content-input'
          value={content}
          placeholder='내용을 입력해주세요'
          onChange={handleContentChange}
        />
        <button>추가하기</button>
      </div>
    </form>
  );
}

export default CreateNewTodo;
