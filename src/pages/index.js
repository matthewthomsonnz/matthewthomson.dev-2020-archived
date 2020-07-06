import React from "react"
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function Home(data) {


  return (
    <Layout globalSettings={data.data.strapiWebsiteSettings}>
      <div>{data.path}</div>
      
    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery($path: String!) {
  allStrapiPage(filter: {Path: {eq: $path}}) {
    edges {
      node {
        id
        Path
        Title
        Textline
      }
    }
  }
  strapiWebsiteSettings {
    Title
    PrimaryColor
    Description
    ProfileImage {
      url
    }
  }
}
`