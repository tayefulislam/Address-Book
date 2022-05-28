import React from 'react';
import AddBulkContact from '../UserModules/AddBulkContact';

import AddNewContact from '../UserModules/AddNewContact';
import ContactList from '../UserModules/ContactList';
import Search from '../UserModules/Search';


const Home = () => {





    return (
        <div >
            <h1 className='text-center text-2xl text-red-500'>Welcome to Address Book</h1>
            <Search></Search>
            <ContactList></ContactList>


        </div>
    );
};

export default Home;