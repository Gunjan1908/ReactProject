import logo from './logo.svg';
import './App.css';
import FunctionComp from './Components/FunctionComp';
import ClassComp from './Components/ClassComp';
import MyFcComp from './Components/MyFcComp';
import MyStateComp from './Components/MyStateComp';
import MyClassComp from './Components/MyClassComp';
import HoverComp from './Components/HoverComp';
import UpdateStateComp from './Components/UpdateStateComp';
import RenderComp from './Components/RenderComp';
import MyImagesComp from './Components/MyImagesComp';
import MyCssComp from './Components/MyCssComp';
import ParentComp from './Components/ParentComp';
import ToggleTask from './Components/ToggleTask';
import HoverCounterComp from './Components/HoverCounterComp';
import ClickCounterComp from './Components/ClickCounterComp';
import RenderPropsComp from './Components/RenderPropsComp';
import FavColorComp from './Components/FavColorComp';
import UserFormComp from './Components/UserFormComp';
import UserComp from './Components/UserComp';
import ErrorBoundary from './Components/ErrorBoundary';
import EmployeeComp from './Components/EmployeeComp';
import LifeCycleComp from './Components/LifeCycleComp';
import MyRoutingComp from './Components/MyRoutingComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className='text-primary bg-info text-center'>Welcome you all in React Session</h1>
      {/* <MyStateComp></MyStateComp>
      <MyFcComp></MyFcComp> */}
      {/* <FunctionComp myName="gunjan" post="Fullstack Developer">
      </FunctionComp > */}
      {/* <ClassComp myName="vaish" post ="web Developer"> </ClassComp> */}
      {/* <MyClassComp fname="tej" lname="hire" company="google" gender="f" age="21">
        
      </MyClassComp> */}
      {/* <MyStateComp></MyStateComp> */}
      {/* <HoverComp></HoverComp> */}
      {/* <UpdateStateComp></UpdateStateComp>
      <RenderComp/>
      <MyImagesComp></MyImagesComp>

      <MyCssComp></MyCssComp> */}
      {/* <ParentComp></ParentComp> */}
      {/* <ToggleTask></ToggleTask>
      <HoverCounterComp />
      <ClickCounterComp /> */}
      <hr />
      {/* <RenderPropsComp render ={(isLogin)=>{return isLogin? "Gunjan":"user"}}/> */}

      {/* <RenderPropsComp render={(count, incrementCount)=> 
        {
          return <ClickCounterComp count={count} increamentCount={incrementCount} />}}/>
           <RenderPropsComp render={(count, incrementCount)=> 
        {
          return <HoverCounterComp count={count} incrementCount={incrementCount} />}}/>

          <hr/>
          <FavColorComp/> */}
      {/* 
          <UserFormComp/> */}
          
          {/* <EmployeeComp/> */}

      {/* <ErrorBoundary>
        <UserComp uname="Gunjan" />
      </ErrorBoundary>

      <ErrorBoundary>
        <UserComp uname="Vaish" />
      </ErrorBoundary>

      <ErrorBoundary>
        <UserComp uname="Teju" />
      </ErrorBoundary> */}

      {/* <LifeCycleComp mycolor="green"/> */}
      <MyRoutingComp/>
    </div>
  );
}

export default App;
