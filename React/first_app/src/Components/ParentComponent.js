import { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component{

    constructor(props){
        super(props)
        this.state= {
            parentName: 'Parent'
        }
        // this.greetParent = this.greetParent.bind(this)
    }

     greetParent = (childname)=>{
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }

    render(){
        return (
            <>
            {/* <div /> */}

            <ChildComponent eventHandler={this.greetParent}/>
            
            
            </>
        )
    }
}