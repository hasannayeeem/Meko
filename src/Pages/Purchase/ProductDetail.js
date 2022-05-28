import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const [user] = useAuthState(auth);
    const { _id, name, img, description, availableQuantity, minimumOrderQuantity, price } = product;
    const handleOrder = () =>{

    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div class="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
            <img className='w-72 h-32 hidden  lg:block rounded-xl' src={img} alt={img}/>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <img className='lg:hidden w-80 h-48 rounded-xl' src={img} alt={img}/>
                    </div>
                <div class="card-body">
                <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="py-2">{description}</p>
                    <p className="py-2">In Stock: {availableQuantity}</p>
                    <p className="py-2">Min-order{minimumOrderQuantity}</p>
                    <div className='flex'>
                        <button className="btn btn-primary"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                        <input type="number" min="100" name="quantity" className="text-center" value={minimumOrderQuantity || ''} />
                        <button className="btn btn-primary"><FontAwesomeIcon className='' icon={faPlus}></FontAwesomeIcon></button>
                     
                        <input onClick={handleOrder} class="btn btn-primary rounded-full font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary" value="checkoout"></input>
                    </div>
                </div>
            </div>



            {/* <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
                </div>
            </div> */}
        </div>
    );
};

export default ProductDetail;