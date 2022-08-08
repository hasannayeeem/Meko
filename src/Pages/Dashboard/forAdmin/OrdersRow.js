import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const OrdersRow = ({index, order, orders, setOrders}) => {
    const {name, _id, quantity, address, phone, pName, paid } = order;
    const [user] = useAuthState(auth);
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
    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-bold'>{pName}</td>
            <td>{quantity}</td>
            <td className='font-bold'>{address}</td>
            <td className='font-bold'>{phone}</td>
            <td>{user.role !== 'admin' && <button className='border-0'  >{paid ? "pending" : <FontAwesomeIcon onClick={() => handleDelete(_id)} className='text-red-500' icon={faTrashCan} />}</button>}</td>
        </tr>
    );
};

export default OrdersRow;