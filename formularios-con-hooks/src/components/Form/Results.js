import React from 'react';

const Results = (props) => {
    const { firstName,lastName,email,password,confirmPassword }= props.data
    return (
        <div>
            <h3>Your Form Data</h3>
            
            <p>First Name { firstName }</p>
            <p>Last Name { lastName }</p>
            <p>email { email }</p>
            <p>password { password }</p>
            <p>Confirm Password { confirmPassword }</p>
            
        </div>
    );
}

export default Results;
