
const HoverComp =()=>{

    //default function
    const greet=()=>{  
        window.alert("welcome you all");
    }
    //parameterize arrow function
    const welcomestd =(stdName)=>{
        window.alert(`welcome you ${stdName}`)
    }

    return(<div>
        <h2>This is Hover Component</h2>
        <h2 onMouseOver={greet}>Hover onme to call greet function</h2>
        {/* //if we dont use()=> it will directly call without click for parameterize fuction */}
        <button type ="button" onClick={()=>welcomestd("Gunjan")}>Click</button>
    </div>);
}
export default HoverComp;