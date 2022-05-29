import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const ContactDetail = () => {

    const { id } = useParams()

    const url = `https://fathomless-bayou-46911.herokuapp.com/contactsDetails/${id}`;

    const { data, isLoading } = useQuery('contacts', () => fetch(url, {
        headers: {
            authentication: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    console.log(data)


    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='flex justify-center items-center'>


            {
                data && <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{data?.name}</h2>
                        <p>Number : {data?.number}</p>
                        <p>Email : {data?.email}</p>
                        <p>Address : {data?.address}</p>

                    </div>
                </div>
            }


        </div>
    );
};

export default ContactDetail;