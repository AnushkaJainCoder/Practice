// import { useEffect, useState } from "react"

import { Component } from "react";

// export default function BindLearn(){
//     const [text, setText] = useState("bhoot")

//     function onhandle() {
//         setText("good morning")
//         console.log(text);

//     }

//     // useEffect(()=>{
//     //     console.log(text);

//     // }, [text])
//     return (
//         <>
//             <div> 
//                 {text}
//             </div>
//             <button onClick={onhandle}>clichhhhkme</button>


//         </>
//     )
// }



export default class BindLearn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "all good"
        }
    }
     onhandle(te) {
        this.setState({text: "hello" + "  " + this.state.text })
        // this.setState({
        //     text: "goodbye"
        // })
        console.log(this);
        
    }
    render() {
        return (
            <>
                <div>{this.state.text}</div>
                
                <button onClick={this.onhandle.bind(this)}>binding kro </button>

                {/* <button onClick={() => this.onhandle("good naaaaah")}>binding kro </button> */}

            </>
        )
    }
}