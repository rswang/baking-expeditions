import React from 'react';

import Layout from './layout/Layout';
import ComingSoon from './pages/ComingSoon';

class AppRouter extends React.Component {
  render() {
    return (
      <Layout>
        <ComingSoon />
      </Layout>
    );
  }
}

export default AppRouter;
