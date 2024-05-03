import React, {useRef} from "react"
console.log("cfvgjbh")
const Uncontrolled = ()=>{

    let inputVal = useRef("")

    const clickHandler=(event)=>{
console.log(inputVal.current, "1")
let inputVal2 = document.getElementById('text')
console.log(inputVal2,"2")
    }
    return(
        <>
        <h1 onClick={clickHandler}>Click</h1>
        <input type="text" ref={inputVal}></input>
        </>
    )
}
 
export default Uncontrolled