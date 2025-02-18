// import { Component } from "react"

import { useState } from "react"

// export  class Counterop extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 10
//         }
        
//     }
//     increament(){
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     decreament(){
//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//     render(){
//         return(
//             <>
//             <div> {this.state.count}</div>
//             <button onClick={() => this.increament()}>Increase</button>
//             <button onClick={() => this.decreament()}>Decrease</button>
//             </>
            
//         )
//     }
// }




export default function Counterop(){
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }

    const heading = {
        fontSize: '20px',
        color: 'yellow'

    }
    

    return(
        <>
            <div style={heading}>{count}</div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            
        
        
        </>
    )
}