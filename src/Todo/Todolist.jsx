import { useState } from "react"
import './Todo.css';



function Todolist(){

    const [myArray, setArray] = useState([
        {task : "Buy an iphone", complete : true},
        {task : "Buy a Thar", complete : false},
        {task : "Buy a new House", complete : true}
    ])

    const [todo,setTodo]= useState("")

    function handleTask(){
        if(todo){
            setArray([...myArray,{task : todo, complete : false}])
        }

        setTodo("")
    }
        

        
         function handleCheck(index){
            
            let mynewArray =[...myArray]
            mynewArray[index].complete = !mynewArray[index].complete

            setArray(mynewArray[index])

           const completeTask = mynewArray.filter((value, index)=>{
                     return value.complete
         })

            const remainingTask = mynewArray.filter((value, index)=>!value.complete)

            setCtask(completeTask.length)
            setRtask(remainingTask.length)
         }
    
   
    const [Ctask, setCtask] = useState("0")
    const [Rtask, setRtask] = useState("0")

   


    return(
        <>
        <div className='todo'>
           <div>
           <h1>My ToDo-App...</h1>
            <input className="input" type="text" placeholder="Add your task here" 
            value={todo}
            onChange={(e)=>{setTodo(e.target.value)}}
            />
            <button className="button" onClick={handleTask}>Add Task</button>

            {
                myArray.map((value,index)=>(
                    <ul key={index}>
                        <span>Task:{index}  </span>
                         <input type="checkbox" 
                     defaultChecked={value.complete}
                      onClick={()=>handleCheck(index)}
                    />
                    <span style={{textDecoration: value.complete?"line-through" : ""}}>{value.task}</span>

                    </ul>
                ))
            }
            

            <p>Complete Task :- {Ctask}</p>
            <p>Remaining Task :- {Rtask}</p>   
           </div>
        </div>
        </>
    )
}

export default Todolist