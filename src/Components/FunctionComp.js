function FunctionComp(props){

    //destructuring props
    const{myName,post}=props;
    return (<div>
        <h2>This is function component</h2>
        {/* <p>My name is:<strong>{props.myName}</strong></p>
        <p>I am:<strong>{props.post}</strong></p> */}
        <p>My name is:<strong>{myName}</strong></p>
        <p>I am:<strong>{post}</strong></p>

    </div>)
}
export default FunctionComp;