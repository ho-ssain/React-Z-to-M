import "./Book.css";

const Book = (prop) => {
  const { img, author, title, dv, id, number } = prop;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button className="btn" onClick={() => dv(id)}>
        Click Me
      </button>
      <p>{author}</p>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
