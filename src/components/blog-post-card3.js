import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card3.css'

const BlogPostCard3 = (props) => {
  return (
    <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card3-image"
      />
      <div className="blog-post-card3-container">
        <h1 className="blog-post-card3-text">{props.title}</h1>
        <div className="blog-post-card3-container1">
          <span className="blog-post-card3-text1">{props.description}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard3.defaultProps = {
  image_alt: 'image',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
}

BlogPostCard3.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard3
