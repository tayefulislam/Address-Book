import React from 'react';
import AddNewContact from '../UserModules/AddNewContact';


const Home = () => {


    return (
        <div>
            <h1 className='text-center'>Welcome to Address Book</h1>
            <AddNewContact></AddNewContact>

            <div className='flex justify-center items-center mb-10'>

            </div>

        </div>
    );
};

export default Home;