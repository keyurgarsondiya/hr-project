import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link className='nav-style nav-heading' to='/'>
          <h1>HR Hiring</h1>
        </Link>
        <ul className='nav-links'>
          <Link className='nav-style' to='/'>
            <li>Home</li>
          </Link>
          <Link className='nav-style' to='/help'>
            <li>Help</li>
          </Link>
          <Link className='nav-style' to='/login'>
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
