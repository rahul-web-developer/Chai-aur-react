
import React, { useState,useCallback,useEffect , useRef} from 'react'

function App() {



  const [length,setlength] = useState(3);

  const [color,setcolor] = useState('gray-100')




const [numallowed,setnumallowed] = useState(false);

const [char,setchar] = useState(false);

const [password,setpassword] = useState("white");


const [copy,copied] = useState("copy")


const passwordref = useRef(null);


const lighttheme = (color)=>{

  



!setcolor(color)  && setcolor("yellow")
!setcolor(color)  && setcolor("green")
  



}


const copypasswordclip = useCallback(()=>{

  window.navigator.clipboard.writeText(password)
  
  passwordref.current?.select()
copied("copied")

setTimeout(() => {
  
  window.navigator.clipboard.writeText()
  
  !passwordref.current?.select()
copied("copy")

}, 2000);



  // passwordref.current?.setSelectionRange(0,4)

},[password])

const passwordgenrator = useCallback(()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

if(numallowed) str += "0123456789"
if(char) str += "!@#$%^&*-_+=[]{}~`"


for(let i = 1; i<=length; i++){
  let char1 = Math.floor(Math.random() * str.length + 1)



  pass += str.charAt(char1)
}


setpassword(pass)

},[length,numallowed,char,setpassword])


useEffect(()=>{

  passwordgenrator()

},[length,numallowed,char,setpassword ])

  return (
    <>
    <div>

      <button onClick={()=>lighttheme('white')}>clickme</button>
    </div>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500  ' style={{backgroundColor:color}}> 
    <h1 className='text-white text-4xl text-center my-3'>Password Genrator</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>

      <input 
      type="text"
      value={password}
      ref={passwordref}

      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      />
    
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypasswordclip}>{copy}</button>




    </div>

<div className='flex text-sm gap-x-2'>


  <div className='flex items-center gap-x-1'>

    <input 
    
    type="range" 

    min={6}

    max={100}

    value={length}

    className='cursor-pointer'
    
    onChange={(e)=>{
      setlength(e.target.value)
    }}
    />
    <label htmlFor="">Length : {length}</label>

  </div>

<div className='flex items-center gap=x-1'>

<input 
type="checkbox"
defaultChecked={numallowed}
id='numberInput'
onChange={()=>{
  setnumallowed((pre) => !pre)
}}
 /> <label htmlFor="numberInput">Numbers</label>





</div>
<div className='flex items-center gap=x-1'>

<input 
type="checkbox"
defaultChecked={char}
id='charinput'
onChange={()=>{
  setchar((pre) => !pre)
}}
 />

<label htmlFor="charinput">Characters</label>




</div>




</div>

    
    </div>
    
    </>
  )
}

export default App