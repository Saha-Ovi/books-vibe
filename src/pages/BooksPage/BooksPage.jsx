import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../components/List/ReadList';
import WishList from '../../components/List/WishList';

const BooksPage = () => {
    // const { readBook, wishList } = useContext(BookContext);
    return (
        <div className='container mx-auto'>
          
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadList></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BooksPage;