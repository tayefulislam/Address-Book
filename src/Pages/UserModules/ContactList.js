import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Contact from './Contact';

const ContactList = () => {

    const [user, loading, error] = useAuthState(auth);





    const url = `http://localhost:5000/contacts/${user?.email}`


    const { data, isLoading } = useQuery('contacts', () => fetch(url).then(res => res.json()))


    console.log(data)

    if (isLoading || !data) {
        return <Loading></Loading>
    }




    return (
        <div>


            {
                data && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2 mb-10'>

                    {
                        data?.map((contact, index) => <Contact
                            key={index}
                            contact={contact}
                        ></Contact>)
                    }
                </div>
            }





        </div>
    );
};

export default ContactList;