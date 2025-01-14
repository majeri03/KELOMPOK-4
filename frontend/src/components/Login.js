import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/login', {
        email : email,
        password : password,
      })
      navigate('/dashboard')
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
                <h1 className="title has-text-centered has-text-white">Login</h1>

                <form onSubmit={Auth} className="box has-shadow" style={{ borderRadius: '12px', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0)', border:'1px solid #fff'}}>
                  <p className='has-text-centered has-text-danger'>{msg}</p>
                    <div className="field mt-5">
                        <label className="label has-text-white">Masukkan Email</label>
                        <div className="controls">
                            <input type='text' className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '8px' }}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label has-text-white">Password</label>
                        <div className="controls">
                            <input type='password' className='input' placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '8px' }}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className='button is-link is-fullwidth'>Login</button>
                    </div>  
                </form>
                <div className="has-text-centered mt-4">
                  <p className="mt-2 has-text-black">
                    Tidak punya akun?{' '}
                    <a href="/register" className="has-text-white">
                      Sign up!
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

export default Login