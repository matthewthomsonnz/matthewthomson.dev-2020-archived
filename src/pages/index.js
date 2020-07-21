import React , {useEffect} from "react"
import { graphql, Link } from 'gatsby' 
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled, { createGlobalStyle, withTheme, css } from 'styled-components'
import { LinkExternal } from "@styled-icons/boxicons-regular"

export default function Home({ data, path }) {
  useEffect(() => {
    setTimeout(()=>{ if (document.querySelector('input')) document.querySelector('input').select() },500)
  });

  if (!data.allStrapiPage) {
    return(
      404
      )
  }
  const pageData = data.allStrapiPage.edges[0].node;
  
  if (path === "/contact") {
  
    return (
      <>
        <form name="contact" action="https://formspree.io/matthewthomson.nz@gmail.com" method="POST">
          <FormField>
          <label for="name">Name</label>
            <input id="name" name="name" type="text" autocorrect="off" autocomplete="0" required/>
          </FormField>
          <FormField>
            <label for="email">Email</label>
            <input id="email" name="email" type="text" autocorrect="off" autocomplete="0" required />
          </FormField>
          <FormField>
          <label for="message">Message</label>
            <textarea cols="40" rows="5" name="message" id="message" required>
            </textarea>
          </FormField>
          <FormField>
              
            <button type="submit" value="Submit" class="style__Button-sc-1vhopz3-3 QhIlm">Submit</button>
          </FormField>
        </form>
      </>

    )
  } else {
    return (
      <>

        {pageData.block.map((value, index) => {

          return (
            <FeatureItem >
              <div>
              {value.Image && <ImgWrapper><StyledImg fluid={value.Image.childImageSharp.fluid} style={{ maxWidth: '100%' }} /></ImgWrapper>}
              <h2>{value.Title}</h2>
              <div dangerouslySetInnerHTML={{ __html: value.Subtitle }} />
              <div dangerouslySetInnerHTML={{ __html: value.Content }} />
              {value && value.skillLevel ? <Range style={{ transform: "scaleX(" + value.skillLevel * 0.1 + ")" }}></Range> : ""}
              {value && value.visitLink ? <a href={value.visitLink} target="_blank">Visit<LinkExternal /> </a> : ""}
              </div>
            </FeatureItem>
          )
        })}

      </>

    )
  }
  
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
        Columns
        block {
          Content
          Subtitle
          Title
          id
          skillLevel
          visitLink
          Image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 70) {
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
        fluid(maxWidth: 650, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`

const StyledImg = styled(Img)`
    display: block;
    overflow: hidden;
    position: initial;
`;
const FeatureItem = styled.div`
    position: relative;
    width: 100%;
    margin: 1em 0 0em 0;
    overflow: visible;
    display: inline-block;
    break-inside: avoid;
    transform: translateZ(0);
    > div {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        border-radius: 10px;
        padding: calc(10px + 3%);
        break-inside: avoid;
        transform: translateZ(0);
        background: rgb(255,255,255,0.2);
    }
`

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    max-height: 200px;
    margin-bottom: 8px;
`

const Range = styled.div`
    transform-origin: left;
    height: 5px;
    background-color: ${s => s.theme.PrimaryColor};
`

const FormField = styled.div`
    margin-bottom: 10px;
    display: inline-block;
    width: 100%;
    input,
    textarea {
        position: relative;
        line-height: 2.25rem;
        font-size: 1rem;
        padding: 0 0.625rem;
        border-radius:0;
        border: none;
        width: 100%;
        transition: box-shadow 150ms ease;
        color:blue;
        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px #0827e1;
      }
    }
    button {
        display: inline-block;
        width: auto;
        background-color: #0827e1;
        color: white; 
        border: none;
        padding: 0.5rem 1rem;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    textarea {
        line-height: 1.5;
        padding: 0.5rem 0.625rem;
        resize: vertical;
    }

    label {
        display: block;
        margin-bottom: 0.25rem;
    }
`