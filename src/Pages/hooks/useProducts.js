import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    useEffect( () =>{
        fetch('https://ancient-bayou-13762.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setProductsLoading(false)
        });
    },[]);
    return [products, setProducts];
}
export default useProducts;