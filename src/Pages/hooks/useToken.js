import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    // console.log(user);
    useEffect(() =>{
        const email = user?.user?.email;
        const currentUser = {email: email, address: 'example: up(3126), Osmaninagar, Sylhet', edu: 'Degree, institute, location',  name: user?.user?.displayName, phone: '+880 1??? ?? ?? ??', linkedin: 'https://www.linkedin.com/in/example/'};
        console.log(currentUser);
        if(email){
            fetch(`https://ancient-bayou-13762.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
        // console.log('user inside useToken', user);
    },[user]);
    return [token];
}
export default useToken;