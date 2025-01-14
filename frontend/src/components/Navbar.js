import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try{
        await axios.delete('http://localhost:5000/logout');
        navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
        <div className="container">

      <div className="navbar-brand">
      <a className="navbar-item" href="https://id.wikipedia.org/wiki/Universitas_Muhammadiyah_Makassar" aria-label="Kunjungi Bulma">
        <img src="mortarboard.png" width="30" height="30" alt='logo' />
        </a>
        
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href='/' className="navbar-item has-text-white">
            Home
          </a>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button onClick={Logout} className="button is-danger has-text-white">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar