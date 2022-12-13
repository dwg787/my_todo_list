import './Style.css';
// import { useEffect, useRef } from 'react';

function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='modal-container'>
      <p>제목과 내용을 입력하세요!</p>
      <button className='modal-close' onClick={closeModal}>
        확 인
      </button>
    </div>
  );
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  /* const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    // 모달창을 useRef로 잡아준다.
    <div ref={modalRef} className='modal-container'>
      <button className='modal-close' onClick={closeModal}>
        X
      </button>
      <p>글제목과 내용을 입력하세요!</p>
    </div>
  ); */
}
export default ModalBasic;
