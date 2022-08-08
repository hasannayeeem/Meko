import React from 'react';
import OrdersRow from './OrdersRow';
import useOrders from '../../hooks/useOrders';
import Loading from '../../Shared/Loading';
import PageTitle from '../../Shared/PageTitle';
const AllOrders = () => {
    const [orders, setOrders] = useOrders();
    if(!orders.length){
        <Loading></Loading>
    }
    return (
        <div className=''>
            <PageTitle title="Manage orders"></PageTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrdersRow
                            key={order._id}
                            index={index}
                            order={order}
                            orders={orders}
                            setOrders={setOrders}
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;