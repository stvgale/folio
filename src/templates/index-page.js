import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  main,

 
}) => (
  <div className="content">
   <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen home-title"
          style={{
            lineHeight: '1',
            padding: '4.7rem',
            fontSize: '3rem',
            textAlign: 'center',
            fontWeight: '900'
          }}
        >
          {title}
        </h1>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
       
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
             
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
             
       
              <h2 className="has-text-weight-semibold is-size-2">
                
              </h2>
             
      
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
 image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  

 
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  
 
}

const IndexPage = ({ data }) => {
   const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
     
       
        
        main={frontmatter.main}
   
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
   query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
     

        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

      }
    }
  }
`
