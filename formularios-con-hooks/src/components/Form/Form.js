import React, { useState } from 'react'
import styles from'./Form.module.css'

const Form = (props) => {

    const {inputs, setInputs} = props;
    
    const onChange = (e) => {
        setInputs({
            ...inputs,
        [e.target.name]:e.target.value 
    })
    }
    return (
        <div>
            <form>
                <div className={styles['input']}>
                    <label htmlFor="firtsName">First Name</label>
                    <input type="text" name="firstName" placeholder='your first name...' onChange={onChange} />
                </div>
                <div className={styles['input']}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" placeholder='your last name...' onChange={onChange} />
                </div>
                <div className={styles['input']}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder='your email...' onChange={onChange} />
                </div>
                <div className={styles['input']}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Password' onChange={onChange} />
                </div>
                <div className={styles['input']}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder='confirm password' onChange={onChange} />
                </div>
            </form>
        </div>
    );
}

export default Form;
