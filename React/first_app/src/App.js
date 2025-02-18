// // import logo from './logo.svg';
// import './App.css';
// import Navbar from './Navbar';
// import Home from './Home';

import { useState } from "react"
import Profile from "./Components/Profile"
// import Avatar from "./Avatar"
import Avatar from "./Components/Avatar"
import Card from "./Components/Card"
import Item from "./Components/Item"
import Message from "./Components/Message"
import Counter from "./Components/Counter"
import BindLearn from "./Components/BindLearn"
// import {Counterop} from "./CounterClass"
import Counterop from "./Components/CounterClass"
import ParentComponent from "./Components/ParentComponent"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import All from "./Components/All"
import NavigationBar from "./Components/Navigationbar"
import HomeRouting from "./Routing/HomeRouting"
import ContactRouting from "./Routing/ContactRouting"
import Conditional from "./Components/Conditional"
import Greet from "./Components/Greet"
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import DropDown from "./Components/DropDown"



// function App() {
//   return (
//    <div className='App'>
//     <Navbar />
//     <div className='content'>
//       <Home />
//     </div>
//    </div>
//   );
// }

// export default App;










// const user = {
//   name: "Anushka Jain",
//   imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90
// }



// const products = [
//   {title: 'Cabbage', id: 1, buy: true},
//   {title: 'Babbage', id: 2, buy: true},
//   {title: 'Rabbage', id: 3, buy: true},
//   {title: 'sabbage', id: 4, buy: false},
  
// ]

// const list = products.map(product =>
//   <li 
//   key={product.id}
//   style={{color: product.buy? 'pink':'red'}}>
//     {product.title}
//     </li>)

// function MyButton({onClick, count}){
//   // const [count, setCount] = useState(0);
//   // function handleOnClick(){
//   //   setCount(count+1);

//   // }
//   return (
//     <>
//       {/* <button onClick={onClick}>
//         click me!  {count} times
//       </button> */}
//     </>
//   )
// }

export default function App(){

  const style = {
    backgroundColor: 'blue',
    // font-size: 20px;
  };



  // dropdown component
  const [selectOption, SetSelectedOption] = useState('Select');

  const handleSelect = (option) => {
    SetSelectedOption(option);
    console.log(option);
    
  }


  // const [count, setCount] = useState(0);
  // const [val, setValue] = useState('');
  // const handleChange = (e)=>{
  //   setValue(e.target.value)
  // }
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   alert(val)
  // }

  // function handleOnClick(){
  //   setCount(count+1);

  // }

  // const [count, setCount] = useState(0);


  // function handleOnClick(){
  //   setCount(count+1);
  //   alert('hello there ' + count + 'times')
  // }
  return (
    

    <>
      {/* <h1>
        {user.name}
      </h1>
      <img className="ava"
      src={user.imageURL}
      alt = {'Photo of '+ user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize

      }}
      />

      <ul>
        {list}
      </ul> */}
      {/* <button onClick={handleOnClick}>
        Click me! 
      </button> */}

      {/* <MyButton onClick = {handleOnClick} count= {count}/>
      <MyButton onClick = {handleOnClick} count= {count}/>
      <h1>Amazing Scientists</h1> */}
      {/* <Profile />
      <Profile /> */}
      {/* <Card />     */}
      {/* <Item isPacked = {true} name = 'packing paper'/> */}


      {/* <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" value={val} onChange={handleChange} />

        </label>
        <button type="submit">submit</button>
      </form> */}
      {/* <Message />
      <Counter />
      <BindLearn /> */}
      {/* <Counterop />
       */}
       {/* <Counter/op /> */}
       {/* <ParentComponent /> */}
       {/* <Routes>
          <Route path="./Components/Home">{<Home />}</Route>
          <Route path="/About">{<About />}</Route>
          <Route path="/products">{<All />}</Route>
       </Routes> */}
       {/* <NavigationBar /> */}
       {/* <BrowserRouter > */}
          {/* <Routes >
            <Route path="/" element= {<HomeRouting />} >Home</Route> 
            <Route path="/contact" element= {<ContactRouting />} >Contact</Route> 
            <Route path="/about" element= {<About />} >About</Route> 
            
          </Routes>



          <Conditional /> */}
       
       
       {/* </BrowserRouter> */}
























            {/* <Greet name= 'Anushka'/> */}

            {/* <Router>
              <div>
                <nav>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                </nav>
                <Routes>
                  <Route path="/" element = {<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                </Routes>
              </div>
            </Router> */}

              <div style={style}>
                hi
              </div>

              <DropDown  options = {['India', 'Australia','Pakistan', 'America']} onSelect = {handleSelect}/>
              <DropDown  options = {['hybrid', 'remote','office', 'wfh']} onSelect = {handleSelect}/>
              

















      
    </>
  )
}  




// function Avatar({size, person}){
//   return (
//       <img src="https://i.imgur.com/MK3eW3As.jpg" 
      
//       width= {size}
//       height={size}
//       alt={person.name}
//       // alt={person.n}
      
      
//       />
//   )
// }



















