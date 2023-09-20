// version 2 of 4.jsx

import { useState } from "react";

const UseStateExe3 = () => {
  let [person, setPerson] = useState({
    name: "Nami",
    age: 32,
    hobby: "Swimming",
  });

  const update = () => {
    setPerson({
      name: "Alex",
      age: 22,
      hobby: "Fishing",
    });
  };

  let { name, age, hobby } = person;
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h4>{hobby}</h4>
        <button onClick={update} className="btn">
          Update
        </button>
      </div>
    </>
  );
};

export default UseStateExe3;
