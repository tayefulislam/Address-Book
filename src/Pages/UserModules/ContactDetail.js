import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const ContactDetail = () => {

    const { id } = useParams()

    const url = `http://localhost:5000/contactsDetails/${id}`;

    const { data, isLoading } = useQuery('contacts', () => fetch(url).then(res => res.json()))

    console.log(data)


    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='flex justify-center items-center'>


            {
                data && <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{data?.name}</h2>
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