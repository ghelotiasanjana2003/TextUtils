
import TextUtils from './Components/TextUtils'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Todolist from './Todo/Todolist';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
//import Hello from './Components/Hello'
//import Card from './Components/Card.js'
//import Uncontrolled from './Components/Uncontrolled';
//import Api from './Components/Api.js'

function App() {
  return (
    <>
    
    {/* <Todolist></Todolist> */}

    
    <Navbar></Navbar>
     <TextUtils></TextUtils> 
      <About></About>
     <Footer></Footer> 
   
    {/* <Form></Form>  */}
   {/* <Hello nam = "sanjana"/> */}
   {/* <Card></Card> */}
   {/* <Api></Api> */}
   </>
  );
}

export default App;
