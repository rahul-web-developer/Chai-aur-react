


import React from 'react';



import Card from './components/Card';



function App() {

  let data = [
    {name:"Rahul",
  
    img: "https://images.pexels.com/photos/18463824/pexels-photo-18463824/free-photo-of-majestic-peacock-in-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    profession: "Software Engineer",

    job_title:"Front End Developer" 


  
  },
  {name:"Suhani",
  
  img: "https://images.pexels.com/photos/19699383/pexels-photo-19699383/free-photo-of-back-view-of-a-young-woman-in-a-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

  profession: "Software Engineer",

  job_title:"Back End Developer" 



},
  {name:"Pooja",
  
  img: "https://images.pexels.com/photos/19748389/pexels-photo-19748389/free-photo-of-gorgeous-blonde-woman-portrait.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",

  profession: "Software Engineer",

  job_title:"Full stack web  Developer" 



},
  ]




  return (
    <>
    
    <div>App</div>
<Card  data={data}></Card>
    </>
  )
}

export default App