


import React, { useState } from 'react'

function BgChanger() {


    const [color,setcolor] = useState("olive");


    const  BgHandler = (color)=>{


        setcolor(color)

    }







  return (
    <>
    

    <div className='h-screen w-full' style={{backgroundColor: color}}>




<div className="btnc flex w-12 h-12  bottom-6 items-center justify-center">


<button className='p-4 ' onClick={()=> BgHandler("red")}  style={{backgroundColor:"color"}}>click</button>
<button className='p-4 ' onClick={()=> BgHandler("green")}  style={{backgroundColor:"color"}}>click green</button>
<button className='p-4 ' onClick={()=> BgHandler("yellow")}  style={{backgroundColor:"color"}}>click yellow</button>
<button className='p-4 ' onClick={()=> BgHandler("blue")}  style={{backgroundColor:"color"}}>click blue</button>
<button className='p-4 ' onClick={()=> BgHandler("white")}  style={{backgroundColor:"color"}}>click white</button>
<button className='p-4 ' onClick={()=> BgHandler("orange")}  style={{backgroundColor:"color"}}>click orange</button>



</div>



    </div>
    
    
    
    </>
  )
}

export default BgChanger