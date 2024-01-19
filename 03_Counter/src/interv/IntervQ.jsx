


import React, { useState } from 'react'

function IntervQ() {
   const [value,setvalue] =  useState(0);


   const Addbtn = ()=>{

    // setvalue(value + 1);
    setvalue((val)=> val+1);
    setvalue((val)=> val+1);
    console.log(value)

   }
   const Subbtn = ()=>{

    setvalue(value - 1);
    setvalue(value - 1);
    setvalue(value - 1);

    console.log(value)
   }

  return (
    <>

    <div className="container">

<h1>Result : {value}</h1>

<div className="btn">


    <button className='' onClick={Addbtn}>+</button>
    <button onClick={Subbtn}>-</button>
</div>

    </div>


    
    
    </>
  )
}

export default IntervQ