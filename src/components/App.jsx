import { useRef , useEffect} from "react";
import Menu from "./menu";
import RegisterUser from "./RegisterUser";
import Player from './Player'

function App(){

 const myBtnRef = useRef(); 
const myInputRef = useRef('Hello World');
useEffect(() =>{
  console.log('CLICK4R');
console.log(myBtnRef.current);

myBtnRef.current.addEventListener('click', ()=>{
  console.log('clicked');
  myInputRef.current.value = 'My button clicked'
})
})
  return <div className="=App">
    <h2>Hello</h2>
    <RegisterUser/>
    <Menu/>
    <button ref={myBtnRef} >My Button</button>
    <input ref={myInputRef} value={myInputRef.current}></input>
    <Player source ="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
  </div>
};

export default App;