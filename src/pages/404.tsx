import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Typography, { Heading } from "../components/Typography";
import styled from "styled-components";
import Layout from "../components/Layout";

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <Wrapper>
      <Typography variant={Heading.H3}>Page not found</Typography>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka | Not Found</title>;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
