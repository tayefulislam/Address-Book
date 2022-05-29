import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = ({ contact, contacts, setContacts }) => {

    const navigate = useNavigate()


    const handleDelete = (id) => {



        const deleteConfirm = window.confirm('Are you sure to delete this item ?')

        if (deleteConfirm) {

            const url = `https://fathomless-bayou-46911.herokuapp.com/contact/delete/${id}`
            console.log(url)

            fetch(url, {
                method: "POST",
                headers: {
                    authentication: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {


                    console.log(data)
                    if (data?.deletedCount) {

                        toast.success('Item Deleted')

                        const newList = contacts.filter(contact => contact._id !== id)
                        setContacts(newList)

                    }


                })


        }



    }

    return (
        <div className="card w-fill bg-gray-100 shadow-xl m-2">

            <div className="card-body py-3">
                <h2 className="card-title">
                    {contact?.name}
                </h2>
                <p>{contact?.number}</p>
                <div className="card-actions justify-end">
                    <div onClick={() => navigate(`/contactsDetails/${contact?._id}`)} className="badge badge-outline">Details</div>
                    <div onClick={() => navigate(`/updateContact/${contact?._id}`)}
                        className="badge badge-outline">Update</div>
                    <div onClick={() => handleDelete(contact?._id)}
                        className="badge badge-outline">Delete</div>
                </div>
            </div>

        </div>
    );
};

export default Contact;