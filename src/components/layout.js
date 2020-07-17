import React from "react"
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, Link } from 'gatsby' 
import Img from "gatsby-image"
import styled, { createGlobalStyle, withTheme, css } from 'styled-components'
import VerticalPositioner from './verticalPositioner'

export default withTheme(function Layout({children, data, path }) {

    const pageData = data.allStrapiPage.edges[0].node;

    const nav = useStaticQuery(graphql`
            query LayoutQuery {
                allStrapiPage(sort: {fields: pageOrder}) {
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
      <VerticalPositioner>
        <Helmet>
            <link rel="preload" as="font" type="font/woff2" href="./fonts/Inconsolata.woff2" crossorigin/>
          <style type="text/css">{`
    @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 400;
        src: local(''), url('../fonts/Inconsolata.woff2') format('woff2'),
        url('../fonts/Inconsolata.woff') format('woff'); 
    }
    `}</style>
        </Helmet>
            <GlobalStyle theme={data.strapiWebsiteSettings} />
            <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
                <header className="horizontal">
                  <Link to="/">
                <StyledImg fluid={data.strapiWebsiteSettings.Image.childImageSharp.fluid} />
            </Link>
                <ul>
            {navLinks.map((value, index) => {
              var currentNavItemPath=value.node.Path
              var currentPath=path
              var test1
   
              if (value.node.Path === path) test1 = "active"
              return (
                <li className={test1}>
                  <h1>{test1}</h1>
   
                <Link to={value.node.Path}>{value.node.Path + "" === path + ""}
                  {value.node.Title}
                </Link>
              </li>
                )
            })}
                </ul>
            </header>
                    <h1>{pageData.Headline}</h1>
          <LeadingParagraph dangerouslySetInnerHTML={{ __html: pageData.Textline }} />
           

                <Main style={{ columnCount: pageData.Columns }}>
                    {children}
                </Main>
            </div>
      </VerticalPositioner>
    )
})

export const Main = styled.main`
    /* padding: 0 15px; */
    /* margin: 0 -15px; */
    column-gap: 3%;
    column-width: 30%;
`

const StyledImg = styled(Img)`
    border-radius: 999px;
    width: 150px;
    height: 150px;
`;

const LeadingParagraph =  styled.div`
    margin-bottom: 1rem;
`;
const Reset = css`
  /*! minireset.css v0.0.5 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  body,html {
    height:100%

  }
  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    font-family: 'Inconsolata';
  
  }
a {

    // letter-spacing: -1px;
    text-decoration: none;
  line-height: 1.65rem;
    word-spacing: 1px;
    // font-weight: 700;
  color: black;
}
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
`
const GlobalStyle = createGlobalStyle`

${Reset}
    * {box-sizing: border-box;}
    [hidden] {display: none !important}
    [disabled] {pointer-events:none; opacity: 0.3}
    .horizontal {display: flex; flex-direction: row; justify-content: space-between; align-items: center;}
    .vertical {display: flex; flex-direction: column}
    .center {justify-content: center; align-items: center}
    .flex {flex: 1}
    h1 {
        font-size: 2.45rem;
        margin-bottom: 1rem;
        font-weight: bold;
        color: ${s => s.theme.PrimaryColor};
        }
            h2 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
        font-weight: bold;
        color:#000;
        }
    svg {
      margin-left: 3px;
        height: 1rem;
    }
    html {

    
    font-family: monospace;
      font-family: 'Inconsolata';
      
    background:#ebede0;
    --spacing-xs: 8px;
    --spacing: 24px;
    --spacing-s: 12px;
    --spacing-m: 36px;
    }

      ul:not([class]) {
    list-style-type: none;
    li {
      position:relative;
              &.active a:before {
          content: ">";
          position: absolute;
          right:100%;
          font-weight: 700;
          margin-right: 0.25rem;
        }
      a {
           font-size: 1.65rem;
           line-height: 2rem;

      }
    }
  }
    a {
  color: ${s => s.theme.PrimaryColor};

    // letter-spacing: -1px;
    text-decoration: none;
  line-height: 1rem;
    word-spacing: 1px;
    font-weight: 700;

}

li a:hover,p a:hover,div>a:hover{

   border-bottom: 2px solid #0827e1;
 
}
p {
  line-height: 1.4rem;
  margin-bottom: 15px;
      word-break: break-word;
}
header {
  margin: 1rem 0;
}
`


