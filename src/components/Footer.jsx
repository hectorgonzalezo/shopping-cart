import React from 'react';
import PropTypes from 'prop-types';
import githubLogo from '../assets/github-logo.png';
import '../styles/footerStyle.css';

function Footer({ projectName, opaque }) {
  return (
    <footer className={opaque ? 'opaque' : ''}>
      <h2>Héctor González Orozco</h2>
      <a href={`https://github.com/hectorgonzalezo/${projectName}`}>
        <img alt="github logo" id="github-logo" src={githubLogo} />
      </a>
    </footer>
  );
}

Footer.propTypes = {
  projectName: PropTypes.string.isRequired,
  opaque: PropTypes.bool.isRequired,
};

export default Footer;
