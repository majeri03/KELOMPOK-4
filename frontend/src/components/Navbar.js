import React from 'react'
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">

      <div className="navbar-brand">
      <a className="navbar-item" href="https://id.wikipedia.org/wiki/Universitas_Muhammadiyah_Makassar" aria-label="Kunjungi Bulma">
        <img src="https://arsitektur.unismuh.ac.id/wp-content/uploads/2022/08/cropped-logo-removebg-preview.png" width="50" height="50" alt='logo' />
        </a>
    
        <a href='/' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href='/' className="navbar-item">
            Home
          </a>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light">
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