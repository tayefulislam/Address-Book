import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    console.log(user)
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Address Book</Link>
            </div>
            <div className="flex-none gap-2">


                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabIndex="0" className=" p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">


                        <li><Link to='newContact'>New Contact</Link></li>


                        {
                            user ? <li><button onClick={() => signOut(auth)} className='btn btn-error btn-sm mt-1 '> Sign Out</button></li> : <li><Link to='login'>Login</Link></li>
                        }




                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;