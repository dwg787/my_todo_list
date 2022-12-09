import CustomButton from '../CustomButton';
import './Style.css';

function Todo(props) {
  console.log('todo 컴포넌트 실행', props.todo.title);
  return (
    <div className='square-style'>
      <a href={props.todo.id}>
        <div>상세보기</div>
      </a>
      <div className='card-title'>{props.todo.title}</div>
      <p>{props.todo.content}</p>
      <CustomButton
        color='red'
        onClick={() => {
          // console.log('CustomButton 컴포넌트 실행', props);
          props.deleteTodoHandler(props.todo.id);
        }}
      >
        삭제하기
      </CustomButton>
      <CustomButton onClick={() => props.onChangeHandler(props.todo.id)}>
        {props.todo.isDone ? '취소' : '완료'}
      </CustomButton>
    </div>
  );
}

export default Todo;
