export default function ChildComponent(props){
    return(
        <div>
           <button onClick={() =>props.eventHandler(" child")}>child button</button> 
        </div>
    )
}