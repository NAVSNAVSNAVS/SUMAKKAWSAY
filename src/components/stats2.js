import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div
      className={`stats2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text23">
                  Artistic flair and personalization
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text29">
                  Custom Digital Portrait Place Cards Stats
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text24">
                  Celebrating connection and harmony
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text28">Unique Designs</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text27">
                      Each place card features a custom digital portrait design
                      tailored to your event.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text31">Flexible Packages</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text30">
                      Choose from a range of packages, from DIY options to fully
                      assembled cards.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text21">Personalized Touch</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      Upload guest lists and photos for personalized portraits
                      that make each guest feel special.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text22">Positive Testimonials</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text26">
                      Customers rave about the unique keepsakes and attention to
                      detail in the place cards.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat3: undefined,
  image1Alt: 'Custom Digital Portrait Place Cards',
  stat4: undefined,
  content1: undefined,
  content2: undefined,
  stat3Description: undefined,
  stat4Description: undefined,
  stat1Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1576277279371-bf684ec42d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTI4NzYxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  stat1: undefined,
  heading1: undefined,
  stat2Description: undefined,
  rootClassName: '',
  stat2: undefined,
}

Stats2.propTypes = {
  stat3: PropTypes.element,
  image1Alt: PropTypes.string,
  stat4: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  stat3Description: PropTypes.element,
  stat4Description: PropTypes.element,
  stat1Description: PropTypes.element,
  image1Src: PropTypes.string,
  stat1: PropTypes.element,
  heading1: PropTypes.element,
  stat2Description: PropTypes.element,
  rootClassName: PropTypes.string,
  stat2: PropTypes.element,
}

export default Stats2
