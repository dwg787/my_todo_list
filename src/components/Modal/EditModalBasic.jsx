import './Style.css';
// import { useEffect, useRef } from 'react';

function EditModalBasic({ setEditModalOpen }) {
  // 모달 끄기
  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div className='modal-container'>
      <p>제목과 내용을 입력하세요!</p>
      <button className='modal-close' onClick={closeEditModal}>
        확 인
      </button>
    </div>
  );
}
export default EditModalBasic;
