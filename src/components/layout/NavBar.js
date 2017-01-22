import React from 'react';
import { IndexLink, Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <div className='display-flex'>
        <div className='nav-line' />
        <IndexLink to='/' className='nav-link' activeClassName='is-active'>Home</IndexLink>
        <Link to='/about' className='nav-link' activeClassName='is-active'>About</Link>
        <div className='nav-line' />
      </div>
    );
  }
}

export default NavBar;
