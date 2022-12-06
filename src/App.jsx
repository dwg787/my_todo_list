import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";

const App = () => {
  const [todo, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
    };
    setTodos([...todo, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    const newTodoList = todo.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  return (
    <div>
      <div className="header-design">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form action="">
        <label for="title-input">제목</label>
        <input
          id="title-input"
          value={title}
          placeholder="제목을 입력해주세요"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="content-input">내용</label>
        <input
          id="content-input"
          value={content}
          placeholder="내용을 입력해주세요"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <CustomButton color="green" onClick={addTodoHandler}>
        추가하기
      </CustomButton>
      <div className="app-style">
        {todo.map((todo) => {
          return (
            <Todo
              handleDelete={deleteTodoHandler}
              todo={todo}
              key={todo.id}
            ></Todo>
          );
        })}
      </div>
    </div>
  );
};

export default App;
