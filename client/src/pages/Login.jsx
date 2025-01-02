


import React , {useState} from 'react';
import {Form, Input , message } from 'antd'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';



const Login = () => {

    const [Loading , setLoading ] = useState(false)
    const navigate = useNavigate();

    // for submit
    const  submitHandler =async(values)=>{
    try {
      setLoading(true)  
      const {data} = await axios.post('http://localhost:8080/api/v1/user/login', values)
      setLoading(false)
      message.success('login sucesss')
      localStorage.setItem('user', JSON.stringify({...data,Password:""}))
      navigate('/')
    } catch (error) {
        setLoading(false)
        console.error(error.response?.data || error.message);
        message.error('something went wrong ')
    }

    }
    
  return (
    <>
      <div className=" register_page">
        {Loading && <Spinner/>}
              <Form layout='vertical' onFinish={submitHandler}>
                <h1>Login form </h1>
      
                <Form.Item label='Email' name="email">
                  <Input type="email"/>
                </Form.Item>
      
                <Form.Item label='password' name="password">
                  <Input type='password'/>
                </Form.Item>
      
                <div className="d-flex justify-content-between">
                  <Link to='/register'>Not a User ? <br /> Click Here to Register </Link> <br />
                  <button className='btn btn-primary'>Login</button>
                </div>
      
      
              </Form>
            </div>
    </>
  );
};

export default Login;