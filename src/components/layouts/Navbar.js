import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar navbar-light mb-5 bg-primary'>
      <Link to='/' className='navbar-brand text-light'>
        <i className={icon}></i> {title}
      </Link>

      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link to='/' className='nav-link  text-light'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link  text-light'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
