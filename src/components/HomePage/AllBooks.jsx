import React, { use } from 'react';
import BookCard from '../Card/BookCard';




const booksPromise=fetch("/booksData.json").then(res=>res.json());
const AllBooks = () => {
    const books=use(booksPromise);
    console.log(books);
    return (
        <div className='container mx-auto my-8 space-y-8'>
            <h2 className='text-2xl font-bold text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    books.map((book,index)=><BookCard key={index} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;