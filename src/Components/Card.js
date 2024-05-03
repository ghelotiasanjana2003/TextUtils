import React , {Component} from 'react'
 import './Card.css'

class Card  extends Component{
constructor(){
    super()
this.state={
    count: 0,
    text: "hello"
}
}
clearHandler= ()=>{
    const newText = ("");
    this.setState({text : newText})
    
}

clickHandler(){
    this.setState ({
            count: this.state.count+1
    })
   }
   clickHandler= this.clickHandler.bind(this)
render(){
    return(
        <>

         <div className='yo' onClick={this.clickHandler}>
            <h4>Wassup</h4> 
            <img src='C:\Users\user\Desktop\React\ecommerce\public\IMG_20220423_092459_599.jpg' /> 
            </div> 
         <h1>{this.state.count}</h1> 
         <button  onClick={this.clickHandler}>click</button>
         <h1>cfvgbh</h1>
        
        <input style={{margin: '100px'}} placeholder='Enter your text' type='text' value={this.state.text}></input>

        <button  style={{margin: '100px'}} onClick={this.clearHandler}>Clear</button>
        </>
    )
}
}

export default Card 