import './Style.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/modules/todoManager';

function AskDeleteModal({ setDelModalOpen, targetId }) {
  const dispatch = useDispatch();
  const closeDelModal = () => {
    setDelModalOpen(false);
  };

  const deleteTodoHandler = (event) => {
    event.preventDefault();
    dispatch(deleteTodo(targetId));
  };

  return (
    <div className='modal-container'>
      <p>정말 삭제하시겠습니까?</p>
      <div className='button-wrapper'>
        <button className='modal-close1' onClick={deleteTodoHandler}>
          네
        </button>
        <button className='modal-close2' onClick={closeDelModal}>
          아니오
        </button>
      </div>
    </div>
  );
}
export default AskDeleteModal;
