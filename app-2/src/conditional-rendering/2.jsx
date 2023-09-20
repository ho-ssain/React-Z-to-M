/*
- practice on setting up state values and data fetching
- create state variable
- user defualt value null
- fetch data from the url
*/

/*
  Data Fetching
--- usually three options
1. loading  : waiting for data to arrive (display loading state)
2. error    : there wa an error (display error message)
3. success  : received data (display data)

*/

import { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const Example2 = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const user = await res.json();
        setUser(user);
      } catch (error) {
        setError(error);
      }
      //hide loading
      setLoading(false);
    };
    fetchUser();
  }, []);

  // order matters
  // don't place user JSX before loading or error
  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>loading...🔃</h2>;
  }
  if (isError) {
    return <h2>There was an error😞</h2>;
  }
  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{
          width: "150px",
          borderRadius: "25px",
        }}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default Example2;
