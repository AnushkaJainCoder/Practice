import Avatar from "./Avatar"
export default function Card(){
    //console.log(child);
    const stringLists = [ 'Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa' ]; 
    return (
        <div style={{ height: 123, width: 123}}>
            {/* <Avatar 
                person={{name:'abc'}}
                size= {20}
            /> */}
            <div>Something</div>
            {stringLists.map((s,index)=>{
                return (
                    <li key={'data' + index}> {s} </li>
                )
                
            })}
        </div>
    )
}