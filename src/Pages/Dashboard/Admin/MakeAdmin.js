import React, { useEffect, useState } from 'react';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const [makeAdmins, setMakeAdmins] = useState([])
    useEffect(() => {
        fetch('https://cryptic-retreat-89844.herokuapp.com/user')
            .then(res => res.json())
            // .then(data=>setReviews(data))
            .then(data => setMakeAdmins(data))
    }, [makeAdmins])
    return (
        <div>
            <h2 className="text-2xl">All Users: {makeAdmins.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            makeAdmins.map(makeAdmin => <MakeAdminRow
                                key={makeAdmin._id}
                                makeAdmin={makeAdmin}

                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;