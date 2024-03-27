import { toast } from "react-toastify";

export const setReadBookDataLS = (data) => {
    const saveReadBook = JSON.parse(localStorage.getItem('ReadBook')) || [];
    const exitReadBook = saveReadBook.find(item => item.bookId == data.bookId)
    if (!exitReadBook) {
        saveReadBook.push(data)
        toast("book added to readlist")
        localStorage.setItem("ReadBook", JSON.stringify(saveReadBook));


    } else {
        toast.warning("already added!")

    }
}
export const getReadBookDataLS = () => {
    const getBook = JSON.parse(localStorage.getItem('ReadBook')) || [];
    return getBook
}

export const setWishBookDataLS = (data) => {
    const saveWishListBook = JSON.parse(localStorage.getItem('WishListBook')) || [];
    const existInWishList = saveWishListBook.find(item => item.bookId == data.bookId);
    if (!existInWishList) {
        const saveReadBook = JSON.parse(localStorage.getItem('ReadBook')) || [];
        const exitReadBook = saveReadBook.find(item => item.bookId == data.bookId)
        if (!exitReadBook) {
            saveWishListBook.push(data);
            toast("book added to wishlist")

            localStorage.setItem("WishListBook", JSON.stringify(saveWishListBook));
        }else{
            toast.warning('you have already read this book')
        }

    } else {
        toast.warning("already added!")
    }
}

export const getWishListBookDataLS = () => {
    const getWishListBook = JSON.parse(localStorage.getItem('WishListBook')) || [];
    return getWishListBook
}
// saveWishListBook.push(data);
// toast("book added wish List")

// localStorage.setItem("WishListBook", JSON.stringify(saveWishListBook));
