import { Component } from "react";

export default class Conditional extends Component{

    constructor(props){
        super(props)
        this.state = {
            text: "no button clicked"
        }
    }
    handleEvent1 = () => {
        this.setState({
           text: "button1 clicked"
        })
    }
    handleEvent2 = () =>{
        this.setState({
           text: "button2 clicked"
        })
    }
    
    render(){
        let message;
        if (this.state.text === "button1 clicked") {
            message = <div >You clicked the first button!</div>;
        } else if (this.state.text === "button2 clicked") {
            message = <div >You clicked the second button!</div>;
        } else {
            message = <div >No button clicked yet.</div>;
        }
        return(
           
            <>
             {/* <div> {this.state.count}</div>
            <button onClick={() => {
                 this.state.count ==  "heloo" ? <div> count is true </div>
                 :
                 <div>
                     count is false
                 </div>

            }}>State change </button> */}


            <button className="button1" onClick={this.handleEvent1}> First button </button>
            <button onClick={this.handleEvent2}> Second button</button>
            
            <div>{message}</div>
            
            </>
           
        
        )
       
    }
}