import React from 'react';
import PropTypes from 'prop-types';

function Home({ opaque }) {
  return (
    <main id="home" className={opaque ? 'opaque' : ''}>
      <h1>This is home</h1>
    </main>
  );
}

Home.propTypes = {
  opaque: PropTypes.bool.isRequired,
};

export default Home;
