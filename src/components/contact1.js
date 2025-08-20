import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-contact20 thq-section-padding">
      <p className="contact1-text1 thq-body-large">
        {props.content2 ?? (
          <Fragment>
            <span className="contact1-text4">
              For inquiries and orders, please contact us via phone or email.
            </span>
          </Fragment>
        )}
      </p>
      <div className="contact1-max-width thq-section-max-width">
        <div className="contact1-content1">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact1-contact-info1">
            <div className="contact1-content2"></div>
            <span className="contact1-email thq-body-small">
              {props.email1 ?? (
                <Fragment>
                  <span className="contact1-text3">sk_community@gmail.com</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact1-content3">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
          </svg>
          <div className="contact1-contact-info2">
            <div className="contact1-content4"></div>
            <span className="contact1-phone thq-body-small">
              {props.phone1 ?? (
                <Fragment>
                  <span className="contact1-text2">123-456-7890</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact1.defaultProps = {
  phone1: undefined,
  email1: undefined,
  content2: undefined,
}

Contact1.propTypes = {
  phone1: PropTypes.element,
  email1: PropTypes.element,
  content2: PropTypes.element,
}

export default Contact1
