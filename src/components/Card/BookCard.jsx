import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <div >
            <Link
            to={`/bookDetails/${book.bookId}`}
            
            className="card bg-base-100 shadow-sm">
                <figure className='p-4'>
                    <div className='bg-gray-300 p-8'>
                        <img
                        src={book.image}
                        alt={book.bookName}
                        className='h-56 ' />
                    </div>

                </figure>
                <div className="card-body">
                    <div className='flex gap-4'>
                        {
                            book.tags.map((tag,index)=><div key={index} className="badge bg-green-100 text-green-500">{tag}</div>
                        )
                        }
                    </div>
                    <h2 className="card-title text-2xl text-bold"> {book.bookName} </h2>
                    <p className='text-xl font-semibold'>By : {book.author}</p>

                    <div className="card-actions justify-between border-t border-dashed border-gray-300 ">
                        <div className="text-xl font-semibold mt-3">{book.category}</div>
                        <div className=" flex gap-2 text-xl items-center mt-3">{book.rating}<FaRegStar /> </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;