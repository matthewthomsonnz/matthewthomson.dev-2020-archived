import React from "react"
import { graphql } from 'gatsby' 

export default function Home(data) {
  return <div>{data.path}</div>
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
}
`