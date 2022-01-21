import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { decrement, increment } from './action';
import { store } from './store';
export default function Counter() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        update();
        store.subscribe(update)
    })

    function update(){
        const state=store.getState();
        setCount(state.counter)
    }

    function onIncrement(){
        store.dispatch(increment())
    }

    function onDecrement(){
        store.dispatch(decrement())
    }
  return <div>
      <div>{count}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
  </div>;
}