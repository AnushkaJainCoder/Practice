// import { useState } from "react"


// export default function Greet(props){
//     const [count, setCount] = useState(0);
    
//     const inc = () =>{
//         setCount(count+1);
//     }
    
//     return(
//         <div>
//              <h1> {count}</h1>
//             <button onClick={inc}>
//                 Click me
//             </button>
//         </div>
       
//     )
// }

import { Component } from "react";
import { useState } from "react";




export default class Greet extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    inc = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }
    render(){
        return (
            <>
             <h1>{this.state.count}</h1>
             <button onClick={this.inc}>
                Click me
             </button>
            
            </>
           
        )
    }
}