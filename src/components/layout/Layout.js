import React from 'react';
import { IndexLink, Link } from 'react-router';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div><IndexLink to='/'>Home</IndexLink></div>
        <div><Link to='/about'>About</Link></div>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
