import { useEffect, useState } from "react";
import {  getWishListBookDataLS } from "../../Utils/LocalStorage";
import { GrDocument } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const WishlistBook = () => {
    const [WishListData, setWishLitData] = useState([]);
    useEffect(() => {
        setWishLitData(getWishListBookDataLS());
    }, []);
    console.log(WishListData);
    
    return (
      <div>
        
        {WishListData.map((book, index) => (
          <div key={book.bookId}>
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
                  <button className="btn bg-green-500 ">Category: {book.category}</button>
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

export default WishlistBook;