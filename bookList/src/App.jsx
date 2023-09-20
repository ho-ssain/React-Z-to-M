import "./App.css";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";

import Book from "./components/Book";

const books = [
  {
    id: 1,
    img: img1,
    title: "The Ballad Of Songbirds And Snakes",
    author: "Suzanne Collins",
    price: "$30",
    ratings: "3.5",
    inStock: "40",
  },
  {
    id: 2,
    img: img2,
    title: "The River Runs South",
    author: "Audrey Ingram",
    price: "$20",
    ratings: "3.0",
    inStock: "50",
  },
  {
    id: 3,
    img: img3,
    title: "Holly",
    author: "Stephen King",
    price: "$10",
    ratings: "4.0",
    inStock: "70",
  },
  {
    id: 4,
    img: img4,
    title: "Holly",
    author: "Stephen King",
    price: "$25",
    ratings: "3.5",
    inStock: "100",
  },
];

function App() {
  const getBook = (i) => {
    const book = books.find((b) => {
      return b.id === i;
    });
    alert(
      `${book.title}\nRatings: ${book.ratings}\nIn Stock: ${book.inStock}\nPrice: ${book.price}`
    );
  };

  return (
    <>
      <h1>Favourite Book Lists</h1>
      <section className="bookList">
        {books.map((b, index) => {
          return <Book {...b} key={b.id} dv={getBook} number={index} />;
        })}
      </section>
    </>
  );
}

export default App;
