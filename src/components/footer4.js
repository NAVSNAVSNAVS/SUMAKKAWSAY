import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1"></div>
          <div className="footer4-links">
            <a href={props.textUrl} target="_blank" rel="noreferrer noopener">
              {props.text ?? (
                <Fragment>
                  <span className="footer4-text4">Home</span>
                </Fragment>
              )}
            </a>
            <a href={props.textUrl1} target="_blank" rel="noreferrer noopener">
              {props.text1 ?? (
                <Fragment>
                  <span className="footer4-text6">Our Story</span>
                </Fragment>
              )}
            </a>
            <a href={props.textUrl2} target="_blank" rel="noreferrer noopener">
              {props.text2 ?? (
                <Fragment>
                  <span className="footer4-text2">Gallery</span>
                </Fragment>
              )}
            </a>
            <a href={props.textUrl3} target="_blank" rel="noreferrer noopener">
              {props.text3 ?? (
                <Fragment>
                  <span className="footer4-text3">Process</span>
                </Fragment>
              )}
            </a>
            <a href={props.textUrl4} target="_blank" rel="noreferrer noopener">
              {props.text4 ?? (
                <Fragment>
                  <span className="footer4-text5">Start your Order</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="footer4-logo2"
          />
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 TeleportHQ</span>
            </div>
            <div className="footer4-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoAlt: 'Digital Portrait Place Cards',
  textUrl4: 'https://example.com',
  text2: undefined,
  text3: undefined,
  textUrl2: 'https://example.com',
  textUrl: 'https://example.com',
  textUrl1: 'https://example.com',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text: undefined,
  rootClassName: '',
  text4: undefined,
  textUrl3: 'https://example.com',
  text1: undefined,
}

Footer4.propTypes = {
  logoAlt: PropTypes.string,
  textUrl4: PropTypes.string,
  text2: PropTypes.element,
  text3: PropTypes.element,
  textUrl2: PropTypes.string,
  textUrl: PropTypes.string,
  textUrl1: PropTypes.string,
  logoSrc: PropTypes.string,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  text4: PropTypes.element,
  textUrl3: PropTypes.string,
  text1: PropTypes.element,
}

export default Footer4
