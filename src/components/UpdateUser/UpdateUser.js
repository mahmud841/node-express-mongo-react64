import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    // const [user, setUser] = useState({name : '', email: ''} );
    const [user, setUser] = useState({});
    const {id} = useParams();
    

    useEffect(() =>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[])

//Update User 
const handlenameChange = e => {
 const updateName = e.target.value;
 const updateUser = {name: updateName, email: user.email};
 setUser(updateUser);
}

const handleEmailChange = e => {
    const updatedEmail = e.target.value;
   /*  const updateUser = {...user};
    updateUser.email = updatedEmail; */
    const updatedUser = {name: user.name , email: updatedEmail};
    setUser(updatedUser);
}

    const handleUpdateUser = e => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'PUT', 
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.modifiedCount > 0 ) {
                alert('Updated Successfully');
                setUser({});
            }
            
        })
        e.preventDefault();
    }

    

    return (
        <div>
            <h2> Update: {user.name} {user.email} </h2>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateUser} >
            <input type="text" onChange={handlenameChange} value={user.name || '' } />
            <input type="email" onChange={handleEmailChange} value={user.email || ''} />
            <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;