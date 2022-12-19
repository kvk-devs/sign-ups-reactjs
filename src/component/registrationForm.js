import React, { useState, setState, useEffect } from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";
// img 
import img from './img/image.png';
// const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";


import './style.css'
function RegistrationForm() {
    
    // history
    const navigate = useNavigate();

    const [phone, setphone] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "phone") {
            setphone(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }
    // return admin panel


    const handleSubmit = () => {
        // console.log( email, phone, password, confirmPassword);
        // email password phone error
        if (email === null || phone === null || password === null || confirmPassword === null) {
            alert("please fill all the fields");
        }
        if (email === "admin@admin.admin" && phone === "880005553535" && confirmPassword === "admin" && password === "admin") {
            
            navigate("/admin");
            console.log("admin");
        }
        // password error
        else if (password !== confirmPassword) {
            alert("password not match");
        }
        else {
            console.log("not admin");
        }

    }
//   api img

// const [data, setData] = useState({ hits: [] });
// useEffect(() => {
//     const fetchData = async () => {
//         const result = await fetch(
    // api img url
//             'https://reqres.in/api/users',
//         );
//         const data = await result.json();
//         setData(data);
//     };
//     fetchData();
// }, []);


  

    return (
        <div className='form_bar_content'>
            <div className="form">
                <h1 className='sign_up_title'>Sign Up </h1>
                <div className="form-body">

                    <div className="email input_label_bar">
                        <label className="form__label" htmlFor="email">EMAIL ADDRESS </label>
                        <input type="email" id="email" className="form__input" value={email == null ? '' : email} onChange={(e) => handleInputChange(e)}  autoComplete="off"/>
                    </div>
                    <div className="phone_num input_label_bar">
                        <label className="form__label" htmlFor="phone">PHONE NUMBER </label>
                        <input className="form__input" type="number" value={phone == null ? '' : phone} onChange={(e) => handleInputChange(e)} id="phone" autoComplete="off" />
                    </div>
                    <div className="password input_label_bar">
                        <label className="form__label" htmlFor="password">PASSWORD </label>
                        <input className="form__input" type="password" id="password" value={password == null ? '' : password} onChange={(e) => handleInputChange(e)}  autoComplete="off"/>
                    </div>
                    <div className="confirm-password input_label_bar">
                        <label className="form__label" htmlFor="confirmPassword">CONFIRM PASSWORD </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword == null ? '' : confirmPassword} onChange={(e) => handleInputChange(e)}  />
                    </div>
                </div>
                <div className="form_footer_sub_btn_bar">
                    <button onClick={() => handleSubmit()} type="submit" className="submit_btn">SIGN UP</button>
                </div>
                {/* img */}

            </div>
            <div className="img_bar">
                {/* api [object Object] */}
                {/* <img src={data} alt="" /> */}
                <img src={img} alt=""/>
            </div>
        </div>

    )
}

export default RegistrationForm