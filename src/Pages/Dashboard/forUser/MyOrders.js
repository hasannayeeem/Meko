import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useOrders from '../../hooks/useOrders';

const MyOrders = () => {
    const [orders, setOrders] = useOrders();
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
        if(proceed){
            const url = `https://ancient-bayou-13762.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(o => o._id  !== id);
                setOrders(remaining);
            })
        }
    }
    useEffect(() => {
        if (user) {
            fetch(`https://ancient-bayou-13762.herokuapp.com/orders?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setMyOrders(data);
                });
        }
    }, [orders, setOrders]);
    return (
        <div>
            <h2>My Orders: {myOrders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.pName || a.name}</td>
                                <td>{a.quantity}</td>
                                <td>{a.phone}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                        </div>}
                                </td>
                                <td>{a.paid ? '' : <button className='btn btn-xs btn-outline btn-error' onClick={() => handleDelete(a._id)}>cencal</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;