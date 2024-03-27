import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import useBooksData from "../../CustomHooks/Hooks";
import { setReadBookDataLS, setWishBookDataLS } from "../../Utils/LocalStorage";

// import { setReadBookDataLS } from "../../Utils/LocalStorage";

const BookDetail = () => {
    const {id} = useParams()
    console.log(id)
    const {booksData} = useBooksData()
    
    const [singleBook, setSingleBook]= useState({})
    console.log(singleBook)
    // console.log(booksData)
    // console.log(id)
    useEffect(()=>{
        const singleData = booksData.filter(book=> book.bookId == id)
        setSingleBook(singleData[0])
    },[booksData,id])
    const {rating,yearOfPublishing,publisher,totalPages,tags,review,category,author,bookName,image} = singleBook || {};
    



    function addData(){
        setReadBookDataLS(singleBook)
        
   
    }
    function wishAddData(){
        setWishBookDataLS(singleBook)
        console.log('wish list book')
    }
   
  return (
    <div>
        {/* main div */}
     <div className="flex flex-col lg:flex-row gap-10 mb-20">
        {/* img */}
        <div className="bg-base-200 flex justify-center items-center h-[640px] w-full lg:w-[48%]">
           <img src={image} className="h-[400px] w-[300px]" alt="" />
        </div>
        {/* detail */}
        <div className="h-[600px] w-full lg:w-[48%]" >
            <h1 className="text-[#131313] text-[40px] font-bold mb-5">{bookName}</h1>
            <h1 className="text-[#131313d2] text-xl font-medium mb-5">By: {author}</h1>
            <hr className="mb-4"/>
            <h1 className="text-[#131313d2] text-xl font-medium mb-[14px]">{category}</h1>
            <hr className="mb-6"/>
            <h1 className="mb-12"><span className="text-[#131313] text-base font-medium ">Review :</span>{review}</h1>
            <div className="flex gap-6 mb-7">
                <p className="font-bold">Tag</p>
                {/* <p className="text-[#23BE0A] font-bold text-base">{tags}</p>

                <p className="text-[#23BE0A] font-bold text-base">{tags}</p> */}
                {tags && tags.map((tag, index) => (
    <p className="text-[#23BE0A] font-bold text-base" key={index}>{tag}</p>
))}
            </div>
            <hr className="mb-6"/>
            <div className="space-y-4">
            <div className="flex w-[300px] justify-between">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Number of Pages: </p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">{totalPages}</p>
            </div>
            <div className="flex w-[300px] justify-between ">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Publisher:</p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">{publisher}</p>
            </div>
            <div className="flex justify-between w-[300px] ">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Yerar of Publishing:</p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">{yearOfPublishing}</p>

            </div>
            <div className=" flex justify-between w-[300px] ">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Rating:</p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">{rating}</p>
            </div>
            </div>

            <div className="mt-8 flex gap-4">
               <button onClick={addData} className="btn bg-green-500">Read</button>
               <button onClick={wishAddData} className="btn bg-green-500">Wishlist</button>
            </div>
        </div>
     </div>
    </div>
  );
};

export default BookDetail;
