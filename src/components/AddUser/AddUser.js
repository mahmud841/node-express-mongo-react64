import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleuser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name, email};
        fetch('http://localhost:5000/users', {
            method: "POST", 
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Successfully added the user ')
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Please add an User Here </h1>
            <form onSubmit={handleuser} >
                <input type="text" ref={nameRef}  />
                <input type="email" name="" id="" ref={emailRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;