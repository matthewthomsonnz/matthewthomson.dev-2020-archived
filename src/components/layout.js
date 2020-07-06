import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby' 
import Img from "gatsby-image"


export default function Layout({ children, globalSettings }) {
    console.log(globalSettings.ProfileImage[0].url)

    const data = useStaticQuery(graphql`
query LayoutQuery {
    allStrapiPage {
        edges {
            node {
                id
                Path
                Title
            }
        }
    }
}
  `)
    const navLinks = data.allStrapiPage.edges;
  
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
           
            <Img fixed={globalSettings.ProfileImage[0].url} />
            <ul>
                {navLinks.map((value, index) => {
                    console.log()
                    return <Link to={value.node.Path}>{value.node.Title}</Link>
                })}
            </ul>
            {children}
        </div>
    )
}

