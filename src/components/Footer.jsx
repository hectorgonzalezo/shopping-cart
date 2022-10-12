import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import githubLogo from '../assets/github-logo.png';
// import '../styles/footerStyle.css';

const StyledFooter = styled.footer`
margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    gap: 2vw;
    color: var(--color-portal);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.5rem;
    background-color: var(--pale-spring-bud);
`;

const GitHubLogo = styled.img`
  height: 30px;
`;

function Footer({ projectName, opaque }) {
  return (
    <StyledFooter className={opaque ? 'opaque' : ''}>
      <h2>Héctor González Orozco</h2>
      <a href={`https://github.com/hectorgonzalezo/${projectName}`}>
        <GitHubLogo alt="github logo" id="github-logo" src={githubLogo} />
      </a>
    </StyledFooter>
  );
}

Footer.propTypes = {
  projectName: PropTypes.string.isRequired,
  opaque: PropTypes.bool.isRequired,
};

export default Footer;
