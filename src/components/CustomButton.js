function CustomButton(props){
    const {color, onClick, children} = props
    if(color){
      return <button
        style={{backgroundColor:color, color:"black", borderRadius:"3px"}}
        onClick={onClick}>{children}</button>
    }
    return <button style={{backgroundColor:"white", border:"2px solid red"}}onClick={onClick}>{children}</button>
  }

export default CustomButton  