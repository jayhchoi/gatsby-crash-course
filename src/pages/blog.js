import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Latest Posts</h1>
    <p>
      {data.allMarkdownRemark.edges.map(post => (
        <div key="post.node.id">
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by {post.node.frontmatter.author}</small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </p>
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`;

export default BlogPage;
