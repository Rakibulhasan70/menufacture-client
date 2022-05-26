import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseProfile from '../../Hooks/UseProfile';
import auth from '../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const { id } = useParams()
    let [profile] = UseProfile(id)

    const handleUpdate = async (e) => {
        e.preventDefault()
        const education = e.target.education.value;
        const city = e.target.city.value;
        const phone = e.target.phone.value;


        const info = {
            education,
            city,
            phone
        }
        const newInfo = {
            ...info, email: email
        }

        const url = `https://cryptic-retreat-89844.herokuapp.com/myprofile/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(newInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Update Done')
            })
    }

    return (
        <div>
            <form onSubmit={handleUpdate} >
                <input type="text" placeholder="Name" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs  mt-3" />
                <br />
                <input type="email" placeholder="Email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs mt-2" />
                <br />
                <input type="text" placeholder="Education" name='education' required class="input input-bordered w-full max-w-xs mt-2" />
                <br />
                <input type="text" placeholder="City" name='city' required class="input input-bordered w-full max-w-xs mt-2" />
                <br />
                <input type="number" placeholder="Phone" name='phone' required class="input input-bordered mt-2 w-full max-w-xs" />
                <br />
                <input type="submit" value='Update' class="input input-bordered w-full mt-2 max-w-xs text-center bg-success text-lg" />
            </form>
        </div>
    );
};

export default UpdateProfile;