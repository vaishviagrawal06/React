// import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";

 
// import "./task"
// function App() {
//   return (
//     <div className="container">
//       <UserCard name="hiii"/>  
//       <UserCard name="helooooo"/> 
//       <UserCard name="byeeeee"/> 
//       {/* component haemsha aise likhna padta haii */}
//     </div>
//   );
// }

// export default App;


// -----------------------
// LECTURE NOTES
// -----------------------=

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,setCount]= useState(0)

//   // console.log("hello");

//   // aise karne se vo baar baar print hoga jisse system slow ho jaayega
//   // to prevent this we use this method of useEffect
//   useEffect(()=>{
//     console.log("hello")
//   },[])

//   return (
//     <div>
//     <h3>{count}</h3>  
//       <button onClick={()=>setCount(count+1)}>click</button>
//     </div>
//   )
// }

// export default App


// --------------------------------------------------------------------------------
// CITY PRINT KARWAO OR JAB CLICK KAROGE TO USKA NAME CHANGE HO JANA CHAHIYE
// --------------------------------------------------------------------------------

// // import React, { useEffect, useState } from 'react'

// // const App = () => {
// //   let [count,setCount]= useState(0)
// //   let[city,setCity]=useState("goa")

// //   useEffect(()=>{
// //     console.log("hello")
// //   },[city])

// //   return (
// //     <div>
// //     <h3>{count}</h3> 
// //     <h2>{city}</h2> 
// //     <button onClick={()=>setCity("delhi")}>Change</button>
// //     <button onClick={()=>setCount(count+1)}>click</button>
// //     </div>
// //   )
// // }

// export default App

// -----------------------------------------
// API LINK USE KARKE DATA FETH KARWANA HAII
// -----------------------------------------


// import './App.css'
// const App = () => {
//       let [ApiData,SetApiData]=  useState([])
//       useEffect(()=>{
//               //  console.log("hello"); 
//               async  function call(){
//                 let res=  await  fetch("https://dummyjson.com/products")
//                 let data=        await   res.json()
//                 console.log(data.products);
//                 SetApiData(data.products)
//               }
//               call()
//       },[])
      
//   return (
//     <div id="parent_div"   className="">
//         {
//           ApiData.map((a)=>{
//                return(
//                 <div id="card">
//                   <h1>{a.id}</h1>
//                   <img  src={a.thumbnail}/>
//                 </div>
//                )
//           })
//         }
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import task from './Task'
// import Task from "./Task";

// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import NavBar from "./Navbar";
// import { Route,Routes } from "react-router-dom";
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"
// import ContactUs from "./ContactUs";


// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/task" element={<Task/>}/>
//        <Route path="/contactUs" element={<ContactUs/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Todo from './Todo'
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Count from './Count'

const App = () => {
  return (
    <div>
      <Count/>
    </div>
  )
}

export default App
