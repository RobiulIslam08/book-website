import { useEffect, useState } from "react";
import { getReadBookDataLS } from "../../Utils/LocalStorage";
import { GrDocument } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const ReadBook = () => {


  const location = useLocation();
  const displayBooks = location.state?.displayBooks || [];
  const [sortedBooks, setSortedBooks] = useState([]);

  useEffect(() => {
    // Initially, display the original data
    setSortedBooks(displayBooks);
  }, []);

  // Function to sort books by rating
  const sortByRating = () => {
    const sortedBookData = [...displayBooks].sort((a, b) => b.rating - a.rating);
    setSortedBooks(sortedBookData);
  }
  
  return (
    <div>

      {/* dropdown */}
      <div className="flex justify-center items-center mb-36">
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
      </div>
      
      {sortedBooks.map((book, index) => (
        <div key={index}>
          <div className="mb-5 shadow-xl p-3 flex flex-col lg:flex-row gap-4 mt-5 w-[100%]">
            {/* image */}
            <div
              className="lg:w-[18%] w-full   flex justify-center
"
            >
              <div className="bg-base-200 rounded-lg p-5">
                <img
                  src={book.image}
                  className="h-[220px] "
                  alt=""
                />
              </div>
            </div>

            {/* detail */}
            <div className="lg:w-[74%] w-full  space-y-4">
              <h1 className="text-[#131313] font-bold text-2xl">{book.bookName}</h1>
              <h1 className="text-[#131313d2] text-base font-medium">
                By: {book.author}
              </h1>
              {/* tag line */}
              <div className="flex gap-2 lg:gap-10 items-center">
                {/* tag */}
                <div className="flex gap-2">
                  <p>Tag:</p>
                  {
                    book.tags.map(tag=> <p key={book.bookId}>{tag}</p>)
                  }
                </div>
                <div className="text-[#131313d2] text-base font-medium flex items-center">
                  <IoLocationOutline />
                  <p>Year of Publishing: {book.yearOfPublishing}</p>
                </div>
              </div>
              {/* tag line end */}

              {/* profile line */}
              <div className="flex gap-2 lg:gap-10 text-[#13131399] text-base items-center">
                <div className="flex gap-1 items-center">
                  <HiMiniUsers />
                  <h1>Publisher: {book.publisher}</h1>
                </div>
                <div className="flex gap-1 items-center">
                  <GrDocument />
                  <p>Page: {book.totalPages}</p>
                </div>
              </div>
              {/* profile line end */}

              <hr />
              <div className="flex gap-3">
                <button className="btn bg-green-500">Category: {book.category}</button>
                <button className="btn bg-green-500">Rating: {book.rating}</button>
                <Link to={`/bookDetail/${book.bookId}`} ><button className="btn bg-green-500">view Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBook;
