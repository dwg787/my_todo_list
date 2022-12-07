import React, { useState } from 'react';
import './App.css';
import CustomButton from './components/CustomButton';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Layout from './components/Layout';

const App = () => {
  const [todo, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addTodoHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setTodos([...todo, newTodo]);

    setTitle('');
    setContent('');
  };
  const deleteTodoHandler = (id) => {
    const newTodoList = todo.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const onChangeHandler = (id) => {
    const updateTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(updateTodo);
  };
  // console.log(todo)
  const todoDone = todo.filter((todo) => todo.isDone);
  const todoWorking = todo.filter((todo) => !todo.isDone);

  return (
    <Layout>
      {/* <Header/> */}
      <div className="input-section">
        <div>
          <label htmlFor="title-input">제목</label>
          <input
            id="title-input"
            value={title}
            placeholder="제목을 입력해주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content-input">내용</label>
          <input
            id="content-input"
            value={content}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <CustomButton color="green" onClick={addTodoHandler}>
          추가하기
        </CustomButton>
      </div>
      <TodoList
        todoWorking={todoWorking}
        todoDone={todoDone}
        onChangeHandler={onChangeHandler}
        deleteTodoHandler={deleteTodoHandler}
      ></TodoList>
    </Layout>
  );

  // if(isDone){
  // }else{
  //   <div className="todo-done">Done</div>
  // }
};

export default App;
