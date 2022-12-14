function CustomButton(props) {
  const { onClick, children } = props;
  // console.log('커스텀버튼의 props.children 값:', children);
  if (children === '취소') {
    return (
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
          borderRadius: '10px',
          border: 'none',
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      style={{
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid green',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
