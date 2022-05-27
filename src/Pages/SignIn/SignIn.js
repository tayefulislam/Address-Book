import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (event) => {

        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;



    }

    return (
        <div className='flex justify-center items-center mb-10'>
            <div className="card w-96 bg-gray-200 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    <form onSubmit={handleLogin}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            <input type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                name='email'
                                required



                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                name='password'
                                required

                            />



                        </div>




                        <input className='btn  w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <p className='text-lg'><small>Don't Have Account? <Link className='text-error font-semibold' to='/register'>Sign Up</Link ></small></p>






                </div>
            </div>
        </div>
    );
};

export default SignIn;