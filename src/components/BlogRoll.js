import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {
  Tooltip,
} from 'react-tippy';


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div className="blog">
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
           
        <Tooltip 
        position="right"
        delay="0"
        hideDelay="0"
        animation="none"
        followCursor="true"
        theme="tomato"
        animateFill="false"
  html={(
    <div>
   {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}
                      />

                    </div>
                  ) : null}
    </div>
  )}
>
 <div className="is-parent column is-6" key={post.id}>
         <Link
                      className="tile has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                
         
                   
                      <h3>{post.frontmatter.title} <svg className="arrow" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="39.002px" height="26.005px" viewBox="286.5 382.498 39.002 26.005" enable-background="new 286.5 382.498 39.002 26.005" title="Next"><g><polygon fill="#000000" points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"></polygon></g></svg></h3>
    
                   
                  
                </header>

              </article>
</Link>
</div>
</Tooltip>
            
          ))}
      </div>
</div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 420, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
