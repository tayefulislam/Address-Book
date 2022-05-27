import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddNewContact = () => {

    const [user, loading, error] = useAuthState(auth);




    const handleNewContact = (event) => {
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
        console.log(newContact)

        const url = `http://localhost:5000/addNewContact`;

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {

                    event.target.reset()
                    toast.success("New Contact Saved")



                }
            })
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