import { useState } from "react";

const UseStateExe4 = () => {
  const [value, setValue] = useState(0);
  const click = () => {
    console.log("click");
    setTimeout(() => {
      setValue((c) => {
        const n = c + 1;
        return n;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={click} className="btn">
        Increase
      </button>
    </div>
  );
};

export default UseStateExe4;
