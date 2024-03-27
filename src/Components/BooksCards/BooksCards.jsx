
import useBooksData from "../../CustomHooks/Hooks";
import BooksLayout from "../BooksLayout/BooksLayout";


const BooksCards = () => {
    const {booksData}= useBooksData()
   
   


 
    return (
      <div>
        <h1 className="text-[40px] text-center font-bold mb-[40px]">Books</h1>
        {/* main div */}
       <div className="grid grid-cols-1 lg:grid-cols-3">
        {
            booksData.map(book => <BooksLayout book={book} key={book.bookId}></BooksLayout>)
        }
      
        
       </div>

      </div>
    );
};

export default BooksCards;
