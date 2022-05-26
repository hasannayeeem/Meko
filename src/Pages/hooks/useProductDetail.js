import { useEffect, useState } from "react";

const useProductDetail = (productId) =>{
    const [product, setProduct] = useState({});
    useEffect( () =>{
        const url = `http://localhost:1010/products/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));    
    }, []);
    return [product, setProduct]
}

export default useProductDetail;