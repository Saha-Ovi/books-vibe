import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { IoLocationOutline } from 'react-icons/io5';
import { FaDatabase, FaUserFriends } from 'react-icons/fa';
import { MdOutlineContactPage } from 'react-icons/md';

const WishList = ({sortType}) => {
    const { wishList } = useContext(BookContext);
    const [filterWishBook,setFilterWishBook]=useState(wishList);

    useEffect(()=>{

        if(sortType)
        {
            if(sortType==="Page")
            {
                const sortBook=[...wishList].sort((a,b)=>a.totalPages-b.totalPages);
                setFilterWishBook(sortBook);
            }
            else if(sortType=== "Rating")
            {
                const sortBook=[...wishList].sort((a,b)=>a.rating-b.rating);
                setFilterWishBook(sortBook);
            }
        }



    },[sortType,wishList]);



      if(filterWishBook.length === 0)
        {
            return(
                <div className='text-center py-8 px-6 bg-gray-400 my-8 flex flex-col justify-center items-center'>
                    <span className='scale-350 mb-8'><FaDatabase /></span>
                    <h2>There is no data Available</h2>
                </div>
            );
        }
    return (
        <div>
                   {
                      filterWishBook.map(book => {
                           return (
                               <div className='container mx-auto my-8 shadow-md'>
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
                                               <span className='flex items-center gap-1 justify-center text-sm'><IoLocationOutline /> Year of Publishing : {book.yearOfPublishing} </span>
                                           </div>
                                           <div className='flex items-center gap-2 justify-center'>
                                               <p className='flex items-center gap-1 '><FaUserFriends /> Publisher :  {book.publisher}</p>
                                               <p className='flex items-center gap-1'> <MdOutlineContactPage /> Page : {book.totalPages} </p>
                                           </div>
                                           <div className='border-t border-gray-200 p-4 flex gap-2'>
                                               <p className='badge bg-blue-100 text-blue-500 p-4 rounded-full'>Category :{book.category}</p>
                                               <p className='badge bg-orange-100 text-orange-500 p-4 rounded-full'>Rating : {book.rating}</p>
                                               <p className='badge bg-green-500 text-white p-4 rounded-full'><a href="/">View Details</a></p>
                                           </div>
                                          
                                       </div>
                                   </div>
                               </div>
                           )
                       }
                       )
                   }
               </div>
    );
};

export default WishList;