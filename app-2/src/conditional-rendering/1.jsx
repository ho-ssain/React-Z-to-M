import { useState, useEffect } from "react";

const Example1 = () => {
  // while fetching data
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return <div>My App</div>;
};

export default Example1;
