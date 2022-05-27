import React from 'react';
import AddBulkContack from '../UserModules/AddBulkContack';
import AddNewContact from '../UserModules/AddNewContact';


const Home = () => {


    return (
        <div>
            <h1 className='text-center'>Welcome to Address Book</h1>
            <AddBulkContack></AddBulkContack>

            <div className='flex justify-center items-center mb-10'>

            </div>

        </div>
    );
};

export default Home;