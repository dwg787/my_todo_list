// src/pages/Work.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';
// import { viewTodo } from '../redux/modules/todoManager';

function ViewTodoDetail() {
  const param = useParams();
  const todoState = useSelector((state) => state.todoManager);
  const viewDetail = todoState.todo.find((todo) => todo.id === param.id);
  const navigate = useNavigate();

  console.log('viewDetail값: ', viewDetail);
  return (
    <div className='todo-detail'>
      <div className='detail-container'>
        <div className='container-top'>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Home으로 이동
          </button>
        </div>
        <h2>{viewDetail.title}</h2>
        <p>{viewDetail.content}</p>
      </div>
    </div>
  );
}

export default ViewTodoDetail;
