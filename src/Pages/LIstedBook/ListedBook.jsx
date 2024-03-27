import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getReadBookDataLS } from "../../Utils/LocalStorage";
// import ReadBook from "../../Components/ReadBook/ReadBook";

const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBook] = useState([]);
  useEffect(() => {
    const readBook = getReadBookDataLS();
    setBooks(readBook);
  }, []);
  function sortByRating() {
    const sortedBookData = [...books].sort((a, b) => b.rating - a.rating);
    setDisplayBook(sortedBookData);
  }

  //  console.log(displayBooks)
  return (
    <div>
      <div className="bg-base-200 h-[80px] rounded-xl flex justify-center items-center mb-8">
        <h1 className="text-[36px] font-bold ">Books</h1>
      </div>
      {/* drodown menu */}
      {/* <div className="flex justify-center items-center mb-36">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-500">Short By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={sortByRating}>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div> */}

      {/* tab  */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to={{ pathname: "readBook", state: { displayBooks: displayBooks } }}
          //  displayBooks={displayBooks}
          onClick={() => {
            setTabIndex(0);
          }}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex == 0 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishListBook`}
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex == 1 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Wishlist Book</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;
