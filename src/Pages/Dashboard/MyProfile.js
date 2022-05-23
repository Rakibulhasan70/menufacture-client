import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const email = user?.email

    const handleSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value;
        const education = e.target.education.value;
        const city = e.target.city.value;
        const phone = e.target.phone.value;


        const info = {
            name,
            education,
            city,
            phone
        }
        const newInfo = {
            ...info, email: email
        }

        await axios.post('http://localhost:5000/myprofile', newInfo)
            .then(function (res) {
                if (res?.data?.insertedId) {
                    toast('Save Information')
                }
            })
    }


    // ///// showing information section ////////////

    const [profiles, setProfile] = useState([])
    useEffect(() => {

        const run = async () => {
            await axios.get(`http://localhost:5000/myprofile/${email}`)
                .then(function (res) {
                    setProfile(res.data)
                })

        }
        run()
    }, [profiles, setProfile])


    return (
        <div>
            <h2 className='text-3xl font-semibold my-5 text-purple-500'>My profile</h2>
            <div className='grid grid-cols-1 lg: grid-cols-2'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name='name' value={user?.displayName} class="input input-bordered w-full max-w-xs  mt-3" />
                        <br />
                        <input type="email" placeholder="Email" name='email' value={user?.email} class="input input-bordered w-full max-w-xs mt-2" />
                        <br />
                        <input type="text" placeholder="Education" name='education' class="input input-bordered w-full max-w-xs mt-2" />
                        <br />
                        <input type="text" placeholder="City" name='city' class="input input-bordered w-full max-w-xs mt-2" />
                        <br />
                        <input type="number" placeholder="Phone" name='phone' class="input input-bordered mt-2 w-full max-w-xs" />
                        <br />
                        <input type="submit" value='Submit' class="input input-bordered w-full mt-2 max-w-xs text-center bg-success" />
                    </form>
                </div>
                {/* ///////////////////////  show information ///////////////////////// */}
                <div>
                    {
                        profiles.map(profile => <div>
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Name: {profile.name}</h2>
                                    <h2>Email: {profile.email}</h2>
                                    <h2>Education: {profile.education}</h2>
                                    <h2>City: {profile.city}</h2>
                                    <h2>Phone: {profile.phone}</h2>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProfile; <h2>My profile</h2>