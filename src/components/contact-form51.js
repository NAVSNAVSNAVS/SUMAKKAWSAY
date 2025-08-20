import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form51.css'

const ContactForm51 = (props) => {
  return (
    <div className="contact-form51-contact1 thq-section-padding">
      <div className="thq-flex-column thq-section-max-width">
        <div className="contact-form51-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact-form51-text25">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact-form51-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form51-text24">Message us</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small contact-form51-text12">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form51-text21">
                    <span className="contact-form51-text22">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <form className="contact-form51-form thq-flex-column">
          <div className="contact-form51-container1">
            <div className="contact-form51-input1">
              <label
                htmlFor="contact-form-5-first-name"
                className="contact-form51-text13 thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form51-input2">
              <label
                htmlFor="contact-form-5-last-name"
                className="contact-form51-text14 thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form51-container2">
            <div className="contact-form51-input3">
              <label
                htmlFor="contact-form-5-email"
                className="contact-form51-text15 thq-body-small"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-form-5-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form51-input4">
              <label
                htmlFor="contact-form-5-phone"
                className="contact-form51-text16 thq-body-small"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form51-container3">
            <div className="contact-form51-input5">
              <label
                htmlFor="contact-form-5-options"
                className="contact-form51-text17 thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-5-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1">Customer service</option>
                <option value="Option 2">Finance</option>
                <option value="Option 3">Feature request</option>
              </select>
            </div>
          </div>
          <div className="contact-form51-container4">
            <label
              htmlFor="contact-form-5-message"
              className="contact-form51-text18 thq-body-small"
            >
              Message
            </label>
            <textarea
              id="contact-form-5-message"
              rows="3"
              placeholder="Enter your message"
              className="thq-input contact-form51-textarea"
            ></textarea>
          </div>
          <div className="contact-form51-checkbox1">
            <input
              type="checkbox"
              id="contact-form-5-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label
              htmlFor="contact-form-5-check"
              className="contact-form51-text19 thq-body-small"
            >
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form51-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form51-text20">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm51.defaultProps = {
  action: undefined,
  content1: undefined,
  heading1: undefined,
  content2: undefined,
}

ContactForm51.propTypes = {
  action: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
}

export default ContactForm51
