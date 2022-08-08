import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUser from '../hooks/useUser';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useUser(user);
    const {_id, address, edu, phone, linkedin} = profile;
    return (
        <div className="card lg:card-side bg-white shadow-xl">
            <figure><img className='w-72 h-72' src={ user.photoURL ? user.photoURL : `https://st.depositphotos.com/2101611/3925/v/950/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg` } alt={user.photoURL} /></figure>
            <div className="card-body">
                <div className="text-2xl text-neutral font-bold"><span className=''>{user.displayName}</span></div>
                <div className="text-xl text-neutral font-bold"><span className=''>{user.email}</span></div>
                <div className="text-xl text-neutral font-bold">User ID: <span className='font-semibold'>{_id}</span></div>
                <div className="text-xl text-neutral font-bold">Address: <span className='font-semibold'>{address}</span></div>
                <div className="text-xl text-neutral font-bold">Education: <span className='font-semibold'>{edu}</span></div>
                <div className="text-xl text-neutral font-bold">Phone: <span className='font-semibold'>{phone}</span></div>
                <div className="text-xl text-neutral font-bold">Linkedin: <span className='font-semibold'>{linkedin}</span></div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">update</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;