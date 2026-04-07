import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const BooksPage = () => {
    const {readBook, wishList }=useContext(BookContext);
    return (
        <div className='container mx-auto'>
            <h2>ReadBook : {readBook.length}</h2>
            <h2>Wish list : {wishList.length}</h2>
        </div>
    );
};

export default BooksPage;