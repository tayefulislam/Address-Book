import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = ({ contact }) => {

    const navigate = useNavigate()

    return (
        <div class="card w-fill bg-gray-100 shadow-xl m-2">

            <div class="card-body py-3">
                <h2 class="card-title">
                    {contact?.name}
                </h2>
                <p>{contact?.number}</p>
                <div class="card-actions justify-end">
                    <div onClick={() => navigate(`/contactsDetails/${contact?._id}`)} class="badge badge-outline">Details</div>
                    <div class="badge badge-outline">Update</div>
                </div>
            </div>

        </div>
    );
};

export default Contact;