import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../components/List/ReadList';
import WishList from '../../components/List/WishList';

const BooksPage = () => {
    // const { readBook, wishList } = useContext(BookContext);
    const [sortType,setSortType]=useState('');
    console.log(sortType);
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center  items-center'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>setSortType("Page")}>Page</a></li>
                        <li><a onClick={()=>setSortType("Rating")}>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadList sortType={sortType}></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList sortType={sortType}></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BooksPage;