import { Component } from "react";

export default class Message extends Component{
    constructor(){
        super()
        this.state ={
            message: 'hello gorav'
        }
        
    }

    onhandle(){
        this.setState({
            message: 'no please'
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={() => {
                    this.onhandle();
                }}>Subscribe</button>
            </div>
        )
    }

}