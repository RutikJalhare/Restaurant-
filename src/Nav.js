import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (

      <>
<div class="container">




    <div><nav className="navbar navbar-expand-lg fixed-top  py-4">
    <div className="container-fluid">
      <Link id='brand' className="navbar-brand" href="#">Delicious</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page"  activeClass="active" to="Main" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" activeClass="active" to="why-us" spy={true} smooth={true} offset={50} duration={500}>Menu</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page"  activeClass="active" to="Specials" spy={true} smooth={true} offset={50} duration={500}>Special</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClass="active" to="oevents" spy={true} smooth={true} offset={50} duration={500}>Events</Link>
          </li>
         



          <li className="nav-item button-17">
            <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
          </li>
         
    


















        </ul>
     
      </div>
    </div>
  </nav></div>


</div>
  </>
  )
}

export default Nav;