import React from 'react';
import PropTypes from 'prop-types';
import githubLogo from '../assets/github-logo.png';
import '../styles/footerStyle.css';

function Footer(props) {
  const { projectName } = props;
  return (
    <footer>
      <h2>Héctor González Orozco</h2>
      <a href={`https://github.com/hectorgonzalezo/${projectName}`}>
        <img alt="github logo" id="github-logo" src={githubLogo} />
      </a>
    </footer>
  );
}

Footer.propTypes = {
  projectName: PropTypes.string.isRequired,
};

export default Footer;
