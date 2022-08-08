import { useEffect, useState } from "react"

const useOrders = () =>{
    const [orders, setOrders] = useState([]);
    useEffect( () =>{
        fetch('https://ancient-bayou-13762.herokuapp.com/allorder')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[orders, setOrders]);
    return [orders, setOrders];
}
export default useOrders;