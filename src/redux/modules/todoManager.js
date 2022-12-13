// src/redux/modules/counter.js
// Action Value
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_STATUS_TODO = 'TOGGLE_STATUS_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const VIEW_TODO_DETAIL = 'VIEW_TODO_DETAIL';
// const SHOW_MODAL = "SHOW_MODAL"

// Action Creator
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo, //es6에서는 key와 value가 같으면 줄여서 payload로 작성할 수 있다.
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  // console.log('updateTodo 페이로드:', payload);
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const viewTodo = (payload) => {
  return {
    type: VIEW_TODO_DETAIL,
    payload,
  };
};

// export const showModal = (payload) => {
//   return {
//     type: SHOW_MODAL,
//     payload,
//   };
// }

// Initial State
const initialState = {
  todo: [],
  id: 0,
  title: '',
  content: '',
  isDone: false,
};

// Reducer
const todoManager = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    }
    case DELETE_TODO: {
      const newTodoList = state.todo.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todo: newTodoList,
      };
    }
    case TOGGLE_STATUS_TODO: {
      const toggleTodo = state.todo.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      return {
        ...state,
        todo: toggleTodo,
      };
    }

    case UPDATE_TODO: {
      const updateTitleNContent = state.todo.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              content: action.payload.content,
            }
          : todo
      );
      return {
        ...state,
        todo: updateTitleNContent,
      };
    }

    case VIEW_TODO_DETAIL: {
      const viewTodoDetail = state.todo.filter(
        (todo) => todo.id === action.payload
      );
      return {
        todo: viewTodoDetail,
      };
    }

    // case SHOW_MODAL:{
    //   return {

    //   };
    // }

    default:
      return state;
  }
};

//export default reducer
export default todoManager;
