/**
---- Fetch Data -----
- import useState and useEffect
- setup state value
- users-default value []

-setup useEffect
- Make sure it runs only on initial render
-in the cb, create a function which performs fethc functionality
- use url,
*/
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const Example3 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Github Users:</h2>
      <ul className="users">
        {user.map((u) => {
          const { id, login, avatar_url, html_url } = u;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <a href={html_url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Example3;
