import React from 'react';

const MakeAdminRow = ({ makeAdmin }) => {
    const { email, role } = makeAdmin;
    const makeAdmins = () => {
        // const url = `http://localhost:5000/user/admin/${email}`
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            // body: JSON.stringify(makeAdmin),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }
    return (

        <tr>
            <th>1</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeAdmins} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>

    );
};

export default MakeAdminRow;