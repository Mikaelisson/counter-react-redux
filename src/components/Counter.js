import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../reducer/counterSlice";

export default function Contador() {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className="main">
      <h1>Counter</h1>
      <div>{count}</div>
      <div>
        <button onClick={()=>{ dispatch(decrement()) }}>-</button>
        <button onClick={()=>{ dispatch(increment()) }}>+</button>
      </div>
    </div>
  );
}
