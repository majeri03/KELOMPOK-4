import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/users', {
        name : name,
        email : email,
        password : password,
        confPassword : confPassword
      })
      navigate('/')
    } catch (error) {
        if(error.response){
          setMsg(error.response.data.msg);
        }
    }
  }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth" style={{
      backgroundImage: 'url(\kampus.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className='column is-4-desktop'>
            <div className="box has-shadow" style={{ borderRadius: '12px', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h1 className="title has-text-centered has-text-white">Daftar</h1>
                <form onSubmit={ Register } className='box' style={{ borderRadius: '12px', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0)', border:'1px solid #fff'}} >
                  <p className='has-text-centered'>{msg}</p>
                    <div className="field">
                        <label className="label has-text-white">Nama</label>
                        <div className="controls">
                            <input type='text' className='input' placeholder='Nama' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-2">
                        <label className="label has-text-white">Email</label>
                        <div className="controls">
                            <input type='text' className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-2">
                        <label className="label has-text-white">Password</label>
                        <div className="controls">
                            <input type='password' className='input' placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-2">
                        <label className="label has-text-white">Konfirmasi Password</label>
                        <div className="controls">
                            <input type='password' className='input' placeholder='*****' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-2">
                        <button className='button is-link is-fullwidth'>Register</button>
                    </div>
                </form>
                <div className="has-text-centered mt-4">
                  <p className="mt-2 has-text-black">
                    Sudah punya akun?{' '}
                    <a href="/" className="has-text-white">
                      Login!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )}

export default Register