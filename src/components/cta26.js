import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="cta26-container1 thq-section-padding">
      <div className="cta26-max-width thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <span className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="cta26-text17">
                      Ready to Start your Order
                    </span>
                  </Fragment>
                )}
              </span>
              <p className="cta26-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="cta26-text20">
                      Let’s bring your guests into the heart of your
                      celebration. Share a few details about your event, and
                      together we’ll explore designs, and customization options
                      to craft the perfect place cards for your day.
                    </span>
                  </Fragment>
                )}
              </p>
              <p className="cta26-text12 thq-body-large">
                {props.content11 ?? (
                  <Fragment>
                    <span className="cta26-text19">Contact info:</span>
                  </Fragment>
                )}
              </p>
              <div className="cta26-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  className="thq-icon-medium cta26-icon1"
                >
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <p className="cta26-text13 thq-body-large">
                  {props.content112 ?? (
                    <Fragment>
                      <span className="cta26-text16">949-870-8054</span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  className="thq-icon-medium cta26-icon3"
                >
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <p className="cta26-text14 thq-body-large">
                  {props.content1121 ?? (
                    <Fragment>
                      <span className="cta26-text18">
                        sk.community@gmail.com
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="cta26-button thq-button-filled"
                >
                  <a
                    href={props.textUrl1}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {props.text2 ?? (
                      <Fragment>
                        <span className="cta26-text15">Start your Order</span>
                      </Fragment>
                    )}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  text2: undefined,
  content112: undefined,
  heading1: undefined,
  content1121: undefined,
  content11: undefined,
  content1: undefined,
  textUrl1: 'https://example.com',
}

CTA26.propTypes = {
  text2: PropTypes.element,
  content112: PropTypes.element,
  heading1: PropTypes.element,
  content1121: PropTypes.element,
  content11: PropTypes.element,
  content1: PropTypes.element,
  textUrl1: PropTypes.string,
}

export default CTA26
