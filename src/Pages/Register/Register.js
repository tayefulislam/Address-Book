import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    let navigate = useNavigate();

    const [token] = useToken(user);



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {

        const { email, password, name } = data;
        const displayName = name;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
        console.log(data)

    };


    if (token) {
        navigate('/')
    }


    return (
        <div className='flex justify-center items-center mb-10 '>
            <div className="card w-96 bg-gray-200 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>

                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {

                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },


                                })}


                            />


                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.name.message}</span>}



                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            <input type="text"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: 'Please Enter A Email Address'
                                    },

                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Plase Provied a Valid Email Adderess',
                                    }
                                })}


                            />


                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt  text-red-500 text-sm">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'Please Enter A Password'
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Plase Provied A password whice content more than 6 character'
                                    }
                                })}


                            />


                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}


                            </label>
                        </div>





                        <input className='btn  w-full max-w-xs' type="submit" value="Signup" />
                    </form>

                    <p className='text-lg'><small>Already Have Account? <Link className='text-error font-semibold' to='/login'>Login</Link ></small></p>



                </div>
            </div>
        </div>
    );
};

export default Register;