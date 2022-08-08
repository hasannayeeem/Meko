import { useEffect, useState } from "react";

const useProductDetail = (productId) =>{
    const [product, setProduct] = useState({});
    useEffect( () =>{
        const url = `https://ancient-bayou-13762.herokuapp.com/products/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));    
    }, [product]);
    return [product, setProduct]
}

export default useProductDetail;