//import { render } from "@testing-library/react";
import React, { Component } from "react";

class Hello extends Component {
         constructor(props) {
                super(props)
                const {nam} = this.props
           this.state ={
        Name : nam
           }

         }   
           clickHandler(){
                this.setState ({
                        Name: "priya dabba linkdin"
                })
               }
               clickHandler= this.clickHandler.bind(this)

        render() {
                // const { name } = this.props
                
               
               
                return (
                        <>
                                <h1>{this.state.Name}</h1>
                                 <button onClick={()=>{this.clickHandler()}}>Click</button> 
                                <button onClick={this.clickHandler}>Click</button>
                        </>
                )
        }
}


export default Hello