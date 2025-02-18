import { useState } from "react"

import { Component } from "react"


// export default function Counter(){
//     const [count, setCount] = useState(0);
//     function handleCount(){
//         setCount(count+9);
//         setCount((count) => count+3);

//     }
//     return(
//         <>
//             <p>{count}</p>
//             <button onClick={() => {handleCount()}}>click me</button>
        
        
//         </>
//     )
// }





export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count1: 0,
            count2: 0
        }
    }
    onhandle(){

        // this.state.count = this.state.count + 1;
        
        
        this.setState(
            (count) => this.state.count1+1
        //     {
        //     count1: this.state.count1 + 1
        // }, ()=>{
        //     console.log("callback1 " + this.state.count1);
            
        // }
    )
        this.setState({
            count1: this.state.count1 + 1
        }, ()=>{
            console.log("callback2 " + this.state.count1);
            
        })
        // console.log(this.state.count);

    //    this.setState({
    //     this.state.
    //    })
    }
    render(){
        return (
            <>
                <p>{this.state.count1}</p>
                <p>{this.state.count2}</p>
                
                <button onClick={()=>{this.onhandle()}}>click me</button>
            
            </>

        )
    }
}