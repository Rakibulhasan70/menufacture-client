import { useEffect, useState } from 'react';

const UseProfile = Id => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const url = `https://cryptic-retreat-89844.herokuapp.com/myprofile/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [profile])
    return [profile, setProfile]
};

export default UseProfile;