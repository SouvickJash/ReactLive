import React, { useState } from 'react'
import lit from '../Image/light.png' 

const Light = () => {
   const[light,setLight]=useState(false)
   const fun1=()=>{
      if(light !== true){
         setLight(true)
      }else{
         setLight(false)
      }
   }
  return (
    <>
      <img src={lit} alt="" width="50%" height="50%"/>
      <button  onClick={fun1}>click</button>
      
    </>
  )
}

export default Light


// import React from 'react'
// import light from '../Image/light.png' 
// import  { useState } from 'react';
// import './light.css'

// function Light() {
//   const [on, setOn] = useState(false);

//   const lightOn = () => setOn(true);
//   const lightOff = () => setOn(false);

//   return (
//     <>
//       <img src={light} alt="" className='light'/>
//       <div className={on ? 'bulb-on' : 'bulb-off'} />
//       <button onClick={lightOn}>On</button>
//       <button onClick={lightOff}>Off</button>
//     </>
//   );
// }
// export default Light