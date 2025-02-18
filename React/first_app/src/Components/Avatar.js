// import { getImageUrl } from './utils.js'

export default function Avatar({size, person}){
    return (
        <>
        
         <img
      className="avatar"
      src='https://i.imgur.com/MK3eW3As.jpg'
      alt={person.name}
      width={size}
      height={size}
      
    />
   
        
        </>
       
    )
}