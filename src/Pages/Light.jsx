//right
// import React, { useState } from 'react'
// import lit from '../Image/light.png' 
// import  lit1 from '../Image/23.jpg'

// const Light = () => {
//    const[light,setLight]=useState(lit)
//    const fun1=()=>{
//       if(light !== lit){
//          setLight(lit)
//       }else{
//          setLight(lit1)
//       }
//    }
//   return (
//     <>
//       <img src={light} alt="" width="50%" height="50%"/>
//       <button  onClick={fun1}>click</button>
      
//     </>
//   )
// }

// export default Light


// import React from 'react'
// import light from '../Image/light.png' 
// import  light1 from '../Image/23.jpg'
// import  { useState } from 'react';
// import './light.css'

// function Light() {
//   const [on, setOn] = useState(false);

//   const lightOn = () => setOn(true);
//   const lightOff = () => setOn(false);

//   return (
//     <>
//       <img src={on} alt="" className='light'/>
    
//       <div className={on ? 'bulb-on' : 'bulb-off'} />
//       <button onClick={lightOn}>On</button>
//       <button onClick={lightOff}>Off</button>
//     </>
//   );
// }
// export default Light