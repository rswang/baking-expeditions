import React from 'react';

import Header from './Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
