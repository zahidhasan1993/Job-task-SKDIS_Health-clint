import React from 'react';
import Navbar from './Navbar';
import Form from './Form';

const AddUser = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='my-40'>
            <Form></Form>
            </div>
        </div>
    );
};

export default AddUser;