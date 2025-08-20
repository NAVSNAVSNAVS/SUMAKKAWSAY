import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div
      className={`features1-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text20">
                    Creating Personal Connections, One Portrait at a Time
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text16">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text18">
                  Discover the key features of our personalized portrait place
                  cards.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text15">
                        Personalized Portraits
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Each place card features a custom portrait of your
                        guest, adding a unique touch to your event.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text23">
                        Flexible Packages
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text21">
                        Choose from DIY options or fully assembled cards based
                        on your preferences and needs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text17">
                        Easy Customization
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text14">
                        Simply upload your guest list and photos to have custom
                        portraits created for each attendee.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text13">
                    Customized Portrait Place Cards
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text22">
                    Various Packages Available
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  rootClassName: '',
  mainAction: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
  sectionTitle: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1593498208655-b1f7ddabaffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTI4NzYyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTI4NzYyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1603823998094-ebcdbb5d9f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTI4NzYxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  sectionDescription: undefined,
  feature1ImageAlt: 'Personalized Portraits Image',
  feature1Description: undefined,
  feature2ImageAlt: 'Flexible Packages Image',
  slogan: undefined,
  feature2Description: undefined,
  secondaryAction: undefined,
  feature2Title: undefined,
  feature3ImageAlt: 'Easy Customization Image',
}

Features1.propTypes = {
  rootClassName: PropTypes.string,
  mainAction: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  slogan: PropTypes.element,
  feature2Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
}

export default Features1
