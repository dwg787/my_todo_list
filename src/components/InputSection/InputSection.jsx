import './Style.css';

function CreateNewTodo(props) {
  //   console.log('Todo 생성: ', props);
  return (
    <>
      <div className='input-section'>
        <label htmlFor='title-input'>제목</label>
        <input
          id='title-input'
          value={props.title}
          placeholder='제목을 입력해주세요'
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <label htmlFor='content-input'>내용</label>
        <input
          id='content-input'
          value={props.content}
          placeholder='내용을 입력해주세요'
          onChange={(e) => props.setContent(e.target.value)}
        />
      </div>
    </>
  );
}

export default CreateNewTodo;
