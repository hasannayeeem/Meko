import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-72 h-72' src="https://st.depositphotos.com/2101611/3925/v/950/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="Album" /></figure>
            <div class="card-body">
                <div className="text-2xl text-neutral font-bold">{user.displayName}</div>
                <div className="text-xl text-neutral font-bold">{user.email}</div>
                <div className="text-xl text-neutral font-bold">Address: </div>
                <div className="text-xl text-neutral font-bold">Education: </div>
                <div className="text-xl text-neutral font-bold">Phone: </div>
                <div className="text-xl text-neutral font-bold">Linkedin: </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">update</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;