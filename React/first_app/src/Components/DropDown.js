export default function DropDown({options , onSelect}){
    return(
        <div>
            <select onChange={(e) => onSelect(e.target.value)}>
                {options.map((option, index)=>{
                    return (
                        <option key = {index} value = {option}>
                            {option}
                        </option>
                    )
                })}
           </select>
        </div>
    )
}