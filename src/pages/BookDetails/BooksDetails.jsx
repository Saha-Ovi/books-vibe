import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

// way 1 data load
// const booksPromise = fetch("/booksData.json").then(res => res.json());

const BooksDetails = () => {
    // const params = useParams();
    const { Id } = useParams();
    // console.log(params);

    // way 1
    // const books = use(booksPromise);
    // console.log(books);
    // way 2
    const books = useLoaderData();
    // console.log(books);
    const book = books.find(book => book.bookId === Number(Id));
    // console.log(book);
        
    const{handleMarkAsRead, handleWishList  } =useContext(BookContext);
    return (
        <div className='container mx-auto my-8'>
            <div className="grid grid-cols-2  bg-base-100 shadow-sm h-full">
                <figure className='w-full flex justify-center items-center h-full'>
                    <img
                        src={book.image}
                        alt="Album" 
                        className='max-h-[400px] object-contain'
                        />
                </figure>
                <div className="card-body h-full">
                    <h2 className="card-title text-3xl font-bold">{book.bookName}</h2>
                    <p className='text-xl font-semibold'>By : {book.author}</p>
                    <div className='border-y border-gray-400'>
                        <p className='text-lg'>{book.category}</p>
                    </div>
                    <p className='text-sm'>Review: {book.review} </p>
                    <div className='flex gap-4 '>
                        {
                            book.tags.map((tag, index) => <div key={index} className="badge bg-green-100 text-green-600"> # {tag}</div>
                            )
                        }
                    </div>
                    <div className='border-t border-gray-400'>
                        <div className='grid grid-cols-[180px_1fr] items-center'>

                          <span className='text-lg font-semibold'>Number of Pages : </span> 
                          <span>{book.totalPages}</span> 
                        </div>
                        <div className='grid grid-cols-[180px_1fr] items-center'>

                          <span className='text-lg font-semibold'>Publisher :  </span>  
                          <span>{book.publisher}</span>
                        </div>
                        <div className='grid grid-cols-[180px_1fr] items-center'>

                          <span className='text-lg font-semibold'> Year Of Publishing :  </span> 
                          <span>{book.yearOfPublishing}</span> 
                        </div>
                        <div className='grid grid-cols-[180px_1fr] items-center'>

                          <span className='text-lg font-semibold'>Rating :  </span> 
                          <span>{book.rating}</span> 
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary" onClick={()=>handleMarkAsRead(book)}>Mark As Read</button>
                        <button className="btn btn-secondary" onClick={()=>handleWishList(book)}>Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;