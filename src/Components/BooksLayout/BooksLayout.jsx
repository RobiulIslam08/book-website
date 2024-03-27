import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const BooksLayout = ({ book }) => {
  const {bookId, image, rating, category, author, bookName, tags } = book;
  return (
    <div>
      <Link to={`/bookDetail/${bookId}`}>
      <div className=" card card-compact w-96 bg-base-100 shadow-xl p-6 rounded-xl  mb-6">
        <div className="bg-slate-200 py-4 rounded-lg">
          <figure>
            <img src={image} className="h-56 w-48" alt="images" />
          </figure>
        </div>
        <div className="card-body">
          <div className="flex justify-between text-[#23BE0A] font-bold text-base">
            <p>{tags[0]}</p>
            <p>{tags[1]}</p>
          </div>
          <h1 className="text-[#131313] font-bold text-2xl">
            {bookName.slice(0, 20)}
          </h1>
          <p className="text-[#131313d2] text-base font-medium">By: {author}</p>
          <div className="flex justify-between text-base font-medium text-[#131313d2]">
            <p>catagory</p>
            <div className="flex gap-2 items-center">
              <p>{rating}</p>
              <CiStar className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BooksLayout;
