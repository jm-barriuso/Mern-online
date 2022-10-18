import React, { useEffect, useState } from 'react'
import styles from'./Form.module.css'

const Form = (props) => {
    
    const {inputs, setInputs} = props;
    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })


    const onChange = (e) => {
        setInputs({
            ...inputs,
        [e.target.name]:e.target.value 
    })
    }
    
    function validar() {
        const erroresAux = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        } 
        if(firstName.length<2){
            erroresAux.firstName="el campo debe tener al menos 2 caracteres"
        };
        if(lastName.length<2){
            erroresAux.lastName="el campo debe tener al menos 2 caracteres"
        };
        if(email.length<5){
            erroresAux.email="el campo debe tener al menos 5 caracteres"
        };
        if(password.length<8){
            erroresAux.password="la  contraseña debe tener al menos 8 caracteres"
        };
        if( password!== confirmPassword){
            erroresAux.password="las contraseñas deben coincidir"
            
        }
        setErrors(erroresAux)
    }

    useEffect(() => {
        console.log("El form info cambio, y estos son sus valores: ",errors)
        validar()
    }, [inputs]);

    const {firstName, lastName, email, password, confirmPassword} = inputs;

    return (
        <div>
            <form>
                <div className={styles['input']}>
                    <label htmlFor="firtsName">First Name</label>
                    <input 
                    type="text" 
                    name="firstName" 
                    placeholder='your first name...' 
                    onChange={onChange} />
                    {
                        inputs.firstName?
                        <p>{errors.firstName}</p>:
                        ''
                        }
                </div>
                <div className={styles['input']}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" placeholder='your last name...' onChange={onChange} />
                    {   
                        inputs.lastName?
                        <p>{errors.lastName}</p>:
                        ''
                    }
                </div>
                <div className={styles['input']}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder='your email...' onChange={onChange} />
                    {
                        inputs.email?
                        <p>{errors.firstName}</p>:
                        ''
                        }
                </div>
                <div className={styles['input']}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Password' onChange={onChange} />
                    {
                        inputs.password?
                        <p>{errors.password}</p>:
                        ''
                        }
                </div>
                <div className={styles['input']}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder='confirm password' onChange={onChange} />
                    {
                        inputs.confirmPassword?
                        <p>{errors.password}</p>:
                        ''
                        }
                </div>
            </form>
        </div>
    );
}

export default Form;
