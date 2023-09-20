/**
1. setup 3 state values
    - name
    - age
    - hobby
2. render in browser
3. create a button
4. setup a function 
5. update all thre state values
6. as a result once the user clicks the button. new person is displayed in the browser.
 */
import { useState } from "react";

const UseStateExe2 = () => {
  let [name, setName] = useState("Alex");
  let [age, setAge] = useState(26);
  let [hobby, setHobby] = useState("Meditation");

  const update = () => {
    name = "John";
    age = 32;
    hobby = "Swimming";
    setName(name);
    setAge(age);
    setHobby(hobby);
  };

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

export default UseStateExe2;
