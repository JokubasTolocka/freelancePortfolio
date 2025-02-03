import React from "react";
import styled from "styled-components";
// import muralImg from "../../assets/images/mural.jpg";
import BrowseAllWorkButton from "./BrowseAllWorkButton";
import Card from "../../components/Card/Card";
import { graphql, useStaticQuery } from "gatsby";

const allWorkQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { order: ASC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            coverImageSrc
            tags
          }
        }
      }
    }
  }
`;

interface Edge {
  node: {
    id: string;
    frontmatter: {
      title: string;
      subtitle: string;
      coverImageSrc: string;
      tags?: string[];
    };
  };
}

const WorkSection = () => {
  const data = useStaticQuery(allWorkQuery);

  return (
    <Wrapper>
      <CardWrapper>
        {data?.allMarkdownRemark.edges.map(({ node }: Edge) => (
          <Card
            key={node.id}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            imageSrc={node.frontmatter.coverImageSrc}
            tags={node.frontmatter.tags}
            linkTo={`/work/${node.id}`}
          />
        ))}
        {/* <WorkCTACard /> */}
        <Card
          title="Murals worldwide"
          subtitle="Painted walls for businesses to help attract more customers and brighten up local communities."
          imageSrc={"../images/mural.jpg"}
          linkTo="/murals"
        />
      </CardWrapper>
      <FooterWrapper>
        <BrowseAllWorkButton title="Browse all work" />
      </FooterWrapper>
    </Wrapper>
  );
};

export default WorkSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  gap: 10px;
`;

const FooterWrapper = styled.div`
  display: flex;
  margin: 30px 40px;
  justify-content: flex-end;
`;
