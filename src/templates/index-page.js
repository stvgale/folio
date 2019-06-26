import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  main,

 
}) => (
   <section>
<div>
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

    <div className="about">
                  <h2 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h2>
                  <h3>{main.description}</h3>
                        <div> className="one">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                     </div>
    <div> className="two">
                        <PreviewCompatibleImage imageInfo={main.image2} />
    </div>
              
       </div>
       
</div>
    </section>
)

IndexPageTemplate.propTypes = {
 image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  

 
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
   
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

        }

      }
    }
  }
`
