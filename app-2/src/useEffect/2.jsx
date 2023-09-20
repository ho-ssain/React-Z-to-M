import { useState, useEffect } from "react";

const Example2 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log("Hello I am Hossain");
  }, [value1]);

  useEffect(() => {
    console.log("Hello I am Hasan");
  }, [value2]);

  return (
    <div>
      <h4>1st value: {value1}</h4>
      <button onClick={() => setValue1(value1 + 1)} className="btn">
        value
      </button>
      <br />
      <br />
      <h4>2nd value: {value2}</h4>
      <button onClick={() => setValue2(value2 + 1)} className="btn">
        value
      </button>
    </div>
  );
};

export default Example2;
