import React from 'react';
import useQuery from 'use-query';
import useUsers from '../../hooks/useUsers';
import Loading from '../../Shared/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    // const {data: users, isLoading} = useQuery('users', () => fetch('https://ancient-bayou-13762.herokuapp.com/user').then(res=>res.json()));
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    const [users] = useUsers();
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=><UsersRow
                                index={index}
                                key={user._id}
                                user={user}
                                // refetch={refetch}
                                ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;