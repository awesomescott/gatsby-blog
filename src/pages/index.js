import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  color: blue;
  margin-bottom: 20px;
`;

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Scooty's Thoughts</h1>
    </div>
    <h4>{ data.allMarkdownRemark.totalCount }</h4>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={ node.id }>
          <BlogLink to={ node.fields.slug }>
            <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle>
          </BlogLink>
          <p>{ node.excerpt }</p>
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
