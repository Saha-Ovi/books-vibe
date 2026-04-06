import React from 'react';
import bannerImg from '../../assets/book.png'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero bg-base-200 min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg "
                    />
                    <div className='space-y-5'>
                        <h1 className="text-5xl font-extrabold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn btn-primary">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;