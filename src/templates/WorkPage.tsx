import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Typography, { Heading } from "../components/Typography";

interface ContextProps {
  data: {
    markdownRemark: {
      frontmatter: {
        coverImageSrc: string;
        order: number;
        slug: string;
        subtitle: string;
        tags: string[];
        title: string[];
      };
    };
  };
}

const WorkPage = ({ data }: ContextProps) => {
  const {
    markdownRemark: { frontmatter },
  } = data;

  return (
    <Layout>
      <Typography variant={Heading.H3}>{frontmatter.title}</Typography>
    </Layout>
  );
};

export const pageQuery = graphql`
  query MyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        coverImageSrc
        order
        slug
        subtitle
        tags
        title
      }
    }
  }
`;

export default WorkPage;
