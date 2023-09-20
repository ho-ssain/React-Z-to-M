import { useState, useEffect } from "react";

const Example1 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div>
      <h3>Value: {value}</h3>
      <button onClick={() => setValue(value + 1)} className="btn">
        Click Me
      </button>
    </div>
  );
};

export default Example1;
