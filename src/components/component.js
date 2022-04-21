import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <h1 className="component-text">{props.heading}</h1>
    </div>
  )
}

AppComponent.defaultProps = {
  heading: 'Team',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
}

export default AppComponent
