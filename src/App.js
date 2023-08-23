import MyRoutes from './Routing/MyRoutes';

// import {useState,useEffect} from 'react'

function App() {
  // const[backendData,setBackendData]=useState([{}]);

  // useEffect(()=>{
  //     fetch("/getlastdata").then(
  //       response=>response.json()
  //     ).then(
  //       data=>{
  //         setBackendData(data)
  //       }
  //     )
  // },[])
  return (
    <>
      {/* {(typeof backendData.users==='undefined')?(
        <p>Loading...</p>
      ):(
        backendData.users.map((user,i)=>(
          <p key={i}>{user}</p>
        ))
      )} */}

      <MyRoutes/>
    </>
  );
}

export default App;
