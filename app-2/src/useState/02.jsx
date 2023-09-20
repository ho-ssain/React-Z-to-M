import { useState } from "react";

const UseStateBasics = () => {
  let [count, setCount] = useState(0);

  const add = () => {
    setCount(++count);
    console.log(count);
  };

  const rem = () => {
    setCount(--count);
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "1px solid white",
          width: "50%",
          margin: "5rem auto",
        }}
      >
        <h2 style={{ fontSize: "4rem" }}>{count}</h2>
        <button onClick={add} className="btn" style={{ margin: "2rem 2rem" }}>
          Add➕
        </button>
        <button onClick={rem} className="btn" style={{ margin: "2rem 2rem" }}>
          rem➖
        </button>
      </div>
    </>
  );
};

export default UseStateBasics;
