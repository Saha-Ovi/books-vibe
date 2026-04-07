import React, { useState } from 'react';
import { BookContext } from './BookContext';
import { toast } from 'react-toastify';
import { addReadBookListToLocal, addWishBookListToLocal, getAllReadBookListFromLocal, getAllWishBookListFromLocal } from '../utilities/localDB';



const BookProvider = ({ children }) => {
    const [readBook, setReadBook] = useState(()=>getAllReadBookListFromLocal());
    const [wishList, setWishList] = useState(()=>getAllWishBookListFromLocal());
    const handleMarkAsRead = (currentBook) => {
        const isExist = readBook.find(book => book.bookId === currentBook.bookId)
        if (isExist) {
           toast.error(`${currentBook.bookName} is in the read list`);
        }
        else {
            setReadBook([...readBook, currentBook]);
            addReadBookListToLocal(currentBook);
            toast.success(`${currentBook.bookName} is added to the read list`);
        }
        console.log(readBook);
    }
    const handleWishList = (currentBook) => {

     const isReadList= readBook.find(book=>book.bookId === currentBook.bookId);

     if(isReadList)
     {
        toast.warning(`${currentBook.bookName} is in the read list`);
        return;
     }


        const isExist = wishList.find(book => book.bookId === currentBook.bookId)
        if (isExist) {
            toast.error(`${currentBook.bookName} is in the wish list`);
        }
        else {
            setWishList([...wishList, currentBook]);
            addWishBookListToLocal(currentBook);
            toast.success(`${currentBook.bookName} is added to the wish list`);
        }
        console.log(wishList);
    }



    const data={
        readBook,
        setReadBook,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList

    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;