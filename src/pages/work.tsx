import { graphql, HeadFC, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SectionWrapper from "../components/SectionWrapper";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import WorkSection from "../modules/Landing/WorkSection/WorkSection";
import styled from "styled-components";
import Card from "../components/Card/Card";

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

const Work = () => {
  const data = useStaticQuery(allWorkQuery);

  return (
    <Layout>
      <SectionWrapper title={SectionTitleEnum.Work}>
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
                isVisible
              />
            ))}
            {/* <WorkCTACard /> */}
            <Card
              isVisible
              title="Murals worldwide"
              subtitle="Painted walls for businesses to help attract more customers and brighten up local communities."
              imageSrc={"../images/mural.jpg"}
              linkTo="/murals"
            />
          </CardWrapper>
        </Wrapper>
      </SectionWrapper>
    </Layout>
  );
};

export default Work;

export const Head: HeadFC = () => <title>Jokūbas Toločka | Work</title>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  gap: 10px;
`;
