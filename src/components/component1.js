import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <h1 className="component1-text">{props.heading}</h1>
    </div>
  )
}

Component1.defaultProps = {
  heading: 'ROADMAP',
}

Component1.propTypes = {
  heading: PropTypes.string,
}

export default Component1
