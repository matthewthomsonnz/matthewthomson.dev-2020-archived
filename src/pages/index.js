import React from "react"
import { graphql, Link } from 'gatsby' 
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled, { createGlobalStyle, withTheme, css } from 'styled-components'

export default function Home({ data }) {

  const pageData = data.allStrapiPage.edges[0].node;

  return (
    
    <>
      <div>{data.path}</div>
      <h1>{pageData.Headline}</h1>
      <div dangerouslySetInnerHTML={{__html:pageData.Textline}}/>
      {pageData.block.map((value, index) => {
        // console.log(value.Image.childImageSharp.fluid)
      return (
        <div>
          {value.Image && <StyledImg fixed={value.Image.childImageSharp.fluid} />}
        <h2>{value.Title}</h2>
          <div dangerouslySetInnerHTML={{ __html: value.Subtitle }} />

          <div dangerouslySetInnerHTML={{ __html: value.Content }} />
    
        </div>
      )

      })}
      </>
    
  )
}

export const pageQuery = graphql`
query MyQuery($path: String!) {
  allStrapiPage(filter: {Path: {eq: $path}}) {
    edges {
      node {
        Headline
        Path
        Textline
        Title
        block {
          Content
          Subtitle
          Title
          id
          skillLevel
          visitLink
          Image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
  strapiWebsiteSettings {
    Title
    PrimaryColor
    Description
    Image {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`

const StyledImg = styled(Img)`

height: 400px;
    width: 100%;
`;