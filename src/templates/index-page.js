import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Plx from 'react-plx';


import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  title,
  main,

 
}) => (
   <section>
<div>
   <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen home-title"
        >
          {title}
        </h1>

    <div className="about">
                  <h2 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h2>
    <Plx
  className='about-first-image'
  animateWhenNotInViewport={ true }
  parallaxData={ [
{
      start: 0,
      duration: 850,
      name: 'second',
      properties: [
        {
          startValue: -220,
          endValue: 0,
          unit: 'px',
          property: 'translateY',
        },
       {
          startValue: 1,
          endValue: 1,
          property: 'opacity',
        }
      ],
    },

  ] }
>      
    <div className="one">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                     </div>
    </Plx>
                  <h3>{main.description}</h3>
     <Plx
  className='about-last-image'
  animateWhenNotInViewport={ true }
  parallaxData={ [
{
      start: 200,
      duration: 1150,
    
      name: 'second',
      properties: [
        {
          startValue: 0,
          endValue: -180,
          unit: 'px',
          property: 'translateY',
        },
       {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        }
      ],
    },

  ] }
>     
                    <div className="two">
                        <PreviewCompatibleImage imageInfo={main.image2} />
    </div>
    </Plx>
              
       </div>
       
</div>
    <h1 className="email">Connect with me on <a href="https://www.linkedin.com/in/galesteve/" target="_blank">Linkedin</a></h1>
    </section>
)

IndexPageTemplate.propTypes = {
 
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
