import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby' 
import Img from "gatsby-image"
import styled, { createGlobalStyle, withTheme, css } from 'styled-components'

export default withTheme(function Layout({children, data }) {


const nav = useStaticQuery(graphql`
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


    const navLinks = nav.allStrapiPage.edges;
  
    return (
        <>
            <GlobalStyle theme="purple" />
            <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
                <StyledImg fixed={data.strapiWebsiteSettings.Image.childImageSharp.fluid} />
            {navLinks.map((value, index) => {

                return <Link to={value.node.Path}>{value.node.Title}</Link>
            })}
            {children}
</div>
        </>
    )
})

const styledHeader = styled.header`
    display: flex;
    background: red;
`
const StyledImg = styled(Img)`
    background: red;
    width: 150px;

    height: 150px;
`;

const GlobalStyle = createGlobalStyle`
    * {box-sizing: border-box;}
    [hidden] {display: none !important}
    [disabled] {pointer-events:none; opacity: 0.3}
    .horizontal {display: flex; flex-direction: row; justify-content: space-between}
    .vertical {display: flex; flex-direction: column}
    .center {justify-content: center; align-items: center}
    .flex {flex: 1}
    html {
    font-family: "Inconsolata", Monaco, "Courier New", Courier, monospace;
    --spacing-xs: 8px;
    --spacing: 24px;
    --spacing-s: 12px;
    --spacing-m: 36px;
    }

`
