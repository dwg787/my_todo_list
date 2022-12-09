import React, { useState } from 'react';
import './App.css';
import CustomButton from './components/CustomButton';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import CreateNewTodo from './components/InputSection/InputSection';

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
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updateTodo);
  };
  // console.log(todo)
  const todoDone = todo.filter((todo) => todo.isDone);
  const todoWorking = todo.filter((todo) => !todo.isDone);

  return (
    <Layout>
      <Header />
      <CreateNewTodo
        setTitle={setTitle}
        setContent={setContent}
        onChangeHandler={onChangeHandler}
      />
      <CustomButton color='green' onClick={addTodoHandler}>
        추가하기
      </CustomButton>
      <TodoList
        todoWorking={todoWorking}
        todoDone={todoDone}
        onChangeHandler={onChangeHandler}
        deleteTodoHandler={deleteTodoHandler}
      ></TodoList>
    </Layout>
  );
};

export default App;
