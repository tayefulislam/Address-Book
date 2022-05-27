import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddBulkContack = () => {

    const [user, loading, error] = useAuthState(auth);

    const [bulkContact, setBulkContact] = useState([])

    const handleBulkContact = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const address = event.target.address.value;
        const intertByEmail = user?.email;
        const serachKey = `${name} ${number} ${email}  ${address}`

        const newContact = {
            name, email, number, address, intertByEmail, serachKey
        }

        // use .concat to make new array with new value

        let newBlukContact = bulkContact.concat(newContact)

        setBulkContact(newBlukContact)
        event.target.reset()



    }

    console.log(bulkContact)




    return (
        <div>

            <h1 className='text-3xl lg:text-4xl font-bold text-center mb-2'>Add  Contact In Bulk</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2 mb-10'>
                {

                    bulkContact?.map(contact => <div class="card w-full  bg-neutral text-neutral-content ">
                        <div class="card-body items-center text-center py-1">
                            <h2 class="card-title">{contact?.name}</h2>
                            <p>{contact?.number}</p>
                            <p>{contact?.email}</p>
                            <p>{contact?.address}</p>

                        </div>
                    </div>)

                }
            </div>

            <div className='flex justify-center items-center mb-10'>
                <button className='btn btn-error' disabled={bulkContact.length === 0}><span className='text-white'>Submit Bulk Contact</span></button>

            </div>


            <div className='flex justify-center items-center mb-10'>
                <div className="card w-96 bg-gray-200 shadow-xl">
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Add Bulk Contact</h2>


                        <form onSubmit={handleBulkContact}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>

                                <input type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                    name='name'
                                    required



                                />



                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>

                                <input type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full max-w-xs"
                                    name='email'


                                />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>

                                </label>

                                <input type="text"
                                    placeholder="Contact Number"
                                    className="input input-bordered w-full max-w-xs"
                                    name='number'
                                    required

                                />

                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>

                                </label>

                                <input type="text"
                                    placeholder="Address"
                                    className="input input-bordered w-full max-w-xs"
                                    name='address'
                                    required

                                />

                            </div>

                            <input className='btn  w-full max-w-xs mt-3' type="submit" value="Add To List+" />
                        </form>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default AddBulkContack;