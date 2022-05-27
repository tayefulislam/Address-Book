import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewContact = () => {

    const [user, loading, error] = useAuthState(auth);




    const handleNewContact = (event) => {
        event.preventDefault()

        const newContact = {
            name: event.target.name.value,
            email: event.target.email.value,
            number: event.target.number.value,
            address: event.target.address.value,
            intertBy: user?.email


        }
        console.log(newContact)
    }
    return (
        <div>

            <div className='flex justify-center items-center mb-10'>
                <div className="card w-96 bg-gray-200 shadow-xl">
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Add New Contact</h2>


                        <form onSubmit={handleNewContact}>


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




                            <input className='btn  w-full max-w-xs' type="submit" value="Add" />
                        </form>







                    </div>
                </div>
            </div>



        </div>
    );
};

export default AddNewContact;