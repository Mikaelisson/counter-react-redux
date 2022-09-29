import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <header className="header">
        <h1>Counter</h1>
        <div>{count}</div>
      </header>
    </div>
  );
}
