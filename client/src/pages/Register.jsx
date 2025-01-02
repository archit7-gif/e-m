


import React, { useState } from 'react';
import {Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios  from 'axios';
import Spinner from '../components/Spinner';


const Register = () => {

  const navigate = useNavigate();
  const [ Loading , setLoading]=useState(false)

  // form submit 
  const submitHandler = async(values)=>{
    try {
      setLoading(true);
      await axios.post('http://localhost:8080/api/v1/user/register',values);     // adding api call to register user
      message.success('Registration Sucessfulll');
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false)
      console.error(error.response?.data || error.message);
      message.error("something went wrong")
    }
  }


  return (
    <>
      <div className=" register_page">
        { Loading && <Spinner/>}
        <Form layout='vertical' onFinish={submitHandler}>
          <h1>Register form </h1>
          <Form.Item label='name' name="name">
            <Input/>
          </Form.Item>

          <Form.Item label='email' name="email">
            <Input type="email"/>
          </Form.Item>

          <Form.Item label='password' name="password">
            <Input type='password'/>
          </Form.Item>

          <div className="d-flex justify-content-between">
            <Link to='/login'>Already Registered ? <br /> Click Here to Login </Link> <br />
            <button className='btn btn-primary'>Register</button>
          </div>


        </Form>
      </div>
    </>
  );
};

export default Register;
