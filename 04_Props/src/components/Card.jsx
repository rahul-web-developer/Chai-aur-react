

import React from 'react'

function Card(props) {

 


  return (



    <>
    {
props.data.map((data)=>{
    return  <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-3">
    <img class="w-24 h-24 rounded-full mx-" src={data.img} alt="" width="384" height="512"/>
    <div class="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg">
         Name: {data.name}
        </p>
      </blockquote>
      <figcaption>
        <div>
          Title : {data.profession}
        </div>
        <div>
         Job_Roll :{data.job_title}
        </div>
      </figcaption>
    </div>
  </figure>
})
}
   
    </>
  )
}

export default Card;