import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addNumber, minusNumber } from './redux/modules/counter';

import './App.css';
import Router from './Router';

const App = () => {
  // const globalNumber = useSelector((state) => state.counter.number);
  // const dispatch = useDispatch();

  /* const onChangeHandler = (event) => {
    const { value } = event.target; //값이 문자열로 설정돼있는데 이것을
    setNumber(+value); // +를 붙여서 숫자로 형변환
  };
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  }; */
  // console.log(todo)

  return <Router />;
};

export default App;
