import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = ({ contact }) => {

    const navigate = useNavigate()


    const handleDelete = (id) => {



        const deleteConfirm = window.confirm('Are you sure to delete this item ?')

        if (deleteConfirm) {

            const url = `http://localhost:5000/contact/delete/${id}`
            console.log(url)

            fetch(url, {
                method: "POST",
            })
                .then(res => res.json())
                .then(data => {


                    console.log(data)
                    if (data?.deletedCount) {

                        toast.success('Item Deleted')

                    }


                })


        }



    }

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
                    <div onClick={() => handleDelete(contact?._id)}
                        class="badge badge-outline">Delete</div>
                </div>
            </div>

        </div>
    );
};

export default Contact;