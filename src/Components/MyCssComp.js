import './external.css';
import mycss from './module.css';

const MyCssComp=()=>{

    const txtWarning ={
        color:"yellow",
        backgroundColor:"aqua",
        fontSize:"25px"
    }
    const mycssProperty ={
        color:true ? "Green":"pink",
        backgroundColor: false ? "yellow":"grey",
        fontSize: false ? "30px":"20px",
        textTransform: true ? "uppercase":"lowercase"

    }
    return (<div>
        <h2 style={{"color":"blueviolet","textAlign":"left"}}>My CSS function component</h2>

        <p style={txtWarning}>Welcome you all in Infoway</p>
        <p style ={mycssProperty}> this is internal css</p>
        {/* use of external css */}
        <div className="circle">HELLO</div>

        {/* use of modular css */}
        <h2 className={mycss.special}> Gunjan Patange</h2>

       

    </div>)
}
export default MyCssComp;