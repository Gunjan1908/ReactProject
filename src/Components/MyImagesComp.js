import image from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import coffee from '../assets/images/coffee.jpg';
import data from '../shared/constant/constantData';

const MyImagesComp =()=>{
    return (<div>
        <h2>This is my images component</h2>
        <img src={image} alt='image' height="200px"/>
        <img src={image2} alt='image2' width="300px" height="200px"/>
        <img src={coffee} alt='coffee' height="200px"/>
        <hr/>
        <img src={data.image} alt='image' height="200px"/>
        <img src={data.image2} alt='image1' height="200px"/>
        <img src={data.coffee} alt='coffee' height="200px"/>
        <br/>
        <video controls src={data.video}></video>
    </div>)
}
export default MyImagesComp;