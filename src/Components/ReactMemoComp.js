
import React from "react";
const ReactMemoComp=(props)=>{
    console.log("this is react memo comp");
    return(<div>
        <h2>This is react memo component</h2>
        <p> My name is<strong>{props.name}</strong></p>
    </div>)
}
export default React.memo(ReactMemoComp);