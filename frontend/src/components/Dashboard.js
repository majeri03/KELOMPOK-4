import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  },[]);
  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error){
        if(error.response){
            navigate('/');
        }
    }
  }
  return (
    <div className='container mt-5'>
        <h1 >Selamat Datang<p className='title'>{name} !
          </p></h1>
    </div>
  )
}

export default Dashboard