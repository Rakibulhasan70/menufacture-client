import { useEffect, useState } from 'react';

const UseProfile = Id => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/myprofile/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [profile])
    return [profile, setProfile]
};

export default UseProfile;