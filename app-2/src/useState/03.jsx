/**
- given a  data(array of objects)
- setup a state value
- default value equal to data
- display list (people) in the browser

- create two functions
  1. one that removes single item from the list
  2. one that clears entire list

- render the list
 */
import { useState } from "react";

const data = [
  { id: 1, name: "John", age: 24 },
  { id: 2, name: "Rony", age: 32 },
  { id: 3, name: "Nami", age: 32 },
  { id: 4, name: "Alex", age: 21 },
];

const UseStateExe = () => {
  let [folks, setFolks] = useState(data);
  const ClearList = () => {
    setFolks([]);
  };
  const Clear = (id) => {
    folks = folks.filter((f) => f.id !== id);
    setFolks(folks);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {folks.map((f) => {
        const { id, name } = f;
        return (
          <div
            key={id}
            style={{
              border: "1px solid orangered",
              width: "50%",
              margin: "0 auto",
            }}
          >
            <li
              style={{
                fontSize: "1rem",
                listStyle: "none",
                marginBottom: "5px",
              }}
            >
              {name}
            </li>
            <button onClick={() => Clear(id)} className="btn">
              remove
            </button>
            <br /> <br />
          </div>
        );
      })}

      <button
        onClick={ClearList}
        className="btn"
        style={{
          margin: "1rem auto",
          fontSize: "1.5rem",
          border: "1px solid green",
          borderTopLeftRadius: "3px",
          borderBottomRightRadius: "3px",
        }}
      >
        Clear List
      </button>
    </div>
  );
};

export default UseStateExe;
