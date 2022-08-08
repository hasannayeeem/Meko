import { useEffect, useState } from "react"

const useUser = (user) => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://ancient-bayou-13762.herokuapp.com/user/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => setProfile(data));
        }
    }, [user, setProfile]);
    return [profile, setProfile];
}
export default useUser;