import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'
const Counter = () => {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(increment())} >Increment</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(decrement())} >Decrement</button>
    </div>
  )
}

export default Counter
