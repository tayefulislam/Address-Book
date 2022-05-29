import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';



const UpdateContact = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams()

    const url = `https://fathomless-bayou-46911.herokuapp.com/contactsDetails/${id}`

    const { isLoading, data, refetch } = useQuery('updateContact', () => fetch(url, {
        headers: {

            authentication: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()))


    if (isLoading || loading) {
        return <Loading></Loading>
    }




    const handleUpdateContact = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const address = event.target.address.value;
        const intertByEmail = user?.email;
        const serachKey = `${name} ${number} ${email}  ${address}`

        const updateContact = {
            name, email, number, address, intertByEmail, serachKey
        }
        console.log(updateContact)

        const url = `https://fathomless-bayou-46911.herokuapp.com/updateContact/${id}`;

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

                authentication: `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(updateContact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount === 0) {
                    toast.error("Your Can't Update Data Without Changing any thing")
                    refetch()
                }

                if (data.modifiedCount > 0) {
                    toast.success("Contact Details Updated")
                    refetch()
                }


            })
    }



    return (
        <div>

            <div className='flex justify-center items-center mb-10'>
                <div className="card w-96 bg-gray-200 shadow-xl">
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Add New Contact</h2>


                        <form onSubmit={handleUpdateContact}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>

                                <input type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                    name='name'
                                    required
                                    defaultValue={data?.name}



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
                                    defaultValue={data?.email}


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
                                    defaultValue={data?.number}

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
                                    defaultValue={data?.address}

                                />

                            </div>

                            <input className='btn  w-full max-w-xs' type="submit" value="Update" />
                        </form>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateContact;