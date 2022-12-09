import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addNumber, minusNumber } from './redux/modules/counter';

import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import CreateNewTodo from './components/InputSection/InputSection';
import CustomButton from './components/CustomButton';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
// import Router from './Router';

const App = () => {
  const [todo, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

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

  /* const onChangeHandler = (event) => {
    const { value } = event.target; //값이 문자열로 설정돼있는데 이것을
    setNumber(+value); // +를 붙여서 숫자로 형변환
  };
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  }; */
  // console.log(todo)
  const todoDone = todo.filter((todo) => todo.isDone);
  const todoWorking = todo.filter((todo) => !todo.isDone);

  return (
    <Layout>
      {/* <Router /> */}
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
      <Footer />
    </Layout>
  );
};

export default App;
