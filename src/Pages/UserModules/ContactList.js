import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Contact from './Contact';

const ContactList = () => {




    const [user, loading, error] = useAuthState(auth);
    const [contacts, setContacts] = useState([]);
    const [totalContacts, setTotalContacts] = useState([])


    const [page, setPage] = useState(0)



    useEffect(() => {

        fetch(`http://localhost:5000/contacts/${user?.email}?page=${page}&size=5`)
            .then(res => res.json())
            .then(data => {
                setContacts(data)

            })


    }, [page, user])


    useEffect(() => {

        fetch(`http://localhost:5000/contacts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setTotalContacts(data)

            })


    }, [user])


    const selectPage = (number) => {
        setPage(number)

    }


    console.log(Math.ceil(contacts.length))





    return (
        <div>


            {
                contacts && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2 mb-10'>

                    {
                        contacts?.map((contact, index) => <Contact
                            key={index}
                            contact={contact}


                        ></Contact>)
                    }
                </div>
            }


            {/* pagination */}

            <div>





                <div className='flex justify-center items-center'>
                    <div class="btn-group">



                        {
                            [...Array(Math.ceil(totalContacts.length / 5)).keys()].map(number => <button
                                className={page === number ? 'btn btn-active' : 'btn'}
                                onClick={() => selectPage(number)} key={number}>{number + 1}</button>)
                        }

                    </div>
                </div>




            </div>


        </div>
    );
};

export default ContactList;