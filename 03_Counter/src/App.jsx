

// import React from 'react'
// import { useState } from 'react'

// import './App.css';


// function App() {

//   const [value,setvalue] = useState(0)


//   const ValuedecHandler = ()=>{

// // if(value >= 1){
// //   setvalue( value -1)
 

// // }else
// //  if(value == -1){
// //   alert(`Value should be avobe 0 and upper not negative ${value}`)

// // }

// if(value >= 1){

//   setvalue(value -1)
 
  

// }



// }
//   const ValueIncreseHandler = ()=>{
//     if(value < 20){

//       setvalue(value +1)
     
      
    
//     }
   



// }



//   return (
//     <div className='parent'>
    
//     <h2>counter value: {value}</h2>
    
//     <div className="container">

      
//     <button onClick={ValueIncreseHandler}>+</button>



// <button onClick={ValuedecHandler}>-</button>
//     </div>
    
//     </div>
//   )
// }

// export default App



import IntervQ from "./interv/IntervQ";


import React from 'react'

function App() {
  return (
    <div>
      <IntervQ />
    </div>
  )
}

export default App