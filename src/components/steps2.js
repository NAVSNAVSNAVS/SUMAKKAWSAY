import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div id={props.steps2Id} className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="steps2-text10 thq-heading-2">
              <span>
                From
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Photos to K</span>
              <span>e</span>
              <span>epsa</span>
              <span>kes</span>
            </h2>
            <p className="steps2-text16 thq-body-large">
              Your guests deserve more than a name card - they deserve a
              keepsake. Let&apos;s create something unforgettable together
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <a
                  href={props.textUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {props.text ?? (
                    <Fragment>
                      <span className="steps2-text30">Start your Order</span>
                    </Fragment>
                  )}
                </a>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Select your Design &amp; Package
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text18 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text36">
                      Browse our gallery or Instagram for inspiration—or share
                      your own ideas! If you have stationery or aesthetic
                      references you’d like to match, simply send them to us,
                      and we’ll create a cohesive design tailored to your event
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text19 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text34">
                      Upload guest list &amp; Photos
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text21 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text37">
                      Candid, formal or anything in between
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text22 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      We Illustrate each guest
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text24 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Adding warmth, personality, and detail to every portrait
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text25 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text33">
                      We deliver them your way
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text27 SmallText thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text35">
                      You will receive high-resolution digital files of all the
                      portrait place cards ready for printing or fully assembled
                      with acrylic stands, depending on your chosen package.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text28 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: undefined,
  text: undefined,
  textUrl: 'https://example.com',
  step3Description: undefined,
  step1Title: undefined,
  steps2Id: '',
  step4Title: undefined,
  step2Title: undefined,
  step4Description: undefined,
  step1Description: undefined,
  step2Description: undefined,
}

Steps2.propTypes = {
  step3Title: PropTypes.element,
  text: PropTypes.element,
  textUrl: PropTypes.string,
  step3Description: PropTypes.element,
  step1Title: PropTypes.element,
  steps2Id: PropTypes.string,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps2
