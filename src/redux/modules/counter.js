// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = 'ADD_NUMBER';
const MINUS_NUMBER = 'MINUS_NUMBER';

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload, //es6에서는 key와 value가 같으면 줄여서 payload로 작성할 수 있다.
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload, //es6에서는 key와 value가 같으면 줄여서 payload로 작성할 수 있다.
  };
};
// Initial State
const initialState = {
  number: 0,
};
// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};

//export default reducer
export default counter;
