import React, { useEffect, useRef, useState } from 'react';

export default function Counter() {
    const isMounted = useRef(false)
    const [counter,setCounter] = useState(0)
    const [x,setX] = useState(0)

    useEffect (()=>{
        console.log('fires on mounted also update');
        document.tittle = 'count' + counter;
    }, );

   useEffect (()=>{
       console.log('fires on mounted');
   }, [x, counter]);

   useEffect(()=>{
       return() => {
           console.log('fires when unmounted also on update');
       }
   })
   useEffect(()=>{
    return() => {
        console.log('fires when unmounted ');
    }
   },[])
   useEffect(()  => {
     if(isMounted.current){
         console.log('fires when updated');
     } else {
         isMounted.current = true
     }
   })
  return (
      <div>
      <div>counter components</div>
      <div>Counter :{counter}</div>
      <div>X value :{x}</div>
      <div>
          <button onClick={()=> setCounter(counter +1)}>increment </button>
          <button onClick={()=> setX(x +1)}>increment x </button>
      </div>
      </div>
  )
}
