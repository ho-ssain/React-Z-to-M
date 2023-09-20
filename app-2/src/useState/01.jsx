// error example
const ErrorExe = () => {
  let count = 0;
  const add = () => {
    count++;
    console.log(count);
  };

  const rem = () => {
    count--;
    console.log(count);
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

export default ErrorExe;
