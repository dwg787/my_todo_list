function Layout(props){
    // console.log("Layout 컴포넌트 들어옴: ", props.children)
    return (
        <div className="todolist-layout">{props.children}</div>
    )
}

export default Layout